const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');

const root = process.cwd();
const sourceUrl = `file://${path.join(root, 'deck/index.html')}`;
const normalizedUrl = `file://${path.join(root, 'index.html')}`;
const sourceDir = path.join(root, 'references/baseline');
const normalizedDir = path.join(root, 'references/normalized');
const reportJsonPath = path.join(root, 'docs/normalization-validation-report.json');
const reportMdPath = path.join(root, 'docs/normalization-validation-report.md');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function countPdfPages(buffer) {
  const text = buffer.toString('latin1');
  return (text.match(/\/Type\s*\/Page\b/g) || []).length;
}

async function renderPages(browser, url, outputDir, options = {}) {
  ensureDir(outputDir);
  const context = await browser.newContext({
    viewport: { width: 1200, height: 900 },
    deviceScaleFactor: 1,
    javaScriptEnabled: options.javaScriptEnabled !== false,
  });
  const page = await context.newPage();
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (error) => consoleErrors.push(error.message));
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(options.waitMs ?? 1200);
  const pageCount = await page.locator('.page').count();
  const metrics = await page.evaluate(() => {
    const pages = [...document.querySelectorAll('.page')];
    const missingImages = [...document.images].filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.getAttribute('src') || '');
    const pageOverflows = pages.map((pageEl, index) => ({
      index: index + 1,
      label: pageEl.getAttribute('data-screen-label') || '',
      width: pageEl.getBoundingClientRect().width,
      height: pageEl.getBoundingClientRect().height,
      scrollWidth: pageEl.scrollWidth,
      clientWidth: pageEl.clientWidth,
      scrollHeight: pageEl.scrollHeight,
      clientHeight: pageEl.clientHeight,
      overflows: pageEl.scrollWidth > pageEl.clientWidth || pageEl.scrollHeight > pageEl.clientHeight,
    }));
    return {
      title: document.title,
      pageCount: pages.length,
      bodyHorizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      missingImages,
      pageOverflows,
      visibleTextLength: document.body.innerText.trim().length,
    };
  });
  const screenshots = [];
  for (let i = 0; i < pageCount; i += 1) {
    const locator = page.locator('.page').nth(i);
    const target = path.join(outputDir, `page-${String(i + 1).padStart(2, '0')}.png`);
    await locator.screenshot({ path: target });
    screenshots.push(target);
  }
  await context.close();
  return { consoleErrors, metrics, screenshots };
}

async function createContactSheet(browser, imagePaths, outputPath) {
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
    body{margin:0;background:#f3f3f0;font-family:monospace}
    .sheet{display:grid;grid-template-columns:repeat(4,265px);gap:10px;padding:10px}
    figure{margin:0;background:#fff;border:1px solid #ddd}
    img{display:block;width:265px;height:187.5px;object-fit:contain;background:#fff}
    figcaption{font:11px/1.3 monospace;padding:4px 6px;color:#555}
  </style></head><body><div class="sheet">
  ${imagePaths.map((file, index) => `<figure><img src="file://${file}"><figcaption>${String(index + 1).padStart(2, '0')}</figcaption></figure>`).join('')}
  </div></body></html>`;
  const context = await browser.newContext({ viewport: { width: 1090, height: 1220 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  await page.setContent(html, { waitUntil: 'load' });
  await page.screenshot({ path: outputPath, fullPage: true });
  await context.close();
}

function compareScreenshots(sourceScreenshots, normalizedScreenshots) {
  const failures = [];
  for (let i = 0; i < Math.max(sourceScreenshots.length, normalizedScreenshots.length); i += 1) {
    const sourcePath = sourceScreenshots[i];
    const normalizedPath = normalizedScreenshots[i];
    if (!sourcePath || !normalizedPath) {
      failures.push({ page: i + 1, reason: 'missing screenshot' });
      continue;
    }
    const source = fs.readFileSync(sourcePath);
    const normalized = fs.readFileSync(normalizedPath);
    if (!source.equals(normalized)) {
      failures.push({
        page: i + 1,
        reason: 'screenshot bytes differ',
        sourceBytes: source.length,
        normalizedBytes: normalized.length,
      });
    }
  }
  return failures;
}

(async () => {
  ensureDir(sourceDir);
  ensureDir(normalizedDir);
  ensureDir(path.join(root, 'docs'));
  const browser = await chromium.launch({ headless: true });
  const source = await renderPages(browser, sourceUrl, sourceDir, { waitMs: 1800 });
  const normalized = await renderPages(browser, normalizedUrl, normalizedDir, { waitMs: 800 });
  await createContactSheet(browser, source.screenshots, path.join(sourceDir, 'contact-sheet.png'));
  await createContactSheet(browser, normalized.screenshots, path.join(normalizedDir, 'contact-sheet.png'));

  const noJsContext = await browser.newContext({
    viewport: { width: 1200, height: 900 },
    javaScriptEnabled: false,
  });
  const noJsPage = await noJsContext.newPage();
  await noJsPage.goto(normalizedUrl, { waitUntil: 'load' });
  const jsDisabled = await noJsPage.evaluate(() => ({
    pageCount: document.querySelectorAll('.page').length,
    visibleTextLength: document.body.innerText.trim().length,
  }));
  await noJsContext.close();

  const pdfContext = await browser.newContext({ viewport: { width: 1200, height: 900 } });
  const pdfPage = await pdfContext.newPage();
  await pdfPage.goto(normalizedUrl, { waitUntil: 'load' });
  const pdfBuffer = await pdfPage.pdf({
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });
  fs.writeFileSync(path.join(root, 'references/normalized/portfolio-normalized.pdf'), pdfBuffer);
  await pdfContext.close();
  await browser.close();

  const visualParityFailures = compareScreenshots(source.screenshots, normalized.screenshots);
  const normalizedOverflows = normalized.metrics.pageOverflows.filter((item) => item.overflows);
  const report = {
    sourcePages: source.metrics.pageCount,
    normalizedPages: normalized.metrics.pageCount,
    missingImages: normalized.metrics.missingImages.length,
    consoleErrors: normalized.consoleErrors.length,
    horizontalOverflow: normalized.metrics.bodyHorizontalOverflow ? 1 : 0,
    pageOverflowCount: normalizedOverflows.length,
    javaScriptDisabledRendering: jsDisabled.pageCount === 24 && jsDisabled.visibleTextLength > 0 ? 'PASS' : 'FAIL',
    pdfPages: countPdfPages(pdfBuffer),
    visualParityFailures: visualParityFailures.length,
    sourceConsoleErrors: source.consoleErrors,
    normalizedConsoleErrors: normalized.consoleErrors,
    normalizedMissingImages: normalized.metrics.missingImages,
    normalizedOverflows,
    visualParityFailureDetails: visualParityFailures,
  };

  fs.writeFileSync(reportJsonPath, `${JSON.stringify(report, null, 2)}\n`);
  fs.writeFileSync(reportMdPath, `# Normalization Validation Report

Source: \`deck/index.html\`
Normalized: \`index.html\`

| Check | Result |
|---|---:|
| Source pages | ${report.sourcePages} |
| Normalized pages | ${report.normalizedPages} |
| Missing images | ${report.missingImages} |
| Console errors | ${report.consoleErrors} |
| Horizontal overflow | ${report.horizontalOverflow} |
| Page overflow count | ${report.pageOverflowCount} |
| JavaScript disabled rendering | ${report.javaScriptDisabledRendering} |
| PDF pages | ${report.pdfPages} |
| Visual parity failures | ${report.visualParityFailures} |

## Notes

- Baseline contact sheet: \`references/baseline/contact-sheet.png\`
- Normalized contact sheet: \`references/normalized/contact-sheet.png\`
- Normalized PDF: \`references/normalized/portfolio-normalized.pdf\`
- Visual parity uses exact screenshot byte comparison from Chromium. Any mismatch is listed in the JSON report.

## Console Errors

${report.normalizedConsoleErrors.length ? report.normalizedConsoleErrors.map((item) => `- ${item}`).join('\n') : '- none'}

## Missing Images

${report.normalizedMissingImages.length ? report.normalizedMissingImages.map((item) => `- ${item}`).join('\n') : '- none'}

## Page Overflows

${normalizedOverflows.length ? normalizedOverflows.map((item) => `- ${item.index}: ${item.label}`).join('\n') : '- none'}

## Visual Parity Differences

${visualParityFailures.length ? visualParityFailures.map((item) => `- Page ${item.page}: ${item.reason}`).join('\n') : '- none'}
`);

  console.log(JSON.stringify(report, null, 2));
})().catch((error) => {
  console.error(error);
  process.exit(1);
});

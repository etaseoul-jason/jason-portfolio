import fs from 'node:fs';
import path from 'node:path';

const bundlePath = 'deck/index.html';
const bundle = fs.readFileSync(bundlePath, 'utf8');

const imageMap = new Map([
  ['8c72dd1e-cb4d-485d-9f6e-e8fa3606e82e', 'assets/images/d2d-dealer-ordering-cart.png'],
  ['a02dc644-fc5e-4921-8c1a-aa516145980a', 'assets/images/d2d-partner-portal-cart.png'],
  ['8d5d000b-0027-485d-8f9c-e1399c71e75e', 'assets/images/partner-order-workspace.png'],
  ['6ee3627f-4f48-408b-aee7-35d6924982d1', 'assets/images/eta-seoul-storefront-home.png'],
  ['d8f8bf0e-1554-4ada-b7a5-f271a825574d', 'assets/images/eta-seoul-checkout.png'],
  ['79fcc7ec-6ff1-4a0f-880f-0de41421fa73', 'assets/images/segment-business-storefront.png'],
]);

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function extractScriptBlock(type) {
  const openTag = `<script type="${type}">`;
  const start = bundle.indexOf(openTag);
  if (start === -1) throw new Error(`Missing ${type}`);
  const contentStart = start + openTag.length;
  const end = bundle.indexOf('</script>', contentStart);
  if (end === -1) throw new Error(`Unclosed ${type}`);
  return bundle.slice(contentStart, end).trim();
}

function readPngSize(buffer) {
  if (buffer.toString('ascii', 1, 4) !== 'PNG') return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function findBalancedBlock(source, start) {
  const firstBrace = source.indexOf('{', start);
  if (firstBrace === -1) return null;
  let depth = 0;
  for (let i = firstBrace; i < source.length; i += 1) {
    if (source[i] === '{') depth += 1;
    if (source[i] === '}') depth -= 1;
    if (depth === 0) return { start, end: i + 1 };
  }
  return null;
}

function extractCssBlocks(css, matchers) {
  const blocks = [];
  for (const matcher of matchers) {
    let start = 0;
    while (start < css.length) {
      const found = matcher(css, start);
      if (found === -1) break;
      const block = findBalancedBlock(css, found);
      if (!block) break;
      blocks.push(block);
      start = block.end;
    }
  }
  blocks.sort((a, b) => a.start - b.start);
  const unique = [];
  for (const block of blocks) {
    if (!unique.some((item) => item.start === block.start && item.end === block.end)) {
      unique.push(block);
    }
  }
  let remaining = '';
  let cursor = 0;
  for (const block of unique) {
    remaining += css.slice(cursor, block.start);
    cursor = block.end;
  }
  remaining += css.slice(cursor);
  return {
    extracted: unique.map((block) => css.slice(block.start, block.end).trim()).join('\n\n'),
    remaining: remaining.replace(/\n{3,}/g, '\n\n').trim(),
  };
}

function pageRanges(template) {
  const ranges = [];
  const sectionRe = /<section\b([^>]*)>([\s\S]*?)(?=<section\b|<\/body>)/gi;
  let match;
  let index = 0;
  while ((match = sectionRe.exec(template))) {
    index += 1;
    const attrs = match[1];
    const body = match[2];
    ranges.push({
      index,
      start: match.index,
      end: sectionRe.lastIndex,
      attrs,
      body,
      label: attrs.match(/\bdata-screen-label="([^"]+)"/)?.[1] ?? '',
      classList: attrs.match(/\bclass="([^"]+)"/)?.[1] ?? '',
      id: attrs.match(/\bid="([^"]+)"/)?.[1] ?? '',
      h1: body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]
        ?.replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim() ?? '',
      images: [...body.matchAll(/<img\b([^>]+)>/gi)].map((img) => ({
        src: img[1].match(/\bsrc="([^"]+)"/)?.[1] ?? '',
        alt: img[1].match(/\balt="([^"]*)"/)?.[1] ?? '',
      })),
      svgCount: (body.match(/<svg\b/gi) ?? []).length,
      inlineStyleCount: (body.match(/\sstyle="/gi) ?? []).length,
      footerText: body.match(/<div class="foot">[\s\S]*?<span>([^<]*)<\/span>\s*<\/div>/i)?.[1] ?? '',
      hasFooter: /class="foot"/.test(body),
    });
  }
  return ranges;
}

function conflictPage(pages, offset) {
  return pages.find((page) => offset >= page.start && offset < page.end);
}

ensureDir('assets/images');
ensureDir('styles');
ensureDir('docs');

const manifest = JSON.parse(extractScriptBlock('__bundler/manifest'));
let template = JSON.parse(extractScriptBlock('__bundler/template'));
const originalTemplate = template;

const decodedImages = [];
for (const [uuid, entry] of Object.entries(manifest)) {
  const target = imageMap.get(uuid) ?? `assets/images/${uuid}.png`;
  const buffer = Buffer.from(entry.data, 'base64');
  fs.writeFileSync(target, buffer);
  decodedImages.push({ uuid, path: target, mime: entry.mime, bytes: buffer.length, ...readPngSize(buffer) });
}

for (const [uuid, target] of imageMap) {
  template = template.replaceAll(`src="${uuid}"`, `src="${target}"`);
}

const styleMatch = template.match(/<style>([\s\S]*?)<\/style>/);
if (!styleMatch) throw new Error('Template has no style tag');
const sourceCss = styleMatch[1].trim();

const tokenSplit = extractCssBlocks(sourceCss, [
  (css, start) => css.indexOf(':root', start),
]);
const printSplit = extractCssBlocks(tokenSplit.remaining, [
  (css, start) => css.indexOf('@media print', start),
  (css, start) => css.indexOf('@page', start),
]);
const cssHeader = '/* Extracted from deck/index.html artifact template. Preserve cascade order for visual parity. */\n\n';
fs.writeFileSync('styles/tokens.css', `${cssHeader}${tokenSplit.extracted}\n`);
fs.writeFileSync('styles/layout.css', `${cssHeader}/* Layout rules are intentionally kept in components.css during normalization to preserve original cascade order. */\n`);
fs.writeFileSync('styles/components.css', `${cssHeader}${printSplit.remaining}\n`);
fs.writeFileSync('styles/print.css', `${cssHeader}${printSplit.extracted}\n`);

const cssLinks = [
  '<link rel="stylesheet" href="styles/tokens.css">',
  '<link rel="stylesheet" href="styles/layout.css">',
  '<link rel="stylesheet" href="styles/components.css">',
  '<link rel="stylesheet" href="styles/print.css">',
].join('\n');
template = template.replace(/<style>[\s\S]*?<\/style>/, cssLinks);
fs.writeFileSync('index.html', template);

const pages = pageRanges(originalTemplate);
const inventoryRows = pages.map((page) => {
  const imageText = page.images.length
    ? page.images.map((img) => {
      const mapped = imageMap.get(img.src) ?? img.src;
      return `${mapped} (${img.alt || 'no alt'})`;
    }).join('<br>')
    : 'none';
  return `| ${page.index} | ${page.label} | ${page.classList || 'none'} | ${page.h1.replaceAll('|', '\\|')} | ${imageText.replaceAll('|', '\\|')} | ${page.svgCount} | ${page.inlineStyleCount} | ${page.hasFooter ? page.footerText || 'yes' : 'no'} |`;
}).join('\n');

fs.writeFileSync('docs/current-page-inventory.md', `# Current Page Inventory\n\nSource template: \`deck/index.html\` \`script[type=\"__bundler/template\"]\`\n\nSource pages: ${pages.length}\nManifest images: ${Object.keys(manifest).length}\nDecoded images: ${decodedImages.length}\n\n## Decoded Images\n\n| UUID | Path | Size | Bytes |\n|---|---|---:|---:|\n${decodedImages.map((img) => `| ${img.uuid} | ${img.path} | ${img.width}x${img.height} | ${img.bytes} |`).join('\n')}\n\n## Pages\n\n| # | data-screen-label | class | h1 | image usage | SVGs | inline styles | footer |\n|---:|---|---|---|---|---:|---:|---|\n${inventoryRows}\n`);

const conflictPatterns = [
  '286 orders',
  '12-person',
  '12 person',
  '32 partners',
  '2.8 units',
  '~21 MD',
  '11-entity requirement workshops',
  'Interviews across 11 country entities',
];

const conflicts = [];
for (const pattern of conflictPatterns) {
  let offset = -1;
  while ((offset = originalTemplate.indexOf(pattern, offset + 1)) !== -1) {
    const page = conflictPage(pages, offset);
    const snippet = originalTemplate.slice(Math.max(0, offset - 90), Math.min(originalTemplate.length, offset + pattern.length + 90))
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    conflicts.push({ pattern, page, snippet });
  }
}

fs.writeFileSync('docs/content-conflicts-found.md', `# Content Conflicts Found\n\nNormalization policy: conflicts are recorded only. No copy, metric, page order, page count, or layout changes were made.\n\nKnown conflict hits: ${conflicts.length}\n\n| Pattern | Page | data-screen-label | Context |\n|---|---:|---|---|\n${conflicts.length ? conflicts.map((item) => `| ${item.pattern} | ${item.page?.index ?? 'unknown'} | ${item.page?.label ?? 'unknown'} | ${item.snippet.replaceAll('|', '\\|')} |`).join('\n') : '| none | - | - | - |'}\n`);

console.log(`Extracted ${pages.length} pages, ${decodedImages.length} images, ${conflicts.length} content conflict hits.`);

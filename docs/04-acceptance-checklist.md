# Deprecated Redesign Document

Superseded by docs/portfolio-final-redesign-spec.md

# Portfolio Acceptance Checklist

모든 항목은 PASS / FAIL로 기록한다. `mostly pass`, `acceptable`, `probably fine`은 허용하지 않는다.

## 1. Content truth

- [ ] ETA is exactly `307 orders`.
- [ ] ETA cumulative GMV is `$41.3K`.
- [ ] Partner delivery squad is `7-person`, with `6 engineers + 1 product designer` where detailed.
- [ ] Partner count is `30`, unless a newer verified source is explicitly supplied.
- [ ] D2D cancellation is `22% → 7%`.
- [ ] D2D items per order is `6.3 → 11.7`.
- [ ] Segment revenue share is `0% → 12.5%`.
- [ ] Segment repurchase is `+89%`.
- [ ] Invoice manual requests are `33 → 0`.
- [ ] Invoice effort is `165 hours removed monthly`.
- [ ] `286 orders`, `12-person squad`, `32 partners`, `2.8 units`, `~21 MD` are absent.
- [ ] No unverified interview / workshop count.
- [ ] No invented intermediate quarter or ramp.
- [ ] `coverage, not attribution` appears with 88.8% partner sales coverage.
- [ ] observed / estimated labels are not visually interchangeable.

## 2. Narrative

Read only the page titles.

- [ ] Portfolio thesis is understandable.
- [ ] D2D sequence reads Problem → Research → Decision → Impact → Lesson.
- [ ] Partner sequence reads Problem → Decision → Impact.
- [ ] ETA page explains a closed operating loop.
- [ ] Segment sequence reads Problem → Architecture decision → Impact.
- [ ] Invoice explains both technical mechanism and business outcome.
- [ ] No title describes page format instead of conclusion.

## 3. Canvas

For every `.page`:

- [ ] bounding width = 1060px.
- [ ] bounding height = 750px.
- [ ] `scrollWidth <= clientWidth`.
- [ ] `scrollHeight <= clientHeight`.
- [ ] body has no horizontal scrollbar.
- [ ] title does not overlap corner label.
- [ ] final content has at least 16px to footer rule.
- [ ] no element crosses page boundary.

## 4. Typography

- [ ] Standard title maximum 2 lines.
- [ ] Cover title maximum 3 lines.
- [ ] No title was reduced below 30px to fit copy.
- [ ] Node text is readable at 1060×750.
- [ ] Source and caption remain readable at PDF scale.
- [ ] Bold is used only for conclusion fragments / labels.
- [ ] All numeric values use consistent tabular alignment where compared.

## 5. Visual hierarchy

- [ ] One core claim per page.
- [ ] One primary visualization per page.
- [ ] One blue focal group maximum.
- [ ] One red bottleneck maximum on problem pages.
- [ ] Representative metric is larger than supporting metrics.
- [ ] Supporting cards do not repeat the diagram.
- [ ] No decorative card grid with four or more equal cards.

## 6. Workflow

- [ ] All connectors horizontal / vertical.
- [ ] No diagonal / curve / Bezier connector.
- [ ] System connection = gray solid.
- [ ] Human manual relay = red dotted.
- [ ] Selected automated path = blue solid.
- [ ] Missing information uses broken line or `NO RECORD` state.
- [ ] Node descriptions maximum 2 lines.
- [ ] Primary nodes maximum 8.
- [ ] Actor / system / data store roles are distinguishable.

## 7. Lucide

- [ ] Only Lucide icons are used.
- [ ] Icons are stored locally.
- [ ] No CDN icon runtime.
- [ ] All icons use stroke-width 1.25.
- [ ] Entity icon always includes a text label.
- [ ] `BrainCircuit` is only used for actual LLM reasoning / generation / classification.
- [ ] Manual / delay / bottleneck are state tokens, not independent entity nodes.
- [ ] Product screenshots do not contain portfolio annotation icons unless explicitly specified.

## 8. Images

- [ ] All image files exist in `assets/images/`.
- [ ] No Base64 image data in production HTML.
- [ ] Every figure has `overflow:hidden`.
- [ ] Every image has `max-width:100%`.
- [ ] Image rect is fully inside figure rect.
- [ ] Product evidence page has maximum 1 main + 2 crops.
- [ ] Screenshot annotation maximum 3.
- [ ] Annotation describes removed problem, not feature name.
- [ ] All content images have alt text.

## 9. Responsive behavior

- [ ] Desktop layout does not reflow.
- [ ] Whole canvas scales proportionally on narrow viewports.
- [ ] 1440×900 viewport shows one full slide without internal clipping.
- [ ] Browser zoom 80%, 100%, 125% does not change internal relative layout.
- [ ] side navigation or keyboard controls do not cover page content.

## 10. Print

- [ ] `@page size: A4 landscape` exists.
- [ ] One section = one PDF page.
- [ ] No blank page between sections.
- [ ] No clipped footer.
- [ ] Dark cover backgrounds print correctly.
- [ ] Blue / red labels remain understandable in grayscale.
- [ ] PDF page count equals number of `.page` sections.

## 11. HTML / engineering

- [ ] HTML is readable without runtime unpacking.
- [ ] content is visible with JavaScript disabled.
- [ ] all sections have unique semantic IDs.
- [ ] no duplicate SVG symbol ID.
- [ ] no console error.
- [ ] no 404 assets.
- [ ] CSS is split by tokens / layout / components / print.
- [ ] section-specific overrides are scoped by semantic ID.
- [ ] no unexplained negative margin for screenshots.
- [ ] no external font file is committed without license approval.

## 12. PR evidence

Every PR must include:

- [ ] target semantic IDs.
- [ ] before screenshot.
- [ ] after screenshot.
- [ ] Vercel Preview URL.
- [ ] changed metrics list.
- [ ] Lucide icons added / removed.
- [ ] acceptance checklist PASS / FAIL summary.
- [ ] known unresolved item, or explicit `None`.

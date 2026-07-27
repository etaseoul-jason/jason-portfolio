# Claude Code Execution Prompts

## 기본 원칙

Claude Code는 디자인을 선택하지 않는다. 승인된 selected design과 page spec을 코드로 정확히 옮긴다.

우선순위:

```text
content truth
> page spec
> selected design / handoff
> global design system
> existing implementation
```

## Step 0. Repository audit / Plan mode

Claude Code에서 permission mode를 `plan`으로 두고 시작한다.

### Prompt

```text
Work in Plan Mode only. Do not modify files or execute commands that change the repository.

Read in this order:
1. CLAUDE.md
2. docs/content-truth.md
3. docs/design-system.md
4. docs/page-spec.md
5. docs/acceptance-checklist.md
6. current HTML, CSS, JavaScript, and assets

Produce an audit with:
- current repository structure
- whether the source is a runtime artifact bundle or editable source
- current section labels and semantic ID mapping
- duplicated / conflicting metrics
- inline styles and shared components
- image locations and intrinsic sizes
- SVG symbol IDs
- print behavior
- responsive behavior
- console / asset risks
- implementation sequence

For each target semantic ID, report:
1. current DOM
2. current CSS dependencies
3. required DOM rewrite
4. reusable component
5. required Lucide icons
6. required image asset
7. overflow risk
8. content-truth risk
9. acceptance criteria likely to fail

Do not propose a new visual design.
Do not invent content.
Mark unresolved conflicts as UNRESOLVED.
```

## Step 1. Normalize artifact source

이 작업은 redesign 전에 한 번만 수행한다.

### Prompt

```text
Normalize the current Claude Artifact export into maintainable source files.

Target branch:
refactor/portfolio-source

Requirements:
1. Preserve the current rendered appearance as the baseline.
2. Keep archive/index-artifact-export.html unchanged.
3. Extract the actual template into root index.html.
4. Decode all bundled images into assets/images/ with semantic filenames.
5. Remove runtime unpacking scripts, manifest data, loading overlay, and thumbnail bootstrap.
6. Move CSS into:
   - styles/tokens.css
   - styles/layout.css
   - styles/components.css
   - styles/print.css
7. Keep page-specific inline styles temporarily when moving them would risk visual changes.
8. Add semantic IDs according to docs/page-spec.md.
9. Remove the Index section.
10. Create a placeholder #d2d-decision section only after source normalization is visually verified; do not design it yet.
11. Ensure all content is visible with JavaScript disabled.
12. Do not change copy or metrics except known content-truth corrections.

Validation:
- generate baseline and normalized screenshots at 1060×750 for every section
- compare section count and labels
- verify no Base64 image remains
- verify no missing image
- verify no console error
- verify no horizontal overflow

Return:
- files changed
- assets extracted
- semantic ID map
- visual differences, if any
- PASS / FAIL for normalization criteria
```

## Step 2. Shared components and Lucide

### Prompt

```text
Implement the shared portfolio primitives before editing page content.

Scope:
- styles/tokens.css
- styles/layout.css
- styles/components.css
- assets/icons/lucide/
- assets/icons/icons.svg
- scripts/deck.js
- scripts/validate-layout.js

Create or normalize:
1. fixed .page canvas
2. scaled .deck-viewport wrapper
3. title / eyebrow / corner / footer primitives
4. evidence rail
5. metric hero / supporting metric
6. workflow node
7. state token
8. orthogonal SVG connector and shared arrow marker
9. screenshot figure and annotation
10. decision option
11. project cover
12. source / limitation line

Lucide:
- use only icon names required by docs/page-spec.md
- store locally
- stroke-width 1.25
- no CDN
- build one SVG sprite
- icon always has text label

Do not redesign any page in this step.
Replace existing primitives only where visual parity can be maintained.
Generate a component reference page in development only; do not include it in the production deck.
```

## Step 3. Implement one batch

아래 prompt에 target section만 바꿔 사용한다.

```text
Implement only this approved batch:
[TARGET SEMANTIC IDS]

Authoritative references:
- docs/content-truth.md
- docs/page-spec.md for each target section
- docs/design-system.md
- references/selected-designs/[semantic-id]
- Claude Design handoff bundle

Rules:
1. The selected design's information architecture is final.
2. Do not create alternative layouts.
3. Do not preserve the current DOM if it conflicts with the selected design.
4. Do not modify sections outside the target batch, except shared components when unavoidable.
5. Do not add metrics, research, dates, scope, or claims.
6. Use exact content-truth values.
7. Use local Lucide sprite only.
8. Use orthogonal connectors only.
9. Manual / delay / bottleneck are state tokens.
10. BrainCircuit is only for an actual LLM node.
11. One blue focal group maximum per page.
12. One red bottleneck maximum on problem pages.
13. Product screenshot annotations maximum three.
14. No Base64 images or external CDN assets.
15. Content must remain readable with JavaScript disabled.

After implementation:
- run formatter / lint if configured
- launch the site locally
- capture one screenshot per target section at exact 1060×750
- capture a 1440×900 browser viewport screenshot
- run layout validation
- run content-truth grep
- run print-to-PDF check
- repair all FAIL items

Return a section-by-section report:
- files changed
- DOM rewritten
- Lucide icons used
- metrics displayed
- screenshot asset used
- acceptance criteria PASS / FAIL
- known unresolved issues

Do not state completion if any required criterion is FAIL.
```

## Step 4. Layout validation implementation

Create `scripts/validate-layout.js` or equivalent browser test.

### Required checks

```text
For each section.page:
- width is 1060 ± 0.5px at base scale
- height is 750 ± 0.5px at base scale
- scrollWidth <= clientWidth
- scrollHeight <= clientHeight
- every visible descendant rect stays inside page rect
- figure img rect stays inside figure rect
- no title overlaps .corner
- at least 16px between last content and footer rule
- unique semantic ID
- maximum annotation count
- maximum blue focal groups using data attributes
- maximum red bottleneck groups using data attributes
```

Use semantic attributes where CSS color inspection is unreliable:

```html
<div data-focal="primary"></div>
<div data-state="bottleneck"></div>
<div data-state="manual"></div>
```

### Prompt

```text
Create an automated layout verification script for the fixed portfolio deck.
Use the acceptance checklist as the exact specification.
The test must fail with the semantic section ID and offending selector.
Do not silently clip or hide failing elements.
Generate a machine-readable JSON report and a human-readable summary.
```

## Step 5. Content truth validation

### Required grep patterns

Fail if found:

```text
286 orders
12-person
12 person
32 partners
2.8 units
~21 MD
11-entity requirement workshops
Interviews across 11 country entities
```

Require:

```text
307 orders
$41.3K
7-person
30 partners
22% → 7%
6.3 → 11.7
33 → 0
165 hours
12.5%
+89%
```

The exact arrow encoding may differ in HTML, so validation can inspect normalized text content.

### Prompt

```text
Run a content-truth audit across HTML, CSS generated content, JavaScript strings, SVG text, alt text, captions, and source notes.
Report every occurrence with file and line.
Repair only discrepancies defined in content-truth.md.
Do not rewrite stylistic copy outside the target sections.
```

## Step 6. Browser verification

### Prompt

```text
Verify the implemented batch in a real browser.

Required states:
1. exact 1060×750 base canvas
2. 1440×900 desktop viewport
3. 1280×800 desktop viewport
4. browser zoom-equivalent scaled view
5. print preview / A4 landscape PDF
6. JavaScript disabled content check

For each target section:
- capture screenshot
- inspect console
- inspect image loading
- inspect text clipping
- inspect connector alignment
- inspect icon baseline
- inspect footer spacing
- compare to selected design

Create a table:
semantic ID / visual match / overflow / content / print / result.
Fix all code defects. Do not redesign to fix a defect unless page-spec cannot be implemented.
```

## Step 7. PR preparation

### Prompt

```text
Prepare the pull request for the completed batch.

Do not merge.

PR title:
redesign: implement [CASE NAME] portfolio pages

PR description must include:
- target semantic IDs
- purpose
- before / after screenshots
- Vercel Preview URL placeholder
- files changed
- shared components changed
- Lucide icons added
- content-truth values touched
- acceptance checklist summary
- known unresolved items, or None
- rollback note

Review git diff and remove unrelated changes before preparing the PR.
```

## Step 8. Final release audit

### Prompt

```text
Audit the complete portfolio for release. Do not redesign.

Read every page title in order and verify the narrative.
Run all layout, content, browser, image, accessibility, and print checks.
Compare the number of .page sections to PDF pages.
Verify that no old artifact bundle code remains in production source.
Verify that archive/index-artifact-export.html is the only archived bundle.
Verify that all design references map to a semantic section.

Return:
1. release status PASS / FAIL
2. failed checks with selector and screenshot
3. exact corrective patch plan
4. final page / semantic ID list
5. production deploy recommendation

Do not recommend production if any content-truth, overflow, missing-asset, or print check fails.
```

## Claude Code stop conditions

Stop and report instead of guessing when:

- selected design conflicts with content truth
- screenshot asset is missing
- a requested Lucide icon does not exist in the installed version
- a metric's observation period is absent
- acceptance criteria cannot fit without deleting required content
- implementation requires modifying unrelated sections
- current data differs from source documents

Use `UNRESOLVED` with exact source references. Do not silently choose.

# Portfolio Final Redesign Specification

Status: authoritative redesign specification.

This document supersedes older page-count, ordering, cover-layout, and redesign instructions. Use it as the single redesign source for Claude Design and later Codex implementation. `docs/content-truth.md` remains the source for raw verified metrics; this file defines how those verified facts are organized into the final deck.

Do not redesign from the normalized source by preserving current page order. The normalized `index.html` is an editable baseline, not the final structure.

## 1. Final Page Order

The final portfolio page count is 21.

| Final # | Semantic ID | Page role |
|---:|---|---|
| 1 | `#cover` | Portfolio cover |
| 2 | `#introduction` | Personal thesis |
| 3 | `#operating-model` | Operating model |
| 4 | `#selected-projects` | Typographic project list |
| 5 | `#d2d-cover` | Project 01 cover |
| 6 | `#d2d-problem` | D2D problem |
| 7 | `#d2d-decision` | D2D decision |
| 8 | `#d2d-impact` | D2D impact |
| 9 | `#partner-cover` | Project 02 cover |
| 10 | `#partner-problem` | Partner problem |
| 11 | `#partner-decision` | Partner decision |
| 12 | `#partner-impact` | Partner impact |
| 13 | `#segment-cover` | Project 03 cover |
| 14 | `#segment-problem` | Segment problem |
| 15 | `#segment-decision` | Segment decision |
| 16 | `#segment-impact` | Segment impact |
| 17 | `#eta-cover` | Project 04 cover |
| 18 | `#eta-operating-loop` | ETA operating loop |
| 19 | `#invoice-cover` | Project 05 cover |
| 20 | `#invoice-automation` | Invoice automation |
| 21 | `#closing` | Closing page |

Required ordering change: move the Segment project before ETA SEOUL while preserving each project internal order.

Visible page numbers must be derived from final DOM order during implementation. Do not hard-code source page numbers or keep old page labels.

## 2. Removed Sections

Remove these normalized source sections from the final DOM during implementation:

| Source section | Final action |
|---|---|
| `#what-i-bring` | Delete the section. |
| Partner Survey Appendix | Delete the section. |
| Partner Onboarding Appendix | Delete the section. Preserve only the verified onboarding outcome in `#partner-decision`. |

Do not hide removed sections with CSS. Delete the actual DOM sections.

## 3. Selected Projects Page

Redefine the current Index page as `#selected-projects`.

Title:

```text
Selected Projects
```

Optional subtitle:

```text
Five systems built from operational constraints.
```

Use a simple typographic project list only. Do not use cards, thumbnails, icons, format labels, page counts, or page-range labels.

Project list order:

1. Dealer Ordering System
2. Partner Operations Platform
3. SMB Commerce Infrastructure
4. ETA SEOUL Operating System
5. Global Invoice Architecture

Optional verified outcome lines:

```text
Email orders became a dealer ordering system.
Fragmented partner operations became one shared workspace.
A previously invisible SMB segment reached 12.5% of revenue.
A solo business automated 90% of recurring operations.
33 monthly manual invoice requests went to zero.
```

Remove all format labels, including project type tags, side-project tags, appendix tags, page counts, and Problem / Decision / Impact labels.

## 4. Global Page And Typography Rules

- Canvas: `.page` remains `1060px × 750px`.
- Body vertical scroll is allowed; page internal scrolling is not allowed.
- No horizontal overflow.
- Each final page has one core claim and one primary visualization.
- Use warm paper, restrained ink, gray, one blue focal group maximum, and red only for manual / bottleneck / delay / failed / drop states.
- Standard page title: 30-34px, maximum two lines.
- Project cover title: maximum five words, maximum two lines.
- Project cover description: maximum 22 words, maximum two lines.
- Body copy should be compressed before shrinking type below the design system floor.
- Source and limitation lines use mono style and must remain readable in A4 landscape PDF.
- No gradients, glassmorphism, decorative 3D, generic dashboard grids, generic illustrations, or decorative icon use.
- Actual product evidence is preferred. Use restrained architecture previews only where no product screenshot exists.
- Do not apply Lucide icons to project covers.

## 5. Locked Project-Cover Template

All five project covers use one locked template. Region positions must not change between projects.

Fixed regions:

| Region | Placement |
|---|---|
| Project number | Top-left |
| Company / role | Top-right |
| Short project title | Center-left |
| Description | Directly below title |
| Evidence preview | Center-right |
| Scope metadata | Bottom-left |
| Verified metrics | Bottom-right, maximum two |

Common canvas geometry:

- Canvas: `1060 × 750px`
- Outer horizontal padding: `64px`
- Top metadata baseline: approximately `y=48`
- Center content region: approximately `y=120-580`
- Bottom metadata and metrics: approximately `y=615-690`

Title rules:

- Maximum five words.
- Maximum two lines.
- No scale or performance metrics in the title.
- Contextual detail belongs in the description, scope, or metrics.

Description rules:

- Maximum 22 words.
- Maximum two lines.

## 6. Locked Project-Cover Copy

### `#d2d-cover`

Top-left:

```text
PROJECT 01
```

Top-right:

```text
LG ELECTRONICS / PRODUCT MANAGER
```

Title:

```text
Dealer Ordering System
```

Description:

```text
Replaced email-based ordering with a digital workflow that exposed stock, price, and credit before submission.
```

Bottom-left:

```text
SCOPE / 1,600+ DEALERS / 5 MARKETS
```

Bottom-right primary metric:

```text
22% → 7%
CANCELLATION RATE
```

Bottom-right secondary metric:

```text
6.3 → 11.7
ITEMS / ORDER
```

Center-right evidence: use `assets/images/d2d-dealer-ordering-cart.png`.

### `#partner-cover`

Top-left:

```text
PROJECT 02
```

Top-right:

```text
BUNJANG / PRODUCT MANAGER
```

Title:

```text
Partner Operations Platform
```

Description:

```text
Turned fragmented Excel and C2C chat operations into one shared workspace for cross-border partners.
```

Bottom-left:

```text
SCOPE / 30 PARTNERS / CROSS-BORDER OPERATIONS
```

Bottom-right primary metric:

```text
30
PARTNERS ONBOARDED
```

Bottom-right secondary metric:

```text
20
ACTIVE PARTNERS
```

Center-right evidence: use one large `assets/images/partner-order-workspace.png` capture.

Do not place `88.8% sales coverage` on the cover. Preserve it for `#partner-impact`.

### `#segment-cover`

Top-left:

```text
PROJECT 03
```

Top-right:

```text
LG ELECTRONICS / PRODUCT MANAGER
```

Title:

```text
SMB Commerce Infrastructure
```

Description:

```text
Built a shared commerce core for a previously invisible SMB segment across 17 markets.
```

Bottom-left:

```text
SCOPE / 17 MARKETS / SHARED COMMERCE CORE
```

Bottom-right primary metric:

```text
12.5%
REVENUE SHARE
```

Bottom-right secondary metric:

```text
+89%
SEGMENT GROWTH
```

Center-right evidence: use `assets/images/segment-business-storefront.png`.

### `#eta-cover`

Top-left:

```text
PROJECT 04
```

Top-right:

```text
ETA SEOUL / FOUNDER
```

Title:

```text
ETA SEOUL Operating System
```

Description:

```text
Automated recurring operations for a solo-run, 30-brand global commerce business.
```

Bottom-left:

```text
SCOPE / 30 BRANDS / SOLO OPERATOR
```

Bottom-right primary metric:

```text
307
ORDERS
```

Bottom-right secondary metric:

```text
$41.3K
GMV
```

Center-right evidence: use `assets/images/eta-seoul-storefront-home.png` as the primary image and `assets/images/eta-seoul-checkout.png` as a smaller supporting image.

Do not place `90% automated` on the cover. Preserve it for `#eta-operating-loop`.

### `#invoice-cover`

Top-left:

```text
PROJECT 05
```

Top-right:

```text
LG ELECTRONICS / PRODUCT MANAGER
```

Title:

```text
Global Invoice Architecture
```

Description:

```text
Mapped country-specific invoice requirements into one shared core with reusable local extensions.
```

Bottom-left:

```text
SCOPE / GLOBAL ERP / LOCAL TAX RULES
```

Bottom-right primary metric:

```text
33 → 0
MANUAL REQUESTS / MONTH
```

Bottom-right secondary metric:

```text
165 HOURS
REMOVED MONTHLY
```

Center-right evidence: use a restrained architecture preview showing Shared Invoice Core, Field Dictionary, ERP / OMS Mapping, and Local Tax Extensions.

Do not show the full workflow on the cover. Preserve `+221% invoice volume absorbed` for `#invoice-automation`.

## 7. Page-By-Page Redesign Requirements

### `#cover`

Keep the portfolio thesis: field bottlenecks become deployed systems. Use product evidence, not decoration, and keep body copy short. No project-by-project detail belongs here.

### `#introduction`

Explain the personal operating thesis: the work happens where users, workflows, and systems break apart. Preserve the operating mode, not a full career timeline.

### `#operating-model`

Show the reusable pattern:

```text
Observe the field → Map decisions → Prototype workflow → Deploy with users → Measure adoption
```

This page should set up the reader for the project sequence.

### `#selected-projects`

Follow Section 3 exactly.

### `#d2d-problem`

Show email-based ordering, missing stock / price / credit visibility, manual order-desk work, and failure before ERP entry. Red state marks manual delay and one bottleneck only.

### `#d2d-decision`

Show the product decision: digitize the order itself and defer full ERP unification. Use the dealer cart / portal evidence. Keep decision options concise.

### `#d2d-impact`

Primary outcomes: `22% → 7% cancellation rate` and `6.3 → 11.7 items / order`. Supporting evidence may include adoption limitation, logistics improvement, and the award if the page remains readable.

### `#partner-problem`

Show fragmented Excel, C2C chat, missing records, and no shared operational workspace.

### `#partner-decision`

Show rejected tactical patches versus selected partner platform. Preserve:

```text
5 MANUAL HANDOFFS → 1 APPROVAL FLOW
```

Display it as a compact horizontal before / after strip only. Do not create a separate full workflow or chart for this onboarding outcome.

Use the verified delivery squad as:

```text
7-person squad · 6 engineers + 1 product designer
```

### `#partner-impact`

Primary impact: active partners represented `88.8%` of June outbound sales coverage. Label it explicitly as coverage, not attribution. Supporting metrics: `30 partners onboarded`, `20 active partners`.

### `#segment-problem`

Show that an averaged storefront hid an SMB segment at `0%` revenue share. Use a single red structural bottleneck for the shared retail path and manual invoice / tax friction. No solution architecture on this page.

### `#segment-decision`

Show shared core plus local plugins. Selected architecture:

```text
Shared commerce core
→ SMB certification plugin
→ Tax / invoice plugin
→ Bulk-order plugin
→ Certified market storefronts
```

Guardrail:

```text
Global discount cap + live error alert
```

The guardrail is a horizontal band across all plugins, not a fourth plugin.

### `#segment-impact`

Use only measured points:

```text
Before launch: SMB 0% / B2C 100%
Q4 2024: SMB 12.5% / B2C 87.5%
```

Supporting metrics: `+2.5%p CVR vs B2C storefront`, `+89% repurchase vs B2C`. Do not introduce intermediate ramp data.

### `#eta-cover`

Follow the locked cover copy. Keep `30 brands`, `307 orders`, and `$41.3K GMV` in the project overall. Do not make the cover a metric wall.

### `#eta-operating-loop`

ETA remains two pages and must not be reduced to a metric-only summary.

Before workflow:

```text
Discover products → Copy product data → Normalize fields → Upload to Shopify → Check failures manually
```

Represent repeated manual work with red dotted connectors and the state tokens `MANUAL`, `REPEATED`, and `FRAGILE`. Use one bottleneck maximum.

After workflow:

```text
Discover → Crawl → Normalize → Publish → Validate → Repair → back to Publish
```

The improved workflow must be a visibly closed loop.

Required primary outcome:

```text
90% of recurring operations automated
```

Preserve the causal narrative:

```text
manual recurring work → automated operating loop → automated validation and repair → measured operational scale
```

### `#invoice-cover`

Follow the locked cover copy. Use an abstract architecture preview only.

### `#invoice-automation`

Invoice remains two pages and must not be reduced to a cover or metric-only summary.

Preserve:

- country-specific requirements
- manual email / spreadsheet requests
- manual interpretation
- field dictionary
- ERP / OMS mapping
- shared invoice core
- local tax rules as extensions
- invoice issuance
- `33 → 0 monthly manual requests`
- `165 hours removed monthly`
- `+221% invoice volume absorbed`

Before workflow:

```text
Country request → Email / spreadsheet → Manual interpretation → ERP field clarification → Invoice issuance
```

State treatment: red dotted connectors, one manual bottleneck, manual request, copy / paste, repeated clarification, and country-specific knowledge dependency.

After workflow:

```text
Country requirements → Field dictionary → ERP / OMS mapping → Shared Invoice Core → Local tax extensions → Invoice issued
```

The visual structure must communicate one shared core with reusable local extensions.

Metric hierarchy:

1. `33 → 0 manual requests / month`
2. `165 hours removed monthly`
3. `+221% invoice volume absorbed`

`165 hours removed monthly` is the authoritative effort metric.

### `#closing`

Closing is the final page. It restates the portfolio thesis and contact path without introducing new metrics, new projects, or appendix content.

## 8. Lucide Icon Dictionary

Do not implement Lucide icons during documentation planning. Later implementation must use a local SVG sprite only, stroke width `1.25`, and text labels with every icon.

| Use | Lucide icon |
|---|---|
| Observe | `Eye` |
| Map | `Workflow` |
| Prototype | `Code2` |
| Deploy | `Rocket` |
| Measure | `ChartNoAxesCombined` |
| Discover | `Search` |
| Crawl | `Bot` |
| Normalize | `ListFilter` |
| Publish | `Upload` |
| Validate | `CircleCheck` |
| Repair | `BrainCircuit` |
| Scheduler | `TimerReset` |
| Country requirements | `ClipboardList` |
| Email | `Mail` |
| Spreadsheet | `FileSpreadsheet` |
| Manual work | `Hand` |
| ERP / OMS | `ServerCog` |
| Field dictionary | `TableProperties` |
| Mapping | `GitMerge` |
| Tax rules | `ReceiptText` |
| Invoice issued | `FileCheck2` |
| Buyer groups | `UsersRound` |
| Storefront | `Store` |
| Promotion | `BadgePercent` |
| Product / order | `ShoppingCart` |
| Invoice request | `FilePenLine` |
| Exit | `LogOut` |
| Partner conflict | `Handshake` with `CircleX` state |
| Shared core | `Database` or `PanelsTopLeft` |
| Certification | `BadgeCheck` |
| Bulk order | `PackagePlus` |
| Guardrail | `ShieldCheck` |
| Rejected | `CircleX` |
| Selected | `CircleCheck` |

Use `BrainCircuit` only for actual LLM-assisted repair.

## 9. Workflow Connector And State-Token Rules

- Connectors are orthogonal only.
- Neutral flow uses gray solid connectors.
- Selected To-Be flow may use one blue focal group.
- Manual / repeated / fragile / bottleneck / delay / failed states use red, labels, and line treatment; color alone is insufficient.
- Red dotted connectors mean manual or fragile work.
- Broken red connectors mean exit, failure, or dropped handoff.
- One red bottleneck maximum per problem page.
- One blue focal group maximum per page.
- State tokens are attached to nodes or connectors; do not turn them into separate decorative cards.

## 10. Claude Design Handoff Requirements

Claude Design receives:

- `docs/portfolio-final-redesign-spec.md`
- `docs/content-truth.md`
- normalized Preview URL or local screenshots
- `references/normalized/contact-sheet.png`
- current extracted assets under `assets/images/`

Claude Design must produce selected designs for the final 21 semantic IDs only. It must not design removed sections. It must use the locked project-cover template for all five project covers.

Design outputs should be named by semantic ID, for example:

```text
references/selected-designs/d2d-cover.png
references/selected-designs/eta-operating-loop.png
```

Do not use names such as `final-v2`, `latest`, or page-number-only filenames.

## 11. Codex Implementation Requirements

Implementation happens after design selection, not during this documentation task.

Implementation must:

- start from normalized root `index.html`
- update semantic IDs to the final list
- delete removed sections from DOM
- move Segment before ETA
- rename `#index` to `#selected-projects`
- rename `#eta-one-pager` to `#eta-operating-loop`
- rename `#invoice-one-pager` to `#invoice-automation`
- replace hard-coded visible page numbers with final DOM-order numbers
- preserve content visibility without JavaScript
- use local image assets only
- use local Lucide sprite only when icon implementation begins

Implementation must not:

- add new projects
- add appendix pages
- keep removed sections hidden in CSS
- invent metrics
- use external CDNs
- make project covers vary by layout

## 12. Acceptance Criteria

The implementation is not complete until all are true:

- final `.page` count is 21
- final DOM order matches Section 1 exactly
- every final page has a unique semantic ID
- removed sections are absent from DOM
- Closing is the final `.page`
- Segment project appears before ETA
- Selected Projects is a typographic list without cards, thumbnails, icons, format labels, or page counts
- all five project covers use the locked template
- every project cover title is five words or fewer
- every project cover description is 22 words or fewer
- `7-person squad` appears where delivery squad size is needed
- `165 hours removed monthly` is used for invoice effort
- ETA order count is `307`
- no Base64 image remains in production source
- no missing image
- no console error
- JavaScript-disabled rendering shows all content
- A4 landscape PDF has 21 pages
- no horizontal overflow
- no page internal overflow

## 13. Final QA Checklist

Before completion, verify:

- [ ] `npm run validate` or equivalent layout validation passes.
- [ ] Browser console has no errors.
- [ ] Every final page screenshot is exactly `1060 × 750`.
- [ ] Contact sheet shows 21 final pages.
- [ ] PDF has 21 A4 landscape pages.
- [ ] All product images render from local `assets/images/`.
- [ ] All Lucide icons, once implemented, render from local sprite.
- [ ] Content-truth audit passes.
- [ ] Segment appears before ETA.
- [ ] Closing is final.
- [ ] Removed sections are not in the DOM.
- [ ] Selected Projects has no cards, thumbnails, icons, format labels, or page counts.
- [ ] Project-cover template is consistent across all five covers.
- [ ] ETA remains two pages.
- [ ] Invoice remains two pages.
- [ ] Partner onboarding appears only as compact outcome in `#partner-decision`.

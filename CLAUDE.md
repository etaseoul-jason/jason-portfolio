# Portfolio Repository Rules for Claude Code

## Authority order

1. `docs/content-truth.md`
2. `docs/portfolio-final-redesign-spec.md`
3. `references/selected-designs/` and design handoff
4. `docs/redesign-document-status.md`
5. current code

Higher sources override lower sources.

Historical redesign documents such as `docs/page-spec.md`, `docs/design-system.md`, numbered design docs, and `reference/source-*` files are superseded for final page order, page count, and redesign implementation.

## Non-negotiable content

- ETA Seoul: 307 orders / $41.3K cumulative GMV
- Partner: 30 partners / 7-person delivery squad
- D2D: 1,600+ dealers / 22%→7% cancellation / 6.3→11.7 items
- Segment: 0%→12.5% revenue share / +89% repurchase
- Invoice: 33→0 requests / 165 hours removed monthly / +221% volume

Never use: 286 orders, 12-person squad, 32 partners, 2.8 units, ~21 MD.

## Architecture

- Production source must be normal HTML/CSS/assets.
- Runtime artifact unpacking is forbidden outside `archive/`.
- No Base64 image in production source.
- Content must render without JavaScript.
- Every page section has a unique semantic ID.
- Do not target a page by numeric position in CSS or JavaScript.

## Canvas

- `.page`: 1060×750px fixed.
- No internal scrolling.
- Body vertical scroll allowed.
- No horizontal scroll.
- Narrow viewports scale the complete canvas; no layout reflow.
- A4 landscape print, one section per page.

## Design

- One core claim and one primary visualization per page.
- One blue focal group maximum.
- Red only for manual / bottleneck / delay / failed / drop.
- Workflow connectors orthogonal only.
- No gradient, glassmorphism, 3D illustration, generic dashboard card grid.
- Existing DOM may be rewritten when required.
- Selected Claude Design layout is final; do not redesign it.

## Icons

- Lucide only.
- Local SVG sprite only.
- Stroke width 1.25.
- Icons require text labels.
- BrainCircuit only for actual LLM work.
- Manual / delay / bottleneck are state tokens.

## Images

- Store in `assets/images/`.
- Figures use overflow hidden.
- Product evidence maximum 1 main + 2 crops.
- Annotation maximum 3.
- Annotation describes removed user or operational problem.

## Work scope

- Modify only target semantic IDs and necessary shared primitives.
- Do not opportunistically rewrite unrelated pages.
- Do not invent copy, data, dates, sources, or impact.
- Report conflicts as `UNRESOLVED`.

## Required verification

Before saying complete:

1. run layout validation
2. run content-truth audit
3. capture screenshots
4. inspect browser console
5. verify images
6. verify JavaScript-disabled rendering
7. verify A4 landscape PDF
8. complete acceptance checklist

Any required FAIL means the task is not complete.

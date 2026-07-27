# Redesign Document Status

## Single Authoritative Redesign Specification

Use this file for all future Claude Design and Codex implementation planning:

```text
docs/portfolio-final-redesign-spec.md
```

It defines the final 21-page order, semantic IDs, removed sections, locked project-cover template, exact project-cover copy, ETA and Invoice preservation rules, icon dictionary, implementation requirements, and QA checklist.

## Content Truth

Use this file for raw verified metrics and forbidden values:

```text
docs/content-truth.md
```

If a metric or factual claim conflicts with another document, `docs/content-truth.md` controls the value and `docs/portfolio-final-redesign-spec.md` controls how that value is used in the final portfolio structure.

## Normalized Source-Of-Truth Files

These files define the current normalized implementation baseline:

```text
index.html
styles/tokens.css
styles/layout.css
styles/components.css
styles/print.css
assets/images/
scripts/validate-layout.js
```

Archived source files:

```text
deck/index.html
archive/index-artifact-export.html
```

Do not edit archived source files for redesign work.

## Visual Baseline Files

Use these files to inspect the normalized baseline:

```text
references/normalized/contact-sheet.png
references/normalized/deck-preview.pdf
references/normalized/page-01.png ... references/normalized/page-24.png
references/baseline/contact-sheet.png
```

The normalized baseline has more pages than the final redesign. The final redesign target is defined only in `docs/portfolio-final-redesign-spec.md`.

## Historical Reference Documents

These documents remain useful for background context but are not authoritative for final ordering, page count, cover layout, or redesign implementation:

```text
docs/page-spec.md
docs/02-page-by-page-spec.md
docs/design-system.md
docs/01-global-design-system.md
docs/03-github-vercel-workflow.md
docs/acceptance-checklist.md
docs/04-acceptance-checklist.md
reference/source-content-map.md
reference/source-design-guide.md
README.md
```

Any conflict between these historical documents and `docs/portfolio-final-redesign-spec.md` must be resolved in favor of `docs/portfolio-final-redesign-spec.md`.

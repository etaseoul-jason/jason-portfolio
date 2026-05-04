# Jason Han - Portfolio

Single-page portfolio for DS / Forward Deployed PM / Solutions roles.
Style: Palantir IR "Midnight data console" (per DESIGN.md). A4-document feel.

## Design system

Tokens (DESIGN.md):
- Surface canvas: `#15161a` Midnight Ink
- Card surface: `#1f2426` Storm Gray
- Text: `#f6f6f6` Ghost White
- Type: Inter (Alliance No.2 substitute), weight 400 only
- Spacing: 4px base, section gap 55px, element gap 10px
- Radius: 6px for all cards / panels
- Layout: A4-document feel (max-width 820px content card on dark canvas)

Emphasis without bold weight (DESIGN.md "weight 400 only" rule):
- Lead sentences: full Ghost White + left accent border
- Body: Ghost White at 72% opacity
- Captions: Ghost White at 50% opacity, letter-spacing 0.03em

## Structure

- `index.html` - single page with sticky nav + 3 anchor sections (CV / Cover / Portfolio)
- `styles.css` - Palantir tokens, dark theme, print A4
- `assets/` - placeholder for diagrams and exported visuals
- `DESIGN.md` reference - `/Users/jason/Downloads/DESIGN.md`

## Local preview

```bash
python3 -m http.server 8080
```

Open http://127.0.0.1:8080

Check:
- Sticky nav (CV / Cover / Portfolio / Print) with anchor jump
- A4-document feel: content card centered on dark canvas at ≥920px viewport
- Mermaid diagrams render with dark theme variables
- Cmd+P preview shows A4 size, no nav, dark theme preserved (`-webkit-print-color-adjust: exact`)

## Print to PDF

In-browser: Cmd+P. Print CSS does:
- Sets `@page { size: A4; margin: 18mm 16mm; }`
- Hides sticky nav
- Preserves dark surfaces via `print-color-adjust: exact`
- Adds inline URLs after links for offline reference

## Pending iterations

User will share images / metrics / workflow artifacts; they will land here:
- Bunjang prototype screenshots → Case 2 visual
- LG D2X architecture diagram → replace CSS silos with proper export
- Foundry / AIP screenshots if obtained
- Per-company cover letter variants (Sendbird FD, KT-Palantir, Nam Oh path)

Tooling:
- Excalidraw for hero diagrams (dark mode export to SVG)
- Mermaid inline for process flows
- Pure CSS for metric cards (DESIGN.md "Information Card" pattern)

## Deployment options (decision pending)

### Option A - Vercel + custom domain (recommended)

```bash
npm i -g vercel
vercel --prod
```

Point custom domain (jaehyunhan.com / pmjason.dev / etc) at Vercel.

### Option B - GitHub Pages

```bash
gh repo create jason-portfolio --public --source=. --push
gh repo edit jason-portfolio --enable-pages --source=main:/
```

URL becomes `etaseoul-jason.github.io/jason-portfolio`.

## Tone notes (cross-artifact)

- **LinkedIn** = WHAT-only, no detailed metrics (Eugene Mak ANZ pattern)
- **Remember** = Korean, 두괄식 lead sentence bold
- **CV** = lead-with-conclusion bold + detailed metrics in bullets
- **Portfolio** (this) = visualize problem-solving method, Palantir IR dark + A4

Reference DSes for tone calibration: Eugene Mak (Sydney 9y), Pierre C. (NY/Seoul Lead), Jae Ik Hwang (Tokyo Lead), Nam Oh Kwan (Seoul Enterprise Lead).

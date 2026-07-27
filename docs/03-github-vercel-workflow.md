# GitHub + Vercel Execution Workflow

## 목적

현재 `index (4).html`은 Claude Artifact runtime bundle이다. Base64 image manifest와 runtime unpacking script가 포함돼 있어 코드 리뷰, asset 교체, Git diff, page-level 수정에 부적합하다.

따라서 redesign 전에 반드시 다음을 분리한다.

```text
Artifact export backup
→ Normalized source HTML/CSS/assets
→ Semantic section IDs
→ Design implementation
→ Preview validation
→ Production merge
```

## Phase 0. 원본 보존

저장소가 없으면 새 GitHub repository를 생성한다. 기존 저장소가 있으면 아래 파일 구조만 추가한다.

```text
portfolio/
├── archive/
│   └── index-artifact-export.html
├── index.html
├── styles/
│   ├── tokens.css
│   ├── layout.css
│   ├── components.css
│   └── print.css
├── scripts/
│   ├── deck.js
│   └── validate-layout.js
├── assets/
│   ├── images/
│   └── icons/
│       ├── lucide/
│       └── icons.svg
├── docs/
│   ├── content-truth.md
│   ├── design-system.md
│   ├── page-spec.md
│   └── acceptance-checklist.md
├── references/
│   └── selected-designs/
├── CLAUDE.md
├── package.json
└── README.md
```

### Git commands / 새 저장소

```bash
git init
git branch -M main
mkdir -p archive styles scripts assets/images assets/icons/lucide docs references/selected-designs
cp "index (4).html" archive/index-artifact-export.html
git add .
git commit -m "chore: archive current portfolio artifact export"
git remote add origin <GITHUB_REPOSITORY_URL>
git push -u origin main
```

기존 저장소라면:

```bash
git checkout main
git pull --ff-only
git checkout -b refactor/portfolio-source
```

## Phase 1. Artifact bundle을 수정 가능한 source로 정규화

Branch:

```text
refactor/portfolio-source
```

Claude Code의 첫 작업은 디자인 변경이 아니다. 현재 렌더링을 최대한 그대로 보존하면서 bundle을 아래와 같이 해제한다.

1. `__bundler/template`의 실제 HTML을 root `index.html`로 추출
2. manifest의 PNG를 `assets/images/`로 추출
3. CSS를 역할별 파일로 분리
4. runtime unpacker / loading thumbnail / Base64 manifest 삭제
5. inline style은 한 번에 전부 제거하지 않는다. visual parity 우선
6. 모든 section에 semantic ID 부여
7. current screenshot baseline 생성
8. print CSS를 별도 파일로 분리

### Semantic ID mapping

```text
01 → #cover
02 → #introduction
03 → remove
04 → #d2d-cover
05 → #d2d-problem
06 → #d2d-research
new → #d2d-decision
07 → #d2d-impact
08 → #d2d-lesson
09 → #partner-cover
10 → #partner-problem
11 → #partner-decision
12 → #partner-impact
13 → #eta-cover
14 → #eta-operating-loop
15 → #segment-cover
16 → #segment-problem
17 → #segment-decision
18 → #segment-impact
19 → #invoice-cover
20 → #invoice-automation
```

### Normalization acceptance

- artifact unpacking script 0개
- Base64 image data 0개
- external image URL 0개
- all images local
- all sections have unique semantic IDs
- current visual differs only where index removal / ID assignment requires it
- production source opens without JavaScript
- JavaScript disabled state still shows all portfolio content

Commit:

```bash
git add .
git commit -m "refactor: normalize portfolio into editable source files"
git push -u origin refactor/portfolio-source
```

Pull Request를 생성하고 Vercel Preview에서 current output과 비교한 뒤 merge한다.

## Phase 2. Vercel 연결

1. Vercel dashboard에서 GitHub repository import
2. root directory를 repository root로 설정
3. framework preset은 plain static HTML이면 `Other`
4. build command가 필요 없으면 비워 둔다.
5. output directory는 repository root 또는 build output에 맞게 설정
6. Production Branch는 `main`
7. branch push / PR마다 Preview Deployment가 생성되는지 확인

### 환경 구분

```text
Local      : source editing and screenshot generation
Preview    : design / responsive / print / browser QA
Production : main branch only
```

- design branch를 production domain에 직접 연결하지 않는다.
- PR Preview URL을 Claude Design의 web capture source로 사용할 수 있다.
- merge 전 Preview URL에서 acceptance checklist를 완료한다.

## Phase 3. Design reference 준비

`main`이 normalized source 상태가 되면 다음 branch를 만든다.

```bash
git checkout main
git pull --ff-only
git checkout -b design/system-lock
```

Claude Design에 전달할 reference는 다음과 같다.

```text
docs/content-truth.md
docs/design-system.md
docs/page-spec.md
Preview URL of normalized current portfolio
assets/images/
current page screenshots
```

Claude Design에서 승인한 결과는 다음 형태로 저장한다.

```text
references/selected-designs/
├── cover.png
├── introduction.png
├── d2d-problem.png
├── d2d-decision.png
├── d2d-impact.png
├── eta-operating-loop.png
└── design-handoff/
```

- 디자인 파일명은 semantic ID와 같게 한다.
- `final-v2`, `last-final`, `new-new` 같은 이름 금지.
- 하나의 semantic ID에는 selected design 하나만 존재해야 한다.

Design reference만 저장한 commit:

```bash
git add references docs
git commit -m "design: lock portfolio layout archetypes"
git push -u origin design/system-lock
```

이 branch는 source implementation과 분리해서 review 가능하다.

## Phase 4. Implementation branches

한 번에 전체 portfolio를 수정하지 않는다.

### Batch 1 / Global

```text
branch: redesign/global-pages
sections:
#cover
#introduction
#d2d-cover
```

### Batch 2 / D2D

```text
branch: redesign/d2d-case
sections:
#d2d-problem
#d2d-research
#d2d-decision
#d2d-impact
#d2d-lesson
```

### Batch 3 / Partner

```text
branch: redesign/partner-case
sections:
#partner-cover
#partner-problem
#partner-decision
#partner-impact
```

### Batch 4 / ETA

```text
branch: redesign/eta-case
sections:
#eta-cover
#eta-operating-loop
```

### Batch 5 / Segment

```text
branch: redesign/segment-case
sections:
#segment-cover
#segment-problem
#segment-decision
#segment-impact
```

### Batch 6 / Invoice

```text
branch: redesign/invoice-case
sections:
#invoice-cover
#invoice-automation
```

### Branch procedure

```bash
git checkout main
git pull --ff-only
git checkout -b redesign/<batch-name>
claude
# Plan audit → approval → implementation → verification
git status
git diff --stat
git add .
git commit -m "redesign: implement <case> portfolio pages"
git push -u origin redesign/<batch-name>
```

PR에서 확인:

1. Files changed가 target section 외 파일을 과도하게 건드리지 않았는가
2. Vercel Preview URL이 준비됐는가
3. acceptance checklist가 PR description에 포함됐는가
4. before / after screenshot이 첨부됐는가
5. data integrity diff가 포함됐는가

## Phase 5. Merge order

다음 순서를 바꾸지 않는다.

```text
1. source normalization
2. global design system / shared components
3. D2D
4. Partner
5. ETA
6. Segment
7. Invoice
8. cross-page final QA
```

이유:

- D2D에서 workflow / decision / impact의 기본 archetype을 먼저 만든다.
- Partner는 같은 archetype을 복잡한 multi-actor workflow에 확장한다.
- ETA에서 closed loop component를 추가한다.
- Segment는 funnel / plugin architecture를 추가한다.
- Invoice는 compact technical flow를 마지막에 추가한다.

## Phase 6. Final QA branch

```text
branch: qa/portfolio-release
```

이 branch에서는 새 디자인을 만들지 않는다.

허용:

- overflow fix
- font fallback fix
- print page break fix
- image crop fix
- typo / source correction
- page number regeneration
- accessibility label

금지:

- page structure redesign
- new metric
- new narrative
- new icon family
- new color

Final commit examples:

```bash
git commit -m "fix: resolve portfolio layout and print QA"
git commit -m "chore: prepare portfolio production release"
```

## Phase 7. Production

- 모든 PR merge 후 `main` Preview / Production을 다시 확인
- Chrome / Safari desktop
- 1440×900 viewport
- 1060×750 screenshot
- A4 landscape PDF
- no JavaScript fallback
- image 404 / console error 0

Production 반영 후 문제가 발견되면 새 hotfix branch를 사용한다. Production 파일을 직접 수정하지 않는다.

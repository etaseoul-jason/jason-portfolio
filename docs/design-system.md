# Global HTML Portfolio Design System

## 1. 목표

이 포트폴리오는 장식적인 디자인 포트폴리오가 아니라, PM이 현장의 불확실성을 구조화하고 시스템으로 배포한 과정을 보여주는 evidence-led document deck이다.

모든 페이지는 다음 문장에 답해야 한다.

```text
What changed, why did it matter, what decision did I make, and what evidence proves it?
```

## 2. 캔버스와 출력 규격

### 2.1 고정 캔버스

```css
.page {
  width: 1060px;
  height: 750px;
  padding: 54px 64px 40px;
  position: relative;
  overflow: hidden;
  flex: 0 0 auto;
}

.page.one-pager {
  padding: 34px 64px 24px;
}
```

- 비율은 A4 landscape에 맞춘다.
- 웹에서 요소를 재배치하는 responsive reflow는 금지한다.
- 작은 viewport에서는 1060×750 캔버스 전체를 동일 비율로 축소한다.
- body의 세로 스크롤은 허용하되 가로 스크롤은 금지한다.
- `.page` 내부 스크롤은 금지한다.

### 2.2 화면 축소

```css
:root {
  --deck-scale: 1;
}

.deck-viewport {
  width: 1060px;
  height: 750px;
  margin: 24px auto;
  overflow: visible;
}

.deck-viewport > .page {
  margin: 0;
  transform: scale(var(--deck-scale));
  transform-origin: top left;
}
```

```js
function scaleDecks() {
  const scale = Math.min(1, (window.innerWidth - 32) / 1060);
  document.documentElement.style.setProperty('--deck-scale', String(scale));

  document.querySelectorAll('.deck-viewport').forEach((viewport) => {
    viewport.style.width = `${1060 * scale}px`;
    viewport.style.height = `${750 * scale}px`;
  });
}

window.addEventListener('resize', scaleDecks);
scaleDecks();
```

- 각 `.page`는 `.deck-viewport` 하나 안에 들어간다.
- JS를 끈 경우에도 1060×750 원본 콘텐츠는 그대로 표시되어야 한다.
- 이 스크립트는 위치와 크기만 축소하며 DOM 순서나 내부 grid를 바꾸지 않는다.

### 2.3 인쇄

```css
@page {
  size: A4 landscape;
  margin: 0;
}

@media print {
  html, body {
    margin: 0;
    background: #fff;
  }

  .deck-viewport {
    width: 297mm;
    height: 210mm;
    margin: 0;
  }

  .page {
    margin: 0;
    box-shadow: none;
    break-after: page;
    page-break-after: always;
  }
}
```

- PDF와 웹은 동일 HTML source에서 생성한다.
- 별도 PDF 전용 텍스트 수정은 금지한다.

## 3. 그리드와 안전 영역

전체 usable content area는 `932px × 656px`다.

- 12-column grid
- gutter: 16px
- 페이지 외곽 padding: 좌우 64px
- 제목과 우상단 corner label 사이 최소 24px
- 마지막 콘텐츠와 footer rule 사이 최소 16px
- visual과 설명 영역 사이 최소 24px
- 카드 간 최소 12px / 주요 그룹 간 24–40px

### 권장 비율

| 페이지 유형 | 주 영역 | 보조 영역 |
|---|---:|---:|
| Cover | 58% copy | 42% evidence image |
| Problem workflow | 72% workflow | 28% evidence rail |
| Research / reframe | 55% evidence | 45% reframe |
| Decision | 30% options | 70% selected structure / artifact |
| Product evidence | 68% screen | 32% explanation |
| Impact | 60% hero metric | 40% supporting evidence / limitation |
| Lesson | 55% rollout / evidence | 45% lesson / next behavior |

## 4. 정보 밀도 제한

한 페이지에는 아래를 넘기지 않는다.

| 항목 | 상한 |
|---|---:|
| 핵심 주장 | 1개 |
| 주요 시각화 | 1개 |
| 보조 정보 그룹 | 2개 |
| 대표 지표 | 1개 |
| 보조 지표 | 2개 |
| Workflow node | 권장 4–7개 / 최대 8개 |
| Annotation | 최대 3개 |
| 일반 본문 | 영어 기준 약 45–70 words |
| node 설명 | 최대 2줄 |
| 선택지 | 최대 3개 / 각 2줄 |
| Takeaway | 1문장 |

다음은 금지한다.

- 동일한 카드 4개 이상 반복
- 제목 내용을 본문과 figure caption에서 반복
- 모든 수치를 같은 크기로 표현
- 장식 목적의 대형 아이콘
- 설명이 필요한 아이콘 단독 사용
- 한 페이지에서 Problem / Decision / Impact를 동시에 설명
- 기존 DOM을 보존하기 위해 정보 구조를 희생
- 측정하지 않은 중간 시점, 가상의 ramp, 추론된 성과

## 5. Typography

```css
:root {
  --font-body: "Alliance No.2", "Helvetica Neue", Inter, system-ui, sans-serif;
  --font-mono: "SFMono-Regular", Menlo, Consolas, monospace;
}
```

| 역할 | 크기 / 굵기 | 규칙 |
|---|---|---|
| Cover title | 48–56px / 400 | 최대 3줄 |
| Standard h1 | 30–34px / 400 | 최대 2줄 |
| Section eyebrow | 10–11px mono / 500 | uppercase / letter spacing .12–.16em |
| Subtitle | 16–18px / 400 | 최대 3줄 |
| Body | 13.5–15px / 400 | line-height 1.45–1.6 |
| Node role | 10–11px mono / 500 | uppercase 가능 |
| Node description | 11.5–12.5px / 400 | 최대 2줄 |
| Metric hero | 42–54px / 400 | tabular numerals |
| Supporting metric | 26–34px / 400 | 대표 지표보다 작게 |
| Caption / source | 9.5–11px mono / 400 | line-height 1.4–1.5 |
| Takeaway | 15–17px / 700 부분 강조 | 전체 문장 bold 금지 |

- 기본 weight는 400이다.
- bold는 conclusion의 핵심 구문과 일부 label에만 사용한다.
- title은 문자 수를 줄이지 못한 채 font-size를 줄여 해결하지 않는다.

## 6. 컬러

```css
:root {
  --paper: #faf9f5;
  --white: #ffffff;
  --ink: #282828;
  --gray: #6d7275;
  --faint: #9aa0a3;
  --line: #dcdcd8;
  --panel: #f4f5f2;
  --blue: #2b4fd7;
  --red: #c73a3a;
}
```

### 의미 규칙

- `blue`: 선택된 대안, To-Be path, 대표 impact에만 사용한다.
- 한 페이지에 blue **focal group**은 최대 1개다. 같은 의미의 node와 connector가 하나의 그룹을 이루는 것은 허용한다.
- `red`: manual / bottleneck / delay / failed / drop에만 사용한다.
- `gray`: 현재 상태, neutral system connection, supporting data.
- 색상만으로 상태를 전달하지 않는다. 반드시 label이나 line pattern을 병행한다.

## 7. Lucide icon system

### 7.1 저장

- 외부 CDN 금지
- `assets/icons/lucide/`에 선택 SVG를 저장
- build 또는 preprocessing 단계에서 `assets/icons/icons.svg` sprite 생성
- HTML에서는 `<use href="/assets/icons/icons.svg#user-round">` 방식 사용
- SVG 기본 stroke-width는 1.25
- 기본 크기 18–20px / 주요 system 22–24px / state 12–14px

### 7.2 Entity mapping

| 의미 | Lucide | 용도 |
|---|---|---|
| 개인 역할 | `UserRound` | Dealer / Operator / Seller / Buyer |
| 팀 | `UsersRound` | Sales / CS / Ops |
| 파트너 | `Handshake` | 외부 partner organization |
| 제품 / workspace | `PanelsTopLeft` | Portal / Partner Center / Admin |
| Database | `Database` | persistent record / source of truth |
| ERP / server | `ServerCog` | ERP / OMS / SAP / tax system |
| LLM | `BrainCircuit` | LLM이 분류·생성·판단하는 경우만 |
| Spreadsheet | `FileSpreadsheet` | Excel / CSV / workbook |
| Chat | `MessageSquare` | C2C chat / support channel |
| Email | `Mail` | email order / notice / relay |
| Phone | `Phone` | phone order / call handoff |
| Warehouse | `Warehouse` | storage / release point |
| Carrier | `Truck` | delivery company / transport actor |
| Parcel | `Package` | physical order unit |
| Storefront | `Store` | website / certified store |
| Buyer group | `UsersRound` | segment / buyer population |
| Order | `ShoppingCart` | placed order / checkout event |

### 7.3 Action mapping

| 의미 | Lucide |
|---|---|
| Observe | `Eye` |
| Map workflow | `Workflow` |
| Prototype | `Code2` |
| Deploy | `Rocket` |
| Measure | `ChartNoAxesCombined` |
| Search | `Search` |
| Crawl | `Bot` |
| Normalize | `ListFilter` |
| Publish | `Upload` |
| Validate | `CircleCheck` |
| Alert / failure detection | `TriangleAlert` |
| Synchronize | `RefreshCw` |
| API / code interface | `Braces` |
| Branch / dependency | `GitBranch` |
| Merge / mapping | `GitMerge` |
| Notification | `Bell` |
| Approval | `CircleCheck` |

### 7.4 State tokens

State는 독립 entity node로 만들지 않는다.

| State | 표현 |
|---|---|
| Manual | `Hand` 12px + red mono label `MANUAL` |
| Delay | `Clock3` + 실제 시간 |
| Bottleneck | red top bar 또는 red outline / 한 페이지 핵심 1곳 |
| Failed | `CircleX` 또는 끊긴 connector |
| Missing record | `Database` node + `NO RECORD` label |
| Automated | solid connector + `AUTO` label |
| Selected | blue focal group + `SELECTED` |
| Deferred | gray `Clock3` + `DEFERRED` |
| Rejected | gray line-through 또는 `CircleX` + `REJECTED` |
| Estimated | mono `ESTIMATED` label / observed와 분리 |

## 8. Workflow grammar

### 8.1 Node

```text
┌────────────────────────┐
│ [ICON] ROLE / SYSTEM   │
├────────────────────────┤
│ action or information  │
│ maximum two lines      │
├────────────────────────┤
│ MANUAL · 3.8 DAYS      │
└────────────────────────┘
```

- actor, system, data store를 동일한 모양으로 만들지 않는다.
- actor: white fill / outline
- system: light panel fill
- selected system: blue focal group
- database: cylinder icon은 Lucide icon으로만 표현하고 node shape는 시스템과 동일하게 유지 가능

### 8.2 Connector

- 모든 connector는 horizontal / vertical orthogonal path만 사용
- curve / diagonal / Bezier 금지
- stroke 1.25px
- system connection: gray solid
- human relay: red dotted
- missing information: broken line ending before target
- automated selected path: blue solid
- arrow marker는 공통 `#viz-arrow`
- line label은 connector 중앙 또는 8px 위에 배치

### 8.3 Boundary

필요한 경우 아래 boundary만 사용한다.

- organization boundary
- user / internal system boundary
- open B2C / certified B2B space boundary
- manual / automated boundary

단순 장식용 큰 박스는 금지한다.

## 9. Product screenshots

- 제품 화면은 실제 evidence로 사용한다.
- 1개 main image + 최대 2개 crop.
- Project cover에 한해서 장식적 overlap을 허용하되, 모든 핵심 UI가 판독 가능해야 한다.
- content page에서는 overlap 금지.
- figure는 `overflow:hidden`, 이미지 `width:100%; max-width:100%; object-fit:cover`.
- annotation은 부모 figure 내부 좌표만 사용.
- annotation 문구는 feature name이 아니라 제거한 문제를 표현한다.

좋음:

```text
Credit is checked before order submission.
```

나쁨:

```text
Credit check feature.
```

## 10. Data integrity

다음 수치를 정본으로 취급한다.

- ETA Seoul: 307 orders / $41.3K cumulative GMV
- Partner Center: 30 partners / 7-person delivery squad
- D2D: 1,600+ dealers / 3.8 days / cancellation 22% → 7% / items per order 6.3 → 11.7
- Partner adoption: 20 of 30 with recorded login activity in June 2026 / 88.8% sales coverage, not attribution
- Segment: 0% → 12.5% SMB revenue share / repurchase +89%
- Invoice: 33 → 0 manual requests / 165 hours removed monthly / +221% volume

- `12-person squad`, `286 orders`, `32 partners`, `2.8 units`를 사용하지 않는다.
- observed / estimated / coverage / attribution을 명시적으로 구분한다.

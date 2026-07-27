# Deprecated Redesign Document

Superseded by docs/portfolio-final-redesign-spec.md

# Page-by-Page HTML Redesign Specification

## 사용 방법

- `현재 화면` 번호는 업로드된 HTML을 찾기 위한 참고값이다.
- 실제 구현과 Claude 지시는 `Final ID`만 사용한다.
- 각 section은 아래 acceptance criteria가 모두 PASS여야 완료다.
- 페이지 추가·삭제로 순서가 바뀌어도 의미 ID는 바꾸지 않는다.

---

# Global Pages

## `#cover`

**현재 화면:** 01 Cover  
**페이지 유형:** Portfolio cover / outcome-led hero

### 현재 내용

- Jaehyun Han
- Product Portfolio · 2026
- `From field bottlenecks to deployed systems.`
- 30+ markets 설명
- `For Palantir · Deployment Strategist`
- 실제 제품 화면 없음

### 현재 이슈

1. headline은 좋지만 제품 증거가 없어 일반적인 텍스트 포트폴리오로 보인다.
2. `B2C / B2B2C / B2B`의 범위와 `field discovery → adoption`의 운영 범위가 보이지 않는다.
3. 포트폴리오 전체의 반복 패턴이 시각적으로 정의되지 않는다.

### Core claim

```text
From field bottlenecks to deployed systems.
```

### 유지

- 이름
- headline
- Palantir / Deployment Strategist target label
- 2026

### 교체 / 추가

Subtitle:

```text
Commerce systems across B2C, B2B2C, and B2B.
From field discovery to adoption.
```

Operating loop label:

```text
Find the break → build the system → make it stick.
```

### 삭제

- 현재의 generic `User discovery, workflow redesign...` 문장은 위 subtitle로 교체한다.
- 추가 biography나 경력 요약은 넣지 않는다.

### Required layout

- 58/42 split
- 왼쪽: 이름 / headline / subtitle / target role
- 오른쪽: 실제 제품 화면 1개를 크게 crop
- 이미지 후보 우선순위: Partner Center order workspace → D2D cart → ETA storefront
- 이미지 opacity를 낮추지 말고, grayscale 또는 saturation 70–80% 수준만 허용
- operating loop는 왼쪽 하단에 작은 mono line으로 배치
- footer 없이도 가능하나 다른 페이지와 동일한 page number system은 유지 가능

### Icon

- 사용하지 않는다.
- `→`는 텍스트 또는 공통 arrow glyph만 사용한다.

### Acceptance criteria

- headline이 3초 내 첫 정보로 읽힌다.
- 오른쪽 evidence image가 전체 면적의 35–42%를 차지한다.
- headline과 이미지가 경쟁하지 않는다.
- body copy는 subtitle 포함 35 words 이내다.
- 장식용 gradient / abstract blob / 3D illustration 없음.

---

## `#introduction`

**현재 화면:** 02 Introduction  
**페이지 유형:** Operating model / personal thesis

### 현재 내용

- 자기소개 2문단
- Bunjang / LG / F&F / BALAAN / ETA의 경력 타임라인
- Palantir 지원 이유

### 현재 이슈

1. 자기소개, 경력, 지원동기, side project가 동등하게 경쟁한다.
2. PM으로서 반복 가능한 운영 방식이 시각적으로 보이지 않는다.
3. 화면 대부분이 텍스트라 뒤의 workflow-heavy 프로젝트와 연결되지 않는다.

### Core claim

```text
I work where users, workflows, and systems break apart.
```

### 유지

- B2C / B2B2C / B2B across enterprise, marketplace, solo commerce라는 범위
- enterprise data legibility가 다음 단계의 관심사라는 한 문장
- `3 consecutive A ratings, 2023–2025`는 작은 evidence label로 유지 가능

### 삭제

- 전체 career timeline
- 회사별 날짜 / 역할 / 상세 설명
- ETA side-track timeline

### Required content

Left intro copy, maximum 70 words:

```text
I build commerce systems where users, workflows, and data stop lining up.
Across enterprise, marketplace, and solo commerce, my work follows the same pattern:
observe the field, map the decision, prototype the workflow, deploy with users, and measure adoption.
```

오른쪽 또는 중앙 운영 모델:

```text
Observe the field
→ Map decisions
→ Prototype workflow
→ Deploy with users
→ Measure adoption
```

대표 지표:

```text
30+ markets
1,600+ dealers
90% automated
```

### Required layout

- 제목 아래 전체 폭 5-step horizontal flow
- flow 아래 3개 metric strip
- intro copy는 좌측 하단 40–45%
- right bottom에는 Palantir rationale 한 문장과 A-rating label
- 타임라인 없음

### Icons

| Step | Icon |
|---|---|
| Observe | `Eye` |
| Map | `Workflow` |
| Prototype | `Code2` |
| Deploy | `Rocket` |
| Measure | `ChartNoAxesCombined` |

- 아이콘은 18px, label 위가 아니라 label 왼쪽에 배치한다.
- flow connector는 gray solid orthogonal.

### Acceptance criteria

- 첫 시선은 title, 두 번째는 5-step model, 세 번째는 metrics다.
- 5개 step이 한 줄에서 겹치지 않는다.
- career company name은 페이지에 2개 이상 노출하지 않는다.
- 본문 70 words 이내.
- metric 3개는 같은 크기지만 blue focal group은 `90% automated` 또는 하나만 선택한다.

---

## Current `#index` page

**현재 화면:** 03 Index

### Final action

**삭제한다.**

### 이유

- 프로젝트 cover가 이미 section navigation 역할을 한다.
- 페이지 번호를 고정하지 않는 정책과 충돌한다.
- 면접관에게 새로운 판단 근거를 제공하지 않는다.
- 웹 navigation은 keyboard / thumbnail / side nav로 해결하고, PDF는 순차 흐름을 사용한다.

### Implementation

- 해당 `<section>` 삭제
- 다른 페이지의 `p.04–08` 같은 page-range 표기 삭제
- page number는 DOM order로 다시 계산하거나 정적 번호를 일괄 갱신

---

# D2D / B2B Dealer Platform

## `#d2d-cover`

**현재 화면:** 04 D2D cover  
**페이지 유형:** Project section cover

### Core claim

```text
From manual order sheets to a 24/7 dealer commerce platform.
```

### 유지

- dark section cover
- `LG Electronics · 2024.07–2025.06`
- 1,600+ dealers
- Germany production captures
- Field discovery / ERP-OMS / B2B adoption labels

### 수정

- description은 2줄 이내로 축소한다.
- `I turned an HQ communication brief...`는 유지하되 punctuation과 line break만 정리한다.
- 겹친 이미지가 UI를 가리는 경우 1 main + 1 crop으로 재정렬한다.
- `1`, `2` annotation 번호는 이미지 내 실제 evidence 설명과 연결한다.
- role label `Product / Project Manager`와 시장 범위 `Germany MVP → 5 markets`를 하단 meta로 추가한다.

### Layout

- 현재 dark cover 체계 유지
- 44/56 split
- 왼쪽 copy / 오른쪽 production evidence
- 별도 metric cards 없음

### Icons

- 사용하지 않는다.

### Acceptance criteria

- 다음 페이지가 문제 정의임을 예상할 수 있다.
- screenshot의 핵심 UI가 100% figure 안에 들어온다.
- title 최대 3줄 / description 최대 35 words.

---

## `#d2d-problem`

**현재 화면:** 05 D2D Framing  
**페이지 유형:** Problem / As-Is workflow

### Current issue

- stakeholder lanes, workflow, HQ context, initial hypothesis, remaining question이 한 페이지에서 경쟁한다.
- 핵심 bottleneck인 LG Sales manual order desk가 다른 설명과 같은 크기로 보인다.
- 제목이 `brief`를 말하고 있어 실제 문제를 바로 설명하지 않는다.

### Core claim

```text
Orders arrived by email. Stock, price, and credit lived somewhere else.
```

### Keep

- 1,600+ dealers
- fewer than 10 subsidiary staff
- email / phone order
- sheet built by hand
- 3.8 days to ERP
- 22% cancellation
- ERP / warehouse
- HQ had no view of local workflow

### Remove

- `Initial hypothesis` card
- `What remained unknown` card
- long legend sentence
- year-over-year channel sales statement unless evidence source is explicitly available
- `8.9 days lead time`는 이 페이지의 핵심이 아니므로 제거하거나 source footnote로 축소

### Required workflow

```text
Dealer
→ Email / Phone
→ LG Sales Order Desk [MANUAL · BOTTLENECK · 3.8 DAYS]
→ Spreadsheet
→ ERP
→ Warehouse
```

HQ는 workflow 위 또는 아래의 별도 organization boundary에 배치하고, local order path와 끊긴 `NO VISIBILITY` connector 하나만 둔다.

### Evidence rail

```text
1,600+ eligible dealers
3.8 days · order to ERP
22% cancelled
```

`<10 staff`는 LG Sales node 내부 supporting label로 배치한다.

### Icons

| Node | Icon |
|---|---|
| Dealer | `UserRound` |
| Email | `Mail` |
| Phone | `Phone` |
| LG Sales | `UserRound` + state `Hand` |
| Spreadsheet | `FileSpreadsheet` |
| ERP | `ServerCog` |
| Warehouse | `Warehouse` |
| HQ | `UsersRound` |
| Delay | `Clock3` |

### Connector

- Dealer → Email/Phone: gray solid
- Email/Phone → LG Sales: red dotted `MANUAL HANDOFF`
- LG Sales → Spreadsheet → ERP: red dotted
- ERP → Warehouse: gray solid
- workflow → HQ: broken gray line labelled `NO VISIBILITY`

### Layout

- workflow 72% / evidence rail 28%
- evidence rail은 카드 3개가 아니라 하나의 vertical ruled column
- red focal point는 LG Sales node 하나

### Acceptance criteria

- maximum 7 primary nodes
- red bottleneck exactly one
- title만 읽어도 problem이 이해된다.
- initial hypothesis / question text 없음.
- body explanation 45 words 이내.
- 모든 connector orthogonal.

---

## `#d2d-research`

**현재 화면:** 06 D2D Research and reframe  
**페이지 유형:** Field evidence / problem reframe

### Current issue

- research evidence, As-Is, To-Be, removed manual steps, selected/rejected solution이 한 페이지에 들어 있다.
- decision이 research의 결론처럼 섞여 있어 PM 판단 과정이 보이지 않는다.

### Core claim

```text
Dealers needed an ordering system, not another channel.
```

### Keep

Method strip:

```text
12 dealer visits · dealer survey n=5 · 1 subsidiary order desk
```

Dealer evidence:

- no stock, contract price or credit at order time
- no ordering outside business hours
- 53% were sub-$100K accounts the sales team could not cover

Order desk evidence:

- fewer than 10 staff supported 1,600+ dealers
- every order re-keyed twice
- product sheets and notices went stale in email

### Remove / move

- To-Be workflow → `#d2d-decision`
- `SELECTED · SELF-SERVICE ORDERING` → `#d2d-decision`
- `REJECTED · A COMMUNICATION CHANNEL` → `#d2d-decision`
- warehouse and lead-time result → impact / solution evidence

### Required layout

- 상단: small methodology strip
- 좌측 55%: two evidence columns `Dealers` / `Order desk`
- 우측 45%: reframe

Reframe:

```text
Initial brief
Improve dealer–subsidiary communication

↓ field evidence

Reframed problem
Dealers had no system to order from.
```

- initial brief는 gray, reframed problem은 ink with a single blue underline or blue side bar
- evidence는 최대 5 statements

### Icons

- Dealer evidence: `UserRound`
- Order desk: `UserRound`
- Field research: `Eye`
- Spreadsheet: `FileSpreadsheet` only where relevant
- no solution/system icon

### Acceptance criteria

- solution architecture 없음.
- selected / rejected label 없음.
- methodology is visible but not a hero metric.
- five evidence statements maximum.
- reframe is the single blue focal group.

---

## `#d2d-decision`

**현재 화면:** 신규  
**페이지 유형:** Decision / evidence artifact

### Core claim

```text
We chose to digitize order entry, deferring full ERP unification.
```

### Decision options

#### Selected

```text
Dealer portal + live ERP credit, stock and price mapping
Value: High
Time to impact: Fast
Reason: required data already existed
```

#### Deferred

```text
Full ERP / OMS / SAP unification
Value: High
Time to impact: Slow
Constraint: multi-year cross-organization dependency and no direct SQL access
```

#### Rejected

```text
New communication channel
Value: Low
Reason: both manual order steps would remain
```

### Required product evidence

- actual dealer cart screenshot
- annotation maximum 3

Recommended annotations:

```text
1. Credit is checked before order submission.
2. Contract price and stock are visible at ordering time.
3. CBM feedback changes the order before warehouse release.
```

### Layout

- top 26–30%: 3 decision options in one horizontal comparison, selected centered or right
- bottom 70–74%: screenshot 65% / decision rationale 35%
- selected option and screenshot annotation group form one blue focal group
- deferred / rejected are gray, not red; red is reserved for operational failure

### Icons

| Meaning | Icon |
|---|---|
| Selected | `CircleCheck` |
| Deferred | `Clock3` |
| Rejected | `CircleX` |
| Portal | `PanelsTopLeft` |
| ERP | `ServerCog` |
| Integration dependency | `GitBranch` |

### Acceptance criteria

- viewer can name what was selected and what was not selected within 5 seconds.
- each option description maximum 2 lines plus metadata.
- screenshot is fully contained and readable.
- no invented cost or duration numbers.
- no Before/After impact metrics on this page.

---

## `#d2d-impact`

**현재 화면:** 07 D2D Impact  
**페이지 유형:** Quantified impact

### Current issue

- current page prioritizes 39% monthly active dealers and 6.3→11.7 items.
- cancellation 22→7, truck fill and logistics outcome from content truth are missing.
- product screenshot competes with the metrics.

### Core claim

```text
Cancellations fell to a third. Order size rose.
```

### Primary metrics

```text
Cancellation rate 22% → 7%
Items per order 6.3 → 11.7 (+86%)
```

### Supporting evidence

```text
Truck fill 42% → 71%
Logistics cost −23%
LG Innovation Award 2025 · final 2nd
```

Supporting evidence는 작은 source strip로 표시한다. 세 항목을 같은 크기의 카드로 만들지 않는다.

### Move

- `39% monthly active dealers` → `#d2d-lesson`

### Layout

- two-measure slopegraph or two horizontal dumbbells
- cancellation is blue focal metric
- items per order is ink
- supporting metrics in one small bottom line
- product screenshot 제거 또는 20% 이하의 evidence crop으로 축소

### Icons

- 사용하지 않는다.
- metric arrows and marks are chart primitives, not icons.

### Acceptance criteria

- no more than 2 primary charts.
- before/after values and units visible.
- no timeline or adoption lesson.
- source / observation period displayed.
- Award is secondary and does not compete with results.

---

## `#d2d-lesson`

**현재 화면:** 08 D2D Rollout  
**페이지 유형:** Rollout / low-ego lesson

### Current issue

- scaling pattern, what scaled, what did not, next changes, award가 모두 존재한다.
- 제목이 reusable software를 부정하지만 adoption failure가 가장 빠르게 읽히지 않는다.

### Core claim

```text
The software scaled. Adoption did not.
```

### Keep

- Germany MVP → five markets, 2024.07–2025.06
- monthly active dealers 39% observed
- about 50% still using spreadsheets after six months, explicitly `ESTIMATED`
- what changed next:
  1. enablement moved into product design
  2. onboarding became one approval
  3. adoption tracked as activity, not go-live count

### Remove / move

- Award → `#d2d-impact`
- long `What scaled / What did not` prose
- generic repeat of ERP connection

### Layout

- left 55% rollout timeline across five markets
- right 45% adoption gap
- right hero: `39% monthly active dealers · observed`
- estimated spreadsheet persistence is separate dashed callout
- bottom: `What I changed next` three short numbered statements

### Icons

- rollout / deploy: `Rocket`
- markets: `Store` or text country labels; flag emoji 금지
- active dealers: `UsersRound`
- estimated persistence: `FileSpreadsheet` + `ESTIMATED`

### Acceptance criteria

- observed and estimated values cannot be confused.
- lesson is visible without reading the timeline.
- no more than 3 next-behavior statements.
- Award absent.

---

# Bunjang Partner Platform

## `#partner-cover`

**현재 화면:** 09 Partner cover

### Core claim

```text
From fragmented partner operations to a shared workspace.
```

### Keep

- dark section cover
- production captures
- Bunjang · 2026.01–Present
- shared order workspace / self-service / automated onboarding

### Correct

- `30+ partners` → `30 cross-border partners` unless a newer verified count is supplied.
- role label: Product Manager
- delivery team: 7-person squad, not 12.

### Layout

- existing 44/56 dark cover pattern
- maximum 2 screenshots
- description maximum 30 words

### Icons

- none

### Acceptance criteria

- current phase and role visible.
- no unverified `30+`.
- production image is readable.

---

## `#partner-problem`

**현재 화면:** 10 Partner Ecosystem  
**페이지 유형:** Multi-actor workflow / bottleneck

### Current issue

- current SVG expresses the ecosystem but the six operating channels read as a list rather than a workflow.
- the partner is the manual relay for both customer and internal requests, but this bottleneck is not visually dominant enough.
- no shared order record / source of truth is not explicitly represented as a missing system.

### Core claim

```text
Excel, C2C chat, and missing records blocked partner scale.
```

### Required actor order

```text
Overseas buyer ↔ Partner ↔ Bunjang sales / operations ↔ Seller
```

- buyer ↔ partner: purchase request and buyer update
- partner ↔ seller: product inquiry and fulfillment confirmation
- partner ↔ Bunjang: order list / CS / notice / settlement / API / account permissions

### Workflow structure

Partner node is the single red focal bottleneck. Six internal tools are shown as small attached chips inside or below the partner–Bunjang boundary, not six equal primary nodes.

```text
C2C Chat · Excel Order List · Email Notice
Settlement File · API Request · Direct Sales Contact
```

Missing system node:

```text
NO SHARED ORDER RECORD
No search · no assignment · no settlement source
```

### Keep

- workflow audit 2025.12
- external buyer / partner / seller / Bunjang roles
- manual relay language

### Icons

| Node / tool | Icon |
|---|---|
| Overseas buyer | `UserRound` |
| Partner | `Handshake` + state `Hand` |
| Bunjang sales / ops | `UsersRound` |
| Seller | `UserRound` |
| Chat | `MessageSquare` |
| Excel | `FileSpreadsheet` |
| Email | `Mail` |
| Settlement | `FileSpreadsheet` |
| API request | `Braces` |
| Direct contact | `Phone` |
| Missing record | `Database` + `NO RECORD` |

### Connector

- all partner relays red dotted
- buyer / seller external actions gray solid up to partner
- missing record shown as a broken destination, not as a functioning DB

### Layout

- 4 actor workflow 75%
- evidence / missing record rail 25%
- no separate card grid below

### Acceptance criteria

- one red focal bottleneck: Partner.
- four actors visible in one scan.
- tool list is secondary, not six primary nodes.
- no more than 8 primary nodes.
- title does not use `C2B2C` jargon without explanation.

---

## `#partner-decision`

**현재 화면:** 11 Partner Before and After  
**페이지 유형:** Decision / platform architecture

### Current issue

- current page jumps from Before metrics to After platform without showing the rejected tactical patch.
- `12-person delivery squad` is incorrect.
- platform architecture is strong but PM decision is hidden.

### Core claim

```text
We rejected a tactical chat patch and built a dedicated partner operating platform.
```

### Decision comparison

#### Rejected

```text
Patch Excel workflows into the C2C chat backend
Fast, but no shared record, settlement model or extensible permission layer
```

#### Selected

```text
Build a dedicated partner operating platform
Shared data model, role-based access, settlement, onboarding and future integrations
```

### Evidence strip

```text
16,500-line working React prototype
Aligned a 7-person delivery squad: 6 engineers + 1 product designer
```

### Selected architecture

```text
Shared order record
Order operations
Partner self-service
Automated onboarding
```

Each module has maximum one-line explanation.

### Move / reduce

- `4 operational surfaces / 3 re-entries / 0 shared records`는 상단 작은 Before evidence strip로 유지 가능.
- long bullet list of chat / email / workbook 없음.
- production screen annotations are reserved for `#partner-impact`.

### Icons

| Meaning | Icon |
|---|---|
| Rejected | `CircleX` |
| Selected | `CircleCheck` |
| Chat patch | `MessageSquare` + `FileSpreadsheet` |
| Platform | `PanelsTopLeft` |
| Shared record | `Database` |
| Operations | `Workflow` |
| Self-service / API | `Braces` |
| Onboarding | `UserRound` + `CircleCheck` |
| Prototype | `Code2` |

### Layout

- top 28%: rejected vs selected
- bottom 58%: selected platform architecture
- bottom 14%: prototype / squad evidence and takeaway
- selected architecture is one blue focal group

### Acceptance criteria

- viewer can say what was rejected and why.
- `7-person` only; `12-person` absent.
- selected architecture maximum 4 modules.
- no more than 2 lines per option.
- no invented delivery speed or ROI.

---

## `#partner-impact`

**현재 화면:** 12 Partner Adoption  
**페이지 유형:** Product evidence / adoption impact

### Current issue

- product scope, 30 onboarded, 20 active, 88.8% coverage, unresolved items are equal in hierarchy.
- content truth metric `5 manual steps → 3` is missing.
- title describes constraints more strongly than the achieved adoption.

### Core claim

```text
Onboarding moved the platform, not chat, toward the center of operations.
```

### Primary outcome

```text
30 partners onboarded
20 of 30 recorded login activity in June 2026
```

### Supporting outcome

```text
Representative manual workflow: 5 steps → 3 steps
```

### Coverage evidence

```text
The 20 active partners represented 88.8% of June outbound sales.
Coverage, not attribution.
```

- KRW 763M은 source에서 검증 가능한 경우에만 secondary caption으로 유지.

### Product evidence

- main: order workspace / status queues
- crop: self-issued API key or onboarding
- annotation maximum 2

Recommended annotation:

```text
1. Fourteen order states become searchable work queues.
2. The partner issues its own API key instead of emailing sales.
```

### Unresolved

페이지 하단에 최대 한 줄:

```text
Next: staging webhook access and automated virtual-account issuance.
```

### Icons

- product screenshot에는 추가 icon overlay 금지
- metrics can use no icons
- unresolved `Next` may use `ArrowRight`, maximum one

### Layout

- left 62–68% product evidence
- right 32–38% adoption metrics
- right hero: 30 onboarded / 20 active
- 5→3 and 88.8% are supporting blocks, smaller

### Acceptance criteria

- 30 onboarded and 20 active are visually distinct but connected.
- 88.8% includes `coverage, not attribution` on the same visual block.
- 5→3 appears.
- product image contained; max two screenshots.
- unresolved section no more than 18 words.

---

# ETA Seoul

## `#eta-cover`

**현재 화면:** 13 ETA cover

### Core claim

```text
One operator, thirty brands, every recurring task a system.
```

### Keep

- 2024 manual / 2025 developer-assisted / 2026 systemized progression
- 30 brands
- 307 orders
- $41.3K cumulative GMV
- Shopify production captures

### Correct

- `$41K` → `$41.3K`
- `307 orders` 유지
- `Every recurring task a system` headline capitalization 통일

### Layout

- dark project cover
- left: headline / 3-phase progression / meta
- right: one main storefront image + one small checkout crop
- 307 / $41.3K are a single compact evidence line, not four equal cards

### Icons

- none

### Acceptance criteria

- 307 and $41.3K exact.
- maximum 2 images.
- phase text maximum one line each.

---

## `#eta-operating-loop`

**현재 화면:** 14 ETA workflow  
**페이지 유형:** Automated operating loop / compact case

### Current issue

- current 3-column timeline explains technology phases but not the current closed operating system.
- `Airflow + LLM` is visually conflated with total automation.
- delivery API is a separate branch but presented as a third equivalent catalog phase.

### Core claim

```text
Operating cross-border commerce as a solo LLM-driven loop.
```

### Current operating loop

Use a rectangular closed loop with orthogonal connectors:

```text
Source discovery
→ Crawl
→ Normalize
→ Publish to Shopify
→ Validate feed / content
→ Detect failure
→ LLM correction
→ Republish
↺
```

Delivery branch:

```text
Shopify order
→ Delivery API
→ Shipment booking
→ Tracking sync
```

### Metrics

```text
90% of recurring operations automated
120 → 20 min per catalog batch
−85% manual time for the Airflow + LLM catalog workflow
307 orders · $41.3K cumulative GMV
```

- `90% automated` is operating coverage.
- `−85%` is catalog-batch manual-time reduction.
- 두 지표를 같은 의미로 표현하지 않는다.

### Phase evidence

Top small strip:

```text
2024 · manual
2025 · scheduled catalog workflow
2026 · delivery connected
```

### Icons

| Step | Icon |
|---|---|
| Source discovery | `Search` |
| Crawl | `Bot` |
| Normalize | `ListFilter` |
| Publish | `Upload` |
| Shopify | `ShoppingBag` |
| Validate | `CircleCheck` |
| Failure | `TriangleAlert` |
| LLM correction | `BrainCircuit` |
| Republish / sync | `RefreshCw` |
| Order | `ShoppingCart` |
| Delivery | `Truck` |
| Scheduler | `Clock3` or `TimerReset` |

### Layout

- top 15% phase strip
- left / center 65% closed loop
- right 35% delivery branch and metrics
- central hero may be `90% automated`
- no curved circular arrows; use rectangular loop

### Footnote

`146K sessions`를 화면에 넣는 경우에만:

```text
*includes bot-inflated direct traffic; not used as a growth headline
```

세션 수치를 사용하지 않으면 footnote도 제거한다.

### Acceptance criteria

- closed loop has a visible return path.
- `BrainCircuit` appears only at LLM correction node.
- ordinary scheduler / API nodes do not use LLM icon.
- 90% and −85% definitions shown.
- 307 / $41.3K exact.

---
# SMB Segment Multi-Store

## `#segment-cover`

**현재 화면:** 15 Project 03 banner  
**페이지 유형:** Project section cover

### Core claim

```text
Commerce infrastructure for a new SMB segment.
```

### Keep

- LG Electronics · 2024.03–2025.02
- 17 markets
- shared core / local extensions
- 12.5% storefront revenue
- B2B2C / segmentation / local extensions

### Modify

- `Selected deployment 04` label is acceptable, but project number와 current page number를 연결하지 않는다.
- role과 scope를 한 줄 meta로 추가한다.
- architecture image or storefront image는 하나의 main evidence로만 사용한다.
- `Observed / Designed / Deployed / Result` four-item stack이 card처럼 보이면 한 줄 progression으로 축소한다.

### Icons

- none

### Acceptance criteria

- 17 markets and 12.5% are visible but title보다 크지 않다.
- no detailed architecture; next pages에 남긴다.
- description maximum 35 words.

---

## `#segment-problem`

**현재 화면:** 16 Segment Problem  
**페이지 유형:** Segment funnel / structural problem

### Current issue

- one SVG contains four buyer types, the whole funnel, four failure points, evidence numbers, bottom explanation cards, required change.
- title emphasizes four buyers but not the averaged funnel and zero-revenue segment.
- the four bottom explanations repeat the diagram.

### Core claim

```text
An averaged storefront funnel hid an SMB segment at 0% revenue.
```

### Keep

- four buyer groups were pushed through one storefront and one promotion
- 0% SMB revenue baseline
- 65.3% exit while browsing
- retail partner channel conflict
- manual tax invoice / refund workflow
- source: internal commerce KPI and market requirement records, 2024

### Remove / reduce

- four full bottom cards
- repeated long labels for each failure
- `What failed, at each stage above` heading
- unverified interview / workshop counts
- `Required change` solution details → `#segment-decision`

### Required visual

Left-side buyer group tags:

```text
Consumer
SMB
Public sector
School / education
```

All enter the same path:

```text
Mass traffic
→ One global storefront
→ One retail promotion
→ Product / checkout
→ Manual invoice / tax-refund request
→ Exit
```

The central `One global storefront / one promotion` node is the single red structural bottleneck.

### Evidence rail

```text
0% SMB revenue
65.3% browsing exit
~4 manual invoice requests / day / subsidiary
```

`≤0.9% conversion`은 source가 분명한 경우 작은 annotation으로만 유지한다.

### Icons

| Meaning | Icon |
|---|---|
| Buyer groups | `UsersRound` |
| Storefront | `Store` |
| Promotion | `BadgePercent` |
| Product / order | `ShoppingCart` |
| Invoice request | `FilePenLine` + `MANUAL` |
| Exit | `LogOut` |
| Retail partner conflict | `Handshake` + `CircleX` state |

### Connector

- all buyer groups converge through gray lines into one red bottleneck node
- manual invoice connector red dotted
- exit is broken red connector

### Layout

- workflow 72% / evidence rail 28%
- one bottom takeaway only:

```text
Four failures, one cause: every buyer type was pushed down the same retail path.
```

### Acceptance criteria

- 0% SMB revenue visible in first scan.
- no solution architecture.
- red focal group exactly one.
- bottom card grid removed.
- source label visible.

---

## `#segment-decision`

**현재 화면:** 17 Segment Decision  
**페이지 유형:** Architecture decision

### Current issue

- options, shared core, plugin descriptions, 17 stores, guardrail, why it held, takeaway all compete.
- option copy and architecture figure repeat one another.
- blue is spread across multiple independent elements.

### Core claim

```text
Build the store once. Plug in only what the law changes.
```

### Decision options

#### A · Reject

```text
Seventeen separate sites
Local fit, but every fix ships seventeen times.
```

#### B · Reject

```text
One rigid global site
Efficient core, but cannot absorb local tax and certification law.
```

#### C · Select

```text
Shared core + local plugins
One build, with controlled extension points for legal differences.
```

Each option must fit in two lines plus verdict.

### Selected architecture

```text
Shared commerce core
Catalog · cart · account · order · base pricing

→ SMB certification plugin
→ Tax / invoice plugin
→ Bulk-order plugin

→ Certified market storefronts
Brazil · Canada · EU · … 17 markets
```

Guardrail:

```text
Global discount cap + live error alert
```

The guardrail is a horizontal band across all plugins, not a fourth plugin.

### Icons

| Meaning | Icon |
|---|---|
| Shared core | `Database` or `PanelsTopLeft` |
| Certification | `BadgeCheck` |
| Tax / invoice | `ReceiptText` |
| Bulk order | `PackagePlus` |
| Storefront | `Store` |
| Guardrail | `ShieldCheck` |
| Rejected | `CircleX` |
| Selected | `CircleCheck` |

### Layout

- top 25–28% option comparison
- bottom 60–65% architecture
- bottom takeaway 10%
- selected option and architecture are one blue focal group
- rejected options gray

### Remove

- repeated figure-caption explanation
- paragraph `Why it held` → takeaway one sentence로 통합
- country-level detailed tax examples from main diagram; use caption if needed

### Takeaway

```text
Only three things genuinely differed by market. Everything else was one build.
```

### Acceptance criteria

- options readable within 5 seconds.
- maximum 4 architecture levels: core / plugins / stores / guardrail.
- no curved or diagonal connector.
- global guardrail applies visually to all plugins.
- no workshop claims.

---

## `#segment-impact`

**현재 화면:** 18 Segment Impact  
**페이지 유형:** Revenue impact / secondary outcomes

### Current issue

- revenue composition, CVR, repurchase, refund time, SKU reduction, price error, held/guardrail/next cards, takeaway coexist.
- strong evidence is present but hierarchy is diluted.

### Core claim

```text
SMB segment reached 12.5% share. Repurchase rate rose by 89%.
```

### Primary visual

Use only two measured points:

```text
Before launch: SMB 0% / B2C 100%
Q4 2024: SMB 12.5% / B2C 87.5%
```

Recommended chart: two 100% stacked horizontal bars or one Before/After share visual. No intermediate quarter.

### Supporting metrics

```text
CVR vs B2C storefront: +2.5%p
Repurchase vs B2C: +89%
```

Optional secondary footnote, not card:

```text
Refund processing 2h → 30m
Price errors 8.2% → 2.4%
```

SKU count −60%는 impact가 너무 많아지므로 appendix 또는 source note로 이동한다.

### Remove

- `Held / Guardrail / Next` three-card row
- illustrative ramp / interpolated quarters
- `Next p.19` navigation statement
- repeated figure caption

### Takeaway

```text
Segmentation was an architecture decision, not a marketing tactic.
```

### Icons

- none

### Layout

- left 62% primary share visual
- right 38% two supporting metrics and takeaway
- source at bottom
- 12.5% is the single blue focal metric

### Acceptance criteria

- only measured points displayed.
- 12.5% and +89% distinguishable as different measures.
- maximum 2 supporting metrics in main body.
- no claim that pricing `never leaked`.
- source and Q4 2024 visible.

---

# Invoice Automation

## `#invoice-cover`

**현재 화면:** 19 Invoice cover  
**페이지 유형:** Compact deployment cover

### Core claim

```text
One order record, three tax invoice paths.
```

### Keep

- LG Electronics · 2025.06–2025.08
- 30+ markets
- system lane visual
- order data / local tax routing / customer PDF

### Modify

- hero result: `165 hours removed monthly`
- supporting meta: `33 → 0 manual requests`
- `+221% volume` is secondary and moves to detail page if cover becomes dense
- description maximum two lines

### Icons

- none on cover

### Acceptance criteria

- title and 165 hours are the only major text groups.
- technical diagram remains abstract and does not require reading tiny labels.
- 30+ markets visible as scope, not hero result.

---

## `#invoice-automation`

**현재 화면:** 20 Invoice data flow  
**페이지 유형:** Technical workflow / impact

### Current issue

- detailed ERP / middleware / API / OMS diagram is technically strong but dense.
- `~21 MD` is not universally legible and does not match the preferred 165-hour business measure.
- PM work of aligning requirements and field dictionary is reduced to one sentence.

### Core claim

```text
A shared field dictionary made local invoice systems automatable.
```

Subtitle:

```text
A send-only table and daily batch replaced Order-ID pulls.
```

### Required PM workflow

```text
Requirements
→ Field dictionary
→ ERP–OMS mapping
→ E2E deployment
```

Descriptions:

1. `Collect mandatory market fields`
2. `Shared core + local extensions`
3. `Connect the broken structures`
4. `ERP → tax system → invoice`

### Required technical evidence

Simplify current data flow to:

```text
LG ERP
→ Send-only S table
→ Middleware / API gateway
→ OMS invoice DB
→ Local invoice system / customer PDF
```

As-Is is one small crossed-out path:

```text
Order-ID pull → oversized master-table response
```

### Metrics

```text
165 hours removed monthly
33 → 0 manual requests / month
+221% invoice volume absorbed
```

- `~21 MD` 삭제
- `12 countries`는 +221% metric의 measurement scope로 붙인다.

### Icons

| Step / system | Icon |
|---|---|
| Requirements | `ClipboardList` |
| Field dictionary | `TableProperties` |
| ERP | `ServerCog` |
| Mapping | `GitMerge` |
| API | `Braces` |
| Invoice DB | `Database` |
| Tax system | `Landmark` |
| Invoice output | `FileCheck2` |

### Layout

- top 18% title / subtitle
- left 62% simplified technical data flow
- right 38% PM workflow and metrics
- 165 hours is blue focal metric
- gray = as-is / blue = to-be, with labels, not color only

### Source

```text
internal ops ticket log · implementation records, 2025
```

### Acceptance criteria

- technical nodes maximum 6.
- PM 4-step workflow visible without reading the technical diagram.
- `165 hours`, `33→0`, `+221%` units and scopes visible.
- `~21 MD` absent.
- no claims about tax-team interviews or verified-per-market sign-off unless separately proven.

---

# Cross-page content checks

## D2D narrative

```text
Cover
→ manual order path
→ field research changed the problem
→ portal selected / ERP unification deferred
→ cancellations and order size improved
→ software scaled but adoption lagged
```

## Partner narrative

```text
Cover
→ partner as manual relay
→ tactical patch rejected / platform selected
→ onboarded, active, and workflow-step evidence
```

## ETA narrative

```text
Cover
→ current closed operating loop
```

## Segment narrative

```text
Cover
→ averaged funnel hid the segment
→ shared core + local plugins selected
→ 0% → 12.5% and +89%
```

## Invoice narrative

```text
Cover
→ field dictionary and send-only table enabled automation
```

If titles alone do not tell these five stories in sequence, the implementation is not complete.

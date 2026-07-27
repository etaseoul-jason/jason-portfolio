---
name: portfolio-production-design-guide
description: 포트폴리오의 실물 1060x750px 가로 고정 데크 구현을 위한 세부 디자인 토큰, 컬러 규칙, SVG 문법, 이미지 크롭 기법 가이드라인
type: reference
tags: [palantir, portfolio, design-system, font-token, padding, svg-grammar, validation]
---

# [최종본] Portfolio Production & Design Guide (pp 가이드)
## Complete CSS Layout, Visual Grammar & Image-Fitting Specifications

> **목적**: 이 문서는 포트폴리오를 웹 브라우저 및 A4 가로 인쇄물(PDF)로 최종 퍼블리싱할 때 거치는 **디자인 토큰, 세부 여백, SVG 직각 화살표 및 롤 토큰 드로잉 공식, 이미지 컨테이너 가두기, 그리고 최종 출고 자가검수 체크리스트**까지 정의한 최종 디자인 마스터 가이드라인입니다.

---

# 1. 📐 하드웨어 레이아웃 규격 (Canvas & Viewport)

포트폴리오의 규격은 웹 브라우저 반응형 크기에 따라 흘러넘치거나 레이아웃이 변하지 않도록 **완전 가로 고정형**으로 설계합니다.

- **표준 `.page` 요소의 가로세로 규격**: **`1060px × 750px`**로 강제 고정합니다.
  - 이 비율은 **`1.413`**으로, 표준 A4 가로 용지 비율인 **`1.414`**와 거의 완벽하게 일치합니다.
  - 이 캔버스는 **A4 가로 출력 비율을 우선**합니다. 16:9 화면 비율과는 다르므로, 웹에서는 고정 캔버스를 중앙 정렬하고 PDF 출력은 별도의 `@page` 규칙으로 제어합니다.
- **표준 페이지 Padding**: `54px 64px 40px` (상/좌우/하)
- **원페이저(`.one-pager`) 페이지 Padding**: `34px 64px 24px`
- **단일 텍스트 가로 폭 (Content Max-Width)**: 본문 영역은 가독성과 시선 분산을 최소화하기 위해 최대 가로 폭 `820px` 수준으로 중앙에 설계합니다.

---


# 2. 소스 관리 및 배포 구조 (GitHub + Vercel)

포트폴리오의 수정 가능한 원본은 **GitHub 저장소를 단일 소스 오브 트루스**로 관리하고, Vercel은 해당 저장소를 연결해 배포합니다. Claude Artifact에서 추출한 런타임 해제형 번들 HTML은 최종 소스로 사용하지 않습니다.

## 2.1 권장 저장소 구조
```text
portfolio/
├── index.html
├── styles/
│   ├── tokens.css
│   ├── layout.css
│   └── print.css
├── scripts/
│   └── deck.js
├── assets/
│   ├── images/
│   └── icons/lucide/
├── content/
│   ├── cv-to-portfolio-content-map.md
│   └── portfolio-production-design-guide.md
└── README.md
```

## 2.2 운영 원칙
- `main`: 검수 완료 후 실제 포트폴리오 URL에 배포되는 프로덕션 브랜치입니다.
- 작업 단위별 브랜치: `design/d2d-workflow`, `fix/partner-impact`처럼 의미 기반으로 생성합니다.
- Pull Request의 Preview URL에서 시각 검수 후 `main`에 병합합니다.
- 이미지와 Lucide SVG는 저장소 내부에 두고 외부 CDN 의존을 피합니다.
- 생성된 단일 파일 번들은 릴리스 백업으로만 보관하고, 직접 수정하지 않습니다.
- 각 `<section>`에는 페이지 번호가 아니라 `id="d2d-problem"`, `data-section="partner-impact"`와 같은 의미 기반 식별자를 부여합니다.

## 2.3 배포 규칙
- Vercel 프로젝트를 GitHub 저장소와 연결합니다.
- PR 및 작업 브랜치는 Preview Deployment로 검수합니다.
- `main` 병합 시 Production Deployment가 갱신되도록 설정합니다.
- Git revert가 곧 배포 롤백 단위가 되도록 커밋을 작게 유지합니다.
- PDF 산출물은 배포 HTML과 동일한 소스에서 생성하며, 별도 수기 수정본을 만들지 않습니다.

---
# 3. 🎨 타이포그래피 & 컬러 토큰 (Typography & Palette)

## 3.1 타이포그래피 토큰
- **글꼴 체계 (Font Family)**:
  - 본문 서체: `Alliance No.2`, `Helvetica Neue`, `Inter` 등 깔끔한 산세리프 서체를 사용합니다.
  - 수치, 라벨, 캡션, 소스 서체: 모노스페이스(`font-family: var(--mono)`)를 일관되게 사용하여 연구 문서(Scientific Research Paper) 같은 차분하고 밀도 높은 톤을 극대화합니다.
- **굵기 원칙 (Weight 400 Only)**:
  - 큰 제목을 포함한 거의 모든 서체에 `font-weight: 400`을 적용합니다. 굵기 대신 글자 크기(Font Size)와 자간, 행간 여백으로 정교하게 시각 위계를 설계합니다.
  - **예외**: 오직 가장 강력한 결론을 나타내는 **`Takeaway` 핵심 강조 문장(700)** 및 일부 소제목(500)에만 볼드체 사용을 승인합니다.

## 3.2 엄격한 컬러 약속 (Semantic Palette)
- **배경색 (Warm White Paper)**: 깨끗하고 부드러운 서류 느낌을 주는 warm-white `#faf9f5` 또는 순백색 `#ffffff`를 사용합니다.
- **포인트 블루 `#2b4fd7` (정확히 페이지당 최대 1개)**:
  - 페이지 내에서 가장 극적으로 하이라이트해야 하는 **단 하나의 수치(Impact) 또는 선택된 대안(Decision)**에만 파란색 액센트를 줍니다.
  - **경고**: 1개 페이지 내에 파란색 요소가 2개 이상 넘쳐서 시선이 분산되는 순간, Palantir 특유의 "절제된 밀도"가 훼손됩니다.
- **수기/병목 레드 `#c73a3a`**:
  - 수기 주문(Manual), 병목(Bottleneck), 지연(Delay), 이탈(Drop), 실패(Failed) 등 문제 진단 전용으로만 사용합니다.
- **도표 라인 `#9aa0a3`**:
  - 일반적인 프로세스 흐름 화살표, 중립적 배경 박스, 보조 지표 라인에는 옅은 쿨 그레이를 적용합니다.

---

# 4. 🗺️ 시각화 및 다이어그램 기하학 규칙 (Diagram Geometry)

모든 페이지의 SVG 다이어그램은 임의의 드로잉 대신, 기하학적으로 철저하게 통제된 규격을 유지합니다.

## 4.1 직각 커넥터 규칙 (Orthogonal Connectors)
- **직각 화살표 공식**: 모든 화살표선은 수평선과 수직선으로만 꺾이는 **직각 오동널(Orthogonal) 라인**만 허용합니다. 임의의 45도 사선, 베지에 곡선, 대각선 화살표 사용을 전면 배제합니다.
- **선 두께 고정**: 모든 커넥터 라인의 두께는 **`1.25px`** (`stroke-width="1.25"`)로 통일하여 라인 렌더링이 번지지 않게 가둡니다.
- **마커 재사용**: SVG 헤더의 `<defs>` 영역에 단 하나의 공용 마커 `#viz-arrow`를 정의하고, 모든 화살표에서 `marker-end="url(#viz-arrow)"`를 호출하여 재사용합니다.

## 4.2 역할 토큰 (Role Token Symbol)
- As-Is 단절 도식에서 복잡한 사람 일러스트 대신 공용 **`#viz-role-token`** 심볼을 사용합니다. 페이지 번호에 의존하지 않고 `data-section` 또는 의미 기반 ID로 대상을 지정합니다.
- **규격**: 가로 `112px`, 세로 `92px` 고정. 상단 28px 지점에 정제된 라인이 가로지르는 형태를 취하며, 4px 높이의 얇은 상단 바(블루 또는 레드)로 역할의 속성을 구분합니다.

---


# 5. 아이콘 시스템 (Lucide Workflow Iconography)

워크플로우 아이콘은 **Lucide를 단일 원본 라이브러리로 사용**하고, 실제 사용하는 아이콘만 프로젝트 내부에 SVG로 저장합니다. CDN이나 런타임 외부 호출에 의존하지 않으며, 모든 아이콘은 동일한 선 굵기와 크기로 정규화합니다.

## 5.1 의미 체계
- **Entity 아이콘**: 사람, 조직, 시스템, 데이터베이스, LLM, 창고, 배송사, 물품처럼 워크플로우의 주체 또는 대상을 표현합니다.
- **Action 라벨**: 주문 생성, 승인, 복사, 전송, 동기화처럼 노드 사이의 동작은 짧은 텍스트나 보조 아이콘으로 표현합니다.
- **State 토큰**: `Manual`, `Delay`, `Bottleneck`, `Failed`, `Missing data`, `Automated`, `Selected`는 독립 노드가 아니라 기존 노드나 커넥터에 부착하는 상태 배지로 표현합니다.

## 5.2 기본 아이콘 매핑
| 의미 | Lucide 아이콘 | 사용 원칙 |
|---|---|---|
| 개인 역할 | `UserRound` | Seller, Operator, Buyer 등 한 명의 역할 |
| 팀 / 조직 | `UsersRound` | Sales, CS, Ops 등 복수 조직 |
| 파트너 | `Handshake` | 외부 비즈니스 파트너 |
| 제품 / 시스템 | `PanelsTopLeft` | Partner Center, Portal, Admin |
| 데이터베이스 | `Database` | 영속 데이터와 단일 원장 |
| ERP / 서버 | `ServerCog` | ERP, OMS, SAP, 세무 시스템 |
| LLM | `BrainCircuit` | 분류·생성·판단을 수행하는 LLM 노드에만 사용 |
| 스프레드시트 | `Sheet` | Excel, CSV, 수기 목록 |
| 채팅 | `MessageSquare` | C2C Chat, 상담 채널 |
| 이메일 | `Mail` | 이메일 주문 및 전달 |
| 창고 | `Warehouse` | 보관·피킹·출고 거점 |
| 배송사 | `Truck` | 택배사 또는 운송 주체 |
| 배송 물품 | `Package` | 실제로 이동하는 주문 물품 |
| 승인 | `CircleCheck` | 승인 완료 또는 검증 성공 |
| 알림 | `Bell` | 이벤트 알림과 작업 트리거 |
| 동기화 | `RefreshCw` | API/Webhook 기반 상태 동기화 |

## 5.3 상태 표현 규칙
- `Manual`: 사람 노드 또는 작업 라인에 손 모양 아이콘(`Hand`)과 레드 모노 라벨을 결합합니다.
- `Delay`: 작은 `Clock3` 아이콘과 측정 시간(`3.8 DAYS`, `6 HOURS`)을 함께 표시합니다.
- `Bottleneck`: 해당 노드 하나에만 레드 외곽선 또는 상단 바를 적용합니다. 한 화면에서 복수 지점을 남발하지 않습니다.
- `Failed`: `CircleX` 또는 끊긴 점선 커넥터를 사용합니다.
- `Missing data`: `DatabaseZap` 같은 별도 의미를 만들지 않고 `Database` 노드에 `NO RECORD` 상태 라벨을 부착합니다.
- `Automated`: 실선 커넥터와 `AUTO` 라벨로 표현하며, LLM 아이콘과 자동화를 동일시하지 않습니다.
- `Selected`: 선택된 대안 또는 To-Be 경로 전체를 하나의 블루 포컬 그룹으로 묶습니다.

## 5.4 저장 및 렌더링
- 사용 아이콘은 `assets/icons/lucide/`에 개별 SVG로 보관합니다.
- 배포 빌드에서는 SVG sprite로 합쳐 `<symbol>`과 `<use>`로 재사용합니다.
- 권장 CSS: `width:20px; height:20px; fill:none; stroke:currentColor; stroke-width:1.25; stroke-linecap:round; stroke-linejoin:round;`.
- 아이콘은 반드시 라벨과 함께 사용합니다. 아이콘만으로 업무 의미를 추론하게 하지 않습니다.
- 새로운 아이콘이 필요하면 기존 Lucide 아이콘의 의미가 충분하지 않은지 먼저 검토하고, 커스텀 아이콘은 최소화합니다.

---
# 6. 🖼️ 이미지 가두기 기술 명세 (Image-Fitting Specification)

1024px가 넘는 실제 고해상도 캡처 이미지가 CSS 레이아웃 영역을 찢어발겨 우측의 결과 카드나 하단 캡션을 덮어버리는 오버플로우 현상을 물리적으로 완전하게 방지합니다.

```css
/* 컨테이너 가두기 가이드라인 */
figure.figure-container {
  position: relative;
  overflow: hidden; /* 영역을 벗어나는 모든 크기의 캡처 차단 */
  border: 1.25px solid #dcdcd8;
  border-radius: 6px;
}

figure.figure-container img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: var(--figure-height, 196px); /* 섹션별 CSS 변수로 조정 */
  object-fit: cover; /* 가로세로 비율을 유지하면서 고정 컨테이너 내부를 채움 */
  object-position: top left; /* 핵심 UI가 노출되는 시작점 조정 */
}
```

- **중요**: 겹쳐진 이미지 콜라주는 UI 식별을 불가능하게 하므로 금지합니다. 무조건 **`1개 메인 이미지 + 2개 크롭 이미지`** 형태로 분할 정렬하고, 각 이미지 사이에 16~20px의 일정한 간격(Gutter)을 설계합니다.
- **주석 격리**: 스크린샷 위의 어노테이션 풍선껌(Annotation Layer)은 뷰포트 절대 좌표가 아닌, 부모 `<figure>` 기준의 `position: absolute` 영역 내에서만 마운트되도록 좌표계를 가둡니다.

---

# 7. 🚀 최종 출고 전 5단계 자가검수 체크리스트 (Validation)

포트폴리오의 빌드 완수 후, 출고 전 실행하는 5단계 수동 검증 게이트입니다.

### [Gate 1] 1060×750px Viewport 고정 및 오버플로우 검증
- [ ] 브라우저 창 크기를 극단적으로 늘리거나 줄였을 때, 각 캔버스(`.page`)가 가로 `1060px`, 세로 `750px` 크기를 완벽하게 유지하는가?
- [ ] `.page` 내부 콘텐츠 오버플로우가 없는가? Body의 페이지 탐색용 세로 스크롤은 허용하되 가로 스크롤은 금지합니다.

### [Gate 2] 텍스트 오버플로우 및 라벨 충돌 방화벽 검증
- [ ] 본문 마지막 텍스트 문단 하단부에서 페이지 푸터(`.foot`)의 상단 라인까지 최소 `16px` 이상의 물리적 공백이 유지되는가?
- [ ] 우상단 코너 라벨 공간(폭 160px)에 헤드라인이나 서브타이틀이 조금이라도 침범하거나 겹치지 않는가?

### [Gate 3] 포인트 컬러 1개 제한 룰 검증
- [ ] 슬라이드 한 면을 펼쳐보았을 때, 시선 강탈용 블루 액센트(`#2b4fd7`)가 정확히 1개(예: 대표 수치 1개 또는 타겟 버튼 1개) 이하로 통제되어 있는가?

### [Gate 4] 이미지 물리 경계 100% 가두기 검증
- [ ] 모든 실물 UI 스크린샷의 우측 끝과 아래 끝이 부모 `<figure>` 영역 밖으로 단 1픽셀이라도 나가지 않는가? (`img right/bottom ⊆ figure right/bottom`)

### [Gate 5] 데이터 무결성 검증 (MUST-NOT 데이터 스크럽)
- [ ] 포트폴리오 전체 본문 및 이미지 캡션에서 비정본 수치(`32명 파트너`, `12인 스쿼드`, `수기 주문량 2.8개`)가 제거되고 정본 수치(`30개 파트너`, `7인 스쿼드`, `ETA 307개 주문`, `6.3➔11.7개`)로 정합되었는가?

---

## 8. 의미 기반 섹션별 세부 수정 가이드

포트폴리오의 실물 마감 품질을 유지하기 위해, 수정 대상을 페이지 번호가 아니라 의미 기반 섹션 ID로 관리합니다. 페이지 추가·삭제·재배치가 발생해도 지침이 엉뚱한 화면에 적용되지 않도록 합니다.

### `#d2d-decision` · LG D2D Decision (이미지 크롭 및 오버플로우 해결)
- **현상**: D2D Decision의 실제 실물 증거 이미지가 `<figure>` 밖으로 튀어나가 옵션 카드 및 Takeaway 텍스트 영역을 침범하는 버그 발생.
- **수정**:
  - 부모 `<figure>`에 반드시 `overflow: hidden` 스타일 적용.
  - 자식 `<img>`의 스타일을 `display:block; width: 100%; height: 196px; object-fit: cover;`로 고정하고 negative margin 전면 제거.
  - 캡션 및 주석 레이어(Annotation Layer)는 크롭된 부모 figure의 absolute 내부 좌표계 범위 안에서만 표출되도록 격리.
  - 최종적으로 `img rect ⊆ figure rect` 구조가 되도록 DOM 확인.

### `#partner-impact` · Partner Impact (프로덕션 이미지 렌더링 스케일링)
- **현상**: 1024px가 넘는 파트너센터 원본 캡처 이미지가 520px 폭의 figure 컨테이너를 가로질러 우측 결과 카드 영역을 통째로 덮어버림.
- **수정**:
  - 자식 `<img>`에 `display: block; width: 100%; max-width: 100%; height: 224px; object-fit: cover;`를 부여하여 크기 강제 제어.
  - 원본의 intrinsic width가 CSS 레이아웃 폭을 뒤흔들지 않도록 `overflow: hidden`으로 물리적인 차단막 형성.
  - 주석 박스(Annotation Layer) 역시 부모 figure 기준의 absolute 경계 내부로 좌표를 철저히 가둠.

### `#segment-problem` · Segment Problem (비정본 수치 전면 삭제)
- **삭제**: `Interviews across 11 country entities` 및 소스의 `SMB interviews across 11 country entities` (정본 외 미검증된 다국어 워크숍 수치 전면 제거).
- **교체**:
  - 핵심 문구 ➔ `Local requirements showed real SMB demand the storefront could not serve.`
  - 소스 표기(De-identification) ➔ `internal commerce KPI and market requirement records, 2024`로 비식별화 처리.
  - `Bulk quotes by hand` ➔ `Bulk and refund workflows remained manual`로 다듬어 정본과의 표현 정합성 확보.

### `#segment-decision` · Segment Decision (워크숍 단언 삭제)
- **삭제**: `11-entity requirement workshops` 문구 전면 제거.
- **교체**:
  - 소스 표기 ➔ `market requirement records, 2024`로 교체.
- **감축**:
  - 3대 아키텍처 옵션 설명을 각 2줄 이하로 대폭 감축.
  - Figure Caption에서 도식에 나타난 `common fields / extensions / guardrails`와 같은 명백한 텍스트 단어의 중복 설명 제거.

### `#segment-impact` · Segment Impact (가상의 illustrative RAMP 그래프 전면 삭제)
- **현상**: Q2 "LAUNCH", Q3 "RAMP" 막대 그래프는 실제 측정이 아닌 임의의 illustrative ramp이므로 면접관에게 불필요한 오해와 신뢰 하락을 유발할 수 있음.
- **수정**:
  - 측정되지 않은 Q2 및 Q3 중간 가상 가속 막대를 **통째로 전면 삭제**.
  - 단순 Before/After ➔ `Before: 0%` ➔ `Q4 2024: 12.5%`로 심플하게 강조하거나, **단 하나의 12.5% 단일 원형/도넛 그래프** 또는 **단일 바 형태**로 명확히 정량 임팩트를 표시.
  - **절대 표현 금지**: `SMB pricing never leaked`와 같은 과장된 극단 단언을 **`The closed space separated SMB pricing from open B2C promotions.`**로 우아하고 정밀하게 다듬음.

### `#invoice-automation` · Invoice Automation (비정본 프로세스/출처 스크럽)
- **삭제**: `Interview country tax teams`, `tax-team sign-off records`, `verified per market` (전 세계 세무 팀을 직접 인터뷰 및 승인받았다는 증명되지 않은 과장 삭제).
- **교체 (4단계 간소화 프로세스로 재구축)**:
  1. `Requirements · Collect mandatory market fields`
  2. `Field dictionary · Shared core + extensions`
  3. `ERP–OMS map · Connect the broken structures`
  4. `E2E deploy · ERP → tax system → invoice`
- **소스 표기**: `internal ops ticket log · implementation records, 2025`로 신뢰성 있는 비식별화.

### `#eta-seoul` · ETA Seoul (버전 연도와 상태 표기 모순 교정)
- **현상**: V2, V3 단계를 무리하게 동일 연도(`2025`)에 몰아넣어 선후 관계 모순 및 타임라인 오버플로우가 발생하며, GMV 차트와 실패 극복 콜아웃이 겹쳐 실패가 해당 연도 전체 실적인 것처럼 오독됨.
- **수정**:
  - 카테고리 버전과 캘린더 연도를 완전하게 상호 분리하여 타임라인의 과밀 현상 해소.
  - `First fully closed loop, in build`와 같은 모순적인 결론을 **`GMC feed-correction loop · in build`**로 현실에 맞게 정합.
  - `146K sessions` 데이터 항목 하단에 반드시 보완용 각주 표기 추가: **`*includes bot-inflated direct traffic; not used as a growth headline`** (과장 없이 숨겨진 한계까지 솔직하게 드러내는 Palantir DS 고유의 "Low-ego" 정직성 시그널 반영).

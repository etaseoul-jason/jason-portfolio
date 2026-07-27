---
name: cv-to-portfolio-content-map
description: 이력서(CV) 및 각 프로젝트 경험을 포트폴리오의 의미 기반 콘텐츠 모듈에 매핑한 최종 콘텐츠 가이드라인
type: reference
tags: [palantir, portfolio, cv, content-map, metrics, workflow]
---

# Deprecated Redesign Document

Superseded by docs/portfolio-final-redesign-spec.md

# [최종본] CV-to-Portfolio Content Map (cv 가이드)
## Modular Content, Metrics & Visual Specifications

> **목적**: 이 문서는 이력서(CV)의 정량 성과와 프로젝트 서사를 포트폴리오의 목적(Decomposition & Ranking)에 맞게 가공하여, **각 콘텐츠 모듈에 어떤 텍스트, 수치, 다이어그램이 들어가야 하는지** 정의합니다. 최종 페이지 수와 배치는 산출물의 정보 밀도와 스토리 흐름에 따라 자유롭게 조정하며, 한 페이지에는 하나의 핵심 주장만 남깁니다.

---

# 0. 전역 포지셔닝 Spine (Spine)
- **Headline**: `Forward Deployed Platform PM · Global Commerce · Turning operational uncertainty into shipped systems`
- **Summary Thesis**: "나는 데이터가 고립되고 수기 운영이 돈과 시간을 갉아먹는 현장에 뛰어들어, 표면적 불만 밑의 진짜 병목을 발견하고, 현장 채택률이 보장된 완료된 시스템을 배포하여 비효율을 제로화한다."
- **차별화 3대 축**:
  1. **의사결정권자 접근성**: 대기업 임원진(SVP) 직보 및 4개 글로벌 법인 C-suite 조율 능력.
  2. **스타트업의 기민한 실행력**: 공식 권한이 없는 상황에서도 16,500줄의 코드 기반 워킹 프로토타입으로 7인 스쿼드와 파트너사를 한 줄로 정렬.
  3. **엔터프라이즈 병목에 대한 현실적 성찰**: 시스템 통합 지연, direct SQL 접근 부재 등 대기업의 구조적 데이터 한계를 이해하고 이를 푸는 진짜 Ontology에 대한 갈망 제시.

---


## 콘텐츠 구성 원칙
- 최종 페이지 수를 사전에 고정하지 않습니다.
- `Cover / Problem / Decision / Solution / Impact / Lesson`은 필요에 따라 독립 페이지로 분리하거나 한 페이지 안에서 결합할 수 있습니다.
- 페이지 번호가 아닌 의미 기반 섹션 ID를 사용합니다.
- 한 화면에는 하나의 핵심 주장만 유지하고, 보조 지표는 최대 2개를 원칙으로 합니다.
- 프로젝트 배너, 실제 제품 화면, 워크플로우, 결과 지표가 각각 독립적인 설명 가치가 있을 때만 페이지를 추가합니다.

---

# 1. 의미 기반 콘텐츠 모듈

### `#cover` · Cover (표지)
- **CV 소스**: Jaehyun Han 개인 메타 정보 및 프로필 타이틀.
- **슬라이드 제목**: `From field bottlenecks to deployed systems.`
- **슬라이드 부제**: `Commerce systems across B2C, B2B2C, and B2B. From field discovery to adoption.`
- **시각화 구성**: 우측에 실제 딜러 포털이나 파트너 플랫폼 화면의 작고 정교한 크롭 이미지를 둥근 사각형(6px) 형태로 배치하고 살짝 채도를 낮춤. 
- **원형 캡션 (Circular Badge Text)**: `Find the break ➔ build the system ➔ make it stick.`

### `#introduction` · Introduction (자기소개 및 운영 모델)
- **CV 소스**: Summary, LG의 3개년 성과 이력, ETA Seoul 개요.
- **슬라이드 제목**: `I work where users, workflows, and systems break apart.`
- **사용 지표**: 
  - `30+ markets`: 주문 및 세금 인보이스 자동화 범위
  - `1,600+ distributors`: 독일 B2B 셀프서비스 포털 규모
  - `90% automated`: 에이전트 기반의 1인 커머스 자동화율
- **시각화 구성**: **5단계 루프 도식(Horizontal Flow)**
  ```text
  [Observe the field] ➔ [Map decisions] ➔ [Prototype workflow] ➔ [Deploy with users] ➔ [Measure adoption]
  ```
  - 각 단계 하단에 `Shadowing`, `Data handoffs`, `LLM-assisted proto`, `Rollout sequence`, `Iterative telemetry` 등의 실증적인 단어를 어노테이션으로 매핑.
- **비고 (Low-ego)**: LG 재직 당시 3개년 연속 최우수 등급(`3 consecutive A ratings, 2023–2025`) 성과를 타임라인 상단에 조용히 등재하되, 억지 공백 채우기용 드래프트는 삭제하여 정직함을 유지합니다.

### `#index` · Index (데크 목차)
- **CV 소스**: 경력 이력 전체의 구조적 인덱싱.
- **슬라이드 제목**: `An index of solved bottlenecks across the commerce lifecycle.`
- **시각화 구성**: 핵심 프로젝트와 문제 유형을 연결하는 구조 테이블.
  - 왼쪽에는 비즈니스 복잡도를 높여가고 싶다는 짧은 1문장 서사를 배치하고, 오른쪽에는 프로젝트명과 `Problem / Decision / Impact` 모듈을 정제된 테이블로 배치합니다. 페이지 번호는 표시하지 않습니다.

---

## [DEEP DIVE] LG D2D 독일 유통사 주문 포털

### `#d2d-problem` · D2D Problem (독일 딜러 현장의 문제)
- **CV 소스**: LG Electronics - B2B Dealer Portal (As-Is 수기 운영 부작용).
- **슬라이드 제목**: `Orders arrived by email. Stock, price, and credit lived somewhere else.`
- **사용 지표**:
  - **독일 1,600+ 유통사**가 전화, 메일, 엑셀로 주문.
  - **3.8일**: 주문이 실제 ERP에 들어가기까지 걸리는 시간.
  - **22%**: 데이터 불일치 및 재고 부재로 인한 주문 취소율.
  - **53%**: 연 매출 $100K 이하의 영세 Tier-4 딜러 비중.
- **시각화 구성 (As-Is Workflow)**:
  - 붉은색의 역할 토큰(`Red Role Token - LG SALES`)을 중앙에 배치하여 메일 주문을 수기로 수작업 등록하는 과정 시각화.
  - 딜러는 실시간 재고나 가격을 알 수 없어 이메일로 엑셀을 던지는 단절 구조 표기.
- **Takeaway**: `Figure 1. The as-is dealer order path. The red role token marks the manual sales layer where orders waited and failed.`

### `#d2d-decision` · D2D Decision (우선순위 분해 및 프로토타입 의사결정)
- **CV 소스**: LG Electronics - B2B Dealer Portal (의사결정 및 대안 우선순위 분해).
- **슬라이드 제목**: `We chose to digitize order entry, deferring full ERP unification.`
- **의사결정 매트릭스 (Dollars on the table × Time to impact)**:
  1. **주문 포털/실시간 여신 매핑** ➔ 가치 High, 기간 Fast (이미 데이터가 존재하므로 최우선 실행: **SOLVE FIRST**).
  2. **전체 ERP/OMS/SAP 전면 통합** ➔ 가치 High, 기간 Slow (타 부서 의존 및 Direct SQL 부재로 다년 소요 ➔ Defer).
- **시각화 구성 (Evidence Artifact)**:
  - 실제 독일 딜러들이 접속하는 주문 포털의 장바구니 화면 크롭 캡처(여신 실시간 한도 초과 에러 및 CBM 물류 최적화 팝업).
  - 1024px 원본 이미지는 반드시 부모 figure 컨테이너에 가둬 오버플로우를 완벽 차단합니다.
- **Takeaway**: 딜러의 장바구니 담기 시점에 ERP 실시간 여신 한도를 매핑하여, 수기 리클레임 단계를 제품 레이어에서 실시간으로 걸러냄.

### `#d2d-impact` · D2D Impact (정량적 성과 및 뼈아픈 한계 극복 회고)
- **CV 소스**: LG Electronics - B2B Dealer Portal (임팩트 및 Lessons Learnt).
- **슬라이드 제목**: `Cancellations fell to a third. Adoption still lagged.`
- **사용 지표**:
  - 주문 취소율 **22% ➔ 7%** 대폭 절감.
  - 평균 주문량 **6.3 ➔ 11.7 units**로 증가.
  - CBM 물류 트럭 적재율 **42% ➔ 71%** (물류비 -23% 절감).
  - **LG Innovation Award 본사 및 그룹사 Final 2등 수상 (2025)**.
- **시각화 구성 (Outcome Slopegraph)**:
  - 주문 취소율(Cancellation %)과 평균 주문 유닛 수(Avg Units)의 출시 전후 대비 Slopegraph 렌더링.
- **DS식 솔직한 회고 (Low-ego)**:
  - 출시 후 6개월이 지났음에도 약 50%의 딜러들은 여전히 스프레드시트를 수기로 고집함. 현장 온보딩과 Change Management 가치를 너무 기술 중심적으로 저평가했음을 깨달음. 이 뼈아픈 실패 교훈은 다음 프로젝트(Bunjang 파트너센터) 설계 시 "온보딩-프롬-디자인" 철학으로 그대로 반영됨.

---

## [DEEP DIVE] 번개장터 글로벌 파트너센터

### `#partner-problem` · Partner Problem (글로벌 C2B2C 파트너 확장의 구조적 병목)
- **CV 소스**: Bunjang - Partner platform (As-Is 파트너십 스케일 한계).
- **슬라이드 제목**: `Excel, C2C chat, and missing records: the C2B2C scale blocker.`
- **사용 지표**:
  - 일본 등 해외 10+개 파트너사와의 주문 처리가 수기 엑셀과 개인 C2C 채팅으로만 무인 정렬 없이 처리됨.
  - 주문 상태, CS, 송장, 취소 상태가 한 곳에 누적되는 데이터베이스나 단일 정산 주문 원장이 없음.
- **시각화 구성 (As-Is Fragmented Workflow)**:
  - 파트너가 C2C 챗에 엑셀을 올리면, 내부 직원이 복사하여 메일로 수동 전달하는 파편화된 다이어그램 시각화 (빨간 점선 화살표와 `Manual` 라벨 적용).

### `#partner-decision` · Partner Decision (땜질식 패치 거부 및 독자 플랫폼 신설)
- **CV 소스**: Bunjang - Partner platform (16,500줄의 리액트 프로토타입 전달).
- **슬라이드 제목**: `Building a dedicated partner center, rejecting tactical integration patches.`
- **의사결정 매트릭스 (Dollars on the table × Time to impact)**:
  1. **C2C 채팅 백엔드에 엑셀 연동 기능 추가 (Tactical Patch)** ➔ 가치 Low, 기간 Fast (기존 DB 구조 훼손 및 확장 불가 ➔ Reject).
  2. **글로벌 독립 파트너센터 구축 (Strategic Platform)** ➔ 가치 High, 기간 Medium (7인 스쿼드를 단숨에 정렬하기 위해 프로토타입 최우선 실행 ➔ **SOLVE FIRST**).
- **시각화 구성 (Evidence Artifact)**:
  - Claude-Code를 활용해 단숨에 빌드하고 실제 다국어 정산 코드가 도는 **16,500줄의 React 워킹 프로토타입** 설계 다이어그램 및 파트너 로그인 화면 캡처.
- **Takeaway**: `A working artifact aligned a 7-person delivery squad (6 engineers + 1 product designer).` 권한이 없는 상황에서도 실물 코드로 동료들을 정렬시킴.

### `#partner-impact` · Partner Impact (글로벌 파트너 온보딩 및 채택 성공)
- **CV 소스**: Bunjang - Partner platform (정량적 성과 및 온보딩).
- **슬라이드 제목**: `Onboarding moved the platform, not chat, toward the center of operations.`
- **사용 지표**:
  - **30개 글로벌 파트너사** 정식 온보딩 완료.
  - 파트너 주문 처리 수작업 단계 **5단계 ➔ 3단계**로 통합 단축.
- **시각화 구성 (Outcome Bar & Rollout Timeline)**:
  - 파트너 가입 수 상승 추이를 타임라인과 바 차트의 결합으로 보여줌.
- **회고**: 이전의 실패(LG D2D)를 교훈 삼아 파트너센터 최초 가입 단계부터 셀프 가입 가이드를 내재화하여, 1대1 Handholding 없이도 첫 주만에 30개사의 대량 온보딩에 완벽 성공함.

---

## [DEEP DIVE] LG Electronics 국가별 SMB 전용 멀티스토어

### `#segment-problem` · Segment Problem (단일 B2C 퍼널에 가려진 SMB 바이어의 절벽)
- **CV 소스**: LG Electronics - B2B2C multi-store (SMB 세그먼트 고립 분석).
- **슬라이드 제목**: `An averaged storefront funnel hid an SMB segment at 0% revenue.`
- **사용 지표**:
  - B2C 사이트의 전체 방문자 데이터 이면에 가려져 **SMB(소상공인) 바이어 매출 비중 0%** 상태 지속.
  - 국가별 세무 규정(브라질 Nota Fiscal 연동, 캐나다 주별 인보이스), 주별 세금, 대량 구매 시 인보이스 수기 대응으로 인해 결제 전 전면 이탈 발생.
- **시각화 구성**: 
  - 대량 인보이스가 막혀있고 세금 계산이 단절된 As-Is 깔때기(Funnel) 및 `Manual` 병목 레이어 시각화.
- **데이터 방화벽**: 11개국 다국어 워크숍이나 정본 외의 비정식 인터뷰 수치는 일체 삭제하고, 오직 **`internal commerce KPI and market requirement records, 2024`**를 출처로 사용합니다.

### `#segment-decision` · Segment Decision (Core-and-Plugin 분산 아키텍처)
- **CV 소스**: LG Electronics - B2B2C multi-store (아키텍처 의사결정).
- **슬라이드 제목**: `Core-and-plugin architecture for multi-country rollout.`
- **의사결정 매트릭스**:
  - 기존 B2C 사이트를 국가별로 복제 개별 구축 ➔ 가치 Low, 비용/기간 무한대 (Reject).
  - 공통 주문/계정 로직은 Core로 고정하고, 국가별 규제 및 세무 시스템은 Plugin으로 유연하게 결합하는 마이크로 분산 설계 추진 (Selected).
- **시각화 구성 (Architecture Schema)**:
  - 중앙의 Solid Ink 형태의 Core 데이터베이스 및 API 노드에서 각 국가별 Outlined 형태의 브라질, 캐나다, 대만 세무 플러그인 모듈로 뻗어나가는 직각 아키텍처 다이어그램.

### `#segment-impact` · Segment Impact (글로벌 매출 점유 및 세그먼트 수치 검증)
- **CV 소스**: LG Electronics - B2B2C multi-store (매출 확장 임팩트).
- **슬라이드 제목**: `SMB segment reached 12.5% share. Repurchase rate rose by 89%.`
- **사용 지표**:
  - 전체 이커머스 매출 내 **SMB 세그먼트 비중 12.5%** 신규 개척 (Q4 2024).
  - 일반 B2C 유저 대비 SMB 재구매율 **+89%** 달성.
- **시각화 구성 (Outcome Bar & Donut Chart)**:
  - **주의**: 가상의 중간 RAMP 곡선(Q2, Q3)은 오독을 주므로 완전히 삭제하고, 오직 **`Before 0% ➔ After 12.5%`**의 대비와 12.5%의 원형 세그먼트 셰어 도넛 차트만을 배치하여 정직한 데이터 검증을 실현합니다.
- **Takeaway**: `The closed space separated SMB pricing from open B2C promotions.`

---

## [COMPACT CASES] 글로벌 자동화 및 효율성

### `#invoice-automation` · LG Electronics 비즈니스 인보이스 발행 자동화
- **CV 소스**: LG Electronics - Order & invoicing (세무 연동).
- **슬라이드 제목**: `Automating global invoice issuance: 165 hours saved monthly.`
- **사용 지표**:
  - 국가별 수기 인보이스 발행 요청 **월 33건 ➔ 0건**으로 전면 제로화.
  - 지사 직원들의 수작업 대응 시간 **월 165시간**을 완벽하게 세이빙.
- **시각화 구성 (4-Step Automation Flow)**:
  1. `Requirements · Collect mandatory market fields`
  2. `Field dictionary · Shared core + extensions`
  3. `ERP–OMS map · Connect the broken structures`
  4. `E2E deploy · ERP → tax system → invoice`
- **출처 (Source label)**: `internal ops ticket log · implementation records, 2025`

### `#eta-seoul` · ETA SEOUL 1인 커머스 AI 에이전트 루프
- **CV 소스**: Side Project - Solo Operator, ETA SEOUL.
- **슬라이드 제목**: `Operating cross-border commerce as a solo LLM-driven loop.`
- **사용 지표**:
  - 누적 **307 orders**, **$41.3K GMV** 달성 (H1 2026 $21.9K로 2025 전체 돌파).
  - 30여 개 한국 브랜드를 대상으로 AI Agent 및 스케줄러 루프를 가동하여 1인 무인 업무 자동화율 90% 달성.
- **시각화 구성**:
  - GMC feed-correction loop 등 LLM Orchestration과 Prefect 스케줄러가 데일리로 수기 판단을 자동화하여 루프를 닫는 순환형 Operating Loop 도식.
- **정직성 각주 (Low-ego Footnote)**:
  - `*includes bot-inflated direct traffic; not used as a growth headline` (146K 세션 수치가 봇 유입을 포함하고 있음을 솔직히 밝히는 정직성 시그널 배치).

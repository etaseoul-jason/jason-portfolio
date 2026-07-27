# Deprecated Redesign Document

Superseded by docs/portfolio-final-redesign-spec.md

# Portfolio HTML Redesign Instruction Pack

## 1. 이번 검토에서 한 일

현재 `index (4).html`의 실제 렌더링 템플릿을 해제해 20개 `<section class="page">`를 모두 확인했다. 각 화면의 제목, 본문, SVG 워크플로우, 지표, 제품 캡처, 페이지 역할을 `source-design-guide.md`와 `source-content-map.md`에 대조했다.

이번 지시팩에서 확정한 사항은 다음과 같다.

1. 정본 수치는 `ETA 307 orders`, `7-person squad`, `30 partners`, `6.3 → 11.7 units`로 고정한다.
2. 최종 페이지 수는 규칙으로 고정하지 않는다. 페이지 번호 대신 의미 기반 `id`를 사용한다.
3. 현재 목차 페이지는 제거한다.
4. 현재 D2D 구성에 누락된 명시적 Decision 페이지를 추가한다.
5. 결과적으로 현재 작업 순서는 20개 모듈이지만, 숫자 20은 디자인 규칙이 아니다.
6. Claude Design은 시각 구조를 결정하고, Claude Code는 결정된 구조를 구현·검증한다.
7. 워크플로우 아이콘은 Lucide만 사용하며 저장소 내부 SVG sprite로 관리한다.
8. 현재 Claude Artifact 번들 HTML은 보관본으로만 두고, 수정 가능한 일반 HTML/CSS/assets 구조로 변환한다.

## 2. 현재 페이지별 내용과 최종 조치 요약

| 현재 화면 | 현재 내용 | 최종 조치 | 최종 의미 ID |
|---|---|---|---|
| 01 Cover | 이름 / 포트폴리오 연도 / headline / Palantir 지원 직무 | 실제 제품 증거 이미지를 추가하고 outcome-led cover로 재설계 | `#cover` |
| 02 Introduction | 자기소개 2문단 / 전체 경력 타임라인 / ETA side project | 타임라인 제거 / 5단계 운영 모델과 대표 지표 3개로 재설계 | `#introduction` |
| 03 Index | 5개 프로젝트와 페이지 번호 목차 | 제거 | 없음 |
| 04 D2D cover | D2D 프로젝트 섹션 커버 / 제품 캡처 | 톤 유지 / 이미지 정렬과 메타만 정리 | `#d2d-cover` |
| 05 D2D Framing | 이해관계자 / As-Is 주문 플로우 / 초기 가설 / 미확인 질문 | As-Is 문제와 증거만 남기고 hypothesis 블록 제거 | `#d2d-problem` |
| 06 D2D Research and reframe | 현장 조사 / 문제 재정의 / As-Is와 To-Be / 선택과 거절 | 조사와 reframe만 남기고 solution/decision을 새 페이지로 이동 | `#d2d-research` |
| 신규 | 현재 HTML에 명시적 D2D decision 없음 | Portal 우선 / 전체 ERP 통합 보류를 비교하는 페이지 신규 추가 | `#d2d-decision` |
| 07 D2D Impact | 월 활성 딜러 39% / 주문당 수량 6.3→11.7 / 제품 화면 | 취소율 22→7과 주문량을 대표 결과로 재구성 / 39%는 lesson으로 이동 | `#d2d-impact` |
| 08 D2D Rollout | 5개 시장 확장 / 재사용 가능·불가능 요소 / adoption lesson / Award | `The software scaled. Adoption did not.` 중심의 lesson 페이지로 재설계 | `#d2d-lesson` |
| 09 Partner cover | 파트너센터 커버 / 제품 캡처 | 30 partners 정본 반영 / 이미지와 메타 정리 | `#partner-cover` |
| 10 Partner Ecosystem | Buyer / Partner / Seller / Bunjang 간 수기 relay / 6개 운영 채널 | 4 actor workflow + partner bottleneck으로 단순화 | `#partner-problem` |
| 11 Partner Before and After | Before 지표 / After 4개 모듈 / 12-person squad | Tactical patch 거절과 dedicated platform 선택을 명시 / 7-person squad로 교정 | `#partner-decision` |
| 12 Partner Adoption | 제품 화면 / 20 of 30 active / 88.8% coverage / unresolved items | 30 onboarded / 20 active / 5→3 steps를 위계화하고 unresolved는 축소 | `#partner-impact` |
| 13 ETA cover | 2024–2026 단계 / 3개 캡처 / 307 orders / $41K | `$41.3K`, 307 orders 정본 / cover 밀도 정리 | `#eta-cover` |
| 14 ETA workflow | 2024 manual / 2025 Airflow+LLM / 2026 delivery API의 선형 3단계 | 직각형 closed operating loop로 재설계 / 90% automation과 85% time reduction 구분 | `#eta-operating-loop` |
| 15 Segment cover | SMB segment 프로젝트 커버 / 17 markets / 12.5% revenue | 톤 유지 / 결과와 역할 메타 정리 | `#segment-cover` |
| 16 Segment Problem | 한 storefront에 4 buyer / 4 failure / funnel / 설명 카드 | 평균값에 가려진 0% SMB revenue와 single retail path만 강조 | `#segment-problem` |
| 17 Segment Decision | 3개 대안 / shared core / 3 plugins / 17 stores / guardrail | 옵션 2줄 제한 / core→plugin→store 아키텍처로 단순화 | `#segment-decision` |
| 18 Segment Impact | 0→12.5% / CVR / repurchase / 3개 해설 카드 | 0→12.5%, +89%를 중심으로 재구성 / 카드 반복 제거 | `#segment-impact` |
| 19 Invoice cover | 30+ markets / +221% / 33→0 / system lanes | cover 톤 유지 / 165 hours를 대표 결과로 정리 | `#invoice-cover` |
| 20 Invoice data flow | As-Is Order-ID pull / To-Be S table / daily batch / 33→0 / ~21 MD / +221% | 기술 흐름을 단순화하고 `165 hours/month`로 단위 교정 | `#invoice-automation` |

## 3. 최종 모듈 순서

페이지 번호는 구현 시 자동으로 붙을 수 있지만, 지시와 수정은 아래 의미 ID로만 수행한다.

```text
#cover
#introduction
#d2d-cover
#d2d-problem
#d2d-research
#d2d-decision
#d2d-impact
#d2d-lesson
#partner-cover
#partner-problem
#partner-decision
#partner-impact
#eta-cover
#eta-operating-loop
#segment-cover
#segment-problem
#segment-decision
#segment-impact
#invoice-cover
#invoice-automation
```

## 4. 파일 사용 순서

1. `docs/01-global-design-system.md` — 화면 규격 / 타입 / 컬러 / Lucide / 워크플로우 문법
2. `docs/02-page-by-page-spec.md` — 각 페이지의 현재 문제와 최종 완료 조건
3. `docs/03-github-vercel-workflow.md` — GitHub 초기화 / 소스 정규화 / 브랜치 / Vercel Preview
4. `prompts/01-claude-design.md` — Claude Design에 그대로 전달할 작업 순서와 프롬프트
5. `prompts/02-claude-code.md` — Claude Code의 Plan / Normalize / Implement / Verify 프롬프트
6. `docs/04-acceptance-checklist.md` — PR merge 전 최종 PASS/FAIL 기준
7. `CLAUDE.md` — 저장소 루트에 두고 Claude Code의 상시 규칙으로 사용

## 5. 작업 원칙

- 디자인 탐색과 코드 구현을 한 프롬프트에서 동시에 수행하지 않는다.
- 한 번에 전체 포트폴리오를 수정하지 않는다.
- `content truth → page spec → selected design → design system → existing code` 순서로 우선한다.
- Claude Code가 selected design을 다시 디자인하지 못하게 한다.
- 모든 결과는 Vercel Preview URL에서 검수한 뒤 main에 merge한다.

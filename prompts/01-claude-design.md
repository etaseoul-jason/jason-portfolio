# Claude Design Execution Prompts

## 역할 분리

Claude Design은 **시각 구조를 결정**한다. 구현 코드 최적화, repository refactor, browser bug fix는 하지 않는다.

최종 산출물은 다음이다.

1. 승인된 page mockup
2. semantic ID별 selected design
3. 사용한 layout archetype
4. Lucide icon list
5. spacing / component intent
6. Claude Code handoff bundle

## Step 1. 프로젝트 초기 설정

Claude Design에 아래 자료를 제공한다.

```text
1. normalized portfolio Preview URL
2. docs/content-truth.md
3. docs/design-system.md
4. docs/page-spec.md
5. assets/images/
6. current page screenshots
```

### Initial system prompt

```text
You are the visual design owner for an evidence-led Product Manager portfolio.

This is not a generic presentation, a SaaS dashboard, or a marketing landing page.
It is a fixed A4-landscape document deck that explains how field bottlenecks were decomposed, ranked, turned into systems, and measured after deployment.

Authoritative inputs, in priority order:
1. content-truth.md
2. page-spec.md
3. design-system.md
4. existing portfolio only as a source of content and evidence

Do not invent metrics, research, results, users, timelines, or project scope.
Do not preserve the current layout merely because it exists.
Do not write implementation code at this stage.
Do not use any icon family except Lucide.
Do not introduce gradients, glassmorphism, 3D illustration, large decorative icons, or generic dashboard card grids.

Canvas:
- fixed 1060 × 750px
- A4 landscape
- 54px top / 64px horizontal / 40px bottom padding
- one core claim per page
- no internal scrolling

Visual grammar:
- warm white paper
- mostly 400-weight type
- mono labels and sources
- one blue focal group maximum
- red only for manual, delay, bottleneck, drop, or failure
- all workflow connectors orthogonal
- screenshots are evidence, not decoration

Before producing any final page, first derive a reusable design system for:
1. project cover
2. problem workflow
3. research / reframe
4. decision
5. product evidence
6. impact
7. lesson
8. closed operating loop
9. technical compact case

Return a concise system map and identify any conflict between the documents. Do not create all pages yet.
```

## Step 2. Archetype lock

전체 페이지를 먼저 만들지 않는다. 아래 대표 페이지로 archetype을 잠근다.

```text
#cover
#introduction
#d2d-problem
#d2d-decision
#d2d-impact
#eta-operating-loop
#invoice-automation
```

### Archetype prompt

각 semantic ID마다 아래 프롬프트를 반복한다.

```text
Design the page for [SEMANTIC_ID].

Read the exact section in page-spec.md before working.
The page's core claim is:
[CORE CLAIM]

Required content:
[KEEP / METRICS / REQUIRED WORKFLOW]

Content that must not appear:
[REMOVE / MOVE]

Create three structurally distinct concepts:
A. workflow-led or system-led
B. evidence-led or metric-led
C. hybrid

The concepts must differ in information entry point, reading order, and dominant visualization.
Changing only color, spacing, or card position does not count as a distinct concept.

For each concept, show:
1. first visual focus
2. reading order in 3–5 steps
3. dominant layout ratio
4. what was intentionally removed
5. Lucide icons used
6. likely misreading risk
7. why it satisfies the acceptance criteria

Do not produce a final handoff until one concept is explicitly selected.
```

### Selection response format

사람이 아래 형식으로 하나를 선택한다.

```text
Selected: [A / B / C]

Keep:
- ...

Change before lock:
- ...

Reject reason:
- A: ...
- C: ...

Do not create another concept. Refine the selected concept only.
```

### Final lock prompt

```text
Refine only the selected concept for [SEMANTIC_ID].

Do not change its information architecture.
Apply the requested corrections and produce one final 1060 × 750px design.

Include a handoff note with:
- exact grid split
- component hierarchy
- spacing values
- font roles and approximate sizes
- color roles
- Lucide icon names and sizes
- workflow node and connector rules
- screenshot crop intent
- what must remain editable as text
- acceptance criteria PASS / FAIL

If any acceptance criterion fails, fix it before presenting the final design.
```

## Step 3. Full page design batches

Archetype가 잠긴 후 아래 순서로 나머지 페이지를 만든다.

### Batch A / Global + covers

```text
#cover
#introduction
#d2d-cover
#partner-cover
#eta-cover
#segment-cover
#invoice-cover
```

Prompt:

```text
Using only the approved cover and introduction archetypes, complete the listed semantic IDs.
Do not create new visual systems.
Project covers may vary in evidence image and project metadata, but must use the same grid, typography hierarchy, image treatment, and dark-cover rules.
Return one final design per semantic ID, not multiple concepts.
```

### Batch B / D2D

```text
#d2d-problem
#d2d-research
#d2d-decision
#d2d-impact
#d2d-lesson
```

Prompt:

```text
Complete the D2D case using the locked problem, research, decision, impact, and lesson archetypes.
The five titles alone must tell a complete narrative.
Do not repeat the same metric or explanation across adjacent pages unless page-spec explicitly requires it.
Use the product screenshot only on the Decision page unless a small supporting crop is required by the Impact page.
```

### Batch C / Partner

```text
#partner-problem
#partner-decision
#partner-impact
```

Prompt:

```text
Complete the Partner case using the approved archetypes.
The Partner node must be the single red bottleneck on the problem page.
The decision page must explicitly show the rejected chat patch and selected dedicated platform.
The impact page must separate 30 onboarded, 20 active, 5→3 manual steps, and 88.8% coverage by hierarchy and definition.
```

### Batch D / ETA

```text
#eta-operating-loop
```

Prompt:

```text
Complete ETA as a closed orthogonal operating loop, not a circular curved diagram and not three equal technology columns.
The loop and delivery branch must be visually distinct.
90% automated and −85% manual time must have different definitions on the page.
BrainCircuit may appear only on the LLM correction node.
```

### Batch E / Segment

```text
#segment-problem
#segment-decision
#segment-impact
```

Prompt:

```text
Complete the Segment case.
The problem page must show four buyer groups forced through one retail path.
The decision page must show shared core, three plugins, and one global guardrail.
The impact page must show only measured points, with no interpolated ramp.
```

### Batch F / Invoice

```text
#invoice-automation
```

Prompt:

```text
Complete Invoice Automation as a compact technical case.
The PM workflow and the simplified technical data path must both be visible, but the page still has one claim: a shared field dictionary made automation possible.
Use 165 hours, not ~21 MD.
```

## Step 4. Cross-page consistency review

```text
Review all selected designs as one deck.

Do not redesign individual pages unless a rule is violated.
Audit:
1. title-only narrative
2. duplicate information across adjacent pages
3. blue focal group count
4. red bottleneck use
5. typography consistency
6. cover consistency
7. workflow node geometry
8. Lucide icon consistency
9. screenshot scale and crop consistency
10. source / footnote placement
11. page density
12. PDF readability

Return a table:
semantic ID / PASS or FAIL / exact issue / exact correction.
Apply only failed corrections.
```

## Step 5. Handoff to Claude Code

각 selected design을 semantic ID로 저장한다.

```text
references/selected-designs/cover
references/selected-designs/introduction
references/selected-designs/d2d-problem
...
```

### Handoff prompt

```text
Prepare a Claude Code handoff bundle for the approved portfolio designs.

Include:
- final page assets
- editable text
- layout intent
- component hierarchy
- semantic IDs
- icon names
- workflow geometry
- spacing values
- screenshot crop instructions
- states and color semantics
- list of content that must not be reintroduced

Do not include alternative concepts.
Do not bundle stale drafts.
Do not replace editable text with raster images.
```

## Stop conditions

Claude Design 작업을 중단하고 확인해야 하는 경우:

- content-truth와 current HTML 수치가 충돌
- required screenshot이 없음
- design이 acceptance criteria를 만족하려면 copy를 새로 써야 함
- 한 페이지에서 8개 primary node를 초과
- title이 2줄을 넘기 위해 30px 아래로 줄어야 함
- blue focal group이 2개 이상 필요해 보임

이 경우 임의로 해결하지 말고 conflict를 보고한다.

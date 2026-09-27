# DESIGN.md

## Product

Name: Lumen Vows

Purpose: A refined wedding-photo collection workspace for reviewing, selecting, and shaping a couple's most meaningful images. The product should feel luminous, ceremonial, calm, and editorial rather than technical or futuristic.

Primary audience: Couples, wedding photographers, and planners who need to review a large wedding gallery without losing the emotional quality of the day.

## Skill-Driven Source Of Truth

This file is the authoritative design context for UI work in this project, following the oh-my-design skill model:

- `omd:apply`: Read this file before UI work and use these tokens before adding local styles.
- `omd:feel`: Motion, spacing, interaction states, contrast, and touch targets are product quality.
- `omd:microcopy`: Copy is warm, composed, and specific to preserving wedding memories.
- `omd:designer-review`: Audit finished UI against these tokens, states, responsive rules, and accessibility requirements.

## Brand Feel

Lumen Vows feels like entering a quiet, sunlit ceremony space. White and pearl surfaces create clarity; charcoal gives the interface structure; deep burgundy marks important actions and selected moments. The result should feel sacred without relying on religious ornament, and luxurious without gold-heavy decoration.

Principles:

- Gallery-first: Real wedding photographs are the dominant first-viewport signal.
- Luminous restraint: White space, clean lines, and soft daylight carry the atmosphere.
- Editorial hierarchy: Display typography is elegant; controls remain quiet and highly legible.
- Meaningful color: Burgundy is reserved for primary actions, progress, and selection.
- Gentle tactility: Hover, focus, pressed, loading, selected, and reduced-motion states are explicit but subtle.
- Calm density: A large photo set remains easy to scan, filter, and select.

## Tokens

Colors:

- Canvas: `#F7F7F4`
- Surface: `#FFFFFF`
- Pearl surface: `#EFEEE9`
- Ink: `#201C1C`
- Muted ink: `#746C69`
- Soft line: `#DDDAD3`
- Deep burgundy: `#7A2638`
- Burgundy hover: `#641D2D`
- Sage: `#788476`
- Muted gold: `#A58B62`

Color use:

- White and near-white surfaces dominate.
- Charcoal provides structure and readable contrast.
- Burgundy is the sole primary action and selection color.
- Sage and muted gold support metadata only.
- Avoid dark full-page backgrounds, neon accents, strong gradients, beige-heavy compositions, and decorative color blobs.

Typography:

- Use a restrained editorial serif stack for the brand, hero, and collection titles.
- Use the bundled Geist sans for controls, metadata, and body copy.
- H1: 52-72px desktop, 40-48px mobile, 1.02 line height, 0 letter spacing.
- Section headings: 18-26px, never hero-sized inside compact panels.
- Body: 15-17px with 1.55 line height.
- Metadata: 11-13px sans or mono, uppercase only for short labels.

Radius:

- Photo cards: 4px.
- Inputs and tool surfaces: 6px.
- Compact status tokens: 999px.
- Avoid oversized rounded containers.

Spacing:

- Page gutter: 20px mobile, 32px tablet, 48px desktop.
- Tool surface padding: 16-20px.
- Control gap: 8-12px.
- Gallery gap: 12px mobile, 16px desktop.
- Major section spacing: 48-72px.

Motion:

- Duration: 120ms for controls, 220ms for photo cards, 500ms for progress.
- Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Photo cards lift no more than 3px and reveal a soft charcoal shadow.
- Pressed controls translate 1px.
- Loading uses a calm progress sweep, never glow, pulse, or scan-line effects.
- Respect `prefers-reduced-motion`.

## Components

Collection brief:

- A compact description field helps shape or search the current collection.
- Primary action: "컬렉션 만들기".
- Secondary controls cover mood and photo grouping, using human language rather than model parameters.
- Focus rings use burgundy with a white separation ring.

Photo cards:

- Fixed 4:5 media areas prevent layout shift.
- Photographs occupy most of each card; titles and metadata remain compact.
- Selection is visible through a checked control and burgundy edge, not color alone.
- Hover reveals secondary actions; keyboard focus keeps them visible.

Selection summary:

- Shows selected count, total count, completion progress, and collection groups.
- The panel stays quiet and uses rules rather than decorative card stacking.

Toolbar:

- Use familiar icons for search, filter, grid density, favorite, selection, and sharing.
- Pair unfamiliar icons with tooltips or accessible labels.
- Avoid long command labels and technical generation vocabulary.

## Copy

Voice:

- Warm, composed, intimate, and specific.
- Prefer language about moments, light, people, and memory.
- Keep commands short.

Examples:

- "오래 남을 장면을 고르세요."
- "오늘의 컬렉션"
- "선택한 사진 보기"
- "자연스러운 순간"
- "빛과 표정을 기준으로 정리합니다"

Avoid:

- "GPU", "seed", "chaos", "rendering"
- "혁신적인 웨딩 경험"
- Long onboarding explanations in the first viewport

## Accessibility

- Text and controls meet WCAG AA contrast.
- Every interactive control has a visible focus state and accessible name.
- Touch targets are at least 44px where practical.
- Selection never relies on burgundy color alone; it includes a check mark and text/count feedback.
- The interface remains usable at 390px width.
- `prefers-reduced-motion` removes repeated animation and transforms.

## Responsive Rules

Desktop:

- First viewport pairs concise editorial copy with one large real wedding photograph.
- Collection controls sit directly below, followed by a sticky selection summary and four-column gallery.
- Leave a visible hint of the gallery in common laptop viewports.

Tablet:

- Hero remains two-column until content becomes cramped.
- Selection summary becomes a horizontal strip above a two-column gallery.

Mobile:

- Navigation simplifies, hero becomes one column, and controls stack.
- Gallery is one column with actions always visible.
- No overlapping fixed controls.

## Success Criteria

- The first viewport immediately reads as a sophisticated wedding-photo service.
- The page feels white, luminous, ceremonial, and modern, with restrained burgundy accents.
- Real wedding imagery is product content, not atmospheric decoration.
- Collection shaping, filters, selection progress, and a scannable photo list are present.
- Hover, focus, press, selected, loading, and reduced-motion states are implemented.
- Implementation passes production build and lint validation.

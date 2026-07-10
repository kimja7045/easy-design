# DESIGN.md

## Product

Name: Lumen Forge

Purpose: A cinematic image-generation workspace inspired by prompt-first creative tools. The product should feel fast, precise, and a little electric, with the prompt as the center of gravity.

Primary audience: Creative directors, solo founders, designers, and AI power users who want to explore image directions quickly without losing control.

## Skill-Driven Source Of Truth

This file is the authoritative design context for UI work in this project, following the oh-my-design skill model:

- `omd:apply`: Every screen reads this file first and uses these tokens before inventing local styles.
- `omd:feel`: Motion, spacing, interaction states, contrast, and touch targets are treated as product quality, not decoration.
- `omd:microcopy`: Copy is short, concrete, and command-oriented.
- `omd:designer-review`: Finished UI should be auditable against these tokens, states, and accessibility rules.

## Brand Feel

Lumen Forge feels like a late-night creative lab: dark, focused, image-rich, and responsive. It should avoid generic SaaS calmness. The energy comes from tactile controls, strong visual previews, crisp type, and small motion cues.

Principles:

- Prompt-first: The prompt composer is always prominent.
- Image-native: The first viewport must show generated visual outcomes, not marketing copy.
- Controlled magic: Use glow and depth sparingly, anchored by clear controls and readable hierarchy.
- Dense but breathable: Show many creative options without turning the page into a dashboard.
- Every state speaks: Hover, focus, pressed, loading, selected, and reduced-motion states must be explicit.

## Tokens

Colors:

- Canvas: `#090A0F`
- Surface: `#11131B`
- Surface raised: `#171A24`
- Ink: `#F4F7FB`
- Muted ink: `#9BA6B6`
- Soft line: `rgba(255, 255, 255, 0.11)`
- Electric cyan: `#50E3FF`
- Signal green: `#82F7B7`
- Solar amber: `#FFCF6B`
- Coral: `#FF6F91`
- Violet: `#8D7CFF`

Color use:

- Dark neutrals should dominate.
- Cyan and green are action/status colors.
- Amber and coral are accent colors for variation, not backgrounds.
- Avoid a page that reads as all-purple, all-blue, beige, or espresso.

Typography:

- Use the bundled Geist sans for interface text.
- Use Geist Mono for metadata, counters, model IDs, ratios, and keyboard-like labels.
- H1: 56-72px desktop, 38-44px mobile, 0 letter spacing, 0.95-1.02 line height.
- Section headings: 14-18px, medium weight, never hero-sized inside panels.
- Body: 15-17px with 1.5 line height.
- Metadata: 11-13px mono.

Radius:

- Repeated cards: 8px.
- Inputs and tool surfaces: 8px.
- Pills/chips: 999px only for compact selectable tokens.
- Avoid large rounded cards.

Spacing:

- Page gutter: 24px mobile, 32px tablet, 48px desktop.
- Panel padding: 16-20px.
- Control gap: 8-12px.
- Major grid gap: 16px.

Motion:

- Duration: 140ms for controls, 220ms for cards, 650ms for ambient shimmer.
- Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Hover cards lift 4px max and brighten line/glow.
- Pressed controls translate 1px and reduce shadow.
- Loading should use progress, shimmer, or scan-line motion.
- Respect `prefers-reduced-motion`.

## Components

Prompt composer:

- Large textarea-like prompt field with visible cursor affordance.
- Primary action: "Generate".
- Secondary controls: model, aspect ratio, mood, seed, chaos.
- Must include focus ring and keyboard-friendly controls.

Style chips:

- Selected state uses a filled or glowing edge, not just color text.
- Hover state changes background and border.
- Pressed state scales subtly.

Generation queue:

- Shows status, progress, estimated time, and selected model.
- Loading state must be visible without relying on text alone.

Image cards:

- Fixed aspect ratios to prevent layout shift.
- Include visual artwork, title, prompt fragment, metadata, and action buttons.
- Hover reveals actions; focus keeps actions visible.

Toolbar:

- Compact, icon-like or short-text commands.
- Avoid long explanatory labels.

## Copy

Voice:

- Sharp, specific, lightly cinematic.
- Prefer active verbs.
- Avoid hype without function.

Examples:

- "Shape the next frame."
- "Lock seed"
- "Remix"
- "Upscale"
- "Vary"
- "Drafting light maps"

Avoid:

- "Revolutionize your workflow"
- "Unleash creativity"
- Long onboarding explanations in the first viewport

## Accessibility

- Text contrast should meet WCAG AA.
- Interactive controls need visible focus states.
- Touch targets should be at least 44px high when practical.
- Do not rely on color alone for status.
- The interface must remain usable on 390px mobile width.
- `prefers-reduced-motion` disables ambient transforms and repeated animation.

## Responsive Rules

Desktop:

- Two-zone layout: large prompt/preview workbench plus image grid.
- Keep a hint of the generation feed visible in the first viewport.

Tablet:

- Collapse to a single column with the composer first, then queue, then gallery.

Mobile:

- Prompt composer stays near the top.
- Controls wrap into rows.
- Image cards are one column.
- No overlapping fixed elements.

## Success Criteria

- First viewport immediately communicates "image-generation workspace".
- Prompt input, style selection, generation queue, and output gallery are all present.
- Micro-interactions exist for hover, focus, press, selected, and loading states.
- Visual output appears as real product content, not decoration.
- Implementation can be validated with a production build.

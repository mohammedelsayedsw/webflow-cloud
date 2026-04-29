# School Photography Commerce · Webflow handoff

This package contains everything needed to rebuild the page at **https://lp-v2-zeta.vercel.app** inside Webflow.

Keep the live URL open while you build — it's the pixel-perfect source of truth. This package just saves you the tedium of extracting SVGs, digging for copy, and translating design tokens.

---

## What's in this folder

| Path | Use |
|---|---|
| `README.md` | This file — read first. |
| `copy.md` | All on-page copy, structured by section. Paste directly. |
| `tokens.md` | Colors, fonts, type scale, spacing, radii. Set these up in Webflow's style guide first. |
| `svgs/` | 7 standalone SVG files for the custom illustrations. Upload to Webflow assets, drop into Embed blocks, or use as background images. These already have final-state visuals — animations are nice-to-have, not required. |
| `assets/logos/` | Client trust-bar logos (transparent PNGs + SVGs). Already monochrome-friendly — use CSS filter `brightness(0) invert(1)` to render them white on dark sections. |

---

## Stack on the source page (for reference only)

- **Framework**: Next.js 16 + Tailwind v4. You do **not** need this — you're rebuilding in Webflow.
- **Fonts**: Golos Text (headings, weight 700) · Inter (body) · JetBrains Mono (small labels). All three are in Google Fonts — add via Webflow's font settings.
- **Motion library**: `motion/react` (Framer Motion). Animations are scroll-triggered fade-ins and SVG path draws. In Webflow, you can replicate these with Webflow Interactions or skip them entirely — the page works without animation.

---

## Section order (locked — do not reshuffle)

Alternating dark ↔ bright canvas. Never two same-theme sections in a row.

| # | Section | Theme | Notes |
|---|---|---|---|
| 1 | Nav | dark | scandiweb white wordmark, right-aligned outline CTA. |
| 2 | Hero | dark | Left: copy + "scroll to discover" indicator. Right: **product spec card** (numbered module list, 3 stat tiles). |
| 3 | AcceleratorAtAGlance | bright | Left: module architecture stack with platform tags. Right: dark-tile spec sheet. |
| 4 | ProblemFires | dark | 3 "fire" cards in a row + big client pullquote with quote-marks SVG. |
| 5 | Differentiator | bright | Left: 3 numbered architecture decisions (white chip + blue border). Right: entity schema SVG (`svgs/entity-schema.svg`). |
| 6 | Outcomes intro | dark | Big H2 + 3 stat tiles + 6-chip anchor-linked index strip. |
| 7 | Outcome 01 · Portal | dark | Diagram: `svgs/portal-chart.svg`. |
| 8 | Outcome 02 · Cron | bright (dark tile) | Diagram: `svgs/cron-schedule.svg`. |
| 9 | Outcome 03 · Data graph | dark | Diagram: `svgs/data-graph.svg`. |
| 10 | Outcome 04 · ID card | bright (dark tile) | Diagram: `svgs/id-card.svg`. |
| 11 | Outcome 05 · SSO + audit | dark | Diagram: `svgs/sso-audit.svg`. |
| 12 | Outcome 06 · Integration | bright (dark tile) | Diagram: `svgs/legacy-integration.svg`. |
| 13 | ReferenceCase · Advanced Life | dark | Named client section — 3 fires + 4 big stats. |
| 14 | AcceleratorValue | bright | 12–18 mo vs 14 wk card pair. The "WITH" card is a premium dark tile with blue ambient glow — that's the visual hero of the comparison. |
| 15 | Testimonials | dark | 2 quote cards (Jon + David), mint and blue accent bars. |
| 16 | HowWeWork | bright | 3 premium dark tiles, accent stripes (blue / mint / grey). |
| 17 | WhatShips | dark | 5-item deliverables manifest list ("Around the code"). |
| 18 | FAQ | dark | Accordion. Use Webflow's native accordion or `<details>/<summary>`. |
| 19 | CTA | dark | Form + Kristaps quote card with real headshot at `assets/team/kristaps.png`. |
| 20 | Footer | dark | Minimal — links + copyright. |

**Note**: 4 inline CTA rows are scattered through the middle (after AcceleratorAtAGlance, after the 6 outcomes, after AcceleratorValue, after WhatShips). All link to `#cta`. Spec in `copy.md` → "Mid-page CTAs" section.

---

## Non-negotiable brand rules

These apply everywhere on the page. Do not drift.

1. **Fonts**: Golos Text 700 for all H1–H5. Inter for body. JetBrains Mono for small uppercase labels ("OUTCOME · 02", 11 px, letter-spacing 0.14 em).
2. **CTAs are outline-only**. Dark bg → 1 px beige stroke + beige text, transparent fill; hover fills with beige, text flips to black. Light bg → 1 px blue stroke + blue text; hover fills with blue, text flips to white. **Never fill a CTA with red.**
3. **Red (`#E04F4F`) is diagrams-only**. No red text, no red buttons, no red labels outside the SVG illustrations.
4. **No shadows anywhere**. Use subtle borders and inner edge highlights (1px rings) instead.
5. **Radius**: 2 px (buttons, small chips), 4 px (cards). Nothing rounder.
6. **No periods at the end of headings, titles, or bullets**. Sentence case OK, period at the end forbidden.
7. **Highlighted words in headlines**: 1–3 words max. Blue on light bg, mint green on dark bg.
8. **Widow prevention**: Already handled via `text-wrap: balance` on headings in the source. In Webflow, manually add `&nbsp;` between the last two words of any heading that drops a single word onto a new line.
9. **Wordmark**: always lowercase "scandiweb" (even at sentence start). "eCommerce" when written out.

---

## How to actually build this in Webflow

Suggested order:

1. **Style guide first** — open `tokens.md`, set up Webflow's color swatches and text styles to match. Spend 20 minutes here; it saves hours downstream.
2. **Build the Hero section** — that locks in the dark gradient treatment, the trust bar pattern, and the H1 scale. Every other dark section reuses these.
3. **Build the AcceleratorAtAGlance section** — locks in the bright `bg-lp-bright` gradient and the dark-tile-on-light pattern that recurs across outcomes 02/04/06, HowWeWork, and the WITH accelerator card.
4. **Outcomes** — six structurally identical sections. Build one (`OutcomeBlockRow`), then clone and swap diagram + copy. Use `Symbols` in Webflow so copy edits are one-touch.
5. **Testimonials + HowWeWork + WhatShips** — each has its own card pattern but shares type scale and color tokens.
6. **FAQ + CTA + Footer** — small, last.

---

## SVGs — how to use them

Each file in `svgs/` is a self-contained SVG with the final visual state baked in (no motion, no React). Three ways to use them in Webflow:

- **Easiest**: upload to your asset library, drop as an `<img src>` element. Loses the ability to animate but keeps it crisp at any size.
- **Better**: paste the SVG markup into an Embed block. Lets you hook Webflow Interactions to specific `<path>` elements if you want to add your own animations.
- **If you want the original path-draw animations**: the source uses `motion/react` with `pathLength` animations. In Webflow this would be a custom Lottie file or GSAP embed. Not necessary for v1 — the page reads fine without.

All SVGs are designed to sit on **dark tiles** (even inside bright sections). If you place one directly on a light background, the white text and light rails will vanish. Keep them inside a dark container.

---

## Trust bar logos

In `assets/logos/`. All have transparent backgrounds and render correctly when the image has CSS `filter: brightness(0) invert(1)` applied — gives you a clean white silhouette on dark sections.

| Logo | Height (px) | Notes |
|---|---|---|
| PUMA | 30 | Bumped slightly larger than others. |
| Boy Scouts of America | 28 | Shield+wordmark lockup needs the extra height. |
| Olympus / OM Digital Solutions | 24 | Diagonal lockup — slightly larger than base. |
| NYT, Samsung, Acer, Adobe | 22 | Standard size. |

---

## Questions / ambiguity

If anything in this package contradicts the live URL, **trust the live URL**. The package is generated from code; the live page is what ships.

For voice, tone, and copy questions, consult:
- scandiweb writing guide: `Demand-K/branding/writing-guide.md`
- scandiweb tone of voice: `Demand-K/branding/tone-of-voice.md`
- Canonical design system: `Demand-K/branding/design-system.md` (regenerated from Figma node `30636:5948`, file `SW_INT_UX-UI_scandiweb_v7`).

Ping Kristaps if you hit an ambiguity that blocks you. Better to ask than to guess.

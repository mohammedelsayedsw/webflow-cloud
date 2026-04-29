# Design tokens

Set these up in Webflow's style guide **before** you build any sections. Everything downstream reuses these values.

Canonical source: Figma `SW_INT_UX-UI_scandiweb_v7` → node `30636:5948` ("AI Prompt Styles"). Figma wins any conflict.

---

## Colors

### Brand

| Name | Hex | Use |
|---|---|---|
| `--sw-black` | `#10132c` | Page base · dark-section bg · primary text on light bg |
| `--sw-white` | `#ffffff` | Primary text on dark bg · H1–H5 color |
| `--sw-blue` | `#3f4aaf` | Primary accent · interactive · bright-section highlights · blue FK rows |
| `--sw-mint` | `#6ef76e` | Positive / live indicator · dark-section highlights |
| `--sw-orange` | `#ff5a31` | Secondary accent (used lightly — PK chips in entity schema) |
| `--sw-red` | `#e04f4f` | **Diagrams only.** Never UI. |
| `--sw-beige` | `#f8f4ef` | Warm surface token · card fills |
| `--sw-light-grey` | `#dadcf1` | Muted body text on dark · secondary highlights |
| `--sw-dark-grey` | `#7e83a0` | Muted labels |

### Section backgrounds

Dark sections use flat `#10132c`. A few dark sections add radial glow overlays — see specific section notes.

Bright sections use a **layered gradient** (the `.bg-lp-bright` utility). Don't use flat beige — it reads cheap. The gradient is:

```css
background:
  radial-gradient(1200px 780px at 12% -8%, rgba(63, 74, 175, 0.08) 0%, rgba(63, 74, 175, 0) 55%),
  radial-gradient(900px 650px at 100% 110%, rgba(16, 19, 44, 0.05) 0%, rgba(16, 19, 44, 0) 55%),
  linear-gradient(180deg, #ffffff 0%, #f9f8f4 55%, #f0eee8 100%);
```

Paste this into Webflow as a custom CSS class `.bg-lp-bright` and apply to every bright section.

### Foreground tones (dark sections)

| Token | Value | Use |
|---|---|---|
| Body | `#e6e7ef` | Main body text on dark |
| Muted | `rgba(255, 255, 255, 0.75)` | Secondary body text |
| Dim | `rgba(255, 255, 255, 0.55)` | `.label-code` labels on dark |
| Subtle | `rgba(255, 255, 255, 0.12)` | Borders, hairlines |

### Foreground tones (bright sections)

| Token | Value | Use |
|---|---|---|
| Body | `#10132c` (sw-black) | Main text |
| Muted | `rgba(16, 19, 44, 0.7)` | Secondary body |
| Dim | `rgba(16, 19, 44, 0.55)` | `.label-code` labels on light |
| Subtle | `rgba(16, 19, 44, 0.1)` | Borders, hairlines |

---

## Typography

### Font families

Add all three in Webflow's font settings. All available from Google Fonts.

| Name | Weights needed | Use |
|---|---|---|
| **Golos Text** | 700 (some 600) | All H1–H5 · buttons · stat numbers |
| **Inter** | regular, 500, 600 | Body text |
| **JetBrains Mono** | regular, 700 | Small uppercase labels, code fragments in SVGs |

### Type scale

Use `clamp()` for fluid sizing between mobile and desktop where possible. Webflow's responsive breakpoints can approximate this.

| Style | Mobile | Desktop | Weight | Line-height | Tracking |
|---|---|---|---|---|---|
| H1 (Hero) | 44 px | 88 px | Golos Text 700 | 1.02 | −0.015 em |
| H2 (section headers) | 34 px | 60–64 px | Golos Text 700 | 1.05 | −0.01 em |
| H3 (outcome titles) | 28 px | 48 px | Golos Text 700 | 1.05 | −0.01 em |
| H4 (card titles) | 20 px | 22 px | Golos Text 700 | 1.15 | default |
| H5 (small card titles) | 16 px | 18 px | Golos Text 700 | 1.25 | default |
| Body large (lede) | 16 px | 18 px | Inter regular | 1.55 | default |
| Body | 14 px | 15 px | Inter regular | 1.55 | default |
| Body small | 13 px | 14 px | Inter regular | 1.5 | default |
| `.label-code` | 11 px | 11 px | JetBrains Mono regular | 1 | 0.14 em, **uppercase** |

### Label code — critical pattern

Used everywhere for section eyebrows ("OUTCOME · 03", "FIG.02 · Data model", "TRUST BAR", etc.).

```css
.label-code {
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);  /* on dark */
  /* or rgba(16, 19, 44, 0.55); on light */
}
```

---

## Spacing (8 px base)

Use this scale for all margins, paddings, gaps. Don't invent intermediate values.

`4, 8, 12, 16, 20, 24, 32, 40, 48, 60, 80, 100, 120`

Section vertical padding: `py-28` (112 px) mobile, `py-36`–`py-40` (144–160 px) desktop.

Content wrap:
```css
max-width: 1280px;
margin: 0 auto;
padding-left: clamp(1.25rem, 4vw, 3rem);
padding-right: clamp(1.25rem, 4vw, 3rem);
```

---

## Border radii

Only three values, anywhere on the page:

| Token | Value | Use |
|---|---|---|
| `radius-sm` | 2 px | Buttons, small chips, tag pills |
| `radius-md` | 4 px | Cards, tiles, larger surfaces |
| `rounded-full` | full | Number chips (01, 02, 03 in Differentiator) |

**No larger radii anywhere.** If it looks round, it's wrong.

---

## Shadows

**None.** The source uses zero shadows anywhere. The premium depth comes from:

- 1 px inner-edge highlights (e.g. `inset 0 1px 0 rgba(255,255,255,0.16)` on glass cards)
- 1 px outer rings (`0 0 0 1px rgba(255,255,255,0.12)`)
- Layered gradients
- Corner tick marks
- Dark tiles on bright sections

Replicate these in Webflow via custom CSS on classes — Webflow's native shadow controls will tempt you to add drop-shadows. Resist.

---

## Widow prevention

Headings (`h1`–`h5`) should never leave a single word orphaned on the last line.

The source applies globally:
```css
h1, h2, h3, h4, h5 {
  text-wrap: balance;
  overflow-wrap: break-word;
}
p, blockquote {
  text-wrap: pretty;
}
```

Add these as custom CSS in Webflow's site-wide embed. Then spot-check every heading at 375 px and 1440 px — if a single word still drops alone, manually insert `&nbsp;` between the last two words in Webflow's rich-text editor.

---

## Animation & interaction

**Optional for v1.** The page works without any animation. If you want to add them:

- **Scroll reveal**: most sections fade-and-slide up as they enter the viewport. In Webflow, use the "Scroll into view" trigger with a small Y-offset (12 px) and 0.5 s duration.
- **Path draw**: many SVGs have lines that draw in on scroll. In Webflow, this needs Lottie or a GSAP embed. Skip for v1 — static SVGs read fine.
- **Pulsing dots**: green "live" indicator next to "Accelerator v1 · production" and similar labels. Use CSS `@keyframes` with `box-shadow` pulse.

If you want to add animations post-launch, prioritize the three that add the most: (a) pulse-green indicator, (b) number count-up on stat tiles, (c) line-draw on section dividers.

---

## Breakpoints

Follow scandiweb's spec:

`320 / 375 / 414 / 768 / 1024 / 1440`

Webflow's default breakpoints are close enough — `Mobile portrait (478px)`, `Mobile landscape (767px)`, `Tablet (991px)`, `Desktop (default)`, `Large (1280px+)`. Just test at 375, 768, and 1440 as your three critical widths.

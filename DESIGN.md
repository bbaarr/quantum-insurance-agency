---
name: "Quantum Insurance Agency"
description: "A Hebrew, right-to-left website introducing Quantum’s financial planning, pension, retirement and insurance services."
colors:
  background: "oklch(0.97 0.015 238)"
  foreground: "oklch(0.2 0.035 252)"
  card: "oklch(0.99 0.008 238)"
  card-foreground: "oklch(0.2 0.035 252)"
  popover: "oklch(0.99 0.008 238)"
  popover-foreground: "oklch(0.2 0.035 252)"
  primary: "oklch(0.24 0.045 252)"
  primary-foreground: "oklch(0.98 0.008 238)"
  secondary: "oklch(0.92 0.025 236)"
  secondary-foreground: "oklch(0.24 0.045 252)"
  muted: "oklch(0.94 0.018 238)"
  muted-foreground: "oklch(0.46 0.035 252)"
  accent: "oklch(0.84 0.065 225)"
  accent-foreground: "oklch(0.19 0.04 252)"
  destructive: "oklch(0.55 0.2 25)"
  border: "oklch(0.84 0.025 242)"
  input: "oklch(0.84 0.025 242)"
  ring: "oklch(0.68 0.09 225)"
  sidebar-ring: "oklch(0.68 0.09 225)"
  sidebar-border: "oklch(0.84 0.025 242)"
  sidebar-accent-foreground: "oklch(0.24 0.045 252)"
  sidebar-accent: "oklch(0.92 0.025 236)"
  sidebar-primary-foreground: "oklch(0.98 0.008 238)"
  sidebar-primary: "oklch(0.24 0.045 252)"
typography:
  display:
    fontFamily: "System sans, bold weights with tight tracking."
  body:
    fontFamily: "System sans with relaxed line-height."
  mono:
    fontFamily: "ui-monospace, \"SF Mono\", SFMono-Regular, Menlo, Consolas, monospace"
rounded:
  sm: "calc(var(--radius) * 0.6)"
  md: "calc(var(--radius) * 0.8)"
  lg: "0.25rem"
  xl: "calc(var(--radius) * 1.4)"
  2xl: "calc(var(--radius) * 1.8)"
  3xl: "calc(var(--radius) * 2.2)"
  4xl: "calc(var(--radius) * 2.6)"
---

<!-- Generated from .project/DESIGN_SYSTEM.md + app/globals.css by the engine. Tokens above are normative and mirror the CSS; edit the CSS and DESIGN_SYSTEM.md, not this file. -->

## Overview

Bright financial folio: warm-white reading surfaces, occasional deep navy sections, restrained bronze details and Quantum’s ice-blue mark. Hebrew-first and fully right-to-left, with generous spacing, strong headings, crisp rules and a restrained geometric Q motif. Borrow the airy color balance, not another agency’s page structure or content.

## Colors

| Token | Value |
| background | Warm white `oklch(0.99 0.004 82)` |
| surface | Soft linen `oklch(0.96 0.006 80)` |
| dark section | Deep navy `oklch(0.13 0.018 254)` |
| elevated dark surface | `oklch(0.18 0.021 254)` |
| text | Deep navy `oklch(0.13 0.018 254)` |
| secondary text | Muted slate `oklch(0.46 0.018 252)` |
| light border | Warm gray `oklch(0.87 0.008 78)` |
| dark border | Navy slate `oklch(0.34 0.025 250)` |
| accent | Restrained bronze `oklch(0.64 0.065 65)` |
| brand marker | Ice blue `oklch(0.76 0.12 225)` |
| secondary brand blue | `oklch(0.61 0.16 255)` |
| danger | High-contrast semantic red `oklch(0.55 0.2 25)` |

Declared in `globals.css` as `--color-*` and mirrored in the frontmatter. Use the token, never a raw hex.

## Typography

- Headings: System sans, bold weights with tight tracking.
- Body: System sans with relaxed line-height.
- Labels: System monospace, used sparingly for numbered wayfinding and service markers.
- Set page language to Hebrew and default direction to RTL; isolate email, phone and domain strings in LTR.

- Display: `System sans, bold weights with tight tracking.`
- Body: `System sans with relaxed line-height.`
- Mono: `ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace`

## Layout

- Near-square corners, hairline dividers and generous section spacing; no glass effects or decorative shadows.
- Shared components: semantic links, service rows, native disclosure details, accessible sheet navigation and contact actions.
- Use the official supplied Quantum logo; pair it with the brand name in real text rather than redrawing it.
- The Q motif is a quiet layout detail, not a substitute for service content.
- Scroll motion is limited to small, one-time section reveals; disable it for visitors who prefer reduced motion.

## Shapes

Radii: `sm` calc(var(--radius) * 0.6), `md` calc(var(--radius) * 0.8), `lg` 0.25rem, `xl` calc(var(--radius) * 1.4), `2xl` calc(var(--radius) * 1.8), `3xl` calc(var(--radius) * 2.2), `4xl` calc(var(--radius) * 2.6)

## Do's and Don'ts

- Voice: Plain, confident and specific. Explain what can be reviewed; never promise a return, income or insurance result. Coverage depends on underwriting, applicable law and the issued policy.

- Do load faces through Fontsource, not `next/font/google`.
- Don't introduce a colour or radius that isn't a token above.
- Don't use gradient text, or a purple/violet gradient as the brand signal.
- Don't use bounce or elastic easing; real objects decelerate smoothly.

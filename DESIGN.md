---
name: "Quantum Insurance Agency"
description: "A responsive website introducing Quantum’s family financial planning, pension, retirement and insurance services."
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

Night-shift insurance folio: deep navy fields, ice-blue markers, sharp rules, oversized headlines and a restrained geometric Q motif.

## Colors

| Token | Value |
| background | Cool ice white, `oklch(0.97 0.015 238)` |
| surface | Near-white blue, `oklch(0.99 0.008 238)` |
| text / muted | Deep navy `oklch(0.2 0.035 252)` / slate `oklch(0.46 0.035 252)` |
| border | Blue-gray `oklch(0.84 0.025 242)` |
| primary | Ink navy `oklch(0.24 0.045 252)` |
| accent | Ice blue `oklch(0.84 0.065 225)` |
| success / warning / danger | Keep semantic and high-contrast; danger `oklch(0.55 0.2 25)` |

Declared in `globals.css` as `--color-*` and mirrored in the frontmatter. Use the token, never a raw hex.

## Typography

- Headings: System sans, bold weights with tight tracking.
- Body: System sans with relaxed line-height.
- Labels: System monospace, uppercase and tracked sparingly.

- Display: `System sans, bold weights with tight tracking.`
- Body: `System sans with relaxed line-height.`
- Mono: `ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace`

## Layout

- Radius / shadow / spacing rhythm: 4px corners, hairline dividers, large section spacing, no glass or decorative shadows.
- Shared components: semantic links, service rows, native disclosure details and contact actions.

## Shapes

Radii: `sm` calc(var(--radius) * 0.6), `md` calc(var(--radius) * 0.8), `lg` 0.25rem, `xl` calc(var(--radius) * 1.4), `2xl` calc(var(--radius) * 1.8), `3xl` calc(var(--radius) * 2.2), `4xl` calc(var(--radius) * 2.6)

## Do's and Don'ts

- Voice: Plain, confident and specific. Explain what can be reviewed; never promise a return, income or insurance result.

- Do load faces through Fontsource, not `next/font/google`.
- Don't introduce a colour or radius that isn't a token above.
- Don't use gradient text, or a purple/violet gradient as the brand signal.
- Don't use bounce or elastic easing; real objects decelerate smoothly.

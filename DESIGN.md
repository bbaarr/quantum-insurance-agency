---
name: "workspace"
description: "Build a simple fast responsive edgy professional website for Quantum insurance agency based on the attached five-page PDF and parsed text in this conversation. User wants easy access, good-looking edgy design, WhatsApp chat button, mail button, and client enquiry details sent directly to their email without managing any database or server or storing leads in a site DB. Use a lightweight static-first design, no accounts, CRM, database, analytics tracking, or lead persistence. Automatic form delivery must use an appropriate email/form delivery service; do not falsely present mailto as automatic delivery and do not claim zero third-party retention. Ask user for missing recipient email and WhatsApp phone with country code and any required delivery setup via waiting_for_input. They own a domain but have not provided hostname; create preview only, do not publish or connect domain. Site language English following user's request language, translate source Hebrew accurately and retain QUANTUM brand and recognizable Q logo appearance from attached PDF where feasible. Content: five service areas financial planning for family wellbeing (holistic savings investments pensions assets liabilities, personal goals, alternatives, periodic followup); pension planning (mapping active/frozen plans, deposits balances investment tracks fees coverage and adapting to family/employment changes); retirement planning (future income sources, assets liabilities, goals budget cashflow, taxation topics and referral to relevant professionals); personal insurance and risk protection (life/mortgage life, health subject to policy, loss of earning ability, critical illness, personal accident, longterm care where available); general/property insurance (car compulsory third party comprehensive, home structure contents, business, third-party liability, professional liability, appropriate extensions exclusions deductibles coverage limits). Preserve qualifications: no guaranteed savings returns or maximum income, insurance subject to policy underwriting and law; actual coverage only per issued policy. Do not invent credentials testimonials statistics contact details or business address. Simple homepage with strong hero, easy service navigation, readable service detail sections or pages, process, relevant concise FAQ grounded in PDF, contact section and prominent repeated contact links. Edgy premium visual approach charcoal/navy, ice-blue accent from logo, bold typography sharp layouts ample whitespace subtle geometric Q motifs, minimal motion respect reduced-motion, accessible contrast keyboard labels. Optimize mobile performance avoid heavy video and dependencies. Form minimal name phone email service interest optional message, validation clear real success/error states and consent to contact; do not collect sensitive financial information. Ask necessary setup questions rather than fabricate functional destinations."
typography:
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, \"Liberation Mono\", monospace"
rounded:
  sm: "calc(var(--radius) * 0.6)"
  md: "calc(var(--radius) * 0.8)"
  lg: "0.625rem"
  xl: "calc(var(--radius) * 1.4)"
  2xl: "calc(var(--radius) * 1.8)"
  3xl: "calc(var(--radius) * 2.2)"
  4xl: "calc(var(--radius) * 2.6)"
---

<!-- Generated from .project/DESIGN_SYSTEM.md + app/globals.css by the engine. Tokens above are normative and mirror the CSS; edit the CSS and DESIGN_SYSTEM.md, not this file. -->

## Overview

**No visual direction has been committed for workspace yet.** The project is still on the starter's placeholder palette — shadcn's default neutral, every colour zero-chroma — so it is deliberately NOT listed above as a token set to respect. Treat this project as greenfield: decide the world, then write the palette into `globals.css`, and this file will state it from the next turn onward.

## Colors

| Token | Value |

## Typography

- Headings:
- Body:

- Mono: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`

## Layout

- Radius / shadow / spacing rhythm:
- Shared components:

## Shapes

Radii: `sm` calc(var(--radius) * 0.6), `md` calc(var(--radius) * 0.8), `lg` 0.625rem, `xl` calc(var(--radius) * 1.4), `2xl` calc(var(--radius) * 1.8), `3xl` calc(var(--radius) * 2.2), `4xl` calc(var(--radius) * 2.6)

## Do's and Don'ts

- Do load faces through Fontsource, not `next/font/google`.
- Do write the direction's palette into `globals.css` as the token block; keep the token NAMES, replace the values.
- Don't use gradient text, or a purple/violet gradient as the brand signal.
- Don't use bounce or elastic easing; real objects decelerate smoothly.

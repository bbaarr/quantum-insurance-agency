<!-- Generated from .project/PROJECT.md by the engine — do not run `impeccable init`, which would interview a user who isn't here. Edit .project/PROJECT.md; this file is regenerated from it. -->
# Quantum Insurance Agency

**Platform:** Responsive web — Next.js, React, Tailwind. shadcn/ui and lucide are installed and available; the direction decides whether they fit or whether this surface needs its own vocabulary.
**Task mode:** Operate (pass as `--mode operate` to any script)

## What this is

A Hebrew, right-to-left website introducing Quantum’s financial planning, pension, retirement and insurance services.

## What it enables

Help prospective clients understand Quantum’s services and contact the agency directly by email, phone or WhatsApp.

## Primary user

Individuals and families reviewing financial goals, pensions, retirement plans or insurance cover; businesses seeking property or liability cover.

## What exists today

Responsive Hebrew homepage and five individual service pages, plus a contact page. - Floating contents navigation for site pages and in-page sections. - Supplied Quantum logo, mostly light neutral styling with selective navy sections, warm bronze details and Quantum blue accents. - Direct email and office-phone links, plus a persistent WhatsApp shortcut using the separately confirmed +972 mobile number. - Restrained section reveals as visitors scroll, disabled when reduced motion is preferred. - Enquiry form sends to office@quantum-ins.co.il through Imagine’s managed email service, with validation and pending, success and error states. - The site does not store enquiry records or use Formspree; message delivery is handled by Imagine’s email service. - Preview only; the domain is not connected.

## Brand commitments & durable constraints

Keep the site lightweight and static-first; no database, CRM, analytics tracking or account system. - Do not claim guaranteed investment returns, retirement income or insurance outcomes. - Insurance coverage is governed by underwriting, applicable law and the issued policy. - Do not invent credentials, testimonials, metrics or a business address. - Do not report an enquiry as sent unless the external email service accepts it. - Do not publish the site or connect the domain without an explicit request.

- **This project already HAS a committed visual world — do NOT offer a design picker.** `.project/DESIGN_SYSTEM.md` records a direction someone decided on, and the code, tokens and components are built around it. Read it, inherit it, and make the requested change inside it. Dealing six alternative worlds here offers to throw away a working design system nobody asked you to replace.
- **Tailoring is not redesigning.** "Make it about my business", new copy, a different logo, swapped imagery, a brand colour — all of that lands INSIDE the committed world. Change what was asked for and leave the direction alone.
- **The one exception is an explicit, whole-app redesign** — the user asking for a different look outright, not merely a change that happens to be large. Then the direction is open again and the picker applies. When they name the new direction themselves, that is the decision: pin it and build, still without a picker.
- Never run `impeccable serve-question`, with any flag (`--schema` included). It is disabled in this sandbox and always fails. Ask only through the design-picker command, and only when the instructions above say the user is choosing.
- Design tooling is one launcher, `scripts/impeccable <verb>` in the skill folder (`build-phase status`, `concept-seed`, and so on). The `node …/scripts/*.mjs` files from older versions do not exist here; never run one.
- The user's own words always outrank the roll. A direction, palette, face or reference they named is pinned; the roll only decides what they left open.
- Two review rounds is the budget, then ship and report open items honestly under the reviewer's own verdict — never announce a table with open findings as a pass.
- Web fonts load through Fontsource, never `next/font/google` — this sandbox has no Google egress, so the fetch hangs at compile and the preview renders blank.
- No AI-builder badge, watermark, or attribution anywhere in the product.
- Decisions recorded in `.project/` (ledger, DESIGN_SYSTEM.md) are commitments; contradict one only when the user asks.

## Positioning

A Hebrew, right-to-left website introducing Quantum’s financial planning, pension, retirement and insurance services.

## Operating Context

Responsive web, built unattended in one pass. Task mode: Operate.

## Evidence on Hand

Responsive Hebrew homepage and five individual service pages, plus a contact page. - Floating contents navigation for site pages and in-page sections. - Supplied Quantum logo, mostly light neutral styling with selective navy sections, warm bronze details and Quantum blue accents. - Direct email and office-phone links, plus a persistent WhatsApp shortcut using the separately confirmed +972 mobile number. - Restrained section reveals as visitors scroll, disabled when reduced motion is preferred. - Enquiry form sends to office@quantum-ins.co.il through Imagine’s managed email service, with validation and pending, success and error states. - The site does not store enquiry records or use Formspree; message delivery is handled by Imagine’s email service. - Preview only; the domain is not connected.

## Product Principles

- Clarity of the task beats decoration; the interface earns attention only where the product does.
- Say what is true: no invented prices, customers, benchmarks or capabilities the product does not have.

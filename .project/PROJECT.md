<!-- OWNER: Build (with the user) · READERS: every agent · READ THIS FIRST -->
# Quantum Insurance Agency

**One-liner:** A Hebrew, right-to-left website introducing Quantum’s financial planning, pension, retirement and insurance services.

## Goal
Help prospective clients understand Quantum’s services and contact the agency directly by email, phone or WhatsApp.

## Target users
Individuals and families reviewing financial goals, pensions, retirement plans or insurance cover; businesses seeking property or liability cover.

## Status
- Stage: preview
- Live URL: —
- Repo: —

## What exists today
<!-- Kept current by the Build agent after each build -->
- Responsive Hebrew homepage and five individual service pages, plus a contact page.
- Floating contents navigation for site pages and in-page sections.
- Supplied Quantum logo, mostly light neutral styling with selective navy sections, warm bronze details and Quantum blue accents.
- Direct email and office-phone links, plus a persistent WhatsApp shortcut using the separately confirmed +972 mobile number.
- Restrained section reveals as visitors scroll, disabled when reduced motion is preferred.
- Enquiry form sends to office@quantum-ins.co.il through Imagine’s managed email service, with validation and pending, success and error states.
- The site does not store enquiry records or use Formspree; message delivery is handled by Imagine’s email service.
- Preview only; the domain is not connected.

## Constraints / must-nots
- Keep the site lightweight and static-first; no database, CRM, analytics tracking or account system.
- Do not claim guaranteed investment returns, retirement income or insurance outcomes.
- Insurance coverage is governed by underwriting, applicable law and the issued policy.
- Do not invent credentials, testimonials, metrics or a business address.
- Do not report an enquiry as sent unless the external email service accepts it.
- Do not publish the site or connect the domain without an explicit request.

## Project decisions & roadmap (.project/ledger)
Active/planned work and rejected ideas. Never silently re-propose a DROPPED item — flag it and ask. Update via normal work; statuses are maintained automatically.

- [DROPPED] (led-0009) Use an appropriate email/form delivery service — Automatic form delivery is required, and mailto is not sufficient; an external service will be used.

Established facts (values you set — trust these, never re-guess them):
- (led-0001) Which email should receive website enquiries? Include the address in the answer or card text. — office@quantum-ins.co.il - the email that my clients can send a mail to and that if they leave details it will automaticly be send to. the phone number is - 0538536090. the dns is: quantum-ins.co.il
- (led-0002) What WhatsApp contact should the site open? Include the number with country code, or choose to omit it for now. — My business number
- (led-0003) How should the enquiry form send details to your inbox without keeping them in a site database? — Decide with me later
- (led-0012) Should we use Israel’s +972 country code for your business number 0538536090? — Use +972
- (led-0013) How should we handle automatic email delivery for the enquiry form in this preview? — Email link only

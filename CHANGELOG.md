# Changelog (agent-facing)

This document captures the end-to-end work performed in this repository by the automated agent from the first conversation through the present state. It's written for engineers and agents to pick up, verify, and continue work.

Date range: project inception → 2025-10-19

---

## Summary — high level

- Built a responsive React site (Vite/React Router) scaffolded under `app/` with Tailwind-based styling.
- Implemented core pages (Home, Services, Private Pay, Medicaid Partner, Consultation, Intake, Referral, Pricing, How It Works, About, Case Studies, Resources, FAQs, legal pages).
- Implemented client/server forms with Zod validation and server actions for Consultation, Intake, and Partner Referral.
- Added a reusable email helper `lib/sendMail.ts` that uses nodemailer dynamically when SMTP env vars are configured, otherwise logs payloads for development.
- Built presentational components (Header, Footer, Hero, FeatureGrid, TrustBar, ValuePillars, ProcessSteps, TestimonialSlider using a 3D rolling gallery pattern, CTABand, TestimonialSlider) and a small UI primitives library (`components/ui-tags/Button.tsx`, `Input.tsx`).
- Added SEO work: route meta() functions updated across many pages, LocalBusiness JSON-LD injected sitewide, static OG image assets generated at `/public/og/*.svg`.
- Added static assets (partner pitch PDF and resource PDFs), `robots.txt` and `sitemap.xml` placeholders.
- Added a custom 404 page and updated the route manifest (`app/routes.ts`) to include all pages and a wildcard.
- Added a flexible Button and Input components and re-exported them from `app/components/index.ts` for convenient imports.

---

## Files added (not exhaustive, focused on key changes)

- app/
  - routes.ts — route manifest updated to include all pages and a wildcard 404
  - routes/
    - consultation.tsx — consultation form (client + server action), meta updated
    - intake.tsx — multi-step intake form (client + server action), meta updated
    - partners/referral.tsx — partner referral form (client + server action), meta updated
    - services/private-pay.tsx — private-pay service page, meta updated
    - services/medicaid-partner.tsx — Medicaid partner page, meta updated
    - pricing.tsx, how-it-works.tsx, about.tsx, case-studies.tsx, resources.tsx, faqs.tsx, privacy.tsx, terms.tsx, non-discrimination.tsx — pages added/templated and meta updated
    - 404.tsx — custom Not Found page
  - welcome/welcome.tsx — home composition with Services grid, comparison table, TestimonialSlider, CTABand

- components/
  - Header.tsx, Footer.tsx, Hero.tsx, FeatureGrid.tsx, ReasonsSection.tsx, TrustBar.tsx, ValuePillars.tsx, ProcessSteps.tsx, CTABand.tsx
  - TestimonialSlider (app/components/TestimonialSlider.tsx) — rebuilt to use RollingGallery-like 3D carousel for testimonial cards, with measurement to set container height to tallest card
  - SeoLocalBusiness.tsx — JSON-LD LocalBusiness
  - ui-tags/
    - Button.tsx — flexible polymorphic Button component (variants & sizes)
    - Input.tsx — reusable input/textarea with label/error
    - index.ts — re-exports
  - app/components/index.ts — re-exported core components + ui-tags

- lib/
  - sendMail.ts — centralized email sender; uses nodemailer only when SMTP env present

- public/
  - Partner-Pitch-Sheet.pdf, resources/*.pdf — partner/resouce PDFs
  - robots.txt, sitemap.xml
  - og/
    - home-1200x630.svg
    - services-1200x630.svg
    - private-pay-1200x630.svg
    - medicaid-partner-1200x630.svg
    - consultation-1200x630.svg
    - pricing-1200x630.svg

- misc
  - .github/workflows/ci.yml — CI workflow for typecheck/lint (template)

---

## Major behavior implemented

- Forms
  - Consultation, Intake, Partner Referral: client-side Zod validation; server actions parse JSON and use the same Zod schemas server-side; responses return structured error payloads for UI mapping.
  - Toast UX implemented via Sonner (Toaster added to root layout) for success/error/loading states.
  - sendMail helper centralizes email sending; logs to console if SMTP is not configured (safe fallback for local dev).

- Routing & pages
  - All primary routes wired in `app/routes.ts` for the router to load pages and their meta info.
  - Custom 404 page and wildcard route added.

- Components & UI
  - TestimonialSlider: adapted RollingGallery pattern for 3D carousel of testimonial cards; measures child heights and sets container height to avoid layout shifts.
  - Button & Input primitives added under `components/ui-tags/` and re-exported via component barrel for easy import.

- SEO
  - meta() functions updated for many routes: title, description, canonical, og:title, og:description, og:image, twitter:card.
  - LocalBusiness JSON-LD added to root.
  - Generated simple SVG OG assets added under `/public/og/` for immediate previews.

---

## Notable code decisions & rationale

- sendMail design: centralized helper that conditionally imports nodemailer and uses SMTP env variables if present. Rationale: avoid shipping credentials in code and allow safe local development where sendMail logs instead of sending.
- TestimonialSlider reuse of the RollingGallery 3D layout to provide an engaging carousel with drag and autoplay while using card content instead of raw images.
- UI primitives: created polymorphic Button component so CTAs across the site can be rendered as links or buttons consistently.
- SEO: prioritized meta fields and included simple OG images so social previews are consistent; these are SVG placeholders and can be replaced with designed PNGs later.

---

## How to run locally (quick)

1. Install dependencies

```bash
pnpm install
```

2. Start dev server

```bash
pnpm dev
```

3. Open http://localhost:5173 (or the default port printed by Vite)

4. Suggested checks
  - Visit /, /services, /services/private-pay, /services/medicaid-partner, /consultation, /intake, /partners/referral
  - Check head tags (view page source) to confirm meta tags and og:image values
  - Submit test forms (they will log or attempt to send emails depending on SMTP env vars)

---

## Environment variables (important)

Set these for real email delivery (recommended for staging/production):

- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASS
- FROM_EMAIL (e.g. "noreply@bridgeforthcg.com")
- TO_EMAIL (where form submissions should be sent)

Without these, sendMail will not throw; it will log the payload and return ok: true (development fallback). Configure these before end-to-end email testing.

---

## Tests and validation to run (recommended)

1. TypeScript typecheck and ESLint

```bash
pnpm -w -C . run tsc --noEmit
pnpm run lint
```

2. Run a quick smoke test of forms (manual)
  - Use dev server; submit Consultation/Intake/Referral forms with valid and invalid input to confirm client/server validation mapping and toasts.

3. Accessibility spot checks
  - Use Chrome Lighthouse or axe to audit homepage: keyboard nav, color contrast, form labels.

---

## Known issues & TODOs (actionable)

- SMTP not configured by default — configure env vars before testing email delivery.
- Accessibility sweep (WCAG 2.1 AA) is outstanding; there are known TODOs in the repo to perform a full audit.
- Performance optimizations (image compression, LCP targeting) are pending.
- Some pages still need full meta/OG coverage polish (we added many, but a final content review is recommended).
- Testing and CI: unit/smoke tests and fixing any TypeScript/ESLint errors in CI pipeline remain.

Open TODOs (high priority):

1. Finish full SEO/OG content pass and confirm canonical URLs (owner confirm domain)
2. Configure SMTP and run an end-to-end form/email test
3. Accessibility fixes (keyboard, ARIA, color contrast)
4. Convert SVG OG placeholders to designer-approved PNG/JPEG at 1200x630 and update meta if required

---

## Where to look for specific code

- sendMail helper: `lib/sendMail.ts`
- Consultation form: `app/routes/consultation.tsx`
- Intake form: `app/routes/intake.tsx`
- Partner referral: `app/routes/partners/referral.tsx`
- Testimonial slider: `app/components/TestimonialSlider.tsx` and `app/components/RollingGallery.css`
- UI primitives: `app/components/ui-tags/Button.tsx`, `app/components/ui-tags/Input.tsx`
- Route manifest: `app/routes.ts`
- LocalBusiness JSON-LD: `app/components/SeoLocalBusiness.tsx`
- OG assets: `public/og/*.svg`

---

If you want, I can:

- Run the dev server and step through the most important pages, reporting console errors and rendering issues.
- Replace SVG OG placeholders with raster images and wire them into meta.
- Find and replace existing inline buttons/inputs with the new `ButtonUI`/`InputUI` components throughout the codebase.
- Start the accessibility audit and fix high-severity issues.

Give me which of the next actions you'd like and I will start that work now.

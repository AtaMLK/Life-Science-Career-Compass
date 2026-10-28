# Life Science Career Compass

A responsive multilingual single-page marketing website for **Dr. Farzaneh Hähndel**, designed for life-science career coaching in Germany.

## Stack
Next.js App Router, React 19, TypeScript, CSS, Lucide icons.

## Run
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000 (redirects to /en). Language routes: /en, /de, /tr.

## Quality checks
```bash
npm run typecheck
npm run lint
npm run build
```

## Configuration
Set `NEXT_PUBLIC_SITE_URL` to the production origin (for example, `https://example.com`) **without a trailing slash** for canonical URLs, hreflang, robots sitemap reference and sitemap URLs.

## Included
- Responsive mobile-first single-page layout with service filters, expandable service descriptions and FAQ accordion.
- Separate English, German and Turkish routes with translated page framing.
- OpenGraph titles/descriptions, canonical URLs, language alternates, robots.txt, sitemap.xml and JSON-LD Person / ProfessionalService.
- Services and individual, semi-private and group prices from supplied brochures.
- Simple mailto-based enquiry links (no booking provider, payment or backend yet).
- CI workflow for typecheck, lint and build.

## Important before publishing
1. The actual Farzaneh portraits and public, birth-date-redacted certificate are included.
2. Review the localized English, German and Turkish copy before publication.
3. **Confirm credentials, employers and pricing** against source documents and obtain any permissions needed for certification or employer logo display.
4. **Add accurate German Imprint (Impressum), privacy notice (Datenschutzerklärung), and relevant contact/legal business details** before launching ads. The current footer explicitly indicates these are pending.
5. **Integrate a real booking/contact workflow** and backend if needed. Email links alone cannot produce measured completed bookings.
6. **Integrate analytics and consent management deliberately.** Google Analytics, Tag Manager, Consent Mode v2, and Google Ads conversion tracking are not active. Avoid loading non-essential marketing tags without applicable consent.
7. **Add analytics events** (service views, leads, booked sessions) only when there are actual events/endpoints to measure.
8. Set domain and deploy. Validate actual Google Search Console indexing, Core Web Vitals and structured data; none are guaranteed by project scaffolding.
9. Once a precise public address/business identity is confirmed, update the structured data appropriately.

## Project organization
- `src/lib/content.ts`: services, prices and localized UI texts.
- `src/components/site.tsx`: single-page interactive layout.
- `src/app/[lang]/page.tsx`: localized pages, SEO metadata, structured data.
- `src/app/globals.css`: typography, layout, responsive behavior.
- `src/app/sitemap.ts`, `src/app/robots.ts`: crawl infrastructure.

No account creation or testimonials/success statistics have been invented.


## Editorial V3 (branch `design/editorial-motion-v2`)
- Homepage with an original, six-stage GSAP ScrollTrigger career journey, a pinned portrait, active step indicator, progress rail and click-to-expand IHK certificate.
- Dedicated localized `/[lang]/services` page with support fields, areas of expertise, interactive package comparison and enquiry links.
- Navigation between homepage and services; English, German and Turkish content for both.
- Data taken from the client-provided English brochure and uploaded professional portrait, IHK certificate, timeline, career consulting and package chart.
- All five images are **required local assets**. Download the separate image package and extract its `public/` directory into the repository root:
  `public/assets/farzaneh/{portrait,certificate,journey,consulting-overview,packages-table}.png`
  The source repository contains code, not these private binary files. Next.js builds without them but pages will show broken images until copied.
- The consultation action currently opens an email draft; it is not a completed calendar booking.
- The prices and certificate details require owner approval before production publication.
- Scroll-triggered effects respect `prefers-reduced-motion`; static content remains readable without JS animation.

## Preserved GSAP edition — content branch

Branch `feature/gsap-original-content` starts from the original GSAP editorial V3.1 commit `ffd18d1`, preserving its layout, typography, color palette and existing scroll animations. The only added UI is a localized, three-question Career Compass section with no account requirement or data persistence. Existing localized services, pricing explorer, journey, person schema, hreflang and sitemap remain.

### Included visual assets and verification

The real dark-background portrait and office portrait are committed in public/assets/farzaneh, together with a flattened public IHK certificate whose birth-date line is covered. A separate image ZIP is no longer required for these assets.

See QA-REPORT.md for the exact source files, unavailable attachments, verification results and remaining operational limits. Missing brochure-image download links were removed; the translated HTML service descriptions and prices remain available.

To run the browser checks, start the production server on port 3011, then run node scripts/verify-gsap.cjs and node scripts/verify-navigation.cjs. The checks use Microsoft Edge by default. Screenshots and results are saved in qa/.

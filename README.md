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
1. **Add the actual portrait and confirmed brand logo.** The current hero is an original CSS-based scientific compass placeholder; the biography panel is an FH monogram. Do not present stock photos as Dr. Hähndel.
2. **Review translations.** Service names and descriptions currently remain English inside all languages; the major UI copy is localized. Translate the catalog before claiming full localization.
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

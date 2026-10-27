# Website readiness review — 27 October 2026

## Verified
- All six localized home/services pages return HTTP 200.
- Browser checks in Edge Chromium at 1280px and 390px: one H1 per page, correct server-rendered HTML language, valid fragment links, valid JSON-LD, visible images load, no horizontal overflow, no browser exceptions.
- Six-question quiz: advance, back, restart, six-answer summary and correctly encoded email draft.
- Every service selector updates its description; service cards deep-link to the requested package.
- FAQ toggles, mobile menu, theme toggle, certificate close button and Escape work.
- Certificate viewer visually checked on mobile; excess vertical space fixed.
- TypeScript, ESLint and production build checked. See saved browser results in audit-results.json.

## SEO and machine-readable content
- Localized absolute titles prevent duplicate brand suffixes; descriptions, canonical URLs, hreflang/x-default, OpenGraph and Twitter preview metadata use the configured production origin.
- Person, Organization, localized service catalog, visible FAQ content and breadcrumbs are represented in JSON-LD. All service descriptions also appear in native expandable sections in server-rendered HTML.
- The six-page sitemap and robots sitemap reference were checked with a temporary test origin.
- A favicon and optional Google Search Console verification token are configured.
- Preview pages send noindex when NEXT_PUBLIC_SITE_URL is missing. Canonicals and sitemap URLs intentionally remain unset until a real domain is provided.
- These changes improve discoverability and interpretation; rankings, indexing, AI citations and rich results are not guaranteed.

## Analytics
Set NEXT_PUBLIC_GA_MEASUREMENT_ID to a real GA4 measurement ID and restart/rebuild. Without it, no banner or Google Analytics tag is loaded.
- Basic consent behavior: no Google tag request until acceptance; rejection persists; preferences can be reopened; consent can be withdrawn.
- Advertising consent remains denied. Google signals and advertising personalization are disabled.
- Manual page_view on initial consent and client-side route changes, contact_click for email intent, certificate_open, service_select and quiz_complete are wired.
- Questionnaire answers and email bodies are not sent as event parameters. Email clicks are not reported as completed bookings or delivered leads.
- Tests intercepted Google requests with a synthetic ID; real GA4 ingestion and DebugView require the owner's account.
- Avoid enabling duplicate history-based page views in GA4 Enhanced Measurement when using the application's manual SPA page views. Confirm configuration in DebugView after connecting the real property.
- Review the privacy notice for the selected analytics setup before public launch.

## Still needs owner input
1. Final domain and hosting. Set NEXT_PUBLIC_SITE_URL to the HTTPS origin and rebuild; submit sitemap in Search Console.
2. GA4 ID and optionally GOOGLE_SITE_VERIFICATION. Verify real events after setup.
3. Confirm business identity/address and supply final Impressum and privacy notice. No invented legal details or placeholder legal pages have been published.
4. Confirm service prices and credentials before production launch. The supplied price confirmation note remains visible.
5. Email links open the user's mail app. No live booking calendar, contact delivery backend or payment system is connected.
6. Original journey, service-overview and package-chart images remain unavailable; links to missing files were removed from active pages.

## Reproduce browser checks
The scripts use Playwright with the installed Edge browser. Set PLAYWRIGHT_MODULE to a Playwright package path if it is not installed in local node_modules.
- node scripts/audit-browser.cjs (app on port 3000)
- node scripts/audit-analytics.cjs (separate test server on 3001 with NEXT_PUBLIC_SITE_URL=https://career-compass.test, NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TEST123, NEXT_BUILD_DIR=.next-audit; Google requests are intercepted)

Reference: Google basic consent documentation: https://support.google.com/analytics/answer/10000067

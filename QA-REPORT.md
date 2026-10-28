# GSAP repair and verification — 28 October 2026

Branch: feature/gsap-original-content. Base: 54800ced4139bfa6ee2c8662afcccf8ff3787971.

## Preserved design

The original editorial page structure, Georgia typography, palette, GSAP reveal/parallax/scroll-progress animations and six-step sticky journey remain. No friendly V4 components or styles were introduced. Existing editorial.css is unchanged. CSS additions address portrait sizing, legibility, translated text wrapping, tablet navigation and accessible dialogs.

## Repairs

- Correct EN/DE/TR price-label bindings and expand/collapse behavior.
- Real portraits committed so fresh checkouts work without a private asset ZIP; remove obsolete portrait-pending overlay.
- Journey image fills its available row; caption and certificate action occupy separate rows, including hover spacing.
- Native certificate dialog supports Escape, focus containment/restoration and scroll locking.
- Services hero uses the supplied office portrait; service selection supports ?service= links.
- Navigation/menu, locale switching, persistent themes, FAQs, service accordions, career-finder paths, back/reset and enquiry links checked.
- Correct document language on initial loads and client navigation. Add skip links, live announcements and narrow-tablet menu support.
- Preserve newer SEO helper, localized social metadata, safe JSON-LD, FAQ/service catalog schema and optional consent-based analytics. Add response security headers and reproducible dependency lockfile.
- Fix Strict Mode GSAP cleanup/reinitialization. Reduced-motion rendering remains available.

## Asset provenance and availability

Mounted workspace files found:

- farzaneh-portrait-enhanced.png -> public/assets/farzaneh/portrait.png (dark portrait)
- farzaneh-portrait-office-retouched.png -> public/assets/farzaneh/portrait-office.png
- farzaneh-portrait-office.png (available alternative, not needed)
- farzaneh-ihk-certificate-enhanced.png (private original; not committed)

The existing certificate recovered from the local earlier Git branch also contained the birth-date line. It was NOT published. The built-in image editing tool was used to conceal the entire line beneath the name; the full result was visually checked, re-encoded without metadata, and saved as public/assets/farzaneh/certificate-public.png. No unredacted certificate is included in this change.

Edit prompt: Privacy redaction only; cover the entire birth-date line beginning “geb. am” directly below the name with an opaque white rectangle; retain the full document and all other content/layout.

The prior-chat reader returned nine attachment names and Windows temporary paths, but those temporary files no longer exist. They included image(7).png, image(8).png, image(9).png, two enhanced-asset copies and four long-named JPEGs. The screenshot pixels could not be recovered from those paths. No mounted journey.png, consulting-overview.png or packages-table.png was found. Their broken original-image download links were removed; the HTML journey, translated service information and price comparison remain.

## Verification

- npm install: completed; dependency audit reported zero vulnerabilities.
- npm run build, npm run typecheck, npm run lint: passed.
- scripts/verify-gsap.cjs: EN/DE/TR at 1440 and 390 pixels; price toggles, ten services, all FAQs, four finder branches, back/reset, certificate image decoding and close/focus behavior, themes, package selection, portrait geometry and horizontal overflow. Normal GSAP scrolling verified on desktop; reduced motion used for the remaining interaction matrix.
- scripts/verify-navigation.cjs: passed keyboard skip link, client language navigation, 320/768/1024 layouts, reduced motion, real asset responses, security headers, JSON-LD and invalid-locale 404.
- Screenshots in qa/: homepage, journey frame, services, dark theme and redacted certificate. Desktop/mobile images inspected visually.

Browser tests require the production server on localhost:3011 and Microsoft Edge installed. Run npm run test:browser. Local screenshots are included for review; no production deployment was requested or performed.

## Operational limits

Consultation actions open addressed email drafts; phone and LinkedIn actions use their existing destinations. This does not create calendar reservations, process payment or verify email delivery. Analytics remains off unless a measurement ID is configured and the visitor consents. Canonical URLs/sitemap require a valid NEXT_PUBLIC_SITE_URL. Existing business/legal copy still requires the owner's confirmed publication details.


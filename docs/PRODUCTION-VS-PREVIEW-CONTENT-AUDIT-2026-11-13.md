# Content audit — production vs newer editorial Preview
**Date:** 13 Nov 2026. **Scope:** texts, paths, visible service data, credentials and contact calls to action. The deployed source commits were verified in Vercel; direct HTML fetching of the protected preview and production pages is not available through this check. The comparison is grounded in the **exact deployment Git commits**, not an assumed local/main working tree.

## Exact deployed sources
- Current production (old): `dd739d27d0bf9f68729b8fd700da6a83a9ffc8a7`, `design/editorial-motion-v2`, page component `src/components/friendly-site.tsx`.
- User-selected editorial preview (new): `48b7d8845593cc837ab0f78e73acf1f4c6f4b353`, `feat/legal-ui-finishing-20261112`, page component `src/components/editorial-site.tsx`.
- Existing production URL: https://life-science-career-compass.vercel.app/en
- Reviewed preview URL: https://life-science-career-compass-5qqvimne8-atas-projects-01d1e4af.vercel.app/de
- The new editorial branch is the **content direction** for further work. **Do not publish to production yet**: legal, certificate, and real payment gates remain open.

## What is genuinely outdated in the old production source

| Area | Older deployment | New editorial preview / resolution |
|---|---|---|
| Homepage story | Friendly layout with simple career-copy and four entry cards | Editorial story, ten named services across three clusters, Career Finder, animated six-stage Journey, richer coach background |
| Academic degree | About panel and 3 locale timelines say **MSc** at Istanbul Technical University | New branch says **BSc/Bachelor**. User identified latest Preview as newer, so legacy components must not be reintroduced. **Academic diploma not independently verified** |
| Selected service | Four goal cards all go to a generic `/services#package-explorer` | Preview links each item to its named `?service=...`, showing that consultation's details at the top |
| Questionnaire | Results point to generic mailto enquiry | Results lead to selected service; corrected a **salary vs general-coaching** recommendation ambiguity in new branch |
| Contact | Main old layout primarily shows an email contact | New adds phone, Instagram and LinkedIn, matching supplied owner contact card |
| Legal | No proper `/impressum` and `/datenschutz` in production | Preview contains DE source drafts and EN/TR explanatory translations, **not approved legal texts** |
| Certificates / media | Old component references `certificate.png` and a pricing image path; not present in the old deployed Git tree | Preview has new assets, but certificate still needs replacement with publicly redacted IHK image |
| Language defaults | Manual three-language navigation without DACH country rule | New root route uses DACH→German, others→English, with manual selection precedence |
| Services page | Generic header and repeated disciplines before price selection | Selected consultation gets its own headline, introduction and relevant focus points |
| Pricing CTA | Email enquiry, no per-format payment selection | New consultation format selection and verified Wix-link handoff when configured; no invented checkout |
| Duplicate credentials/timeline | Repeated old layout details | Removed duplicate content and retired unused legacy home module |
| Numbered headings | New preview had Journey **03** and About **03** | Updated later labels to 04 About, 05 Process, 06 Investment, 07 FAQ in EN/DE/TR |

## What is **not** newer as data
- The **same ten service IDs**, their **English descriptions**, **durations**, and **individual / small-group / group prices** already exist in the old production `src/lib/content.ts` and remain unchanged in the new preview. They are presented differently, but pricing has **not been externally reverified**.
- `src/lib/editorial-locale.ts` EN/DE/TR prose was almost entirely identical between deployments prior to section numbering cleanup.
- The public contact information has been matched to the owner's supplied contact image, not verified by calling providers.
- IHK qualification and school/employer history require document / owner review if shown as factual career credentials.

## Content fixes made in the review branch
1. Keep the editorial page only; deleted unused `src/components/site.tsx` containing legacy UI, preserving it in Git history.
2. Corrected duplicate section numbering without changing the Journey stages themselves.
3. Updated the Career Finder: **Salary/strategy** recommends Salary Negotiation for most visitors; a visitor choosing **Career change + Salary/strategy** is directed to broader Personal Career Coaching. Clarified that the quiz uses the primary support need and does not guarantee outcomes.
4. Added content regression tests checking service counts, locale coverage, degree label, unique section numbering, and route selection rules.

## Release blockers / items awaiting owner evidence
1. **Academic degree**: BSc vs MSc must ultimately be checked against the true university document.
2. **IHK certificate**: old public preview image should be replaced by the previously prepared redacted version; remove sensitive identifiers from any still-public assets (and consider existing caches and repository history).
3. **Company legal data**: serviceable German address, exact registered legal entity and identifiers where required, tax status confirmation, hosting and payment privacy details, legal review.
4. **Payments**: real Wix Pay Links / Bookings URLs and verified per-tier prices, invoice and tax behavior; do not advertise payment completion before this.
5. **Time-dependent biography**: verify dates and current role descriptions with Farzaneh, including how '2026—present' should be worded.
6. **External links**: Instagram and LinkedIn URLs are owner-provided; automated off-site interaction cannot establish ownership or activity.
7. **Production**: no promotion or alias switch without owner approval and clearance of blockers.

## Evidence
- Production commit: https://github.com/AtaMLK/Life-Science-Career-Compass/tree/dd739d27d0bf9f68729b8fd700da6a83a9ffc8a7
- User-selected new preview commit: https://github.com/AtaMLK/Life-Science-Career-Compass/tree/48b7d8845593cc837ab0f78e73acf1f4c6f4b353
- Working review PR: https://github.com/AtaMLK/Life-Science-Career-Compass/pull/1

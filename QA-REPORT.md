# Private site review — 29 October 2026

Source: AtaMLK/Life-Science-Career-Compass, feature/gsap-original-content at 73d88e0. The original GSAP/editorial structure, palette, typography and EN/DE/TR content are retained.

Implemented: separate portrait/caption/action frames; readable hero typography; local coaching imagery on Services; recovered journey, service overview and package graphics with accessible zoom/download dialogs; corrected Istanbul degree label against the supplied graphic; functioning service and FAQ accordions, price reveal, persistent theme, mobile navigation, career finder and package selection. Package selection is reflected in its URL and carries across languages. The career finder includes all three answers in the enquiry draft. Booking remains an email request; phone, Instagram and LinkedIn remain ordinary contact links. No email is sent by the site and no calendar reservation is created.

All imagery is hosted with the site. The existing redacted certificate is retained. Private hosting is owner-only, with noindex metadata and robots disallowing crawling. The private deployment uses a static export of all three home and Services routes. This GitHub branch keeps its normal Next.js server configuration, development commands, language proxy and security headers. Hosting-specific metadata remains in the separate private deployment repository.

Browser validation: production static output in the Sites preview; all ten service accordions and package selectors, six FAQ rows, price reveal, career finder recommendation/back/reset, certificate Escape/close, recovered graphic zoom/close, theme persistence, mobile menu and section navigation. Responsive checks cover 320, 390, 768 and 1024 CSS-pixel frames and the 1363-pixel desktop viewport; English, German and Turkish headings checked for horizontal overflow. Desktop and responsive sections were visually inspected. Static build includes TypeScript validation.

Prices match the supplied package chart. Public launch remains subject to the owner's approval and the existing price-confirmation note is preserved.

Theme follow-up: the homepage and Services route share one animated sun/moon control with explicit light/dark colors, visible borders and localized labels. Verified theme persistence and both toggle directions on desktop and at a 320px responsive width. GitHub production build, TypeScript and ESLint complete; ESLint reports one existing native-image performance warning in the zoomable document viewer.

# Interactive career preview

Branch: `design/interactive-career-preview`
Baseline: `9d88fac` on `design/editorial-motion-v2`

Local preview: http://localhost:3000/en#services
Services: http://localhost:3000/en/services

## Changes
- Shared localized header, theme controls and primary contact language across home/services.
- Four selectable career fields with sample role families; examples are explicitly not job vacancies.
- Four selectable support needs with three possible next steps and an explicit button for the related service.
- No navigation on field/support selection; all content updates in place.
- Career journey condensed into six cards; certificate is a secondary preview with the existing accessible native dialog.
- Coach portrait replaces the large certificate in the introduction.
- Services uses the same typography, colors and card styling as home. Mobile service choices scroll horizontally above the result panel.
- All new copy is provided in English, German and Turkish; dark mode and reduced motion supported.

## Verification
- Production build, TypeScript and ESLint pass.
- Browser audit: 12 language/page/viewport combinations; visible images, internal links, six-question quiz, restart/back, FAQ, mobile menu, theme, all service selectors and certificate open/close.
- Interactive audit: all 16 field/support combinations in each language at 1280px and 390px, no navigation on selection, one selected option per group, correct service targets, Space key activation and compact journey height.
- Screenshots reviewed for desktop/mobile explorer, services, timeline and package selector.

## Deployment
No push, Vercel deployment or production settings change was made for this experiment. The public Vercel alias continues to serve the previous version.

To return locally to the saved deployed version after committing preview work: `git switch design/editorial-motion-v2`.

# Wix-compatible prototype (not published)

This work is isolated from the Next.js `main` branch. It is not a drop-in Next.js build and does not modify the client's Wix site.

## First working experiment

`wix/custom-elements/career-compass-demo.js` is a self-contained browser Web Component registered under the tag `career-compass-demo`.

- Editorial palette, Georgia headings, responsive columns (initial visual direction, **not** full homepage parity).
- Five working quiz steps in EN/DE/TR, with Back/Restart, service suggestion, and opt-in email draft.
- No AI API, no customer-data storage, no network call; mailto opens a draft only.
- No external GSAP dependency. GSAP scroll journey will need a separate adaptation after testing element rendering.
- No birthday/identity certificate content is included.

## Put it into the *classic* Wix Editor without publishing

1. In Wix Editor, keep Dev Mode enabled and open the Code Files area.
2. Add a new custom element JavaScript file to Velo's Public / Custom Elements area (the path in the editor may vary).
3. Copy the contents of `career-compass-demo.js` into that file.
4. In the Wix Editor: **Add Elements → Embed Code → Custom Element**.
5. Select the new custom element, choose **Velo File** for its source, pick the JavaScript file, and set **Tag Name** exactly to `career-compass-demo`.
6. Resize its element frame for a substantial page section; the component is responsive but Wix must allocate enough height.
7. Click **Save** then **Test Site** / Preview. **Do not click Publish**.

Official Wix Help Center: https://support.wix.com/en/article/wix-editor-adding-a-custom-element-to-your-site

> Wix may render custom elements in an iframe during editor/preview, which can affect their height and scrolling. Test layout in desktop and mobile previews before deciding to migrate the rest of the site. A connected domain/no Wix ads may be a requirement for production use. Verify this with the client's Wix plan before launch.

## Later phases

After confirming the component works inside the existing Wix Editor, migrate site sections one at a time. Keep text and images manageable in Wix native elements/CMS wherever practical; use custom elements for scroll interactions. Then implement a secure, consent-based contact submission; never call email or AI APIs directly with keys embedded in frontend code.

Existing Vercel deployments and the main branch remain the canonical site until the owner approves a Wix version.

## Navigation between Home and Services (Velo bridge)

Wix's standard Custom Element script cannot call the Wix location API directly, so both components dispatch a `compassNavigate` event. Wix **Page Code** handles this with `wix-location-frontend`.

1. Update the Wix Velo Custom Element files from `wix/custom-elements/career-compass-demo.js` (Home) and `wix/custom-elements/career-compass-services.js` (Services).
2. On the Home page select the Custom Element and set its element ID to `careerHomeElement` (do not change its HTML tag name `career-compass-demo`).
3. Paste `wix/velo-page-code/home.js` into the Home page's **Page Code**, not inside the Custom Element code file.
4. On the Services page set its Custom Element ID to `careerServicesElement` (tag name remains `career-compass-services`).
5. Paste `wix/velo-page-code/services.js` into that page's **Page Code**.
6. Save both pages.

**Important:** According to the Wix site-location documentation, `to()` does **not work in ordinary Editor Preview**. This is a Wix limitation, not a JavaScript bug. Use Pages & Menu to inspect Home and Services independently in Preview. To verify actual cross-page navigation, a supported testing/deployment context is required; do not publish the client's public site without approval. Wix Test Sites require an already-published base site and are handled through Release Manager, so availability must be verified before relying on one.

The page slug must be `services`. These event handlers preserve the selected language as `?lang=en|de|tr`. The Services page script defaults to Home `/`.

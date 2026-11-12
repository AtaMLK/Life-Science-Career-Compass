# Wix payments for selected consultation services (implementation contract)

**This is a configuration-ready integration, not a live payment setup.** No customer payment can be taken until Wix Payments or another eligible payment provider, the payment links, and the exact consultation service URLs are configured and verified. Do not publish a functioning-looking fake checkout.

## Confirmed business requirements
- The products are **consultations / appointments**, not online courses.
- Preserve the existing home-page journey, design, category grouping, services and German/English/Turkish UI.
- DACH visitors default to German; other regions to English, without overriding deliberate language selection.
- The business is registered and the two supplied bank accounts are business accounts according to the owner. This does **not** confirm Wix Payments activation or payout bank acceptance.
- **Never place bank account numbers / IBANs into the public frontend, git history, environment variables, screenshots or logs.** The owner configures the eligible payout account inside Wix Payments.

## Customer flow
1. Open a service from the current home-page service list; this takes the visitor to `/{lang}/services?service={serviceId}#package-explorer` with that service selected.
2. Read localized title, duration, and publicly displayed price. Confirm the displayed price and Wix service price match, including tax treatment and whether it is a one-person, small group or group service.
3. Once the corresponding checkout URL has been configured, the action reads "Continue to secure payment" (localized). It opens the verified Wix Pay Link or Wix Bookings URL for that exact consultation.
4. For pay-only services, Wix Pay Links handles checkout, transaction and order tracking; time can be coordinated separately. For appointment-based services, Wix Bookings additionally handles scheduling and availability. Wix is the source of truth for the amount and payment. Never invent a checkout session or pass a customer-controlled price in the URL.
5. Without a configured service URL, the action still clearly says "Ask about this package" (localized) and uses existing mailto rather than claiming that a payment is possible.

## Wix site owner setup
1. Confirm the correct site in the connected Wix account. At inspection only **My Site 2** was visible; do not assume it is the approved destination.
2. Upgrade/publish the approved Wix site and connect a verified payment provider. If the owner wants customers to **pay first and schedule later**, configure a reusable **Wix Pay Link** for each consultation (Custom amount). If the customer must select an appointment time, add **Wix Bookings** and create an **Appointment** for each such service (not a course).
3. For Wix Bookings: configure staff availability, time zone, duration, capacity, video meeting method and booking/cancellation rules. For pay-first Wix Pay Links: choose the exact price/tax for the consultation, keep the link active for multiple payments, and send scheduling instructions after successful payment. Services billed "Per CV" or "Per application" generally don't need forced appointment slots.
4. Confirm per-service prices, currency and tax with the owner. For Wix Bookings, choose **Entire amount online**. Wix Pay Links can accept multiple payments until their configured limit or expiry. Manual approval of per-session Wix Bookings appointments is not compatible with online payment (per Wix help).
5. Verify legal business identity and a valid payout account **inside Wix**, not the Git repository. Decide whether manual/offline bank transfer is actually needed; if so, display bank instructions only in the appropriate secure payment flow and manually reconcile them.
6. For each consultation, copy the **actual active Wix Pay Link or Wix Bookings service URL**, and configure `NEXT_PUBLIC_WIX_CHECKOUT_URLS` on the frontend deployment. Empty default: `{}`. Every ID must correspond to the selected consultation; never invent URLs.
7. Double-check the display amounts against each Wix Bookings service, currency, VAT/tax note, group variants, receipts/invoices and refund flow.
8. Test in German, English and Turkish on desktop and mobile: exact service selection, correct price, checkout, successful/failed payment, receipt and order reconciliation, refund/withdrawal and post-payment email; test scheduling too when Bookings is actually used.
9. Review privacy policy and any required consent/contract terms before allowing real customers to pay.

## Source implementation
- `src/lib/wix-checkout.ts`: validates and looks up configured HTTPS payment URLs per service (Wix Pay Links or Bookings). Invalid/missing URLs are ignored.
- `src/components/editorial-site.tsx`: existing service CTA goes to the selected consultation details, preserving the overall page journey.
- `src/components/services-experience.tsx`: selected consultation CTA switches to secure Wix payment only when an explicitly verified URL has been configured.
- `.env.example`: documents `NEXT_PUBLIC_WIX_CHECKOUT_URLS`.
- No extra processor or Wix credentials are embedded in source code.

## Legal work before collecting payments
- Impressum: full serviceable address, business's correct legal name/form, register and applicable identifiers.
- Datenschutzerklärung: Wix host/processor, Wix Bookings, Wix Payments or selected third-party payment provider, email, calendar/video integrations, cookies and storage/transfers/retention as used.
- Contractual terms: cancellation/rebooking/refund policies, clear price and VAT treatment, information duties and any applicable EU consumer withdrawal/online withdrawal controls; obtain German legal review. A booking confirmation alone is not a substitute for statutory consumer information.
- Keep certificate copy privacy-redacted; remove old publicly reachable unsafe preview before launch.

## Official Wix documentation
- https://support.wix.com/en/article/wix-bookings-about-getting-paid-online
- https://support.wix.com/en/article/wix-bookings-creating-an-appointment
- https://support.wix.com/en/article/wix-bookings-creating-an-online-service-in-wix-bookings
- https://support.wix.com/en/article/wix-bookings-getting-paid-offline

## Updated consumer law reminder (November 2026)
- German § 356a BGB requires an easily accessible online withdrawal function for consumer distance contracts with statutory withdrawal rights, in force since 19 June 2026. Verify how this is implemented for the Wix pay flow, including receipt/acknowledgment, with a qualified German reviewer.
- §§ 312j and 356 BGB set consumer checkout and service withdrawal duties. Do not treat a no-refund clause or short appointment date as an automatic waiver.
- https://www.gesetze-im-internet.de/bgb/__312j.html
- https://www.gesetze-im-internet.de/bgb/__356a.html
- https://www.gesetze-im-internet.de/bgb/__356.html
- https://support.wix.com/en/article/wix-pay-links-creating-and-managing-pay-links

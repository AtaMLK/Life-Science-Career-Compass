# Wix Bookings checkout for consultation services (implementation contract)

**This is a configuration-ready integration, not a live payment setup.** No customer payment can be taken until Wix Bookings, the payment provider, and the exact consultation service URLs are configured and verified. Do not publish a functioning-looking fake checkout.

## Confirmed business requirements
- The products are **consultations / appointments**, not online courses.
- Preserve the existing home-page journey, design, category grouping, services and German/English/Turkish UI.
- DACH visitors default to German; other regions to English, without overriding deliberate language selection.
- The business is registered and the two supplied bank accounts are business accounts according to the owner. This does **not** confirm Wix Payments activation or payout bank acceptance.
- **Never place bank account numbers / IBANs into the public frontend, git history, environment variables, screenshots or logs.** The owner configures the eligible payout account inside Wix Payments.

## Customer flow
1. Open a service from the current home-page service list; this takes the visitor to `/{lang}/services?service={serviceId}#package-explorer` with that service selected.
2. Read localized title, duration, and publicly displayed price. Confirm the displayed price and Wix service price match, including tax treatment and whether it is a one-person, small group or group service.
3. Once the corresponding service URL has been configured, the action reads "Choose time & pay online" (localized) and opens that exact Wix Bookings service.
4. Wix Bookings owns scheduling, availability, booking forms, payment amount, checkout and confirmation emails. Never invent a checkout session or transfer price from query parameters.
5. Without a configured service URL, the action still clearly says "Ask about this package" (localized) and uses existing mailto rather than claiming that a payment is possible.

## Wix site owner setup
1. Confirm the correct site in the connected Wix account. At inspection only **My Site 2** was visible; do not assume it is the approved destination.
2. Select an eligible paid Wix site plan; add **Wix Bookings**; create an **Appointment** for each applicable consultation, not a course.
3. Configure staff availability, time zone, durations, capacity, video meeting method and actual booking/cancellation rules. For services billed "Per CV" or "Per application", decide whether those should be appointment services at all rather than forcing a time slot.
4. Configure each service's price and **Entire amount online**; attach a verified payment provider in **Accept Payments**. Manual approval of appointments is not compatible with online payment for per-session Wix Bookings appointments (per Wix help).
5. Verify legal business identity and a valid payout account **inside Wix**, not the Git repository. Decide whether manual/offline bank transfer is actually needed; if so, display bank instructions only in the appropriate secure payment flow and manually reconcile them.
6. Open each actual Wix Bookings service, copy its verified direct URL and configure the mapping as environment variable `NEXT_PUBLIC_WIX_BOOKING_URLS` on the frontend deployment. Example (placeholder mapping with no real links): `{}`.
7. Double-check the display amounts against each Wix Bookings service, currency, VAT/tax note, group variants, receipts/invoices and refund flow.
8. Test in German, English and Turkish on desktop and mobile: service selection, correct appointment, correct amount, scheduling, checkout, payment success and failure, cancellation/refund, confirmation and notification email.
9. Review privacy policy and any required consent/contract terms before allowing real customers to pay.

## Source implementation
- `src/lib/wix-bookings.ts`: validates and looks up a configured HTTPS URL per service. Invalid/missing URLs are ignored.
- `src/components/editorial-site.tsx`: existing service CTA goes to the selected consultation details, preserving the overall page journey.
- `src/components/services-experience.tsx`: selected consultation CTA switches to Wix Bookings only when an explicitly verified URL has been configured.
- `.env.example`: documents `NEXT_PUBLIC_WIX_BOOKING_URLS`.
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

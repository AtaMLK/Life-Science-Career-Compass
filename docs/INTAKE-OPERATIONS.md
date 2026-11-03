# Career intake operations

## Project and baseline

Keep `career-compass-interactive-preview` (`prj_V0djujecjyqIxDkPH0YilHthajPU`).
Its authoritative deployed baseline is commit `293565001fbac907bd801d285faba5963e135ccb`.
The journey implementation was transferred from `dd739d27d0bf9f68729b8fd700da6a83a9ffc8a7`
in the same `AtaMLK/Life-Science-Career-Compass` repository. The source project's homepage
and all existing production aliases must remain unchanged when creating a preview.

## Configure in Vercel's Preview environment

- `RESEND_API_KEY`: sending key belonging to the site owner.
- `INTAKE_FROM_EMAIL`: sender on a domain verified in that Resend account.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: public widget key whose hostname configuration permits the exact preview host.
- `TURNSTILE_SECRET_KEY`: matching private widget secret.
- `OPENAI_API_KEY`: server-side project credential with an appropriate spend limit.
- `OPENAI_MODEL`: an enabled model supporting Responses API strict structured outputs.

Redeploy after setting the public widget key, since Next.js embeds it at build time.
Keep these out of Git and chat. Neither Vercel project had any configured environment
variables when inspected on 2026-11-03; the working environment had none of the above credentials.

The email recipient is fixed in server code to `Ls.career-compass@mail.de`.
The visitor's email is used only for Reply-To. Email contains plain text and explicit
consent/version/timestamp metadata. It includes the reviewed answers and contact details,
plus a service suggestion based on the selected need. No CV uploads or automated bookings.

## Behavior and privacy

The six-question intake works without provider keys. It displays a reviewed summary,
translated catalogue guidance, and a consent-gated email-app fallback. It does not claim
to send a server email when unconfigured. Answers are kept in component memory, not
local storage, analytics events, or a database. Reloading or changing language discards
the enquiry; closing and reopening retains it until reset/reload.

AI is optional and visibly unavailable when unconfigured. When a visitor chooses AI,
only their optional need text goes to OpenAI with the public service catalogue. Contacts
and the intake summary are never sent to the model by the application. `store:false`
is set; provider-side data handling still follows the owner's OpenAI account terms.
The model can return only a validated catalogue ID or `out-of-scope`; the UI renders
authored service descriptions, never free model prose. It cannot send email, browse,
promise employment/admission, or choose the visitor's final answers.

Cloudflare Siteverify is mandatory for both provider endpoints. Hostname and action
are checked, and tokens are single-use. Both endpoints also reject cross-origin
requests, oversized bodies and honeypots. Per-instance, hashed-IP burst throttling is
secondary protection; it is not a globally distributed rate limit. Configure Vercel
Firewall rate rules if additional shared abuse controls are needed at launch.

## Verify actual delivery after configuration

1. Open the preview in desktop and mobile browsers and complete CV → graduate → Germany.
2. Enter clearly labelled test details and a monitored Reply-To address; review the
   summary and give consent. Complete the site's normal spam verification yourself.
3. Submit once. A successful provider response means **accepted**, not inbox delivery.
   Capture the returned provider reference from the response; the UI does not claim delivery.
4. Check the Resend email event for that reference and verify the message in Farzaneh's
   actual inbox/spam folder. Record timestamp, recipient, provider reference and result.
5. Confirm Reply-To, all six answers, contact fields and consent metadata. Test invalid,
   expired and duplicate spam tokens; verify these cannot send messages.
6. Test on-topic and unrelated AI requests, including instructions attempting to override
   the service boundary. Confirm only catalogue text is displayed, with no guarantees.

The automated tests mock all external providers; they are not evidence of real email
delivery, domain verification, live AI quality, or production Turnstile configuration.

## Checks

`npm run test`, `npm run typecheck`, `npm run lint`, `npm run build`.

API documentation used:
- https://resend.com/docs/api-reference/emails/send-email
- https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- https://developers.openai.com/api/docs/guides/structured-outputs?api-mode=responses

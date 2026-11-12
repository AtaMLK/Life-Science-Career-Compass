/**
 * Direct HTTPS payment links configured by the owner in Wix.
 * A link may point to Wix Pay Links (pay first, schedule later) or
 * to a Wix Bookings appointment (pick an appointment before paying).
 * The Wix checkout is authoritative for price, VAT handling and status.
 * There is no default link: a missing or invalid entry retains the contact CTA.
 */
const configured = process.env.NEXT_PUBLIC_WIX_CHECKOUT_URLS;

function parseCheckoutUrls(): Record<string, string> {
  if (!configured) return {};
  try {
    const parsed: unknown = JSON.parse(configured);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const urls: Record<string, string> = {};
    for (const [serviceId, raw] of Object.entries(parsed)) {
      if (typeof raw !== "string") continue;
      try {
        const url = new URL(raw);
        if (url.protocol !== "https:" || url.username || url.password) continue;
        urls[serviceId] = url.toString();
      } catch { /* invalid URL is intentionally not used */ }
    }
    return urls;
  } catch {
    return {};
  }
}

const checkoutUrls = parseCheckoutUrls();

export function consultationCheckoutUrl(serviceId: string): string | null {
  return checkoutUrls[serviceId] ?? null;
}

/**
 * Public booking links are created in Wix Bookings per consultation service.
 * We never calculate chargeable totals or construct Wix checkout URLs in the browser.
 * The configured Wix service is the source of truth for price, currency and availability.
 */
const configured = process.env.NEXT_PUBLIC_WIX_BOOKING_URLS;

function parseBookingUrls(): Record<string, string> {
  if (!configured) return {};
  try {
    const parsed: unknown = JSON.parse(configured);
    if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") return {};
    const urls: Record<string, string> = {};
    for (const [serviceId, raw] of Object.entries(parsed)) {
      if (typeof raw !== "string") continue;
      try {
        const url = new URL(raw);
        if (url.protocol !== "https:" || url.username || url.password) continue;
        urls[serviceId] = url.toString();
      } catch { /* ignore invalid URLs */ }
    }
    return urls;
  } catch {
    return {};
  }
}

const bookingUrls = parseBookingUrls();

export function consultationBookingUrl(serviceId: string): string | null {
  return bookingUrls[serviceId] ?? null;
}

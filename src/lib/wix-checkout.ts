/**
 * Owner-configured, verified Wix payment destinations, keyed by consultation
 * and chargeable session format. The selected price in the UI is informational:
 * Wix checkout remains the authority for the final amount and payment status.
 *
 * Example: {"interview":{"individual":"https://owner-verified-link"}}
 * Legacy single-string entries apply ONLY to the individual format.
 */
export type ConsultationTier = "individual" | "semi" | "group";
type UrlMap = Record<string, Partial<Record<ConsultationTier, string>>>;
const tiers: ConsultationTier[] = ["individual", "semi", "group"];
const configured = process.env.NEXT_PUBLIC_WIX_CHECKOUT_URLS;

function validateUrl(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" || !url.hostname || url.username || url.password) return null;
    return url.toString();
  } catch { return null; }
}

function readCheckoutUrls(): UrlMap {
  if (!configured) return {};
  try {
    const source: unknown = JSON.parse(configured);
    if (!source || typeof source !== "object" || Array.isArray(source)) return {};
    const urls: UrlMap = {};
    for (const [id, raw] of Object.entries(source)) {
      if (!/^[a-z0-9-]+$/.test(id)) continue;
      if (typeof raw === "string") {
        const url = validateUrl(raw);
        if (url) urls[id] = { individual: url };
        continue;
      }
      if (!raw || typeof raw !== "object" || Array.isArray(raw)) continue;
      const formats: Partial<Record<ConsultationTier, string>> = {};
      const obj = raw as Record<string, unknown>;
      for (const tier of tiers) {
        const url = validateUrl(obj[tier]);
        if (url) formats[tier] = url;
      }
      if (Object.keys(formats).length) urls[id] = formats;
    }
    return urls;
  } catch { return {}; }
}
const checkoutUrls = readCheckoutUrls();
export function consultationCheckoutUrl(id: string, tier: ConsultationTier = "individual"): string | null {
  return checkoutUrls[id]?.[tier] ?? null;
}

/** Geo detection is only for the neutral entry URL; explicit routes take priority. */
export const PREFERRED_LANGUAGE_COOKIE = "lscc-language";
const dachCountries = new Set(["DE", "AT", "CH"]);
export type SiteLanguage = "en" | "de" | "tr";

export function defaultLanguage(countryCode:string|null|undefined, stored:string|null|undefined):SiteLanguage {
  // A visitor's intentional language choice takes precedence over their IP country.
  if(stored==="de"||stored==="en"||stored==="tr")return stored;
  return dachCountries.has((countryCode??"").toUpperCase())?"de":"en";
}

/** Remember an intentional switch, not the automatically detected locale. */
export function rememberLanguage(lang:SiteLanguage):void {
  if(typeof document==="undefined")return;
  const secure=window.location.protocol==="https:"?"; Secure":"";
  document.cookie=`${PREFERRED_LANGUAGE_COOKIE}=${lang}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
}

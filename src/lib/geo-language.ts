/** Geo detection is only for the neutral entry URL; explicit routes take priority. */
export const PREFERRED_LANGUAGE_COOKIE = "lscc-language";
const dachCountries = new Set(["DE", "AT", "CH"]);
export type SiteLanguage = "en" | "de" | "tr";

export function defaultLanguage(countryCode:string|null|undefined, stored:string|null|undefined):SiteLanguage {
  // A visitor's intentional language choice takes precedence over their IP country.
  if(stored==="de"||stored==="en"||stored==="tr")return stored;
  return dachCountries.has((countryCode??"").toUpperCase())?"de":"en";
}

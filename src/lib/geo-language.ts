/** The geo locale applies only to the neutral / entry point.
 * Explicit language routes and a visitor's manual choice always win.
 */
export const PREFERRED_LANGUAGE_COOKIE = "lscc-language";
const dachCountries = new Set(["DE", "AT", "CH"]);
export type DefaultLanguage = "de" | "en";
export function defaultLanguage(countryCode:string|null|undefined, stored:string|null|undefined):DefaultLanguage {
  if(stored==="de"||stored==="en")return stored;
  if(stored==="tr")return "en"; // Return is EN/DE only for unselected visitors; use explicit route for TR.
  return dachCountries.has((countryCode??"").toUpperCase())?"de":"en";
}

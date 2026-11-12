import {NextRequest,NextResponse} from "next/server";
import {defaultLanguage,PREFERRED_LANGUAGE_COOKIE} from "./lib/geo-language";

export function proxy(request:NextRequest){
  const pathname=request.nextUrl.pathname;
  if(pathname==="/"){
    const preferred=request.cookies.get(PREFERRED_LANGUAGE_COOKIE)?.value;
    const country=request.headers.get("x-vercel-ip-country");
    const language=defaultLanguage(country,preferred);
    const destination=request.nextUrl.clone();
    destination.pathname="/"+language;
    const response=NextResponse.redirect(destination,307);
    // Don't cache one visitor's geo- or cookie-specific redirect for another.
    response.headers.set("Cache-Control","private, no-store");
    response.headers.set("Vary","Cookie, X-Vercel-IP-Country");
    return response;
  }

  // Explicit /de, /en, /tr links are always respected; no country-based forced redirect.
  const lang=pathname.split("/")[1];
  const headers=new Headers(request.headers);
  headers.set("x-site-language",["en","de","tr"].includes(lang)?lang:"en");
  return NextResponse.next({request:{headers}});
}
export const config={matcher:["/((?!api|_next|assets|favicon.ico|robots.txt|sitemap.xml).*)"]};

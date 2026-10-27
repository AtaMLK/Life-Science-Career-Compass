import {NextResponse,type NextRequest} from "next/server";
export function proxy(request:NextRequest){
 const lang=request.nextUrl.pathname.split("/")[1];
 const requestHeaders=new Headers(request.headers);
 requestHeaders.set("x-site-language",["en","de","tr"].includes(lang)?lang:"en");
 const response=NextResponse.next({request:{headers:requestHeaders}});
 response.headers.set("X-Content-Type-Options","nosniff");
 response.headers.set("Referrer-Policy","strict-origin-when-cross-origin");
 if(!process.env.NEXT_PUBLIC_SITE_URL)response.headers.set("X-Robots-Tag","noindex, nofollow");
 return response;
}
export const config={matcher:["/((?!_next|assets|favicon.ico).*)"]};

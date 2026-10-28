import {NextRequest,NextResponse} from "next/server";
export function proxy(request:NextRequest){const lang=request.nextUrl.pathname.split("/")[1];const headers=new Headers(request.headers);headers.set("x-site-language",["en","de","tr"].includes(lang)?lang:"en");return NextResponse.next({request:{headers}})}
export const config={matcher:["/((?!api|_next|assets|favicon.ico|robots.txt|sitemap.xml).*)"]};

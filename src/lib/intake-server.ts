import {createHash} from "node:crypto";

// Secondary per-instance burst control. Turnstile's single-use verification is
// mandatory even when requests reach different serverless instances.
const attempts=new Map<string,{count:number;until:number}>();
export function allowBurst(request:Request) {
 const now=Date.now();
 for(const [key,v] of attempts) if(v.until<now) attempts.delete(key);
 const ip=request.headers.get("x-vercel-forwarded-for")||request.headers.get("x-forwarded-for")||"unknown";
 const key=createHash("sha256").update(ip).digest("hex");
 const current=attempts.get(key)||{count:0,until:now+60_000};
 if(attempts.size>=5000&&!attempts.has(key))return false;
 attempts.set(key,{...current,count:current.count+1});
 return current.count<8;
}
export function sameOrigin(request:Request) {
 const origin=request.headers.get("origin");
 return origin===new URL(request.url).origin;
}
export async function readSmallJson(request:Request) {
 if(!request.headers.get("content-type")?.startsWith("application/json"))throw new Error("content-type");
 const reader=request.body?.getReader();if(!reader)throw new Error("body");
 const chunks:Uint8Array[]=[];let size=0;
 while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>12_000){await reader.cancel();throw new Error("size");}chunks.push(value);}
 return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}
export async function verifySpam(token:string,request:Request,action:string) {
 if(!process.env.TURNSTILE_SECRET_KEY||!token||token.length>2048)return false;
 const response=await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({secret:process.env.TURNSTILE_SECRET_KEY,response:token}),signal:AbortSignal.timeout(8000)});
 if(!response.ok)return false;
 const result=await response.json();
 return result.success===true&&result.hostname===new URL(request.url).hostname&&result.action===action;
}
export function mailReady(){return Boolean(process.env.RESEND_API_KEY&&process.env.INTAKE_FROM_EMAIL&&process.env.TURNSTILE_SECRET_KEY&&process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);}
export function aiReady(){return Boolean(process.env.OPENAI_API_KEY&&process.env.OPENAI_MODEL&&process.env.TURNSTILE_SECRET_KEY&&process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);}
export const noStore={"Cache-Control":"no-store"};

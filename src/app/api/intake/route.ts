import {validateIntake,summaryText,serviceForNeed} from "@/lib/intake";
import {allowBurst,sameOrigin,readSmallJson,verifySpam,mailReady,aiReady,noStore} from "@/lib/intake-server";
export const runtime="nodejs";
export async function GET(){return Response.json({email:mailReady(),ai:aiReady()},{headers:noStore});}
export async function POST(request:Request){
 if(!sameOrigin(request))return Response.json({error:"origin"},{status:403,headers:noStore});
 if(!allowBurst(request))return Response.json({error:"rate"},{status:429,headers:{...noStore,"Retry-After":"60"}});
 try{
  const intake=validateIntake(await readSmallJson(request));
  if(!intake||intake.website)return Response.json({error:"invalid"},{status:400,headers:noStore});
  if(!mailReady())return Response.json({error:"unavailable"},{status:503,headers:noStore});
  if(!await verifySpam(intake.token,request,"intake"))return Response.json({error:"verification"},{status:400,headers:noStore});
  const service=serviceForNeed(intake.lang,intake.answers[0]);
  const text=summaryText(intake.lang,intake.answers,intake)+`\n\nPossible service (not a commitment): ${service?.name||"Discuss with Farzaneh"}\nConsent: visitor explicitly agreed to sending this summary and contact details for a personal reply.\nConsent version: 2026-11-03\nReceived: ${new Date().toISOString()}\nReference: ${intake.requestId}`;
  const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,"Content-Type":"application/json","Idempotency-Key":`intake-${intake.requestId}`},body:JSON.stringify({from:process.env.INTAKE_FROM_EMAIL,to:["Ls.career-compass@mail.de"],reply_to:intake.email,subject:`Career coaching enquiry · ${intake.lang.toUpperCase()}`,text}),signal:AbortSignal.timeout(12_000)});
  if(!response.ok)return Response.json({error:"delivery"},{status:502,headers:noStore});
  const sent=await response.json();
  if(typeof sent.id!=="string")throw new Error("receipt");
  // An API acceptance is not a claim of inbox delivery.
  return Response.json({accepted:true,reference:sent.id},{headers:noStore});
 }catch{return Response.json({error:"request"},{status:400,headers:noStore});}
}

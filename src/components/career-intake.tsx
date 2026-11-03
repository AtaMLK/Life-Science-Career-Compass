"use client";
import {useEffect,useRef,useState,type FormEvent} from "react";
import Script from "next/script";
import {MessageCircle,X} from "lucide-react";
import {services,type Lang} from "@/lib/content";
import {serviceTranslations} from "@/lib/editorial-locale";
import {intakeCopy,summaryText,serviceForNeed} from "@/lib/intake";

type Turnstile={render:(el:HTMLElement,options:Record<string,unknown>)=>string;remove:(id:string)=>void;reset:(id:string)=>void};
declare global {interface Window {turnstile?:Turnstile}}

function SpamCheck({action,onToken}:{action:string;onToken:(value:string)=>void}) {
 const container=useRef<HTMLDivElement>(null),widget=useRef<string|null>(null);
 const [ready,setReady]=useState(false);
 useEffect(()=>{
  if(!ready||!window.turnstile||!container.current)return;
  widget.current=window.turnstile.render(container.current,{sitekey:process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,action,theme:"auto",callback:onToken,"expired-callback":()=>onToken(""),"error-callback":()=>onToken("")});
  return()=>{if(widget.current)window.turnstile?.remove(widget.current);onToken("");};
 },[ready,action,onToken]);
 if(!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY)return null;
 return <><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={()=>setReady(true)}/><div className="intake-spam" ref={container}/></>;
}

export default function CareerIntake({lang}:{lang:Lang}) {
 const t=intakeCopy[lang],dialog=useRef<HTMLDialogElement>(null);
 const [open,setOpen]=useState(false),[step,setStep]=useState(0),[answers,setAnswers]=useState<string[]>([]),[detail,setDetail]=useState("");
 const [config,setConfig]=useState({email:false,ai:false}),[contact,setContact]=useState({name:"",email:"",phone:""}),[consent,setConsent]=useState(false),[website,setWebsite]=useState("");
 const [token,setToken]=useState(""),[checkVersion,setCheckVersion]=useState(0),[status,setStatus]=useState(""),[busy,setBusy]=useState(false),[sent,setSent]=useState(false);
 const [question,setQuestion]=useState(""),[suggested,setSuggested]=useState(""),[aiBusy,setAiBusy]=useState(false),[aiError,setAiError]=useState("");
 const requestId=useRef(""),lastPayload=useRef("");
 useEffect(()=>{const controller=new AbortController();fetch("/api/intake",{signal:controller.signal}).then(r=>r.json()).then(v=>setConfig({email:v.email===true,ai:v.ai===true})).catch(()=>{});return()=>controller.abort();},[]);
 useEffect(()=>{
  const element=dialog.current;if(!element)return;
  if(!open){element.close();return;}
  element.showModal();const previous=document.body.style.overflow;document.body.style.overflow="hidden";
  return()=>{element.close();document.body.style.overflow=previous;};
 },[open]);
 useEffect(()=>{
  function launch(event:Event){
   const d=(event as CustomEvent<{answers?:string[];background?:string}>).detail;
   if(d?.answers?.length===3){setAnswers(d.answers);setDetail(d.background||"");setStep(3);setConsent(false);setSent(false);setStatus("");}
   setOpen(true);
  }
  window.addEventListener("open-career-intake",launch);return()=>window.removeEventListener("open-career-intake",launch);
 },[]);
 const options=[t.needs,t.stages,t.markets,[],t.timing,["English","Deutsch","Türkçe"]];
 const choose=(value:string)=>{setAnswers(a=>[...a.slice(0,step),value]);setStep(s=>s+1);setStatus("");};
 const reset=()=>{setStep(0);setAnswers([]);setDetail("");setContact({name:"",email:"",phone:""});setConsent(false);setStatus("");setSent(false);setQuestion("");setSuggested("");setAiError("");requestId.current="";setCheckVersion(v=>v+1);};
 const summary=summaryText(lang,answers,contact);
 const mail="mailto:Ls.career-compass@mail.de?subject="+encodeURIComponent("Career coaching enquiry")+"&body="+encodeURIComponent(summary);
 async function send(event:FormEvent){
  event.preventDefault();if(busy||!consent)return;
  if(!token){setStatus(t.verify);return;}
  setBusy(true);setStatus("");
  const payload=JSON.stringify({lang,answers,...contact,consent});
  if(payload!==lastPayload.current){requestId.current=crypto.randomUUID();lastPayload.current=payload;}
  try{
   const response=await fetch("/api/intake",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang,answers,...contact,consent,website,token,requestId:requestId.current})});
   const result=await response.json();if(!response.ok||!result.accepted)throw new Error("send");
   setSent(true);setStatus(t.success);
  }catch{setStatus(t.error);}finally{setBusy(false);setToken("");setCheckVersion(v=>v+1);}
 }
 async function askAI(){
  if(!token){setAiError(t.verify);return;}setAiBusy(true);setAiError("");setSuggested("");
  try{const response=await fetch("/api/career-assistant",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:question,token,website})});const result=await response.json();if(!response.ok)throw new Error("ai");setSuggested(result.service);}
  catch{setAiError(t.aiError);}finally{setAiBusy(false);setToken("");setCheckVersion(v=>v+1);}
 }
 const selected=services.find(s=>s.id===suggested);
 const translated=selected&&(lang==="en"?selected:{...selected,...serviceTranslations[lang][selected.id]});
 const possible=serviceForNeed(lang,answers[0]);
 const recommendation=possible&&(lang==="en"?possible:{...possible,...serviceTranslations[lang][possible.id]});
 const backgroundPrompt=answers[0]===t.needs[0]?t.detail:lang==="de"?"Nennen Sie Abschluss, Fachgebiet, Erfahrung und Zielposition. Für Interviews: Gibt es einen Termin und eine Stellenbeschreibung? Keine sensiblen Daten eingeben.":lang==="tr"?"Derecenizi, alanınızı, deneyiminizi ve hedef rolünüzü belirtin. Mülakat için: tarih ve ilan var mı? Hassas bilgi girmeyin.":"Mention your degree, field, experience and target role. For interviews: is there a date and a job description? Do not include sensitive information.";
 return <>
  <button className="intake-launch" type="button" onClick={()=>setOpen(true)} aria-haspopup="dialog"><MessageCircle size={19}/>{t.open}</button>
  <dialog ref={dialog} className="intake-dialog" aria-labelledby="intake-title" onCancel={()=>setOpen(false)} onClick={e=>{if(e.target===e.currentTarget)setOpen(false);}}>
   <header className="intake-header"><h2 id="intake-title">{t.title}</h2><button autoFocus type="button" onClick={()=>setOpen(false)} aria-label={t.close}><X size={20}/></button></header>
   <div className="intake-body"><p>{t.intro}</p>
    <div className="intake-honeypot" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={website} onChange={e=>setWebsite(e.target.value)}/></label></div>
    {step===0&&<details className="intake-ai"><summary>{t.ai}</summary><p>{t.aiHelp}</p>{config.ai?<><label className="intake-field">{t.ai}<textarea maxLength={600} value={question} onChange={e=>setQuestion(e.target.value)}/></label>{open&&<SpamCheck key={`ai-${checkVersion}`} action="assistant" onToken={setToken}/>}<button className="friendly-button secondary" type="button" disabled={aiBusy||!question.trim()||!token} onClick={askAI}>{aiBusy?"…":t.aiAsk}</button>{aiError&&<p role="alert">{aiError}</p>}{suggested==="out-of-scope"?<p>{t.scope}</p>:translated&&<div className="intake-suggestion"><strong>{t.suggestion}: {translated.name}</strong><p>{translated.description}</p><a className="friendly-text-link" href={`/${lang}/services?service=${selected!.id}#package-explorer`}>{translated.name} ↗</a></div>}</>:<p>{t.aiOff}</p>}</details>}
    {step<6?<section aria-live="polite" className="intake-question"><span className="small-kicker">{step+1} / 6</span><h3>{t.questions[step]}</h3>{step===3?<form onSubmit={e=>{e.preventDefault();if(detail.trim())choose(detail.trim());}}><label className="intake-field">{backgroundPrompt}<textarea required minLength={2} maxLength={1000} value={detail} onChange={e=>setDetail(e.target.value)}/></label><button className="friendly-button accent">{t.next}</button></form>:<div className="answer-list">{options[step].map(o=><button type="button" key={o} onClick={()=>choose(o)}>{o}</button>)}</div>}{step>0&&<button className="intake-back" type="button" onClick={()=>{setStep(s=>s-1);setStatus("");}}>{t.back}</button>}</section>:<form onSubmit={send}>
     <h3>{t.review}</h3>{recommendation&&<div className="intake-suggestion"><strong>{t.suggestion}: {recommendation.name}</strong><p>{recommendation.description}</p><a className="friendly-text-link" href={`/${lang}/services?service=${possible!.id}#package-explorer`}>{recommendation.name} ↗</a></div>}<dl className="intake-summary">{answers.map((answer,i)=><div key={i}><dt>{t.questions[i]}</dt><dd>{answer}</dd></div>)}</dl>
     {!sent&&<><button type="button" className="intake-back" onClick={()=>{setStep(0);setConsent(false);}}>{t.back}</button><label className="intake-field">{t.name}<input autoComplete="name" required maxLength={100} value={contact.name} onChange={e=>setContact({...contact,name:e.target.value})}/></label><label className="intake-field">{t.email}<input type="email" autoComplete="email" required maxLength={254} value={contact.email} onChange={e=>setContact({...contact,email:e.target.value})}/></label><label className="intake-field">{t.phone}<input type="tel" autoComplete="tel" maxLength={50} value={contact.phone} onChange={e=>setContact({...contact,phone:e.target.value})}/></label><p className="intake-privacy">{t.privacy}</p><label className="intake-consent"><input type="checkbox" required checked={consent} onChange={e=>setConsent(e.target.checked)}/><span>{t.consent}</span></label>{config.email?<>{open&&<SpamCheck key={`mail-${checkVersion}`} action="intake" onToken={setToken}/>}<button className="friendly-button accent" disabled={busy||!consent||!token}>{busy?t.sending:t.send}</button></>:<p role="status">{t.unavailable}</p>}{consent&&contact.name.trim()&&contact.email&&<a className="intake-fallback" href={mail}>{t.fallback} ↗</a>}</>}
     {status&&<p role={sent?"status":"alert"}>{status}</p>}
    </form>}
    <button className="intake-back" type="button" disabled={busy||aiBusy} onClick={reset}>{t.reset}</button>
   </div>
  </dialog>
 </>;
}

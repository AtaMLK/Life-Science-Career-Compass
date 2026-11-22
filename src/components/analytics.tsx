"use client";
import {useEffect,useState} from "react";
import {usePathname} from "next/navigation";
type Consent="accepted"|"declined";
declare global{interface Window{dataLayer:unknown[];gtag?:(...args:unknown[])=>void;}}
const key="lscc-analytics-consent-v1";
const measurementId=process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const enabled=Boolean(measurementId&&/^G-[A-Z0-9]+$/.test(measurementId));
const words={en:{title:"Optional analytics",text:"With your permission, Google Analytics helps us understand which pages and features are useful. Your questionnaire answers are not sent.",yes:"Allow analytics",no:"Reject analytics",settings:"Cookie preferences"},de:{title:"Optionale Analyse",text:"Mit Ihrer Zustimmung hilft Google Analytics, die Nutzung der Website zu verstehen. Ihre Fragebogenantworten werden nicht übermittelt.",yes:"Analyse erlauben",no:"Analyse ablehnen",settings:"Cookie-Einstellungen"},tr:{title:"İsteğe bağlı analiz",text:"İzninizle Google Analytics, sayfaları ve özellikleri geliştirmemize yardımcı olur. Anket yanıtlarınız gönderilmez.",yes:"Analize izin ver",no:"Analizi reddet",settings:"Çerez tercihleri"}};
export default function Analytics(){
 const pathname=usePathname();const lang=pathname.split("/")[1] as keyof typeof words;const t=words[lang]??words.en;
 const [ready,setReady]=useState(false);
 const [choice,setChoice]=useState<Consent|null>(null);const [show,setShow]=useState(false);
 useEffect(()=>{if(!enabled)return;let saved:string|null=null;try{saved=localStorage.getItem(key);}catch{}const frame=requestAnimationFrame(()=>{setChoice(saved==="accepted"?"accepted":saved==="declined"?"declined":null);setShow(!saved);setReady(true);});return ()=>cancelAnimationFrame(frame);},[]);
 useEffect(()=>{
  if(!enabled||choice!=="accepted")return;
  window.dataLayer=window.dataLayer??[];
  // gtag expects its arguments object in the dataLayer.
  // Google’s tag queue consumes the arguments object.
  // eslint-disable-next-line prefer-rest-params
  window.gtag=window.gtag??function(){window.dataLayer.push(arguments);};
  window.gtag("consent","default",{analytics_storage:"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});
  window.gtag("consent","update",{analytics_storage:"granted",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});
  window.gtag("js",new Date());
  window.gtag("config",measurementId,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false});
  if(!document.getElementById("lscc-google-analytics")){const script=document.createElement("script");script.id="lscc-google-analytics";script.async=true;script.src=`https://www.googletagmanager.com/gtag/js?id=${measurementId}`;document.head.appendChild(script);}
  const click=(event:MouseEvent)=>{const element=(event.target as Element).closest?.("a,button");if(!element)return;
   if(element.matches('a[href^="mailto:"]'))window.gtag?.("event","contact_click",{contact_method:"email"});
   if(element.matches(".certificate-open"))window.gtag?.("event","certificate_open");
   if(element.matches(".package-option"))window.gtag?.("event","service_select",{service_id:element.getAttribute("data-service-id")});
  };
  const complete=()=>window.gtag?.("event","quiz_complete");
  document.addEventListener("click",click);window.addEventListener("career-quiz-complete",complete);
  return ()=>{document.removeEventListener("click",click);window.removeEventListener("career-quiz-complete",complete);};
 },[choice]);
 useEffect(()=>{if(enabled&&choice==="accepted")window.gtag?.("event","page_view",{page_location:window.location.origin+pathname,page_path:pathname});},[pathname,choice]);
 const save=(value:Consent)=>{try{localStorage.setItem(key,value);}catch{}setChoice(value);setShow(false);
  if(value==="declined"&&window.gtag){window.gtag("consent","update",{analytics_storage:"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});Object.assign(window,{[`ga-disable-${measurementId}`]:true});
   const domains=[window.location.hostname,"."+window.location.hostname];for(const cookie of document.cookie.split(";")){const name=cookie.trim().split("=")[0];if(/^_ga(?:_|$)/.test(name)){document.cookie=`${name}=; Max-Age=0; path=/`;for(const domain of domains)document.cookie=`${name}=; Max-Age=0; path=/; domain=${domain}`;}}window.location.reload();}
 };
 if(!enabled||!ready)return null;
 return <><button type="button" className="cookie-settings" onClick={()=>setShow(true)}>{t.settings}</button>{show&&<aside className="cookie-banner" aria-label={t.title}><div><strong>{t.title}</strong><p>{t.text}</p></div><div className="cookie-actions"><button type="button" onClick={()=>save("declined")}>{t.no}</button><button type="button" onClick={()=>save("accepted")}>{t.yes}</button></div></aside>}</>;
}

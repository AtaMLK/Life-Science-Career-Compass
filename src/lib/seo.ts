import type { Metadata } from "next";
import {copy,services,type Lang} from "./content";
import {serviceTranslations} from "./editorial-locale";
export function siteOrigin(){
 const value=process.env.NEXT_PUBLIC_SITE_URL;
 if(!value)return undefined;
 try{const url=new URL(value);return /^https?:$/.test(url.protocol)&&!url.hostname.endsWith(".example")?url.origin:undefined;}catch{return undefined;}
}
export function pageMetadata(lang:Lang,title:string,description:string,path=""):Metadata{
 const base=siteOrigin();const url=base?`${base}/${lang}${path}`:undefined;
 const image=base?{url:`${base}/assets/farzaneh/portrait-office.png`,width:1061,height:1483,alt:"Dr. Farzaneh Hähndel"}:undefined;
 return {title:{absolute:title},description,alternates:base?{canonical:url,languages:{en:`${base}/en${path}`,de:`${base}/de${path}`,tr:`${base}/tr${path}`,"x-default":`${base}/en${path}`}}:undefined,
 openGraph:{title,description,url,siteName:"Life Science Career Compass",type:"website",locale:{en:"en_GB",de:"de_DE",tr:"tr_TR"}[lang],alternateLocale:["en_GB","de_DE","tr_TR"].filter(x=>x!=={en:"en_GB",de:"de_DE",tr:"tr_TR"}[lang]),images:image?[image]:undefined},twitter:{card:"summary_large_image",title,description,images:image?[image.url]:undefined}};
}
export function structuredData(lang:Lang,isServices=false){
 const base=siteOrigin();const prefix=base??"";
 const person={"@type":"Person","@id":`${prefix}/#coach`,name:"Dr. Farzaneh Hähndel",jobTitle:"Life Science Career Coach",knowsLanguage:["en","de","tr"],description:copy[lang].about,sameAs:["https://www.linkedin.com/in/fhaehndel"],...(base?{url:`${base}/${lang}`,image:`${base}/assets/farzaneh/portrait.png`}:{})};
 const business={"@type":"Organization","@id":`${prefix}/#organization`,name:"Life Science Career Compass",email:"Ls.career-compass@mail.de",founder:{"@id":person["@id"]},areaServed:["Germany","Austria","Switzerland"],...(base?{url:base}:{})};
 const catalog={"@type":"OfferCatalog",name:{en:"Career coaching services",de:"Karrierecoaching Leistungen",tr:"Kariyer danışmanlığı hizmetleri"}[lang],itemListElement:services.map(s=>({"@type":"Offer",itemOffered:{"@type":"Service",name:lang==="en"?s.name:serviceTranslations[lang][s.id].name,description:lang==="en"?s.description:serviceTranslations[lang][s.id].description,provider:{"@id":business["@id"]},availableLanguage:["en","de","tr"]}}))};
 return {"@context":"https://schema.org","@graph":[person,business,...(isServices?[catalog]:[{"@type":"FAQPage",inLanguage:lang,mainEntity:copy[lang].faq.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}]),...(base?[{"@type":"WebSite","@id":`${base}/#website`,url:base,name:business.name,inLanguage:["en","de","tr"]},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Life Science Career Compass",item:`${base}/${lang}`},...(isServices?[{"@type":"ListItem",position:2,name:catalog.name,item:`${base}/${lang}/services`}]:[])]}]:[])]};
}
export function jsonLd(value:unknown){return JSON.stringify(value).replace(/</g,"\\u003c");}

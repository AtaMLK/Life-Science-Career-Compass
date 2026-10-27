"use client";
import {useEffect,useRef,useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Image from "next/image";
import type {Lang} from "@/lib/content";

const items=[
 {year:"2014—2017",place:"Istanbul, Türkiye",en:"The scientific foundation",de:"Das wissenschaftliche Fundament",tr:"Bilimsel temel",enText:"Food Science and Technology, Istanbul Technical University.",deText:"Lebensmittelwissenschaft und -technologie, Technische Universität Istanbul.",trText:"İstanbul Teknik Üniversitesi, Gıda Bilimi ve Teknolojisi."},
 {year:"2019—2025",place:"Jena, Germany",en:"The doctorate",de:"Die Promotion",tr:"Doktora yolculuğu",enText:"Doctoral research at Friedrich Schiller University Jena.",deText:"Promotionsforschung an der Friedrich-Schiller-Universität Jena.",trText:"Friedrich Schiller Üniversitesi Jena'da doktora araştırmaları."},
 {year:"2019—2023",place:"Jena, Germany",en:"Research in practice",de:"Forschung in der Praxis",tr:"Uygulamalı araştırma",enText:"Research experience at University Hospital Jena.",deText:"Forschungserfahrung am Universitätsklinikum Jena.",trText:"Jena Üniversite Hastanesinde araştırma deneyimi."},
 {year:"2023—2024",place:"Jena, Germany",en:"From academia to industry",de:"Von der Wissenschaft in die Industrie",tr:"Akademiden endüstriye",enText:"A new perspective at Analytik Jena.",deText:"Ein neuer Blickwinkel bei Analytik Jena.",trText:"Analytik Jena'da yeni bir bakış açısı."},
 {year:"2026—present",place:"Germany / International",en:"International life sciences",de:"Internationale Lebenswissenschaften",tr:"Uluslararası yaşam bilimleri",enText:"Professional experience with Charles River Laboratories.",deText:"Berufserfahrung bei Charles River Laboratories.",trText:"Charles River Laboratories ile profesyonel deneyim."},
 {year:"2026",place:"IHK · Germany",en:"Sharing the experience",de:"Erfahrung weitergeben",tr:"Deneyimi paylaşmak",enText:"Completed IHK Job- und Bewerbungscoaching training and qualification.",deText:"IHK-Weiterbildung Job- und Bewerbungscoaching erfolgreich abgeschlossen.",trText:"IHK İş ve Başvuru Koçluğu eğitimini başarıyla tamamladı."}
] as const;
export default function JourneyScroll({lang}:{lang:Lang}){
 const root=useRef<HTMLElement>(null);
 const certificateDialog=useRef<HTMLDialogElement>(null);
 const [active,setActive]=useState(0);
 const [documentOpen,setDocumentOpen]=useState(false);
 useEffect(()=>{
  const dialog=certificateDialog.current;
  if(!dialog)return;
  if(!documentOpen){dialog.close();return;}
  const previousOverflow=document.body.style.overflow;
  dialog.showModal();
  document.body.style.overflow="hidden";
  return ()=>{dialog.close();document.body.style.overflow=previousOverflow;};
 },[documentOpen]);
 useEffect(()=>{
  const rootEl=root.current;if(!rootEl)return;
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  gsap.registerPlugin(ScrollTrigger);
  const ctx=gsap.context(()=>{
   const steps=gsap.utils.toArray<HTMLElement>(".journey-step");
   steps.forEach((step,i)=>ScrollTrigger.create({trigger:step,start:"top 58%",end:"bottom 40%",onEnter:()=>setActive(i),onEnterBack:()=>setActive(i)}));
   gsap.fromTo(".journey-progress-fill",{scaleY:0},{scaleY:1,transformOrigin:"top",ease:"none",scrollTrigger:{trigger:".journey-steps",start:"top 70%",end:"bottom 60%",scrub:1}});
   gsap.fromTo(".journey-frame",{y:35},{y:-35,ease:"none",scrollTrigger:{trigger:rootEl,start:"top bottom",end:"bottom top",scrub:1}});
  },rootEl);
  return ()=>ctx.revert();
 },[]);
 const text={en:{k:"THE JOURNEY",a:"Experience isn't a title.",b:"It's a journey.",intro:"Six chapters across education, research, industry and career coaching. Scroll through the moments that shaped Farzaneh's perspective.",see:"View IHK certificate",close:"Close certificate",full:"View original career journey illustration"},de:{k:"DER WEG",a:"Erfahrung ist kein Titel.",b:"Sondern ein Weg.",intro:"Sechs Etappen zwischen Studium, Forschung, Industrie und Karrierecoaching.",see:"IHK-Zertifikat ansehen",close:"Zertifikat schließen",full:"Originalillustration zum Karriereweg ansehen"},tr:{k:"KARİYER YOLCULUĞU",a:"Deneyim bir unvan değil.",b:"Bir yolculuktur.",intro:"Eğitim, araştırma, endüstri ve kariyer danışmanlığı boyunca altı önemli adım.",see:"IHK sertifikasını görüntüle",close:"Sertifikayı kapat",full:"Özgün kariyer yolculuğu görselini aç"}}[lang];
 return <section ref={root} className="journey-v3" id="journey"><div className="journey-heading"><span className="index-mark">03 / {text.k}</span><h2>{text.a}<br/><i>{text.b}</i></h2><p>{text.intro}</p></div>
 <div className="journey-grid-v3"><div className="journey-sticky"><div className="journey-frame">
 <div className="journey-number">{String(active+1).padStart(2,"0")} <span>/ 06</span></div>
 <div className="journey-portrait-wrap"><Image src="/assets/farzaneh/portrait.png" fill sizes="(max-width:760px) 80vw,40vw" alt="Dr. Farzaneh Hähndel" className="journey-person-photo"/></div>
 <div className="journey-photo-caption"><strong>Dr. Farzaneh Hähndel</strong><span>PhD · IHK Job & Application Coach</span></div>
 <button type="button" className="certificate-open" onClick={()=>setDocumentOpen(true)}>{text.see}<span>↗</span></button>
 </div></div><div className="journey-steps"><div className="journey-progress-rail"><span className="journey-progress-fill"/></div>{items.map((item,i)=><article key={i} className={active===i?"journey-step active":"journey-step"}><div className="journey-serial">{String(i+1).padStart(2,"0")}</div><div className="journey-date">{item.year} · {item.place}</div><h3>{item[lang]}</h3><p>{lang==="en"?item.enText:lang==="de"?item.deText:item.trText}</p></article>)}</div></div>

 <dialog ref={certificateDialog} className="certificate-lightbox" aria-labelledby="certificate-title" onCancel={()=>setDocumentOpen(false)} onClick={event=>{if(event.target===event.currentTarget)setDocumentOpen(false)}}><div className="certificate-modal"><header className="certificate-header"><h3 id="certificate-title" className="certificate-sr-only">{lang==="de"?"IHK-Zertifikat":lang==="tr"?"IHK sertifikası":"IHK certificate"}</h3><button autoFocus type="button" className="certificate-close" aria-label={text.close} onClick={()=>setDocumentOpen(false)}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17"/></svg></button></header><div className="certificate-document"><Image src="/assets/farzaneh/certificate.png" width={1131} height={1391} sizes="(max-width:760px) 92vw,650px" alt="IHK Job und Bewerbungscoaching certificate of Dr. Farzaneh Hähndel"/></div><footer className="certificate-footer"><span>Job- und Bewerbungscoaching (IHK)</span><a href="/assets/farzaneh/certificate.png" target="_blank" rel="noreferrer">{lang==="de"?"Original öffnen":lang==="tr"?"Orijinali aç":"Open original"} ↗</a></footer></div></dialog>
 </section>;
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Menu, X, Check, ChevronDown, Compass, Dna, GraduationCap, BriefcaseBusiness, FlaskConical, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { copy, services, type Lang } from "@/lib/content";

const address="Ls.career-compass@mail.de";
const enquiry=(service:string)=>`mailto:${address}?subject=${encodeURIComponent("Life Science Career Compass - "+service)}`;
const categoryNames=["All","Career strategy","Academia","Application essentials","Interview & negotiation","Personalized package"];

export default function Site({lang}:{lang:Lang}){
 const t=copy[lang];
 const [menu,setMenu]=useState(false);
 const [category,setCategory]=useState("All");
 const [expanded,setExpanded]=useState<string|null>(null);
 const [faq,setFaq]=useState<number|null>(0);
 const [pricing,setPricing]=useState<"individual"|"semi"|"group">("individual");
 const visible=services.filter(s=>category==="All"||s.category===category);
 return <div>
 <header className="header"><div className="container header-inner">
  <Link href={`/${lang}`} className="brand"><span className="brand-icon"><Compass size={26}/></span><span><strong>LIFE SCIENCE</strong><small>CAREER COMPASS</small></span></Link>
  <button type="button" className="menu-button" aria-expanded={menu} aria-label="Toggle navigation" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
  <nav className={menu?"nav open":"nav"} aria-label="Main navigation">
   {["services","about","pricing","faq"].map((section,i)=><a key={section} href={`#${section}`} onClick={()=>setMenu(false)}>{t.nav[i]}</a>)}
   <div className="languages">{(["en","de","tr"] as const).map(l=><Link key={l} href={`/${l}`} className={l===lang?"chosen":""}>{l.toUpperCase()}</Link>)}</div>
   <a href="#contact" className="button button-dark nav-cta" onClick={()=>setMenu(false)}>{t.navCta}<ArrowUpRight size={16}/></a>
  </nav>
 </div></header>
 <main>
 <section className="hero"><div className="container hero-layout"><div className="hero-content">
  <span className="eyebrow"><span className="dot"/> {t.eyebrow}</span>
  <h1>{t.title}<br/><em>{t.titleAccent}</em></h1>
  <p className="hero-intro">{t.hero}</p>
  <div className="actions"><a className="button button-blue" href="#services">{t.primary}<ArrowUpRight size={18}/></a><a className="underlined" href="#about">{t.secondary}<ArrowRight size={17}/></a></div>
  <div className="trust-inline">{t.trust.map(v=><span key={v}><Check size={15}/>{v}</span>)}</div>
 </div><div className="hero-art" aria-label="Stylized scientific compass illustration">
  <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
  <div className="compass-center"><Dna size={68} strokeWidth={1.25}/><span>GUIDE · EMPOWER · ACHIEVE</span></div>
  <div className="floating-note note-one"><FlaskConical size={20}/>Science-led guidance</div>
  <div className="floating-note note-two"><BriefcaseBusiness size={20}/>Academia & Industry</div>
  <div className="art-label">DR. FARZANEH HÄHNDEL · GERMANY</div>
 </div></div></section>
 <section className="credentials"><div className="container credential-grid">{["PhD · Life Sciences","IHK Job & Application Coaching","Academic & Industry Experience","Based in Germany"].map((s,i)=><div key={s}><small>0{i+1} / CREDENTIAL</small><strong>{s}</strong></div>)}</div></section>
 <section className="section" id="audience"><div className="container"><div className="section-title centered"><span className="eyebrow">{t.kickerWho}</span><h2>{t.whoTitle}</h2><p>{t.whoText}</p></div><div className="audience-grid">{t.personas.map(([name,desc],i)=>{const Icon=[GraduationCap,FlaskConical,BriefcaseBusiness][i];return <a href="#services" key={name} className="audience-card"><span className="subtle">0{i+1}</span><Icon size={34} strokeWidth={1.4}/><h3>{name}</h3><p>{desc}</p><ArrowUpRight className="corner" size={20}/></a>})}</div></div></section>
 <section className="section shaded" id="services"><div className="container"><div className="section-title split"><div><span className="eyebrow">{t.kickerServices}</span><h2>{t.servicesTitle}</h2></div><p>{t.servicesText}</p></div>
 <div className="filters">{categoryNames.map(c=><button type="button" key={c} className={c===category?"selected":""} aria-pressed={category===c} onClick={()=>{setCategory(c);setExpanded(null)}}>{c}</button>)}</div>
 <div className="service-grid">{visible.map((s,i)=><article key={s.id} className="service-card"><button type="button" className="service-main" aria-expanded={expanded===s.id} onClick={()=>setExpanded(expanded===s.id?null:s.id)}><div className="service-top"><span className="service-symbol"><Compass size={21}/></span><small>{String(i+1).padStart(2,"0")}</small></div><span className="service-type">{s.category}</span><h3>{s.name}</h3><p>{s.description}</p><div className="service-bottom"><b>{s.individual}</b><span>{t.details} <ArrowUpRight size={15}/></span></div></button>{expanded===s.id&&<div className="service-expanded"><p>{t.duration}: <strong>{s.duration}</strong></p><p>{t.individual}: <strong>{s.individual}</strong></p>{s.semi&&<p>{t.semi}: <strong>{s.semi}</strong></p>}{s.group&&<p>{t.group}: <strong>{s.group}</strong></p>}<a href={enquiry(s.name)}>{t.enquire} <ArrowRight size={16}/></a></div>}</article>)}</div>
 </div></section>
 <section className="section" id="process"><div className="container"><div className="section-title centered"><span className="eyebrow">{t.processEyebrow}</span><h2>{t.processTitle}</h2></div><div className="steps">{t.steps.map(([n,title,desc])=><div key={n} className="step"><span>{n}</span><div className="rule"/><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
 <section id="about" className="section dark-section"><div className="container about-grid"><div className="profile-visual"><div className="monogram">FH</div><div className="profile-caption">DR. FARZANEH HÄHNDEL<br/><span>CAREER COACH</span></div></div><div className="about-text"><span className="eyebrow">{t.aboutEyebrow}</span><h2>{t.aboutTitle}</h2><p>{t.about}</p><div className="timeline">{t.timeline.map((line,i)=><div key={line}><span>{String(i+1).padStart(2,"0")}</span><p>{line}</p></div>)}</div><a href="#contact" className="underlined">{t.navCta} <ArrowRight size={17}/></a></div></div></section>
 <section id="pricing" className="section"><div className="container"><div className="section-title centered"><span className="eyebrow">{t.packagesEyebrow}</span><h2>{t.packagesTitle}</h2><p>{t.packagesText}</p></div><div className="pricing-toggle">{(["individual","semi","group"] as const).map(k=><button type="button" key={k} className={pricing===k?"active":""} aria-pressed={pricing===k} onClick={()=>setPricing(k)}>{t[k]}</button>)}</div>
 <div className="pricing-grid">{[{title:"Career Essentials",desc:"CVs, cover letters and application documents.",ids:["cv","cv-from-scratch","letter-review","letter-from-scratch","documents"],start:{individual:"€60",semi:"€55",group:"€50"}},{title:"Career Growth",desc:"Industry and academic opportunities, interviews and salary negotiations.",ids:["industry","academia","interview","salary"],start:{individual:"€80",semi:"€75",group:"€70"}},{title:"Personal Career Coaching",desc:"A dedicated program with 6 individual coaching sessions of 60 minutes.",ids:["coaching"],start:{individual:"€600",semi:"€600",group:"€600"}}].map((p,i)=><article className={i===2?"price-card highlighted":"price-card"} key={p.title}><small>0{i+1} / {i===2?"PERSONALIZED":"TARGETED SUPPORT"}</small><h3>{p.title}</h3><p>{p.desc}</p><div className="starting"><span>{i===2?"6 × 60 min":t.from}</span><strong>{p.start[pricing]}</strong></div><ul>{p.ids.map(id=>{const s=services.find(x=>x.id===id)!;return <li key={id}><Check size={15}/><span>{s.name}</span><b>{i===2?s.individual:(s[pricing]??"—")}</b></li>})}</ul><a className={i===2?"button button-blue":"button button-outline"} href={enquiry(p.title)}>{t.navCta}<ArrowUpRight size={17}/></a></article>)}</div><p className="pricing-note">{t.priceNote}</p></div></section>
 <section className="section shaded" id="faq"><div className="container faq-grid"><div><span className="eyebrow">{t.faqEyebrow}</span><h2>{t.faqTitle}</h2></div><div className="faq-items">{t.faq.map(([q,a],i)=><div className="faq-item" key={q}><button type="button" aria-expanded={faq===i} onClick={()=>setFaq(faq===i?null:i)}>{q}<ChevronDown className={faq===i?"rotate":""} size={20}/></button>{faq===i&&<p>{a}</p>}</div>)}</div></div></section>
 <section className="final-section" id="contact"><div className="container"><div className="contact-panel"><span className="eyebrow">{t.finalEyebrow}</span><h2>{t.finalTitle}</h2><p>{t.finalText}</p><a className="button button-white" href={enquiry("Consultation request")}>{t.contact}<ArrowUpRight size={19}/></a><div className="contact-links"><a href={`mailto:${address}`}><Mail size={16}/>{address}</a><a href="tel:+4915785331977"><Phone size={16}/>+49 157 85331977</a></div></div></div></section>
 </main>
 <footer><div className="container footer-layout"><div><Link href={`/${lang}`} className="brand"><span className="brand-icon"><Compass size={23}/></span><span><strong>LIFE SCIENCE</strong><small>CAREER COMPASS</small></span></Link><p>{t.footer}</p></div><div className="footer-data"><span><MapPin size={16}/>Germany</span><a href="https://www.linkedin.com/in/fhaehndel" rel="noopener noreferrer" target="_blank"><Linkedin size={16}/>LinkedIn</a><span>EN · DE · TR</span></div></div><div className="container footnote"><span>© {new Date().getFullYear()} Life Science Career Compass</span><span>{t.legal}</span></div></footer>
 <a className="sticky-mobile" href="#contact">{t.navCta}<ArrowUpRight size={17}/></a>
 </div>;
}

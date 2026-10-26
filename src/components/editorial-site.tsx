"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Plus, Minus, Menu, X, Compass, Dna, MoveDownRight, Mail, FlaskConical, ChevronRight } from "lucide-react";
import { copy, services, type Lang } from "@/lib/content";
import MotionDirector from "./motion-director";
import { editorialLocale, serviceTranslations } from "@/lib/editorial-locale";

const mail=(subject:string)=>"mailto:Ls.career-compass@mail.de?subject="+encodeURIComponent(subject);
const clusters=[
 {number:"01",label:"EXPLORE",title:"Find your direction.",description:"A strong scientific background opens doors. The challenge is knowing which ones to knock on.",keys:["industry","academia"],accent:"aqua"},
 {number:"02",label:"PRESENT",title:"Tell your story well.",description:"Your experience deserves more than a list of qualifications. Make every application count.",keys:["cv","cv-from-scratch","letter-review","letter-from-scratch","documents"],accent:"coral"},
 {number:"03",label:"ADVANCE",title:"Own your next move.",description:"Walk into interviews and negotiations knowing what you bring to the table.",keys:["interview","salary","coaching"],accent:"lime"}
] as const;

export default function Site({lang}:{lang:Lang}){
 const c=copy[lang];
 const e=editorialLocale[lang];
 const localizedService=(id:string)=>lang==="en"?services.find(x=>x.id===id)!:({...services.find(x=>x.id===id)!,...serviceTranslations[lang][id]});
 const [theme,setTheme]=useState<"light"|"dark">("light");
 useEffect(()=>{const saved=window.localStorage.getItem("lscc-theme");if(saved==="dark"||saved==="light")setTheme(saved);},[]);
 const switchTheme=()=>{const next=theme==="light"?"dark":"light";setTheme(next);window.localStorage.setItem("lscc-theme",next)};
 const [menu,setMenu]=useState(false);
 const [selected,setSelected]=useState<string|null>(null);
 const [faq,setFaq]=useState<number|null>(null);
 const [showPrices,setShowPrices]=useState(false);
 return <div className="v2" data-theme={theme}>
 <MotionDirector/>
 <header className="creative-nav"><div className="creative-nav-inner">
  <Link href={`/${lang}`} className="identity" aria-label="Life Science Career Compass"><Compass size={30} strokeWidth={1.3}/><span>LIFE SCIENCE<br/><b>CAREER COMPASS</b></span></Link>
  <nav className={menu?"creative-links open":"creative-links"} aria-label="Primary navigation"><a href="#approach" onClick={()=>setMenu(false)}>{e.menu[0]}</a><a href="#services" onClick={()=>setMenu(false)}>{e.menu[1]}</a><a href="#story" onClick={()=>setMenu(false)}>{e.menu[2]}</a><a href="#questions" onClick={()=>setMenu(false)}>{e.menu[3]}</a><div className="locale-options">{(["en","de","tr"] as const).map(l=><Link key={l} aria-current={lang===l?"page":undefined} href={`/${l}`}>{l.toUpperCase()}</Link>)}</div></nav>
  <button type="button" className="cosmic-toggle" onClick={switchTheme} aria-label={theme==="light"?e.toggleDark:e.toggleLight} title={theme==="light"?e.toggleDark:e.toggleLight} aria-pressed={theme==="dark"}><span className="cosmic-track"><span className="cosmic-stars">✦ ✧</span><span className="cosmic-orb">{theme==="light"?"☼":"☾"}</span></span></button><a className="nav-contact" href="#connect">{c.navCta}<ArrowUpRight size={17}/></a><button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
 </div></header>
 <main>
  <section className="editorial-hero">
   <div className="hero-ambient ambient-1"/><div className="hero-ambient ambient-2"/>
   <div className="hero-meta"><span>{e.introLabel}</span><span>GERMANY · EN / DE / TR</span></div>
   <div className="hero-stage">
    <p className="hero-kicker" data-reveal>{e.heroTag}</p><div className="hero-nameplate" data-reveal><span>{e.person}</span><strong>Dr. Farzaneh Hähndel</strong><small>PhD · IHK-Certified Job & Application Coach</small></div>
    <h1 data-reveal>{e.heroA}<br/><em>{e.heroB}</em><br/><span>{e.heroC}</span></h1>
    <div className="hero-photo" aria-label="Science research photography"><div className="hero-photo-image" data-image-parallax/><div className="photo-overlay"><span>FH</span><small>{e.portraitPending}</small></div></div>
    <div className="hero-side-note"><span className="asterisk">✳</span><p>{e.forMinds}</p></div>
    <div className="hero-action"><a href="#approach">{e.scroll} <MoveDownRight size={18}/></a></div>
   </div>
   <div className="hero-bottom"><span>{e.credential}</span><span>{e.scrollHint} ↓</span></div>
  </section>

  <section className="statement" id="approach"><div className="statement-inside"><div className="eyebrow-alt" data-reveal>{e.statementLabel}</div><h2 data-reveal>{e.statementA} <span>{e.statementB}</span><br/>{e.statementC} <i>{e.statementD}</i></h2><p data-reveal>{c.hero}</p><div className="statement-line" data-line-draw/><div className="statement-footer"><span>{e.statementFoot}</span><Dna size={39} strokeWidth={1.2}/></div></div></section>

  <section className="chapter chapter-one" id="audience"><div className="chapter-image image-research"><div data-image-parallax/></div><div className="chapter-content"><p className="index-mark">{e.people}</p><h2 data-reveal>{e.peopleA}<br/><span>{e.peopleB}</span></h2><p data-reveal>{e.peopleText}</p><div className="path-list">{c.personas.map(([name,desc],i)=><a href="#services" key={name} className="path-item"><b>0{i+1}</b><span><strong>{name}</strong><small>{desc}</small></span><ArrowUpRight size={21}/></a>)}</div></div></section>

  <section className="editorial-services" id="services"><div className="section-intro"><p className="index-mark">{e.services}</p><h2 data-reveal>{e.servicesA}<br/><i>{e.servicesB}</i></h2><p>{e.servicesText}</p></div>
   <div className="service-chapters">{clusters.map(cluster=><article className={"cluster "+cluster.accent} key={cluster.number}>
      <div className="cluster-head" data-reveal><div className="cluster-number">{cluster.number}<span> / 03</span></div><div className="cluster-label">{e.chapterLabels[Number(cluster.number)-1]}</div><h3>{e.chapterTitles[Number(cluster.number)-1]}</h3><p>{e.chapterDescriptions[Number(cluster.number)-1]}</p></div>
      <div className="cluster-services">{cluster.keys.map(id=>{const s=localizedService(id);const open=selected===id;return <div className="service-entry" key={id}><button type="button" aria-expanded={open} onClick={()=>setSelected(open?null:id)}><span>{s.name}</span><span className="service-open-icon">{open?<Minus size={20}/>:<Plus size={20}/>}</span></button>{open&&<div className="service-answer"><p>{s.description}</p><small>{s.duration}</small><a href={mail(s.name+" consultation request")}>{e.askService} <ArrowUpRight size={16}/></a></div>}</div>})}</div>
   </article>)}</div>
   <div className="service-outro"><span>{e.notSure}</span><a href="#connect">{e.figure} <ArrowUpRight size={18}/></a></div>
  </section>

  <section className="story" id="story"><div className="story-visual"><div className="story-visual-photo" data-image-parallax/><div className="story-person-tag">DR. FARZANEH HÄHNDEL<br/><span>PhD · IHK CAREER COACH</span></div><span className="story-image-note">RESEARCH / EXPERIENCE / HUMAN CONNECTION</span></div><div className="story-copy"><span className="index-mark">{e.storyLabel}</span><h2 data-reveal>{e.storyA}<br/><i>{e.storyB}</i></h2><p className="story-name">Dr. Farzaneh Hähndel</p><p>{c.about}</p><div className="career-path">{c.timeline.map((t,i)=><div key={t} className="career-stop"><span>0{i+1}</span><p>{t}</p></div>)}</div><a className="story-cta" href="#connect">{e.conversation} <ArrowUpRight size={18}/></a></div></section>

  <section className="proof"><div className="proof-inner"><span className="eyebrow-alt">{e.foundation}</span><div className="proof-line"><strong>PhD</strong><p>{e.scienceTraining}</p></div><div className="proof-line"><strong>IHK</strong><p>{e.ihk}</p></div><div className="proof-line"><strong>DE</strong><p>{e.based}</p></div></div></section>

  <section className="process-v2"><div className="process-intro"><p className="index-mark">{e.processLabel}</p><h2 data-reveal>{e.processA}<br/><em>{e.processB}</em></h2></div><div className="process-steps">{c.steps.map(([n,title,desc])=><div key={n} className="process-step"><span>{n}</span><h3>{title}</h3><p>{desc}</p><ChevronRight size={28}/></div>)}</div></section>

  <section className="investment" id="investment"><div className="investment-photo"><div data-image-parallax/></div><div className="investment-copy"><span className="index-mark">{e.investmentLabel}</span><h2 data-reveal>{e.investmentA}<br/><em>{e.investmentB}</em></h2><p>{e.investmentText}</p><button type="button" className="price-reveal-button" onClick={()=>setShowPrices(!showPrices)} aria-expanded={showPrices}>{showPrices?"{e.hidePrices}":"{e.showPrices}"} {showPrices?<Minus size={19}/>:<Plus size={19}/>}</button>{showPrices&&<div className="rate-list">{services.map(s=><div key={s.id}><span>{localizedService(s.id).name}</span><strong>{s.individual}</strong></div>)}<p className="rate-disclaimer">{e.ratesNote}</p></div>}<a className="story-cta" href="#connect">{e.discuss} <ArrowUpRight size={18}/></a></div></section>

  <section className="faq-v2" id="questions"><div className="faq-title"><span className="index-mark">{e.faqLabel}</span><h2 data-reveal>{e.faqA}<br/><i>{e.faqB}</i></h2><p>{e.faqText}</p></div><div className="faq-accordion">{c.faq.map(([q,a],i)=><div className="faq-row" key={q}><button type="button" onClick={()=>setFaq(faq===i?null:i)} aria-expanded={faq===i}><span>{String(i+1).padStart(2,"0")}</span><strong>{q}</strong>{faq===i?<Minus size={20}/>:<Plus size={20}/>}</button>{faq===i&&<p>{a}</p>}</div>)}</div></section>

  <section className="finale" id="connect"><div className="finale-art"><Compass size={300} strokeWidth={.4}/></div><p className="index-mark">{e.finalTag}</p><h2 data-reveal>{e.finalA}<br/>{e.finalB} <i>{e.finalC}</i></h2><a className="finale-link" href={mail("Consultation request for Dr. Farzaneh Hähndel")}>{e.letsTalk} <ArrowUpRight size={45} strokeWidth={1.4}/></a><div className="finale-contacts"><a href="mailto:Ls.career-compass@mail.de"><Mail size={17}/>Ls.career-compass@mail.de</a><a href="tel:+4915785331977">+49 157 85331977</a><span>BASED IN GERMANY</span></div></section>
 </main>
 <footer className="creative-footer"><span>© {new Date().getFullYear()} LIFE SCIENCE CAREER COMPASS</span><a href="https://www.linkedin.com/in/fhaehndel" rel="noreferrer" target="_blank">LINKEDIN ↗</a><span>{e.footer}</span></footer>
 </div>;
}

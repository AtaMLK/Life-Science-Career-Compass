"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Plus, Minus, Menu, X, Compass, Dna, MoveDownRight, Mail, Check, FlaskConical, Globe2, GraduationCap, BriefcaseBusiness, ChevronRight } from "lucide-react";
import { copy, services, type Lang } from "@/lib/content";
import MotionDirector from "./motion-director";

const mail=(subject:string)=>"mailto:Ls.career-compass@mail.de?subject="+encodeURIComponent(subject);
const clusters=[
 {number:"01",label:"EXPLORE",title:"Find your direction.",description:"A strong scientific background opens doors. The challenge is knowing which ones to knock on.",keys:["industry","academia"],accent:"aqua"},
 {number:"02",label:"PRESENT",title:"Tell your story well.",description:"Your experience deserves more than a list of qualifications. Make every application count.",keys:["cv","cv-from-scratch","letter-review","letter-from-scratch","documents"],accent:"coral"},
 {number:"03",label:"ADVANCE",title:"Own your next move.",description:"Walk into interviews and negotiations knowing what you bring to the table.",keys:["interview","salary","coaching"],accent:"lime"}
] as const;

export default function Site({lang}:{lang:Lang}){
 const c=copy[lang];
 const [menu,setMenu]=useState(false);
 const [selected,setSelected]=useState<string|null>(null);
 const [faq,setFaq]=useState<number|null>(null);
 const [showPrices,setShowPrices]=useState(false);
 return <div className="v2">
 <MotionDirector/>
 <header className="creative-nav"><div className="creative-nav-inner">
  <Link href={`/${lang}`} className="identity" aria-label="Life Science Career Compass"><Compass size={30} strokeWidth={1.3}/><span>LIFE SCIENCE<br/><b>CAREER COMPASS</b></span></Link>
  <nav className={menu?"creative-links open":"creative-links"} aria-label="Primary navigation"><a href="#approach" onClick={()=>setMenu(false)}>Approach</a><a href="#services" onClick={()=>setMenu(false)}>Expertise</a><a href="#story" onClick={()=>setMenu(false)}>The story</a><a href="#questions" onClick={()=>setMenu(false)}>Questions</a><div className="locale-options">{(["en","de","tr"] as const).map(l=><Link key={l} aria-current={lang===l?"page":undefined} href={`/${l}`}>{l.toUpperCase()}</Link>)}</div></nav>
  <a className="nav-contact" href="#connect">{c.navCta}<ArrowUpRight size={17}/></a><button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
 </div></header>
 <main>
  <section className="editorial-hero">
   <div className="hero-ambient ambient-1"/><div className="hero-ambient ambient-2"/>
   <div className="hero-meta"><span>INDEPENDENT CAREER COACHING</span><span>GERMANY · EN / DE / TR</span></div>
   <div className="hero-stage">
    <p className="hero-kicker" data-reveal>YOUR CAREER IS A DISCOVERY.</p>
    <h1 data-reveal>Science took<br/>you <em>this far.</em><br/><span>What&apos;s next?</span></h1>
    <div className="hero-photo" aria-label="Science research photography"><div className="hero-photo-image" data-image-parallax/></div>
    <div className="hero-side-note"><span className="asterisk">✳</span><p>For curious minds<br/>ready for a new chapter.</p></div>
    <div className="hero-action"><a href="#approach">FOLLOW THE COMPASS <MoveDownRight size={18}/></a></div>
   </div>
   <div className="hero-bottom"><span>DR. FARZANEH HÄHNDEL · PhD / IHK CAREER COACH</span><span>SCROLL TO EXPLORE ↓</span></div>
  </section>

  <section className="statement" id="approach"><div className="statement-inside"><div className="eyebrow-alt" data-reveal>NOT JUST A JOB SEARCH.</div><h2 data-reveal>Your expertise is <span>scientific.</span><br/>Your next move is <i>personal.</i></h2><p data-reveal>{c.hero}</p><div className="statement-line" data-line-draw/><div className="statement-footer"><span>THE SCIENCE OF MOVING FORWARD</span><Dna size={39} strokeWidth={1.2}/></div></div></section>

  <section className="chapter chapter-one" id="audience"><div className="chapter-image image-research"><div data-image-parallax/></div><div className="chapter-content"><p className="index-mark">01 / THE PEOPLE</p><h2 data-reveal>Brilliant minds.<br/><span>Different paths.</span></h2><p data-reveal>There is no single career formula. Your background, goals, and ambitions shape your direction.</p><div className="path-list">{c.personas.map(([name,desc],i)=><a href="#services" key={name} className="path-item"><b>0{i+1}</b><span><strong>{name}</strong><small>{desc}</small></span><ArrowUpRight size={21}/></a>)}</div></div></section>

  <section className="editorial-services" id="services"><div className="section-intro"><p className="index-mark">02 / THE WORK</p><h2 data-reveal>One career.<br/><i>Many possibilities.</i></h2><p>Pick a direction. Discover the support behind it. No endless price tables, just useful next steps.</p></div>
   <div className="service-chapters">{clusters.map(cluster=><article className={"cluster "+cluster.accent} key={cluster.number}>
      <div className="cluster-head" data-reveal><div className="cluster-number">{cluster.number}<span> / 03</span></div><div className="cluster-label">{cluster.label}</div><h3>{cluster.title}</h3><p>{cluster.description}</p></div>
      <div className="cluster-services">{cluster.keys.map(id=>{const s=services.find(item=>item.id===id)!;const open=selected===id;return <div className="service-entry" key={id}><button type="button" aria-expanded={open} onClick={()=>setSelected(open?null:id)}><span>{s.name}</span><span className="service-open-icon">{open?<Minus size={20}/>:<Plus size={20}/>}</span></button>{open&&<div className="service-answer"><p>{s.description}</p><small>{s.duration}</small><a href={mail("Question about "+s.name)}>Ask about this service <ArrowUpRight size={16}/></a></div>}</div>})}</div>
   </article>)}</div>
   <div className="service-outro"><span>NOT SURE WHERE TO START?</span><a href="#connect">Let&apos;s figure it out together <ArrowUpRight size={18}/></a></div>
  </section>

  <section className="story" id="story"><div className="story-visual"><div className="story-visual-photo" data-image-parallax/><span className="story-image-note">RESEARCH / EXPERIENCE / HUMAN CONNECTION</span></div><div className="story-copy"><span className="index-mark">03 / BEHIND THE COMPASS</span><h2 data-reveal>Meet the scientist<br/><i>behind the guidance.</i></h2><p className="story-name">Dr. Farzaneh Hähndel</p><p>{c.about}</p><div className="career-path">{c.timeline.map((t,i)=><div key={t} className="career-stop"><span>0{i+1}</span><p>{t}</p></div>)}</div><a className="story-cta" href="#connect">Start a conversation <ArrowUpRight size={18}/></a></div></section>

  <section className="proof"><div className="proof-inner"><span className="eyebrow-alt">THE FOUNDATION</span><div className="proof-line"><strong>PhD</strong><p>Scientific training</p></div><div className="proof-line"><strong>IHK</strong><p>Job & application coaching</p></div><div className="proof-line"><strong>DE</strong><p>Based in Germany</p></div></div></section>

  <section className="process-v2"><div className="process-intro"><p className="index-mark">04 / HOW IT WORKS</p><h2 data-reveal>Good guidance.<br/><em>No guesswork.</em></h2></div><div className="process-steps">{c.steps.map(([n,title,desc])=><div key={n} className="process-step"><span>{n}</span><h3>{title}</h3><p>{desc}</p><ChevronRight size={28}/></div>)}</div></section>

  <section className="investment" id="investment"><div className="investment-photo"><div data-image-parallax/></div><div className="investment-copy"><span className="index-mark">05 / YOUR INVESTMENT</span><h2 data-reveal>Support should feel<br/><em>clear, not complicated.</em></h2><p>Choose a focused session for a particular challenge, or a longer coaching journey. We can discuss what you actually need before you commit.</p><button type="button" className="price-reveal-button" onClick={()=>setShowPrices(!showPrices)} aria-expanded={showPrices}>{showPrices?"Hide individual service rates":"View individual service rates"} {showPrices?<Minus size={19}/>:<Plus size={19}/>}</button>{showPrices&&<div className="rate-list">{services.map(s=><div key={s.id}><span>{s.name}</span><strong>{s.individual}</strong></div>)}<p className="rate-disclaimer">Rates from the supplied brochure; subject to confirmation before public launch. Group options may be available for selected services.</p></div>}<a className="story-cta" href="#connect">Discuss the right support <ArrowUpRight size={18}/></a></div></section>

  <section className="faq-v2" id="questions"><div className="faq-title"><span className="index-mark">06 / GOOD TO KNOW</span><h2 data-reveal>Wondering<br/><i>about something?</i></h2><p>Here are a few things worth knowing before we talk.</p></div><div className="faq-accordion">{c.faq.map(([q,a],i)=><div className="faq-row" key={q}><button type="button" onClick={()=>setFaq(faq===i?null:i)} aria-expanded={faq===i}><span>{String(i+1).padStart(2,"0")}</span><strong>{q}</strong>{faq===i?<Minus size={20}/>:<Plus size={20}/>}</button>{faq===i&&<p>{a}</p>}</div>)}</div></section>

  <section className="finale" id="connect"><div className="finale-art"><Compass size={300} strokeWidth={.4}/></div><p className="index-mark">READY FOR WHAT&apos;S NEXT?</p><h2 data-reveal>Your next chapter<br/>starts with <i>a conversation.</i></h2><a className="finale-link" href={mail("Career coaching consultation request")}>LET&apos;S TALK <ArrowUpRight size={45} strokeWidth={1.4}/></a><div className="finale-contacts"><a href="mailto:Ls.career-compass@mail.de"><Mail size={17}/>Ls.career-compass@mail.de</a><a href="tel:+4915785331977">+49 157 85331977</a><span>BASED IN GERMANY</span></div></section>
 </main>
 <footer className="creative-footer"><span>© {new Date().getFullYear()} LIFE SCIENCE CAREER COMPASS</span><a href="https://www.linkedin.com/in/fhaehndel" rel="noreferrer" target="_blank">LINKEDIN ↗</a><span>DESIGNED FOR CURIOUS MINDS.</span></footer>
 </div>;
}

"use client";
import {useState} from "react";
import Link from "next/link";
import {Compass,Menu,X,Sun,Moon} from "lucide-react";
import type {Lang} from "@/lib/content";
import {siteUi} from "@/lib/site-ui";
export default function SiteHeader({lang,dark,onTheme,servicesPage=false}:{lang:Lang;dark:boolean;onTheme:()=>void;servicesPage?:boolean}){
 const [menu,setMenu]=useState(false);const t=siteUi[lang];
 return <header className="friendly-nav"><div className="friendly-container nav-inner"><Link href={`/${lang}`} className="friendly-brand"><Compass size={27}/><span><b>Life Science</b><small>Career Compass</small></span></Link><nav className={menu?"friendly-links active":"friendly-links"} aria-label={lang==="de"?"Hauptnavigation":lang==="tr"?"Ana menü":"Main navigation"}>{["services","finder","about","faq"].map((id,i)=><a href={servicesPage?`/${lang}#${id}`:`#${id}`} key={id} onClick={()=>setMenu(false)}>{t.nav[i]}</a>)}</nav><div className="friendly-tools"><div className="friendly-langs">{(["en","de","tr"] as const).map(l=><Link key={l} href={`/${l}${servicesPage?"/services":""}`} aria-current={l===lang?"page":undefined}>{l.toUpperCase()}</Link>)}</div><button type="button" className={servicesPage?"theme-pill service-theme-switch":"theme-pill"} aria-label={t.theme} aria-pressed={dark} onClick={onTheme}>{dark?<Moon size={17}/>:<Sun size={17}/>}</button><a href={servicesPage?`/${lang}#contact`:"#contact"} className="friendly-button nav-book">{t.contact}</a><button type="button" className="friendly-menu" aria-label={t.menu} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></div></header>;
}

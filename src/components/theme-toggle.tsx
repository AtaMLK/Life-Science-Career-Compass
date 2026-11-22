"use client";
import type {Lang} from "@/lib/content";
const labels={en:{light:"Switch to light mode",dark:"Switch to dark mode"},de:{light:"Hellen Modus aktivieren",dark:"Dunklen Modus aktivieren"},tr:{light:"Açık moda geç",dark:"Koyu moda geç"}};
export default function ThemeToggle({theme,lang,onToggle}:{theme:"light"|"dark";lang:Lang;onToggle:()=>void}){
 const label=labels[lang][theme==="light"?"dark":"light"];
 return <button type="button" className="theme-toggle" data-mode={theme} onClick={onToggle} aria-label={label} title={label} aria-pressed={theme==="dark"}><span className="theme-toggle-track" aria-hidden="true"><span className="theme-toggle-stars">✦ ✧</span><span className="theme-toggle-orb">{theme==="light"?"☼":"☾"}</span></span></button>;
}

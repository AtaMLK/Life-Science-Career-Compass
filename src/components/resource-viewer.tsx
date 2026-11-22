"use client";
import {useEffect,useRef,useState} from "react";
import type {Lang} from "@/lib/content";
export default function ResourceViewer({src,label,lang}:{src:string;label:string;lang:Lang}){
 const dialog=useRef<HTMLDialogElement>(null);
 const [open,setOpen]=useState(false);const [zoom,setZoom]=useState(false);
 const t={en:{close:"Close image",zoom:"Zoom in",fit:"Fit image",download:"Download image"},de:{close:"Bild schließen",zoom:"Vergrößern",fit:"Bild einpassen",download:"Bild herunterladen"},tr:{close:"Görseli kapat",zoom:"Yakınlaştır",fit:"Görseli sığdır",download:"Görseli indir"}}[lang];
 useEffect(()=>{const el=dialog.current;if(!el||!open)return;const overflow=document.body.style.overflow;el.showModal();document.body.style.overflow="hidden";return()=>{el.close();document.body.style.overflow=overflow}},[open]);
 return <><button className="resource-open" type="button" onClick={()=>{setZoom(false);setOpen(true)}}>{label}<span aria-hidden="true">↗</span></button><dialog ref={dialog} className="resource-dialog" aria-label={label} onCancel={()=>setOpen(false)} onClick={e=>{if(e.target===e.currentTarget)setOpen(false)}}><div className="resource-panel"><div className="resource-toolbar"><button type="button" aria-pressed={zoom} onClick={()=>setZoom(!zoom)}>{zoom?t.fit:t.zoom} {zoom?"−":"+"}</button><a href={src} download>{t.download} ↓</a><button autoFocus type="button" onClick={()=>setOpen(false)}>{t.close} ✕</button></div><div className="resource-image-scroll"><img className={zoom?"zoomed":""} src={src} alt={label}/></div></div></dialog></>;
}

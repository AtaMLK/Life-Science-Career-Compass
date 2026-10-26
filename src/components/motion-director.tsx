"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MotionDirector(){
 const initialized=useRef(false);
 useEffect(()=>{
  if(initialized.current)return;
  initialized.current=true;
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  gsap.registerPlugin(ScrollTrigger);
  const ctx=gsap.context(()=>{
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(el=>{
      gsap.fromTo(el,{y:38,opacity:0},{y:0,opacity:1,duration:1,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 90%",once:true}});
    });
    gsap.utils.toArray<HTMLElement>("[data-image-parallax]").forEach(el=>{
      gsap.fromTo(el,{yPercent:-9},{yPercent:9,ease:"none",scrollTrigger:{trigger:el.parentElement,start:"top bottom",end:"bottom top",scrub:1.1}});
    });
    gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach(group=>{
      const children=Array.from(group.children);
      gsap.fromTo(children,{y:24,opacity:0},{y:0,opacity:1,stagger:.09,duration:.8,ease:"power3.out",scrollTrigger:{trigger:group,start:"top 88%",once:true}});
    });
    gsap.utils.toArray<HTMLElement>("[data-line-draw]").forEach(el=>{
      gsap.fromTo(el,{scaleX:0,transformOrigin:"left center"},{scaleX:1,ease:"none",scrollTrigger:{trigger:el,start:"top 85%",end:"top 45%",scrub:1}});
    });
    gsap.utils.toArray<HTMLElement>(".cluster").forEach(panel=>{
      gsap.fromTo(panel,{clipPath:"inset(0 0 9% 0 round 4px)",y:45},{clipPath:"inset(0 0 0% 0 round 4px)",y:0,ease:"power2.out",scrollTrigger:{trigger:panel,start:"top 91%",end:"top 50%",scrub:1}});
    });
    const progress=document.querySelector<HTMLElement>(".reading-progress");
    if(progress)gsap.fromTo(progress,{scaleX:0,transformOrigin:"left"},{scaleX:1,ease:"none",scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:true}});
  });
  return ()=>ctx.revert();
 },[]);
 return <span className="reading-progress" aria-hidden="true"/>;
}

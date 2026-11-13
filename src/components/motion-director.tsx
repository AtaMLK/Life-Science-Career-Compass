"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MotionDirector(){
 useEffect(()=>{
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  gsap.registerPlugin(ScrollTrigger);
  const ctx=gsap.context(()=>{
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(el=>{
      gsap.fromTo(el,{y:22,opacity:0},{y:0,opacity:1,duration:.76,ease:"power2.out",scrollTrigger:{trigger:el,start:"top 90%",once:true}});
    });
    gsap.utils.toArray<HTMLElement>("[data-image-parallax]").forEach(el=>{
      gsap.fromTo(el,{yPercent:-5},{yPercent:5,ease:"none",scrollTrigger:{trigger:el.parentElement,start:"top bottom",end:"bottom top",scrub:1.1}});
    });
    gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach(group=>{
      const children=Array.from(group.children);
      gsap.fromTo(children,{y:15,opacity:0},{y:0,opacity:1,stagger:.07,duration:.65,ease:"power2.out",scrollTrigger:{trigger:group,start:"top 88%",once:true}});
    });
    gsap.utils.toArray<HTMLElement>("[data-line-draw]").forEach(el=>{
      gsap.fromTo(el,{scaleX:0,transformOrigin:"left center"},{scaleX:1,ease:"none",scrollTrigger:{trigger:el,start:"top 85%",end:"top 45%",scrub:1}});
    });
    gsap.utils.toArray<HTMLElement>(".cluster").forEach(panel=>{
      gsap.fromTo(panel,{y:14,opacity:.95},{y:0,opacity:1,duration:.7,ease:"power2.out",scrollTrigger:{trigger:panel,start:"top 92%",once:true}});
    });
    const progress=document.querySelector<HTMLElement>(".reading-progress");
    if(progress)gsap.fromTo(progress,{scaleX:0,transformOrigin:"left"},{scaleX:1,ease:"none",scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:true}});
  });
  let refreshFrame=0;
  const observer=new ResizeObserver(()=>{cancelAnimationFrame(refreshFrame);refreshFrame=requestAnimationFrame(()=>ScrollTrigger.refresh())});
  const main=document.getElementById("main-content");if(main)observer.observe(main);
  return ()=>{observer.disconnect();cancelAnimationFrame(refreshFrame);ctx.revert()};
 },[]);
 return <span className="reading-progress" aria-hidden="true"/>;
}

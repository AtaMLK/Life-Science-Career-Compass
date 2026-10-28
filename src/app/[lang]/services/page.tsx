import {pageMetadata,structuredData,jsonLd} from "@/lib/seo";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {isLang,type Lang} from "@/lib/content";
import ServicesExperience from "@/components/services-experience";
type Props={params:Promise<{lang:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {lang}=await params;if(!isLang(lang))return {};
 const titles={en:"Career Coaching Services & Packages | Life Science Career Compass",de:"Karrierecoaching Leistungen & Preise | Life Science Career Compass",tr:"Kariyer Danışmanlığı Hizmetleri ve Paketler | Life Science Career Compass"};
 const descriptions={en:"Explore CV support, university applications, career coaching, interview preparation and transparent consulting fees.",de:"Leistungen für Lebenslauf, Bewerbungen, Vorstellungsgespräche und individuelles Karrierecoaching.",tr:"CV, iş ve üniversite başvuruları, mülakat hazırlığı ve bireysel kariyer koçluğu paketleri."};
 return pageMetadata(lang,titles[lang],descriptions[lang],"/services");
}
export default async function ServicesPage({params}:Props){const {lang}=await params;if(!isLang(lang))notFound();return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd(structuredData(lang,true))}}/><ServicesExperience key={lang} lang={lang as Lang}/></>;}

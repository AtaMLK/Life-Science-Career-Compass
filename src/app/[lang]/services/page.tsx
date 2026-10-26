import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {isLang,type Lang} from "@/lib/content";
import ServicesExperience from "@/components/services-experience";
type Props={params:Promise<{lang:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {lang}=await params;if(!isLang(lang))return {};
 const titles={en:"Career Coaching Services & Packages | Life Science Career Compass",de:"Karrierecoaching Leistungen & Preise | Life Science Career Compass",tr:"Kariyer Danışmanlığı Hizmetleri ve Paketler | Life Science Career Compass"};
 const descriptions={en:"Explore CV support, university applications, career coaching, interview preparation and transparent consulting fees.",de:"Leistungen für Lebenslauf, Bewerbungen, Vorstellungsgespräche und individuelles Karrierecoaching.",tr:"CV, iş ve üniversite başvuruları, mülakat hazırlığı ve bireysel kariyer koçluğu paketleri."};
 const base=process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/,"");
 return {title:titles[lang],description:descriptions[lang],alternates:base?{canonical:`${base}/${lang}/services`,languages:{en:`${base}/en/services`,de:`${base}/de/services`,tr:`${base}/tr/services`}}:undefined};
}
export default async function ServicesPage({params}:Props){const {lang}=await params;if(!isLang(lang))notFound();return <ServicesExperience lang={lang as Lang}/>;}

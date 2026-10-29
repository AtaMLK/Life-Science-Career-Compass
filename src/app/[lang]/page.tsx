import {pageMetadata,structuredData,jsonLd} from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { languages, isLang } from "@/lib/content";
import Site from "@/components/editorial-site";
import "../editorial.css";
import "../review-fixes.css";

type Props = { params: Promise<{ lang: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => languages.map(lang => ({lang}));

export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {lang}=await params;
 if(!isLang(lang)) return {};
 const titles={en:"Life Science Career Coaching in Germany | Dr. Farzaneh Hähndel",de:"Karrierecoaching Life Sciences Deutschland | Dr. Farzaneh Hähndel",tr:"Almanya Yaşam Bilimleri Kariyer Danışmanlığı | Dr. Farzaneh Hähndel"};
 const descriptions={en:"Career coaching for life science professionals in Germany: jobs, CV, cover letters, interviews and personalized career guidance.",de:"Karrierecoaching für Life-Science-Fachkräfte in Deutschland: Jobsuche, Lebenslauf, Bewerbungen und Vorstellungsgespräche.",tr:"Almanya'da yaşam bilimlerinde kariyer danışmanlığı: iş arama, CV, başvuru ve mülakat desteği."};
 return pageMetadata(lang,titles[lang],descriptions[lang],"");
}
export default async function LocalePage({params}:Props){
 const {lang}=await params;
 if(!isLang(lang)) notFound();

 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd(structuredData(lang))}}/><Site key={lang} lang={lang}/></>;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { languages, isLang } from "@/lib/content";
import Site from "@/components/editorial-site";
import "../editorial.css";

type Props = { params: Promise<{ lang: string }> };
export const generateStaticParams = () => languages.map(lang => ({lang}));

export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {lang}=await params;
 if(!isLang(lang)) return {};
 const titles={en:"Life Science Career Coaching in Germany | Dr. Farzaneh Hähndel",de:"Karrierecoaching Life Sciences Deutschland | Dr. Farzaneh Hähndel",tr:"Almanya Yaşam Bilimleri Kariyer Danışmanlığı | Dr. Farzaneh Hähndel"};
 const descriptions={en:"Career coaching for life science professionals in Germany: jobs, CV, cover letters, interviews and personalized career guidance.",de:"Karrierecoaching für Life-Science-Fachkräfte in Deutschland: Jobsuche, Lebenslauf, Bewerbungen und Vorstellungsgespräche.",tr:"Almanya'da yaşam bilimlerinde kariyer danışmanlığı: iş arama, CV, başvuru ve mülakat desteği."};
 const base=process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/,"");
 return {title:titles[lang],description:descriptions[lang],alternates:base?{canonical:`${base}/${lang}`,languages:{en:`${base}/en`,de:`${base}/de`,tr:`${base}/tr`,"x-default":`${base}/en`}}:undefined,openGraph:{title:titles[lang],description:descriptions[lang],type:"website"}};
}
export default async function LocalePage({params}:Props){
 const {lang}=await params;
 if(!isLang(lang)) notFound();
 const schema={"@context":"https://schema.org","@graph":[{"@type":"Person",name:"Dr. Farzaneh Hähndel",jobTitle:"Career Coach",knowsLanguage:["en","de","tr"],description:"Life science PhD and IHK-certified job and application coach."},{"@type":"ProfessionalService",name:"Life Science Career Compass",email:"Ls.career-compass@mail.de",telephone:"+4915785331977",areaServed:"Germany",availableLanguage:["English","German","Turkish"]}]};
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/><Site lang={lang}/></>;
}

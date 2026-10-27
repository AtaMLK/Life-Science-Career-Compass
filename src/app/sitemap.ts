import {siteOrigin} from "@/lib/seo";
import type {MetadataRoute} from "next";
export default function sitemap():MetadataRoute.Sitemap{
 const base=siteOrigin();
 if(!base)return [];
 return (["","/services"] as const).flatMap(path=>(["en","de","tr"] as const).map(lang=>({
 url:`${base}/${lang}${path}`,changeFrequency:"monthly" as const,priority:path?0.85:1,
 alternates:{languages:{en:`${base}/en${path}`,de:`${base}/de${path}`,tr:`${base}/tr${path}`}}
 })));
}

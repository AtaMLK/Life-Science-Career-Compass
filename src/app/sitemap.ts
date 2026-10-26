import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap {
 const base=process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/,"");
 if(!base)return [];
 return (["en","de","tr"] as const).map(lang=>({url:`${base}/${lang}`,changeFrequency:"monthly" as const,priority:lang==="en"?1:0.8,alternates:{languages:{en:`${base}/en`,de:`${base}/de`,tr:`${base}/tr`}}}));
}

import {siteOrigin} from "@/lib/seo";
import type { MetadataRoute } from "next";
export default function robots():MetadataRoute.Robots {
 const base=siteOrigin();
 return {rules:[{userAgent:"*",allow:"/",disallow:["/api/"]}],...(base?{sitemap:`${base}/sitemap.xml`}:{})};
}

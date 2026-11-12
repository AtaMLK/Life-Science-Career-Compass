import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {isLang} from "@/lib/content";
import LegalPages from "@/components/legal-pages";
type Props={params:Promise<{lang:string}>};
export const metadata:Metadata={title:"Impressum | Life Science Career Compass",robots:{index:false,follow:false}};
export default async function Page({params}:Props){const {lang}=await params;if(!isLang(lang))notFound();return <LegalPages lang={lang} kind="impressum"/>;}

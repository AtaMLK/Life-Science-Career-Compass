"use client";
import {usePathname} from "next/navigation";
import {Mail,MessageCircle} from "lucide-react";

const labels={
 en:{whatsapp:"Contact via WhatsApp",email:"Contact via email",message:"Hello Dr. Hähndel, I would like to ask about career coaching."},
 de:{whatsapp:"Über WhatsApp kontaktieren",email:"Per E-Mail kontaktieren",message:"Guten Tag Dr. Hähndel, ich habe eine Frage zu Ihrem Karrierecoaching."},
 tr:{whatsapp:"WhatsApp ile iletişime geç",email:"E-posta gönder",message:"Merhaba Dr. Hähndel, kariyer danışmanlığı hakkında bilgi almak istiyorum."}
};
export default function FloatingContact(){
 const pathname=usePathname()||"/en";const lang=pathname.startsWith("/de")?"de":pathname.startsWith("/tr")?"tr":"en";const t=labels[lang];
 return <aside className="floating-contact" aria-label="Contact Dr. Farzaneh Hähndel">
  <a href={"https://wa.me/4915785331977?text="+encodeURIComponent(t.message)} target="_blank" rel="noopener noreferrer" aria-label={t.whatsapp} title={t.whatsapp} className="floating-contact-whatsapp"><MessageCircle size={23} strokeWidth={1.9}/></a>
  <a href="mailto:Ls.career-compass@mail.de?subject=Career%20Compass%20enquiry" aria-label={t.email} title={t.email} className="floating-contact-email"><Mail size={23} strokeWidth={1.9}/></a>
 </aside>;
}

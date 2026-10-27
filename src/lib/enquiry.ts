import type {Lang} from "./content";
const mailCopy={
 en:{subject:"Career consultation",greeting:"Hello Dr. Hähndel,",intro:"I would like to learn more about your {service} service and discuss how you could support my next career step.",heading:"A little about my goals:",labels:["Career stage","Support needed","Preferred location","Work arrangement","Income goal","Preferred start"],closing:"Could you please let me know about the next steps and your availability for a consultation?",thanks:"Thank you and best regards,",name:"[Your name]"},
 de:{subject:"Anfrage zur Karriereberatung",greeting:"Guten Tag Frau Dr. Hähndel,",intro:"Ich interessiere mich für Ihr Angebot „{service}“ und möchte besprechen, wie Sie mich bei meinem nächsten Karriereschritt unterstützen können.",heading:"Ein kurzer Überblick über meine Ziele:",labels:["Karrierephase","Gewünschte Unterstützung","Zielregion","Arbeitsmodell","Einkommensziel","Gewünschter Start"],closing:"Könnten Sie mir bitte die nächsten Schritte und Ihre Verfügbarkeit für ein Beratungsgespräch mitteilen?",thanks:"Vielen Dank und freundliche Grüße",name:"[Ihr Name]"},
 tr:{subject:"Kariyer danışmanlığı talebi",greeting:"Merhaba Dr. Hähndel,",intro:"{service} hizmetiniz hakkında bilgi almak ve bir sonraki kariyer adımımda nasıl destek alabileceğimi görüşmek istiyorum.",heading:"Hedeflerim hakkında kısa bir özet:",labels:["Kariyer aşaması","İhtiyaç duyduğum destek","Hedef bölge","Çalışma modeli","Gelir hedefi","Başlama zamanı"],closing:"Görüşme için uygun olduğunuz zamanları ve sonraki adımları paylaşabilir misiniz?",thanks:"Teşekkür ederim, saygılarımla,",name:"[Adınız]"}
};
export function quizEnquiry(lang:Lang,service:string,answers:string[]){
 const t=mailCopy[lang];
 const summary=t.labels.map((label,index)=>`• ${label}: ${answers[index]??"—"}`).join("\r\n");
 const body=[t.greeting,t.intro.replace("{service}",service),t.heading+"\r\n"+summary,t.closing,t.thanks+"\r\n"+t.name].join("\r\n\r\n");
 return "mailto:Ls.career-compass@mail.de?subject="+encodeURIComponent(`${t.subject}: ${service}`)+"&body="+encodeURIComponent(body);
}

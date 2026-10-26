export const languages = ["en", "de", "tr"] as const;
export type Lang = (typeof languages)[number];
export const isLang = (s: string): s is Lang => languages.includes(s as Lang);

export const services = [
  { id:"industry", icon:"search", name:"Industry Job Opportunities", category:"Career strategy", description:"Discover relevant life science roles in Germany and learn how to approach applications strategically.", duration:"60 min", individual:"€80", group:"€70", semi:"€75" },
  { id:"academia", icon:"graduation", name:"University & Research Applications", category:"Academia", description:"Find academic and research opportunities, identify suitable platforms and prepare a stronger application.", duration:"60 min", individual:"€80", group:"€70", semi:"€75" },
  { id:"cv", icon:"file", name:"CV Review & Optimization", category:"Application essentials", description:"Expert feedback and revisions to align your CV with professional expectations in Germany.", duration:"Per CV", individual:"€80", group:"€70", semi:"€75" },
  { id:"cv-from-scratch", icon:"file", name:"CV Creation from Scratch", category:"Application essentials", description:"Build a polished, structured CV in English or German starting from your experience.", duration:"Per CV", individual:"€100", group:null, semi:null },
  { id:"letter-review", icon:"file", name:"Cover Letter Review", category:"Application essentials", description:"Improve your existing cover letter for clarity, relevance and the target position.", duration:"Per letter", individual:"€85", group:"€75", semi:"€80" },
  { id:"letter-from-scratch", icon:"file", name:"Cover Letter from Scratch", category:"Application essentials", description:"Create a tailored English or German cover letter for a specific job or academic opportunity.", duration:"Per letter", individual:"€100", group:null, semi:null },
  { id:"documents", icon:"folder", name:"Application Document Review", category:"Application essentials", description:"Review and organize the documents needed for your application.", duration:"Per application", individual:"€60", group:"€50", semi:"€55" },
  { id:"interview", icon:"messages", name:"Interview Preparation", category:"Interview & negotiation", description:"Practice interview questions and receive personalized feedback for your next interview.", duration:"90 min", individual:"€150", group:"€140", semi:"€145" },
  { id:"salary", icon:"trending", name:"Salary Negotiation", category:"Interview & negotiation", description:"Prepare evidence-based salary discussions and learn to communicate your expectations.", duration:"60 min", individual:"€150", group:"€140", semi:"€145" },
  { id:"coaching", icon:"compass", name:"Personal Career Coaching", category:"Personalized package", description:"Six individual sessions tailored to your goals: strategy, applications, interviews and career planning.", duration:"6 × 60 min", individual:"€600", group:null, semi:null },
] as const;

export const copy = {
  en: {
    nav:["Services","About","Pricing","FAQ"],navCta:"Book a consultation",eyebrow:"CAREER COACHING FOR LIFE SCIENTISTS",
    title:"Your science. Your career.", titleAccent:"Your next move.",hero:"Personalized career guidance for life science graduates, researchers and professionals pursuing opportunities in Germany's academia and industry.",
    primary:"Explore your options",secondary:"Meet your coach",trust:["PhD in Life Sciences","IHK-certified coaching","Experience in academia & industry"],kickerWho:"MADE FOR YOUR JOURNEY",
    whoTitle:"Your expertise deserves the right opportunity.",whoText:"Whether you're just starting out or planning your next big transition, find guidance shaped around your scientific background.",
    personas:[["Graduates & Early Careers","Turn your education into a confident first step."],["PhD Students & Researchers","Explore a career in academia or transition into industry."],["Industry Professionals","Prepare for your next role, interview or salary discussion."]],
    kickerServices:"WHAT WE CAN WORK ON",servicesTitle:"Practical guidance. Clear next steps.",servicesText:"Choose support for the specific challenge in front of you, or build a complete plan.",
    details:"Explore details",duration:"Duration",individual:"1:1",group:"Group (up to 8)",semi:"Small group (up to 4)",enquire:"Enquire about this service",
    processEyebrow:"HOW IT WORKS",processTitle:"A clearer path, in three steps.",steps:[["01","Find your focus","Choose the support that matches your situation."],["02","Talk through your goals","Share your background, questions and career ambitions."],["03","Move forward with a plan","Get targeted guidance and actionable next steps."]],
    aboutEyebrow:"MEET YOUR COACH",aboutTitle:"From the lab to your next career chapter.",about:"I'm Dr. Farzaneh Hähndel. My background spans life science research, a PhD in Jena, experience in university and industry environments, and IHK-certified job and application coaching. I support professionals navigating German academic and industry opportunities.",
    timeline:["Istanbul Technical University · MSc","Friedrich Schiller University Jena · PhD","University Hospital Jena · Research","Analytik Jena & Charles River · Industry","IHK Job & Application Coaching"],
    packagesEyebrow:"TRANSPARENT PRICING",packagesTitle:"Support that fits your next step.",packagesText:"Choose targeted sessions or a more comprehensive coaching journey. All prices are in EUR.",from:"From",priceNote:"Prices shown are from the supplied service brochure and require confirmation before public launch.",faqEyebrow:"GOOD TO KNOW",faqTitle:"Questions before you begin?",faq:[
      ["Who is this coaching for?","Life science graduates, researchers, PhD holders and professionals looking at opportunities in Germany's academia and industry."],
      ["Can I get support while living outside Germany?","Consultations can be arranged online. Your application options depend on your qualifications and each employer's requirements."],
      ["What languages are consultations available in?","English, German and Turkish."],
      ["Can you help with a German-standard CV?","Yes. You can choose a CV review and optimization or creation from scratch in English or German."],
      ["Is a job or an interview guaranteed?","No. Coaching supports your preparation and decision-making but cannot guarantee employment or admissions."],
      ["Do you offer individual and group sessions?","Yes. Several services have 1:1, small-group and group options, subject to scheduling."],
    ],
    finalEyebrow:"YOUR NEXT CHAPTER STARTS HERE",finalTitle:"Let's navigate your next career move.",finalText:"Tell me what you're aiming for. We'll identify the kind of support that fits your goals.",contact:"Email for a consultation",footer:"Guidance rooted in science. Built for your career.",legal:"Legal information and privacy details will be finalized before publication."
  },
  de: {
    nav:["Leistungen","Über mich","Preise","FAQ"],navCta:"Beratung anfragen",eyebrow:"KARRIERECOACHING FÜR LIFE-SCIENCE-FACHKRÄFTE",
    title:"Ihre Wissenschaft. Ihre Karriere.",titleAccent:"Ihr nächster Schritt.",hero:"Individuelle Karriereberatung für Absolventen, Forschende und Fachkräfte der Lebenswissenschaften mit Karrierezielen in Deutschland.",
    primary:"Angebote entdecken",secondary:"Coach kennenlernen",trust:["Promotion in Life Sciences","IHK-zertifiziertes Coaching","Erfahrung in Forschung & Industrie"],kickerWho:"FÜR IHREN KARRIEREWEG",whoTitle:"Ihre Expertise verdient die passende Chance.",whoText:"Ob Berufseinstieg oder Wechsel in die Industrie: Ihre wissenschaftliche Erfahrung steht im Mittelpunkt.",
    personas:[["Berufseinsteiger","Mit einem klaren Plan in den Beruf starten."],["Promovierende & Forschende","Neue Perspektiven in Forschung und Industrie finden."],["Fachkräfte in der Industrie","Den nächsten Karriereschritt vorbereiten."]],
    kickerServices:"LEISTUNGEN",servicesTitle:"Konkrete Unterstützung. Klare Schritte.",servicesText:"Wählen Sie eine gezielte Leistung oder ein umfassendes Coaching.",
    details:"Details ansehen",duration:"Dauer",individual:"Einzel",group:"Gruppe (bis 8)",semi:"Kleingruppe (bis 4)",enquire:"Leistung anfragen",
    processEyebrow:"ABLAUF",processTitle:"Drei Schritte zu mehr Klarheit.",steps:[["01","Schwerpunkt wählen","Wählen Sie die passende Unterstützung."],["02","Ziele besprechen","Teilen Sie Ihren Hintergrund und Ihre Fragen."],["03","Plan entwickeln","Erhalten Sie praktische nächste Schritte."]],
    aboutEyebrow:"IHRE COACHIN",aboutTitle:"Von der Forschung zum nächsten Karriereschritt.",about:"Ich bin Dr. Farzaneh Hähndel. Mein Werdegang verbindet wissenschaftliche Forschung, eine Promotion in Jena, Erfahrung in Hochschule und Industrie sowie eine IHK-Zertifizierung im Job- und Bewerbungscoaching.",
    timeline:["Istanbul Technical University · MSc","Friedrich-Schiller-Universität Jena · Promotion","Universitätsklinikum Jena · Forschung","Analytik Jena & Charles River · Industrie","IHK Job- und Bewerbungscoaching"],
    packagesEyebrow:"PREISE",packagesTitle:"Unterstützung nach Ihrem Bedarf.",packagesText:"Einzeltermine oder ein umfassendes Coaching. Alle Preise in EUR.",from:"Ab",priceNote:"Preise aus der bereitgestellten Broschüre; vor Veröffentlichung zu bestätigen.",faqEyebrow:"FAQ",faqTitle:"Häufige Fragen",faq:[
      ["Für wen ist das Coaching geeignet?","Für Absolventen, Forschende und Fachkräfte aus den Lebenswissenschaften."],
      ["Sind Online-Beratungen möglich?","Ja, Beratungen können online stattfinden."],
      ["In welchen Sprachen beraten Sie?","Englisch, Deutsch und Türkisch."],
      ["Helfen Sie bei einem deutschen Lebenslauf?","Ja, mit Überarbeitung oder Neuerstellung des Lebenslaufs."],
      ["Ist eine Stelle garantiert?","Nein. Coaching ist eine Unterstützung, keine Jobgarantie."],
      ["Gibt es Gruppenangebote?","Für ausgewählte Leistungen sind Gruppenformate vorgesehen."],
    ],
    finalEyebrow:"DER NÄCHSTE SCHRITT",finalTitle:"Gestalten wir Ihren nächsten Karriereschritt.",finalText:"Erzählen Sie mir von Ihren Zielen.",contact:"Beratung per E-Mail anfragen",footer:"Wissenschaftlich fundiert. Persönlich begleitet.",legal:"Rechtliche Hinweise und Datenschutz werden vor Veröffentlichung ergänzt."
  },
  tr: {
    nav:["Hizmetler","Hakkımda","Fiyatlar","SSS"],navCta:"Danışmanlık talep et",eyebrow:"YAŞAM BİLİMLERİNDE KARİYER DANIŞMANLIĞI",
    title:"Biliminiz. Kariyeriniz.",titleAccent:"Yeni adımınız.",hero:"Almanya'da akademi ve endüstri alanında kariyer hedefleyen yaşam bilimleri mezunlarına, araştırmacılara ve profesyonellere özel danışmanlık.",
    primary:"Hizmetleri keşfet",secondary:"Danışmanınızı tanıyın",trust:["Yaşam bilimlerinde doktora","IHK sertifikalı koçluk","Akademi ve endüstri deneyimi"],kickerWho:"KARİYER YOLCULUĞUNUZ İÇİN",whoTitle:"Uzmanlığınız doğru fırsatı hak ediyor.",whoText:"İlk işinizden kariyer değişikliğine kadar bilimsel geçmişinize uygun bir yol haritası.",
    personas:[["Yeni Mezunlar","Kariyerinize güvenle başlayın."],["Doktora Öğrencileri ve Araştırmacılar","Akademi ve endüstri seçeneklerini keşfedin."],["Sektör Profesyonelleri","Yeni pozisyonlara, mülakatlara ve ücret görüşmelerine hazırlanın."]],
    kickerServices:"HİZMETLER",servicesTitle:"Pratik destek. Net adımlar.",servicesText:"İhtiyacınıza uygun tek bir hizmet veya kapsamlı bir program seçin.",
    details:"Detayları incele",duration:"Süre",individual:"Bireysel",group:"Grup (8 kişiye kadar)",semi:"Küçük grup (4 kişiye kadar)",enquire:"Bu hizmeti sor",
    processEyebrow:"NASIL ÇALIŞIR?",processTitle:"Üç adımda daha net bir yol.",steps:[["01","Odağınızı seçin","İhtiyacınıza uygun desteği belirleyin."],["02","Hedeflerinizi konuşun","Geçmişinizi ve sorularınızı paylaşın."],["03","Plan oluşturun","Somut ve uygulanabilir adımlar kazanın."]],
    aboutEyebrow:"KARİYER KOÇUNUZ",aboutTitle:"Laboratuvardan yeni kariyer adımlarına.",about:"Ben Dr. Farzaneh Hähndel. Bilimsel araştırma geçmişimi, Jena'daki doktora eğitimimi, akademi ve endüstri deneyimimi ve IHK sertifikalı iş ve başvuru koçluğu eğitimimi danışmanlık hizmetlerimde bir araya getiriyorum.",
    timeline:["İstanbul Teknik Üniversitesi · Yüksek lisans","Friedrich Schiller Üniversitesi Jena · Doktora","Jena Üniversite Hastanesi · Araştırma","Analytik Jena & Charles River · Endüstri","IHK İş ve Başvuru Koçluğu"],
    packagesEyebrow:"ŞEFFAF FİYATLAR",packagesTitle:"İhtiyacınıza uygun destek.",packagesText:"Hedefe yönelik seanslar veya kapsamlı danışmanlık. Fiyatlar EUR cinsindedir.",from:"Başlangıç",priceNote:"Fiyatlar sağlanan broşürden alınmıştır; yayından önce teyit edilmelidir.",faqEyebrow:"SIK SORULAN SORULAR",faqTitle:"Başlamadan önce merak ettikleriniz",faq:[
      ["Kimler danışmanlık alabilir?","Yaşam bilimleri mezunları, araştırmacılar ve Almanya'da kariyer planlayan profesyoneller."],
      ["Almanya dışında yaşarken destek alabilir miyim?","Evet, online danışmanlık mümkündür."],
      ["Hangi dillerde hizmet veriliyor?","İngilizce, Almanca ve Türkçe."],
      ["Alman standartlarında CV hazırlanıyor mu?","Evet, mevcut CV'nin düzenlenmesi veya sıfırdan hazırlanması mümkündür."],
      ["İş bulma garantisi var mı?","Hayır. Danışmanlık hazırlık ve strateji desteği sağlar."],
      ["Grup seansları var mı?","Uygun hizmetlerde grup seçenekleri vardır."],
    ],
    finalEyebrow:"YENİ ADIMINIZ BURADA",finalTitle:"Bir sonraki kariyer adımınızı birlikte planlayalım.",finalText:"Hedeflerinizi paylaşın, sizin için uygun desteği seçelim.",contact:"E-posta ile danışmanlık talep et",footer:"Bilimsel birikim, kişisel kariyer rehberliği.",legal:"Yasal bilgiler ve gizlilik sayfaları yayından önce tamamlanacaktır."
  },
} as const;

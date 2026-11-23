/**
 * Life Science Career Compass — Wix Custom Element proof of concept.
 * Works without React, Next.js, Velo imports, or a backend.
 * Wix Editor > Add Elements > Embed Code > Custom Element > Velo File.
 * Tag name: career-compass-demo
 * Keep only one instance per page. No publication or lead storage here.
 */
const copy = {
  en: {
    kicker: "DR. FARZANEH HÄHNDEL · GERMANY",
    headline: "A clearer path for your next career move.",
    intro: "Personal guidance for applications, interviews and career decisions in Germany and German-speaking countries.",
    button: "Find your starting point",
    coaching: "Job & Application Coaching (IHK)",
    step: "STEP",
    questions: [
      { q: "Where are you in your career?", a: ["Student or recent graduate", "PhD / researcher", "Industry professional", "Changing direction"] },
      { q: "What do you need help with?", a: ["Finding opportunities", "CV / applications", "Interview preparation", "Career or salary strategy"] },
      { q: "Which market interests you?", a: ["Germany", "Austria / Switzerland", "Still exploring"] },
      { q: "Do you have application documents?", a: ["Yes, ready to review", "Yes, need updating", "Not yet"] },
      { q: "When do you want to begin?", a: ["As soon as possible", "In 1–3 months", "Just exploring"] }
    ],
    result: "Your suggested first step",
    recommendation: ["Job search guidance", "CV & application support", "Interview coaching", "Individual career coaching"],
    note: "This is an initial suggestion, not a guarantee of employment or admission. Farzaneh will review your individual needs.",
    ask: "Send your request by email",
    back: "Back",
    reset: "Start again",
    privacy: "Your answers are only used locally to prepare the email draft. Nothing is submitted automatically."
  },
  de: {
    kicker: "DR. FARZANEH HÄHNDEL · DEUTSCHLAND",
    headline: "Den nächsten Karriereschritt klarer gestalten.",
    intro: "Individuelle Unterstützung bei Bewerbungen, Vorstellungsgesprächen und beruflichen Entscheidungen in Deutschland und der DACH-Region.",
    button: "Passenden Einstieg finden",
    coaching: "Job- und Bewerbungscoaching (IHK)",
    step: "SCHRITT",
    questions: [
      { q: "Wo stehen Sie beruflich?", a: ["Studium / Berufseinstieg", "Promotion / Wissenschaft", "Industrie", "Berufliche Neuorientierung"] },
      { q: "Wobei benötigen Sie Unterstützung?", a: ["Stellen finden", "Lebenslauf / Bewerbungen", "Vorstellungsgespräch", "Karriere- / Gehaltsstrategie"] },
      { q: "Welcher Arbeitsmarkt interessiert Sie?", a: ["Deutschland", "Österreich / Schweiz", "Noch unentschlossen"] },
      { q: "Haben Sie Bewerbungsunterlagen?", a: ["Ja, zur Überprüfung", "Ja, aber veraltet", "Noch nicht"] },
      { q: "Wann möchten Sie starten?", a: ["So bald wie möglich", "In 1–3 Monaten", "Ich informiere mich zunächst"] }
    ],
    result: "Ein möglicher erster Schritt",
    recommendation: ["Unterstützung bei der Stellensuche", "Lebenslauf- und Bewerbungscoaching", "Vorstellungsgespräch-Training", "Individuelles Karrierecoaching"],
    note: "Diese Empfehlung dient der Orientierung. Eine Arbeitsstelle oder Zulassung wird nicht garantiert.",
    ask: "Anfrage per E-Mail senden",
    back: "Zurück",
    reset: "Neu beginnen",
    privacy: "Die Antworten werden nur lokal für einen E-Mail-Entwurf verwendet und nicht automatisch versendet."
  },
  tr: {
    kicker: "DR. FARZANEH HÄHNDEL · ALMANYA",
    headline: "Kariyerinizdeki bir sonraki adımı netleştirin.",
    intro: "Almanya ve Almanca konuşulan ülkelerde başvurular, mülakatlar ve kariyer kararları için kişisel destek.",
    button: "Size uygun başlangıcı bulun",
    coaching: "IHK İş ve Başvuru Koçluğu",
    step: "ADIM",
    questions: [
      { q: "Kariyerinizin hangi aşamasındasınız?", a: ["Öğrenci / yeni mezun", "Doktora / araştırmacı", "Sektör profesyoneli", "Kariyer değişikliği"] },
      { q: "Hangi konuda desteğe ihtiyacınız var?", a: ["Fırsat bulma", "CV / başvurular", "Mülakat hazırlığı", "Kariyer / maaş stratejisi"] },
      { q: "Hangi pazarda çalışmayı düşünüyorsunuz?", a: ["Almanya", "Avusturya / İsviçre", "Henüz karar vermedim"] },
      { q: "Başvuru belgeleriniz var mı?", a: ["Evet, incelemeye hazır", "Evet, güncellemek gerekiyor", "Henüz yok"] },
      { q: "Ne zaman başlamak istiyorsunuz?", a: ["En kısa sürede", "1–3 ay içinde", "Şimdilik araştırıyorum"] }
    ],
    result: "Önerilen ilk adım",
    recommendation: ["İş arama desteği", "CV ve başvuru desteği", "Mülakat koçluğu", "Bireysel kariyer koçluğu"],
    note: "Bu yalnızca ön yönlendirmedir; iş veya kabul garantisi verilmez.",
    ask: "E-posta taslağı oluştur",
    back: "Geri",
    reset: "Yeniden başla",
    privacy: "Yanıtlar sadece e-posta taslağı hazırlamak için yerel olarak kullanılır; otomatik gönderilmez."
  }
};


const editorialHero={
 en:{intro:"INDEPENDENT CAREER COACHING",based:"Based in Germany",tag:"YOUR CAREER IS A DISCOVERY.",person:"Meet your coach",a:"Science took",b:"you this far.",c:"What's next?",aside:"For curious minds ready for a new chapter.",action:"FOLLOW THE COMPASS",credential:"DR. FARZANEH HÄHNDEL · PhD / IHK CAREER COACH",hint:"SCROLL TO EXPLORE"},
 de:{intro:"INDIVIDUELLES KARRIERECOACHING",based:"In Deutschland ansässig",tag:"KARRIERE IST EINE ENTDECKUNGSREISE.",person:"Ihre Karriereberaterin",a:"Die Wissenschaft brachte",b:"Sie bis hierher.",c:"Was kommt jetzt?",aside:"Für neugierige Menschen, die bereit für ein neues Kapitel sind.",action:"DEM KOMPASS FOLGEN",credential:"DR. FARZANEH HÄHNDEL · PhD / IHK-KARRIERECOACH",hint:"WEITER ENTDECKEN"},
 tr:{intro:"BİREYSEL KARİYER KOÇLUĞU",based:"Almanya",tag:"KARİYERİNİZ BİR KEŞİF YOLCULUĞU.",person:"Koçunuzla tanışın",a:"Bilim sizi",b:"buraya getirdi.",c:"Sırada ne var?",aside:"Yeni bir sayfaya hazır meraklı zihinler için.",action:"PUSULAYI TAKİP EDİN",credential:"DR. FARZANEH HÄHNDEL · PhD / IHK KARİYER KOÇU",hint:"KEŞFETMEYE DEVAM"}
};

const editorialStatement={
 en:{label:"NOT JUST A JOB SEARCH.",a:"Your expertise is",b:"scientific.",c:"Your next move is",d:"personal.",foot:"THE SCIENCE OF MOVING FORWARD",description:"Your scientific background is the starting point. Find a career direction that reflects your strengths, goals and ambitions."},
 de:{label:"MEHR ALS NUR JOBSUCHE.",a:"Ihre Expertise ist",b:"wissenschaftlich.",c:"Ihr nächster Schritt ist",d:"persönlich.",foot:"WISSENSCHAFT UND KARRIERE IM EINKLANG",description:"Ihr wissenschaftlicher Hintergrund ist der Ausgangspunkt. Finden Sie einen Karriereweg, der zu Ihren Stärken, Zielen und Wünschen passt."},
 tr:{label:"SADECE İŞ ARAMAK DEĞİL.",a:"Uzmanlığınız",b:"bilimsel.",c:"Sonraki adımınız",d:"size özel.",foot:"BİLİMDEN KARİYERE",description:"Bilimsel geçmişiniz başlangıç noktanız. Güçlü yönlerinize, hedeflerinize ve beklentilerinize uygun bir kariyer yönü belirleyin."}
};


const editorialAudience={
 en:{label:"01 / THE PEOPLE",a:"Brilliant minds.",b:"Different paths.",intro:"There is no single career formula. Your background, goals, and ambitions shape your direction.",people:[["Graduates & Early Careers","Turn your education into a confident first step."],["PhD Students & Researchers","Explore a career in academia or transition into industry."],["Industry Professionals","Prepare for your next role, interview or salary discussion."]]},
 de:{label:"01 / FÜR WEN",a:"Starke Köpfe.",b:"Unterschiedliche Wege.",intro:"Es gibt nicht den einen Karriereweg. Ihr Hintergrund und Ihre Ziele bestimmen die Richtung.",people:[["Berufseinsteiger","Mit einem klaren Plan in den Beruf starten."],["Promovierende & Forschende","Neue Perspektiven in Forschung und Industrie finden."],["Fachkräfte in der Industrie","Den nächsten Karriereschritt vorbereiten."]]},
 tr:{label:"01 / KİMLER İÇİN",a:"Parlak zihinler.",b:"Farklı yollar.",intro:"Herkese uyan tek bir kariyer formülü yoktur. Geçmişiniz ve hedefleriniz yolunuzu belirler.",people:[["Yeni Mezunlar","Kariyerinize güvenle başlayın."],["Doktora Öğrencileri ve Araştırmacılar","Akademi ve endüstri seçeneklerini keşfedin."],["Sektör Profesyonelleri","Yeni pozisyonlara, mülakatlara ve ücret görüşmelerine hazırlanın."]]}
};
const editorialServices={
 en:{label:"02 / THE WORK",a:"One career.",b:"Many possibilities.",intro:"Pick a direction. Discover the support behind it.",ask:"Ask about this service",chapters:[
 {label:"EXPLORE",title:"Find your direction.",text:"A strong scientific background opens doors. The challenge is knowing which ones to knock on.",items:[["Industry Job Opportunities","Discover life science industry roles in Germany and plan a strategic job search."],["University & Research Applications","Explore academic and research openings and prepare applications."]]},
 {label:"PRESENT",title:"Tell your story well.",text:"Your experience deserves more than a list of qualifications.",items:[["CV Review & Optimization","Improve your CV for professional applications in Germany."],["CV Creation from Scratch","Create a well-structured CV in English or German."],["Cover Letter Review","Refine your existing letter for a specific opportunity."],["Cover Letter from Scratch","Develop a tailored application letter."],["Application Document Review","Review and organize your application documents."]]},
 {label:"ADVANCE",title:"Own your next move.",text:"Prepare for interviews and negotiations with clarity.",items:[["Interview Preparation","Interview practice and personalized feedback."],["Salary Negotiation","Prepare evidence-based salary conversations."],["Personal Career Coaching","Six individual sessions shaped around your goals."]]}
 ]},
 de:{label:"02 / LEISTUNGEN",a:"Eine Karriere.",b:"Viele Möglichkeiten.",intro:"Entdecken Sie gezielte Unterstützung und sinnvolle nächste Schritte.",ask:"Leistung anfragen",chapters:[
 {label:"ORIENTIEREN",title:"Finden Sie Ihre Richtung.",text:"Entdecken Sie Möglichkeiten auf Basis Ihrer wissenschaftlichen Qualifikation.",items:[["Industriejobs finden","Passende Stellen in der deutschen Life-Science-Industrie finden."],["Bewerbungen an Hochschulen & Forschungseinrichtungen","Unterstützung bei akademischen Bewerbungen."]]},
 {label:"PRÄSENTIEREN",title:"Erzählen Sie Ihre Geschichte.",text:"Präsentieren Sie Ihre Erfahrung überzeugend.",items:[["Lebenslauf optimieren","Individuelle Prüfung und Überarbeitung."],["Lebenslauf neu erstellen","Lebenslauf auf Deutsch oder Englisch erstellen."],["Anschreiben überarbeiten","Vorhandenes Bewerbungsschreiben verbessern."],["Anschreiben neu erstellen","Zielgerichtetes Anschreiben erstellen."],["Bewerbungsunterlagen prüfen","Dokumente prüfen und ordnen."]]},
 {label:"WEITERKOMMEN",title:"Gestalten Sie Ihren nächsten Schritt.",text:"Gespräche und Verhandlungen gezielt vorbereiten.",items:[["Vorstellungsgespräch vorbereiten","Interviewtraining und Feedback."],["Gehaltsverhandlung","Gehaltsgespräche fundiert vorbereiten."],["Individuelles Karrierecoaching","Sechs persönliche Coachingtermine."]]}
 ]},
 tr:{label:"02 / HİZMETLER",a:"Tek kariyer.",b:"Birçok olasılık.",intro:"Yönünüzü seçin, size uygun desteği keşfedin.",ask:"Hizmet hakkında bilgi al",chapters:[
 {label:"KEŞFET",title:"Yönünüzü bulun.",text:"Bilimsel geçmişinizle doğru fırsatları belirleyin.",items:[["Endüstride İş Fırsatları","Almanya'daki uygun endüstri pozisyonlarını bulun."],["Üniversite ve Araştırma Başvuruları","Akademik başvurular için destek."]]},
 {label:"ANLAT",title:"Hikâyenizi doğru anlatın.",text:"Deneyiminizi başvurularda güçlü şekilde sunun.",items:[["CV İnceleme ve İyileştirme","CV'nizi Almanya için geliştirin."],["Sıfırdan CV Hazırlama","İngilizce veya Almanca CV hazırlayın."],["Ön Yazı İnceleme ve Düzenleme","Mevcut ön yazınızı iyileştirin."],["Sıfırdan Ön Yazı Hazırlama","Yeni ve hedefe yönelik ön yazı oluşturun."],["Başvuru Belgelerini Düzenleme","Başvuru evraklarını gözden geçirin."]]},
 {label:"İLERLE",title:"Sonraki adımınızı sahiplenin.",text:"Mülakat ve maaş görüşmelerine hazırlanın.",items:[["Mülakat Hazırlığı","Mülakat pratiği ve geri bildirim."],["Maaş Müzakeresi","Ücret görüşmelerine hazırlık."],["Kişiye Özel Kariyer Koçluğu","Altı bireysel koçluk oturumu."]]}
 ]}
};


const careerJourney = [
 {year:"2014–2017",place:"Istanbul, Türkiye",title:{en:"The scientific foundation",de:"Das wissenschaftliche Fundament",tr:"Bilimsel temel"},detail:{en:"Bachelor’s degree in Food Science and Technology, Istanbul Technical University.",de:"Bachelorstudium Lebensmittelwissenschaft und -technologie, Technische Universität Istanbul.",tr:"İstanbul Teknik Üniversitesi, Gıda Bilimi ve Teknolojisi lisans eğitimi."}},
 {year:"2019–2025",place:"Jena, Germany",title:{en:"The doctorate",de:"Die Promotion",tr:"Doktora yolculuğu"},detail:{en:"Doctoral research at Friedrich Schiller University Jena.",de:"Promotionsforschung an der Friedrich-Schiller-Universität Jena.",tr:"Friedrich Schiller Üniversitesi Jena'da doktora araştırmaları."}},
 {year:"2019–2023",place:"Jena, Germany",title:{en:"Research in practice",de:"Forschung in der Praxis",tr:"Uygulamalı araştırma"},detail:{en:"Research experience at University Hospital Jena.",de:"Forschungserfahrung am Universitätsklinikum Jena.",tr:"Jena Üniversite Hastanesinde araştırma deneyimi."}},
 {year:"2023–2024",place:"Jena, Germany",title:{en:"From academia to industry",de:"Von der Wissenschaft in die Industrie",tr:"Akademiden endüstriye"},detail:{en:"A new perspective at Analytik Jena.",de:"Ein neuer Blickwinkel bei Analytik Jena.",tr:"Analytik Jena'da yeni bir bakış açısı."}},
 {year:"2026–present",place:"Germany / International",title:{en:"International life sciences",de:"Internationale Lebenswissenschaften",tr:"Uluslararası yaşam bilimleri"},detail:{en:"Professional experience with Charles River Laboratories.",de:"Berufserfahrung bei Charles River Laboratories.",tr:"Charles River Laboratories ile profesyonel deneyim."}},
 {year:"2026",place:"IHK · Germany",title:{en:"Sharing the experience",de:"Erfahrung weitergeben",tr:"Deneyimi paylaşmak"},detail:{en:"Completed IHK Job- und Bewerbungscoaching training and qualification.",de:"IHK-Weiterbildung Job- und Bewerbungscoaching erfolgreich abgeschlossen.",tr:"IHK İş ve Başvuru Koçluğu eğitimini başarıyla tamamladı."}}
];
const biographyLocale = {
 en:{label:"03 / BEHIND THE COMPASS",a:"Meet the scientist",b:"behind the guidance.",story:"I'm Dr. Farzaneh Hähndel. My background spans life science research, a PhD in Jena, experience in university and industry environments, and IHK job and application coaching training. I support professionals navigating German academic and industry opportunities.",talk:"START A CONVERSATION",foundation:"THE FOUNDATION",science:"Scientific training",ihk:"Job & application coaching",based:"Based in Germany",journey:"THE JOURNEY",journeyA:"Experience isn't a title.",journeyB:"It's a journey.",journeyIntro:"Six chapters across education, research, industry and career coaching.",certificate:"View IHK certificate",archive:"View career journey illustration"},
 de:{label:"03 / HINTER DEM KOMPASS",a:"Lernen Sie die Wissenschaftlerin",b:"hinter der Beratung kennen.",story:"Ich bin Dr. Farzaneh Hähndel. Mein Werdegang verbindet wissenschaftliche Forschung, eine Promotion in Jena, Erfahrung in Hochschule und Industrie sowie die IHK-Weiterbildung im Job- und Bewerbungscoaching.",talk:"GESPRÄCH BEGINNEN",foundation:"DIE GRUNDLAGE",science:"Wissenschaftliche Ausbildung",ihk:"Job- und Bewerbungscoaching",based:"In Deutschland ansässig",journey:"DER WEG",journeyA:"Erfahrung ist kein Titel.",journeyB:"Sondern ein Weg.",journeyIntro:"Sechs Etappen zwischen Studium, Forschung, Industrie und Karrierecoaching.",certificate:"IHK-Zertifikat ansehen",archive:"Originalillustration des Karrierewegs ansehen"},
 tr:{label:"03 / PUSULANIN ARDINDA",a:"Danışmanlığın arkasındaki",b:"bilim insanını tanıyın.",story:"Ben Dr. Farzaneh Hähndel. Bilimsel araştırma geçmişimi, Jena'daki doktora eğitimimi, akademi ve endüstri deneyimimi ve IHK iş ve başvuru koçluğu eğitimimi danışmanlık hizmetlerimde bir araya getiriyorum.",talk:"GÖRÜŞME BAŞLAT",foundation:"TEMELİMİZ",science:"Bilimsel eğitim",ihk:"İş ve başvuru koçluğu",based:"Almanya'da yerleşik",journey:"KARİYER YOLCULUĞU",journeyA:"Deneyim bir unvan değil.",journeyB:"Bir yolculuktur.",journeyIntro:"Eğitim, araştırma, endüstri ve kariyer danışmanlığı boyunca altı önemli adım.",certificate:"IHK sertifikasını görüntüle",archive:"Kariyer yolculuğu görselini aç"}
};

const styles = `
:host { display:block; width:100%; color:#14272b; font-family:Arial,Helvetica,sans-serif; }
* {box-sizing:border-box}
article { background:#f4f2e9; min-height:580px; padding:clamp(26px,5vw,64px); display:grid; grid-template-columns:1.04fr .96fr; gap:7%; align-items:center; }
small {font-weight:800;letter-spacing:.16em;font-size:10px;color:#3d7f7c}
h1,h2,h3 {font-family:Georgia,"Times New Roman",serif;font-weight:400;line-height:1.07;letter-spacing:-.05em;margin:19px 0}
h1{font-size:clamp(40px,5vw,76px);max-width:790px}
h2{font-size:clamp(34px,3.2vw,52px)}
p{line-height:1.75;max-width:570px;font-size:clamp(14px,1.3vw,17px)}
button,a {font:inherit;cursor:pointer}
button:focus-visible,a:focus-visible {outline:3px solid #147f86;outline-offset:3px}
.primary {background:#15383c;color:#fff;padding:16px 22px;border:0;border-radius:2px;font-size:13px;font-weight:800;margin-top:25px}
.visual {align-self:stretch;min-height:320px;display:grid;place-items:center;background:linear-gradient(135deg,#c1edea 0%,#9abeb8 65%,#547c7b 100%);position:relative;overflow:hidden}
.visual:before {content:"✳";position:absolute;font-size:clamp(170px,24vw,360px);color:#f4f2e976;transform:rotate(-16deg)}
.visual-text{position:relative;color:#15383c;text-align:center;letter-spacing:.16em;font-size:11px;font-weight:800;text-transform:uppercase;max-width:210px;padding:20px}
.quiz {padding:clamp(22px,4vw,48px);background:#e8ebdf}
.surface {max-width:720px;margin:auto;border:1px solid #d2d7cd;border-radius:8px;background:#faf8f1;padding:clamp(20px,4vw,38px)}
.top {display:flex;justify-content:space-between;align-items:center;gap:10px}
.progress {display:flex;gap:7px;margin:18px 0 26px}
.progress span {height:5px;flex:1;background:#d6d9d0;border-radius:6px}
.progress .on {background:#307d79}
.choices{display:grid;gap:10px;margin-top:24px}
.choices button{display:flex;justify-content:space-between;gap:16px;text-align:left;padding:17px 19px;border:1px solid #ced6d0;border-radius:5px;background:#fff;color:#17343b;font-size:14px}
.choices button:hover {border-color:#247e7c;background:#eaf6f0}
.footer{display:flex;justify-content:space-between;gap:12px;border-top:1px solid #d1d9d1;margin-top:27px;padding-top:19px}
.footer button{border:0;background:none;color:#17343b;font-size:12px;font-weight:800}
.footer button:disabled{opacity:.4;cursor:not-allowed}
.result {background:#ecf4ef;border-left:3px solid #307d79;padding:18px;margin-top:20px}
.result p{font-size:13px}
.email {display:inline-block;background:#16383a;color:#fff;padding:15px 20px;font-size:12px;text-decoration:none;font-weight:800}
.privacy {font-size:11px!important;color:#536f6d;margin-top:15px}
[hidden] {display:none!important}
@media(max-width:700px) { article {grid-template-columns:1fr;gap:24px;min-height:0} .visual {min-height:220px} h1{font-size:44px} }

/* Original Vercel editorial hero adapted for Wix Shadow DOM */
article.hero-original{display:block;position:relative;overflow:hidden;min-height:710px;padding:0;background:#d7efec;color:#10232a;isolation:isolate}
.hero-original .ambient{position:absolute;border-radius:50%;filter:blur(52px);pointer-events:none;z-index:-1}
.hero-original .ambient.a{width:65%;height:75%;background:#b1e9f2;right:-15%;top:-20%}
.hero-original .ambient.b{width:45%;height:50%;background:#f6e5be;left:-12%;bottom:-25%}
.hero-original .meta,.hero-original .bottom{position:relative;display:flex;justify-content:space-between;gap:14px;letter-spacing:.13em;font-size:10px;font-weight:800;padding:23px 4%}
.hero-original .stage{min-height:580px;max-width:1480px;margin:auto;position:relative;padding:66px 7% 46px;display:flex;flex-direction:column;justify-content:center}
.hero-original .kicker{letter-spacing:.21em;font-size:11px;font-weight:800;position:relative;z-index:2}
.hero-original .nameplate{position:relative;z-index:3;border-left:2px solid #147f86;padding-left:15px;margin:22px 0 0;display:flex;flex-direction:column;gap:6px;align-items:flex-start;font-size:12px}
.hero-original .nameplate strong{font-size:15px}
.hero-original .nameplate small{font-size:10px}
.hero-original h1{font-size:clamp(64px,9vw,150px);line-height:.97;letter-spacing:-.075em;max-width:1100px;position:relative;z-index:2;margin:24px 0 15px}
.hero-original h1 em{font-style:italic;font-weight:400;color:#fffaf0;text-shadow:0 2px 30px #41677742}
.hero-original h1 span{color:#087989}
.hero-original .portrait{position:absolute;right:5%;top:9%;width:37%;height:75%;overflow:hidden;border-radius:46% 46% 4% 4%;transform:rotate(8deg);box-shadow:0 25px 75px #244c4a2e}
.hero-original .portrait img{width:100%;height:100%;object-fit:cover;object-position:center}
.hero-original .side-note{position:absolute;right:5%;bottom:9%;z-index:4;display:flex;align-items:center;gap:10px;background:#f5f0e3;padding:13px 17px;transform:rotate(-6deg);max-width:230px}
.hero-original .side-note span{font-size:38px;color:#df9276}
.hero-original .side-note p{font-size:12px;line-height:1.5;font-weight:800;margin:0}
.hero-original .action{position:relative;z-index:4;align-self:flex-start;margin-top:28px;border:0;border-bottom:1px solid #10232a;background:transparent;padding:0 0 12px;letter-spacing:.14em;font-size:12px;font-weight:800;color:inherit}
.hero-original .bottom{padding-top:20px;padding-bottom:25px}
.hero-original .reveal{animation:compass-reveal .8s both}
.hero-original .reveal.late{animation-delay:.14s}
@keyframes compass-reveal{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:700px){
 article.hero-original{min-height:0}
 .hero-original .meta{font-size:8px}
 .hero-original .meta span:last-child{display:none}
 .hero-original .stage{min-height:790px;padding:50px 6% 335px;justify-content:flex-start}
 .hero-original h1{font-size:clamp(48px,12vw,78px);line-height:1.03;margin:32px 0}
 .hero-original .portrait{width:65%;height:290px;top:auto;bottom:23px;right:7%}
 .hero-original .action{margin-top:14px;align-self:flex-start;font-size:10px;max-width:180px;position:relative;z-index:5}
 .hero-original .side-note{right:auto;left:5%;bottom:60px;max-width:145px;padding:9px 11px;gap:6px}
 .hero-original .side-note span{font-size:25px}
 .hero-original .side-note p{font-size:10px;line-height:1.35}
 .hero-original .bottom{font-size:8px}
}
@media(max-width:400px){.hero-original h1{font-size:46px}.hero-original .portrait{width:78%}.hero-original .stage{min-height:765px}}


/* Vercel section 2: editorial statement */
.statement-original{background:#121c23;color:#f6f3eb;padding:clamp(85px,10vw,145px) 7% 80px;min-height:520px}
.statement-original .inner{max-width:1280px;margin:auto}
.statement-original .eyebrow{font-size:11px;letter-spacing:.16em;font-weight:800;color:#abdace}
.statement-original h2{font-family:Georgia,"Times New Roman",serif;letter-spacing:-.065em;font-size:clamp(49px,7.5vw,108px);line-height:1.08;margin:42px 0;max-width:1200px;font-weight:400}
.statement-original h2 span{color:#9fd7cc}
.statement-original h2 em{color:#e4aa84;font-weight:400}
.statement-original p{max-width:610px;margin-left:auto;color:#cad2cd;font-size:17px;line-height:1.75}
.statement-original .rule{height:1px;background:#a1b1ab;margin:75px 0 23px;transform-origin:left;transition:transform 1s ease}
.statement-original .foot{display:flex;justify-content:space-between;align-items:center;gap:20px;font-size:10px;letter-spacing:.14em}
.statement-original .symbol{font-size:37px;color:#abdace;line-height:1}
@media(max-width:700px){.statement-original{min-height:0;padding:85px 7% 55px}.statement-original h2{font-size:clamp(42px,9.5vw,69px);margin:32px 0}.statement-original p{font-size:14px}.statement-original .rule{margin:55px 0 20px}}


/* Vercel-inspired audience + three service chapters */
.audience-original{display:grid;grid-template-columns:1fr 1fr;min-height:650px;background:#f4f2e9;color:#14272b}
.audience-original .visual{min-height:560px;background:linear-gradient(#112b3644,#112b3644),url("https://life-science-career-compass.vercel.app/assets/farzaneh/interview-session.jpg") center/cover}
.audience-original .body{padding:90px 9%;align-self:center}
.audience-original .index,.services-original .index{font-size:11px;font-weight:800;letter-spacing:.17em}
.audience-original h2,.services-original h2{font:400 clamp(49px,5.5vw,83px)/1.08 Georgia,serif;letter-spacing:-.065em;margin:30px 0}
.audience-original h2 span{color:#0e8791}
.audience-original .intro{line-height:1.7;color:#5d6968;font-size:15px}
.audience-original .path{display:flex;align-items:center;gap:15px;width:100%;text-align:left;background:none;border:0;border-top:1px solid #1a262429;padding:20px 0;color:#14272b}
.audience-original .path span{font-size:11px;font-weight:800;color:#147b85}
.audience-original .path strong{display:block;font-size:16px}
.audience-original .path small{display:block;color:#63746f;font-size:12px;line-height:1.6;margin-top:5px}
.audience-original .path b{margin-left:auto}
.services-original{background:#e5e8dc;color:#14272b;padding:100px 6% 80px}
.services-original .intro{max-width:1100px;margin:0 auto 60px}
.services-original h2 em{color:#448d87}
.services-original .intro p{font-size:16px;line-height:1.65}
.services-original .chapters{max-width:1280px;margin:auto;display:grid;gap:18px}
.services-original .chapter{display:grid;grid-template-columns:1fr 1fr;gap:8%;padding:55px 5%;background:#bbe8e5;border-radius:4px}
.services-original .chapter:nth-child(2){background:#f5c9b4}
.services-original .chapter:nth-child(3){background:#dce8b5}
.services-original .chapter .name{font-size:11px;font-weight:800;letter-spacing:.16em}
.services-original .chapter h3{font:400 clamp(38px,4vw,66px)/1.1 Georgia,serif;letter-spacing:-.055em;margin:25px 0}
.services-original .chapter p{line-height:1.7;font-size:14px}
.services-original .entries{align-self:center}
.services-original .service{border-bottom:1px solid #1a343a44}
.services-original .service:first-child{border-top:1px solid #1a343a44}
.services-original .service button{width:100%;text-align:left;padding:16px 0;display:flex;justify-content:space-between;align-items:center;gap:14px;background:none;color:inherit;border:0;font-size:16px;font-weight:700}
.services-original .service .details{padding:0 0 18px;line-height:1.7;font-size:13px}
.services-original .service .details a{font-weight:800;color:inherit}
@media(max-width:700px){
.audience-original{grid-template-columns:1fr}
.audience-original .visual{min-height:310px}
.audience-original .body{padding:55px 7%}
.audience-original h2,.services-original h2{font-size:clamp(43px,10vw,65px)}
.services-original{padding:75px 6%}
.services-original .chapter{grid-template-columns:1fr;gap:30px;padding:35px 7%}
.services-original .chapter h3{font-size:43px}
}


/* Original Vercel biography / academic journey */
.story-original{display:grid;grid-template-columns:45% 55%;background:#17272b;color:#f5f1e7;min-height:730px}
.story-original .photo{min-height:730px;position:relative;overflow:hidden;background:linear-gradient(110deg,#173f4533,#121f2a59),url("https://life-science-career-compass.vercel.app/assets/farzaneh/coaching-session.jpg") center/cover}
.story-original .photo img{position:absolute;inset:8% 8% 0;width:84%;height:92%;object-fit:contain;object-position:bottom;filter:drop-shadow(0 20px 22px #0d20243b)}
.story-original .tag{position:absolute;left:6%;bottom:5%;font-size:11px;letter-spacing:.13em;line-height:1.8;background:#102b32dd;padding:10px 14px}
.story-original .copy{padding:95px 10%;align-self:center}
.story-original .label,.journey-original .label{font-size:11px;font-weight:800;letter-spacing:.17em}
.story-original h2{font:400 clamp(43px,5.2vw,78px)/1.09 Georgia,serif;letter-spacing:-.06em;margin:35px 0}
.story-original h2 em{color:#a2dcce;font-weight:400}
.story-original p{line-height:1.85;color:#c2d3cd;font-size:15px}
.story-original .name{color:#fff;font-size:17px;font-weight:800}
.story-original a{display:inline-block;border-bottom:1px solid #c2d3cd;margin-top:25px;padding-bottom:10px;color:inherit;text-decoration:none;font-size:13px;font-weight:800}
.proof-original{background:#a7d8d0;color:#14272b;padding:65px 7%;display:grid;grid-template-columns:1.2fr repeat(3,1fr);gap:30px;align-items:center}
.proof-original strong{display:block;font:400 clamp(48px,6vw,80px) Georgia,serif;letter-spacing:-.075em}
.proof-original p{font-size:12px;letter-spacing:.07em;line-height:1.6}
.journey-original{background:#f3efe5;color:#182729;padding:95px 7% 80px}
.journey-original .heading{max-width:1040px;margin:0 auto 65px}
.journey-original h2{font:400 clamp(50px,6vw,96px)/1.07 Georgia,serif;letter-spacing:-.065em;margin:23px 0}
.journey-original h2 em{color:#367e83;font-weight:400}
.journey-original .heading p{font-size:16px;line-height:1.8;max-width:660px}
.journey-original .layout{max-width:1250px;margin:auto;display:grid;grid-template-columns:.88fr 1.12fr;gap:9%;align-items:start}
.journey-original .portraitCard{position:sticky;top:28px;min-height:540px;overflow:hidden;border-radius:14px;background:#a6d7d1;box-shadow:0 25px 65px #142d291a}
.journey-original .portraitCard .count{position:absolute;top:22px;left:25px;font:400 60px Georgia,serif;z-index:1}
.journey-original .portraitCard .count span{font:700 12px Arial,sans-serif}
.journey-original .portraitCard img{position:absolute;inset:4% 0 17%;height:79%;width:100%;object-fit:contain;object-position:bottom}
.journey-original .portraitCard .caption{position:absolute;left:24px;right:24px;bottom:89px;display:grid;gap:5px;color:#15363b;text-shadow:0 1px 5px #c5f0ea}
.journey-original .portraitCard .caption strong{font:400 27px Georgia,serif}
.journey-original .portraitCard .caption span{font-size:11px;letter-spacing:.1em}
.journey-original .certificate{position:absolute;bottom:21px;left:22px;right:22px;display:flex;justify-content:space-between;align-items:center;text-decoration:none;padding:17px;background:#f6f0e3;color:#16363f;border:1px solid #16363f;font-size:12px;font-weight:800}
.journey-original .steps{border-left:2px solid #c7d7cf;padding-left:35px}
.journey-original .step{position:relative;padding:30px 0 65px;min-height:200px;border-bottom:1px solid #18363b19}
.journey-original .step .number{position:absolute;left:-54px;top:28px;width:36px;height:36px;display:grid;place-items:center;background:#d9e9df;border-radius:50%;font-size:11px}
.journey-original .step .date{font-size:11px;letter-spacing:.12em;font-weight:800}
.journey-original .step h3{font:400 clamp(33px,4vw,57px)/1.12 Georgia,serif;letter-spacing:-.06em;margin:20px 0 10px}
.journey-original .step p{font-size:14px;line-height:1.8}
.journey-original .archive{max-width:1250px;margin:25px auto 0;text-align:right}
.journey-original .archive a{color:inherit;text-decoration:none;border-bottom:1px solid;font-weight:800;font-size:12px}
@media(max-width:700px){
 .story-original{grid-template-columns:1fr}
 .story-original .photo{min-height:420px}
 .story-original .copy{padding:70px 7%}
 .story-original h2{font-size:clamp(42px,10vw,66px)}
 .proof-original{grid-template-columns:1fr 1fr;padding:55px 7%;gap:20px}
 .journey-original{padding:75px 7% 60px}
 .journey-original h2{font-size:clamp(42px,10vw,63px)}
 .journey-original .layout{grid-template-columns:1fr;gap:25px}
 .journey-original .portraitCard{position:relative;top:auto;min-height:380px;max-height:440px}
 .journey-original .portraitCard .count{font-size:43px}
 .journey-original .portraitCard .caption strong{font-size:23px}
 .journey-original .steps{margin-left:13px}
 .journey-original .step{min-height:165px;padding:20px 0 40px}
 .journey-original .step h3{font-size:37px}
 .journey-original .step .number{top:18px}
}

@media(prefers-reduced-motion:reduce){*,*:before{scroll-behavior:auto!important;animation:none!important;transition:none!important}}
`;

class CareerCompassDemo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:"open"});
    this.answers=[];
    this.lang="en";
    this.step=0;
  }

  connectedCallback() {
    const language=(this.getAttribute("lang")||"en").toLowerCase();
    this.lang=copy[language]?language:"en";
    this.render();
  }

  static get observedAttributes() {return ["lang"];}
  attributeChangedCallback(){if(this.isConnected)this.connectedCallback();}

  el(tag, className, text) {
    const node=document.createElement(tag);
    if(className)node.className=className;
    if(text!==undefined)node.textContent=text;
    return node;
  }

  render() {
    const t=copy[this.lang], root=this.shadowRoot;
    root.replaceChildren();
    const style=this.el("style");style.textContent=styles;root.append(style);

    const h=editorialHero[this.lang], hero=this.el("article","hero-original");
    const ambientA=this.el("div","ambient a"), ambientB=this.el("div","ambient b");
    ambientA.setAttribute("aria-hidden","true");ambientB.setAttribute("aria-hidden","true");
    hero.append(ambientA,ambientB);
    const meta=this.el("div","meta");
    meta.append(this.el("span",null,h.intro),this.el("span",null,h.based+" · EN / DE / TR"));
    hero.append(meta);
    const stage=this.el("div","stage");
    const kicker=this.el("div","kicker reveal",h.tag);
    const nameplate=this.el("div","nameplate reveal");
    nameplate.append(this.el("span",null,h.person),this.el("strong",null,"Dr. Farzaneh Hähndel"),this.el("small",null,"PhD · IHK"));
    const heading=this.el("h1","reveal late");
    heading.append(document.createTextNode(h.a),this.el("br"));
    const emphasis=this.el("em",null,h.b);heading.append(emphasis,this.el("br"),this.el("span",null,h.c));
    const photo=this.el("div","portrait");
    const img=this.el("img");
    img.src="https://life-science-career-compass.vercel.app/assets/farzaneh/portrait.png";
    img.alt="Dr. Farzaneh Hähndel";
    img.loading="eager";
    photo.append(img);
    const aside=this.el("div","side-note");
    aside.append(this.el("span",null,"✳"),this.el("p",null,h.aside));
    const cta=this.el("button","action",h.action+" ↘");
    cta.type="button";
    cta.addEventListener("click",()=>this.shadowRoot.querySelector(".quiz").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}));
    stage.append(kicker,nameplate,heading,photo,aside,cta);
    hero.append(stage);
    const bottom=this.el("div","bottom");
    bottom.append(this.el("span",null,h.credential),this.el("span",null,h.hint+" ↓"));
    hero.append(bottom);root.append(hero);
    const st=editorialStatement[this.lang], statement=this.el("section","statement-original");
    const inside=this.el("div","inner");
    inside.append(this.el("div","eyebrow",st.label));
    const big=this.el("h2");
    big.append(document.createTextNode(st.a+" "));
    big.append(this.el("span",null,st.b),this.el("br"));
    big.append(document.createTextNode(st.c+" "));
    big.append(this.el("em",null,st.d));
    inside.append(big,this.el("p",null,st.description),this.el("div","rule"));
    const statementFoot=this.el("div","foot");
    statementFoot.append(this.el("span",null,st.foot),this.el("span","symbol","✳"));
    inside.append(statementFoot);statement.append(inside);
    root.append(statement);
    const aud=editorialAudience[this.lang], audience=this.el("section","audience-original");
    const audienceVisual=this.el("div","visual");
    audienceVisual.setAttribute("role","img");audienceVisual.setAttribute("aria-label","Career coaching and interview setting");
    const audienceBody=this.el("div","body");
    audienceBody.append(this.el("div","index",aud.label));
    const audienceHeading=this.el("h2");
    audienceHeading.append(document.createTextNode(aud.a),this.el("br"),this.el("span",null,aud.b));
    audienceBody.append(audienceHeading,this.el("p","intro",aud.intro));
    aud.people.forEach(([name,description],i)=>{
      const button=this.el("button","path");button.type="button";
      button.append(this.el("span",null,"0"+(i+1)));
      const summary=this.el("div");summary.append(this.el("strong",null,name),this.el("small",null,description));
      button.append(summary,this.el("b",null,"↗"));
      button.addEventListener("click",()=>this.shadowRoot.querySelector(".quiz").scrollIntoView({behavior:"smooth"}));
      audienceBody.append(button);
    });
    audience.append(audienceVisual,audienceBody);root.append(audience);
    const svc=editorialServices[this.lang],servicesSection=this.el("section","services-original");
    const svcIntro=this.el("div","intro");
    svcIntro.append(this.el("div","index",svc.label));
    const svcTitle=this.el("h2");
    svcTitle.append(document.createTextNode(svc.a),this.el("br"),this.el("em",null,svc.b));
    svcIntro.append(svcTitle,this.el("p",null,svc.intro));servicesSection.append(svcIntro);
    const chapters=this.el("div","chapters");
    svc.chapters.forEach((chapter,index)=>{
      const part=this.el("div","chapter"),copyCol=this.el("div"),itemsCol=this.el("div","entries");
      copyCol.append(this.el("div","name",String(index+1).padStart(2,"0")+" / 03  ·  "+chapter.label),this.el("h3",null,chapter.title),this.el("p",null,chapter.text));
      chapter.items.forEach(([name,description])=>{
        const item=this.el("div","service"),toggle=this.el("button"),details=this.el("div","details");
        toggle.type="button";toggle.setAttribute("aria-expanded","false");
        toggle.append(this.el("span",null,name),this.el("span",null,"+"));
        details.hidden=true;details.append(this.el("p",null,description));
        const request=this.el("a",null,svc.ask+" ↗");
        request.href="mailto:Ls.career-compass@mail.de?subject="+encodeURIComponent(name+" consultation request");
        details.append(request);
        toggle.addEventListener("click",()=>{
          const isOpen=toggle.getAttribute("aria-expanded")==="true";
          toggle.setAttribute("aria-expanded",String(!isOpen));details.hidden=isOpen;
          toggle.lastChild.textContent=isOpen?"+":"−";
        });
        item.append(toggle,details);itemsCol.append(item);
      });
      part.append(copyCol,itemsCol);chapters.append(part);
    });
    servicesSection.append(chapters);root.append(servicesSection);
    const bio=biographyLocale[this.lang];
    const story=this.el("section","story-original"),storyPhoto=this.el("div","photo");
    const portrait=this.el("img");
    portrait.src="https://life-science-career-compass.vercel.app/assets/farzaneh/portrait-office.png";
    portrait.alt="Dr. Farzaneh Hähndel";portrait.loading="lazy";
    storyPhoto.append(portrait,this.el("div","tag","DR. FARZANEH HÄHNDEL · PhD / IHK"));
    const storyCopy=this.el("div","copy");
    storyCopy.append(this.el("span","label",bio.label));
    const storyTitle=this.el("h2");
    storyTitle.append(document.createTextNode(bio.a),this.el("br"),this.el("em",null,bio.b));
    storyCopy.append(storyTitle,this.el("p","name","Dr. Farzaneh Hähndel"),this.el("p",null,bio.story));
    const storyContact=this.el("a",null,bio.talk+" ↗");
    storyContact.href="mailto:Ls.career-compass@mail.de?subject="+encodeURIComponent("Career coaching consultation");
    storyCopy.append(storyContact);story.append(storyPhoto,storyCopy);root.append(story);
    const proof=this.el("section","proof-original");
    proof.append(this.el("span","label",bio.foundation));
    [[ "PhD",bio.science ],["IHK",bio.ihk],["DE",bio.based]].forEach(([mark,description])=>{
      const item=this.el("div");item.append(this.el("strong",null,mark),this.el("p",null,description));proof.append(item);
    });
    root.append(proof);
    const journey=this.el("section","journey-original"),journeyHeading=this.el("div","heading");
    journeyHeading.append(this.el("span","label",bio.journey));
    const journeyTitle=this.el("h2");
    journeyTitle.append(document.createTextNode(bio.journeyA),this.el("br"),this.el("em",null,bio.journeyB));
    journeyHeading.append(journeyTitle,this.el("p",null,bio.journeyIntro));
    journey.append(journeyHeading);
    const journeyLayout=this.el("div","layout"),journeyCard=this.el("div","portraitCard");
    const counter=this.el("div","count");counter.append(document.createTextNode("01 "),this.el("span",null,"/ 06"));
    const journeyPhoto=this.el("img");journeyPhoto.src="https://life-science-career-compass.vercel.app/assets/farzaneh/portrait.png";journeyPhoto.loading="lazy";journeyPhoto.alt="Dr. Farzaneh Hähndel";
    const caption=this.el("div","caption");caption.append(this.el("strong",null,"Dr. Farzaneh Hähndel"),this.el("span",null,"PhD · IHK Job & Application Coach"));
    const cert=this.el("a","certificate",bio.certificate+" ↗");
    // Use only the public, date-of-birth-redacted copy; opens in a new browser tab.
    cert.href="https://life-science-career-compass.vercel.app/assets/farzaneh/certificate-public.png";
    cert.target="_blank";cert.rel="noopener noreferrer";
    journeyCard.append(counter,journeyPhoto,caption,cert);
    const steps=this.el("div","steps");
    careerJourney.forEach((item,index)=>{
      const step=this.el("article","step");
      step.append(this.el("span","number",String(index+1).padStart(2,"0")));
      step.append(this.el("div","date",item.year+" · "+item.place));
      step.append(this.el("h3",null,item.title[this.lang]));
      step.append(this.el("p",null,item.detail[this.lang]));steps.append(step);
    });
    journeyLayout.append(journeyCard,steps);journey.append(journeyLayout);
    const archive=this.el("div","archive"),archiveLink=this.el("a",null,bio.archive+" ↗");
    archiveLink.href="https://life-science-career-compass.vercel.app/assets/farzaneh/career-journey.png";
    archiveLink.rel="noopener noreferrer";archiveLink.target="_blank";
    archive.append(archiveLink);journey.append(archive);root.append(journey);
    const quiz=this.el("section","quiz"),surface=this.el("div","surface");
    quiz.append(surface);root.append(quiz);
    const top=this.el("div","top");
    top.append(this.el("small",null,"CAREER COMPASS"),this.el("small",null,t.step+" "+Math.min(this.step+1,5)+" / 5"));
    surface.append(top);
    const progress=this.el("div","progress");
    for(let i=0;i<5;i++){const line=this.el("span",i<=this.step?"on":"");progress.append(line)}
    surface.append(progress);
    if(this.step<5){
      const current=t.questions[this.step];
      surface.append(this.el("h2",null,current.q));
      const choices=this.el("div","choices");
      current.a.forEach((answer,index)=>{
        const button=this.el("button",null,answer+"  →");button.type="button";
        button.addEventListener("click",()=>{
          this.answers=this.answers.slice(0,this.step).concat(index);
          this.step+=1;
          this.render();
        });
        choices.append(button);
      });
      surface.append(choices);
    }else{
      const recommendation=t.recommendation[this.answers[1]??0];
      surface.append(this.el("h2",null,t.result),this.el("h3",null,recommendation));
      const summary=this.el("div","result");
      t.questions.forEach((q,i)=>summary.append(this.el("p",null,q.q+" — "+q.a[this.answers[i]])));
      summary.append(this.el("p",null,t.note));surface.append(summary);
      const subject="Life Science Career Compass — "+recommendation;
      const body=t.questions.map((q,i)=>q.q+": "+q.a[this.answers[i]]).join("\n")+"\n\n"+t.note;
      const link=this.el("a","email",t.ask);
      link.href="mailto:Ls.career-compass@mail.de?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
      surface.append(link,this.el("p","privacy",t.privacy));
    }
    const footer=this.el("div","footer"),back=this.el("button",null,"← "+t.back),reset=this.el("button",null,t.reset);
    back.type="button";reset.type="button";back.disabled=this.step===0;
    back.addEventListener("click",()=>{if(this.step>0){this.step-=1;this.answers.pop();this.render()}});
    reset.addEventListener("click",()=>{this.step=0;this.answers=[];this.render()});
    footer.append(back,reset);surface.append(footer);
  }
}

if(!customElements.get("career-compass-demo"))customElements.define("career-compass-demo",CareerCompassDemo);

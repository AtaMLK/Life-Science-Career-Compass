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
    const hero=this.el("article");
    const intro=this.el("div");
    intro.append(this.el("small",null,t.kicker),this.el("h1",null,t.headline),this.el("p",null,t.intro));
    const start=this.el("button","primary",t.button);
    start.type="button";
    start.addEventListener("click",()=>this.shadowRoot.querySelector(".quiz").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}));
    intro.append(start);
    const visual=this.el("div","visual"),visualText=this.el("div","visual-text",t.coaching);visual.append(visualText);
    hero.append(intro,visual);root.append(hero);
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

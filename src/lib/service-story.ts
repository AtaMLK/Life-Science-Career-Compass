import type {Lang} from "@/lib/content";

type Intro={hook:string;focus:[string,string]};
const stories:Record<string,Record<Lang,Intro>>={
 industry:{
  en:{hook:"Where do your scientific skills belong outside the lab? Explore roles that align with your experience before sending another application.",focus:["Identifying suitable industry roles","Planning a focused search and application approach"]},
  de:{hook:"Wo passen Ihre wissenschaftlichen Fähigkeiten außerhalb des Labors am besten hin? Klären Sie Ihre berufliche Richtung, bevor Sie die nächste Bewerbung versenden.",focus:["Passende Stellen in der Industrie erkennen","Suche und Bewerbungsstrategie gezielt planen"]},
  tr:{hook:"Bilimsel birikiminiz laboratuvar dışında hangi rollere uyuyor? Yeni başvurulara başlamadan önce yönünüzü netleştirin.",focus:["Uygun sektör pozisyonlarını belirlemek","İş arama ve başvuru yaklaşımını planlamak"]}
 },
 academia:{
  en:{hook:"A research career has more than one possible next step. Find out where to look and how to present your academic background.",focus:["Finding relevant research opportunities","Matching your profile to academic applications"]},
  de:{hook:"Eine wissenschaftliche Karriere eröffnet verschiedene Wege. Finden Sie heraus, wo Sie suchen und wie Sie Ihr Forschungsprofil präsentieren können.",focus:["Geeignete Forschungsstellen recherchieren","Das eigene Profil auf akademische Bewerbungen abstimmen"]},
  tr:{hook:"Akademik kariyer tek bir yoldan ibaret değildir. Araştırma fırsatlarını nerede arayacağınızı ve deneyiminizi nasıl sunacağınızı keşfedin.",focus:["Araştırma fırsatlarını değerlendirmek","Akademik başvuruları profilinize uyarlamak"]}
 },
 cv:{
  en:{hook:"Your CV may contain the right experience without making its value clear. Look at how it reads for a German employer.",focus:["Structure and clarity of your current CV","Relevance to a target role"]},
  de:{hook:"Ihr Lebenslauf kann die richtige Erfahrung enthalten, ohne ihre Bedeutung klar zu zeigen. Prüfen Sie, wie Ihr Profil auf deutsche Arbeitgeber wirkt.",focus:["Aufbau und Verständlichkeit Ihres Lebenslaufs","Bezug zur angestrebten Position"]},
  tr:{hook:"CV’nizde doğru deneyimler bulunabilir; önemli olan bunların açık görünmesidir. Almanya'daki işverenin gözünden değerlendirin.",focus:["Mevcut CV'nin yapısı ve netliği","Hedef pozisyona uygunluk"]}
 },
 "cv-from-scratch":{
  en:{hook:"Starting with a blank page? Turn your experience into an organized CV for applications in German or English.",focus:["Deciding what information matters","Organizing qualifications and experience"]},
  de:{hook:"Sie beginnen bei null? Entwickeln Sie aus Ihrem Werdegang einen strukturierten Lebenslauf für Bewerbungen auf Deutsch oder Englisch.",focus:["Wichtige Informationen auswählen","Qualifikationen und Erfahrung sinnvoll ordnen"]},
  tr:{hook:"Boş sayfadan mı başlıyorsunuz? Deneyimlerinizi Almanca veya İngilizce başvurulara uygun düzenli bir CV'ye dönüştürün.",focus:["Önemli bilgileri belirlemek","Eğitim ve deneyimi yapılandırmak"]}
 },
 "letter-review":{
  en:{hook:"A cover letter should connect your experience to a specific opportunity—not repeat your CV. See where your existing draft can become clearer.",focus:["Relevance to the target opportunity","Clarity, structure and tone"]},
  de:{hook:"Ein Anschreiben sollte Ihren Hintergrund mit einer konkreten Stelle verbinden, nicht den Lebenslauf wiederholen. Prüfen Sie, wo Ihr Entwurf klarer werden kann.",focus:["Bezug zur Zielposition","Klarheit, Aufbau und Ton"]},
  tr:{hook:"Ön yazı CV'nizi tekrar etmemeli; deneyiminizi başvurduğunuz fırsatla ilişkilendirmeli. Mevcut metni netleştirin.",focus:["Başvurulan pozisyona uygunluk","Anlatım, yapı ve üslup"]}
 },
 "letter-from-scratch":{
  en:{hook:"Know where you want to apply, but not how to begin your letter? Build a tailored starting point around the position and your experience.",focus:["Understanding the target role","Connecting qualifications with motivation"]},
  de:{hook:"Die Zielposition steht fest, aber das Anschreiben fehlt? Entwickeln Sie einen individuellen Text aus Stellenanforderungen und eigener Erfahrung.",focus:["Anforderungen der Stelle verstehen","Qualifikationen und Motivation verbinden"]},
  tr:{hook:"Hedef pozisyon belli ama ön yazıya nasıl başlayacağınız belirsiz mi? Deneyiminizi başvuruya uygun bir metne dönüştürün.",focus:["Pozisyonun beklentilerini anlamak","Birikim ve motivasyonu bağlamak"]}
 },
 documents:{
  en:{hook:"An application can involve more than a CV. Check whether the required documents tell one coherent story.",focus:["Which documents are needed","Completeness, order and consistency"]},
  de:{hook:"Zu einer Bewerbung gehört oft mehr als der Lebenslauf. Prüfen Sie, ob Ihre Unterlagen vollständig und stimmig sind.",focus:["Erforderliche Unterlagen bestimmen","Vollständigkeit, Reihenfolge und Stimmigkeit"]},
  tr:{hook:"Başvuru yalnızca CV'den oluşmayabilir. Belgelerinizin eksiksiz ve birbiriyle tutarlı olduğundan emin olun.",focus:["Gerekli belgeleri belirlemek","Eksiksizlik, sıralama ve tutarlılık"]}
 },
 interview:{
  en:{hook:"An interview is a conversation, not a memorized performance. Prepare to explain your experience with clear, relevant examples.",focus:["Practicing likely interview questions","Receiving feedback on your answers"]},
  de:{hook:"Ein Vorstellungsgespräch ist ein Dialog, kein auswendig gelernter Vortrag. Bereiten Sie sich darauf vor, Ihre Erfahrung mit passenden Beispielen zu erklären.",focus:["Typische Interviewfragen üben","Individuelles Feedback zu Antworten"]},
  tr:{hook:"Mülakat ezberlenmiş bir sunum değil, karşılıklı konuşmadır. Deneyiminizi somut örneklerle anlatmaya hazırlanın.",focus:["Olası mülakat sorularını çalışmak","Yanıtlarınıza geri bildirim almak"]}
 },
 salary:{
  en:{hook:"A salary conversation becomes easier when your expectations are reasoned and clearly expressed. Prepare the discussion, not just the number.",focus:["Organizing the reasoning behind your expectations","Communicating your position professionally"]},
  de:{hook:"Gehaltsgespräche fallen leichter, wenn Erwartungen gut begründet und klar formuliert sind. Bereiten Sie mehr als nur eine Zahl vor.",focus:["Gehaltsvorstellungen nachvollziehbar begründen","Die eigene Position professionell vermitteln"]},
  tr:{hook:"Maaş görüşmesi, beklentileriniz gerekçeli ve açık olduğunda kolaylaşır. Yalnızca rakamı değil, konuşmayı da hazırlayın.",focus:["Maaş beklentilerini gerekçelendirmek","Duruşunuzu profesyonelce ifade etmek"]}
 },
 coaching:{
  en:{hook:"When several career questions overlap, one isolated session may not be enough. Explore a six-session approach shaped around your goals.",focus:["Clarifying goals and possible directions","Connecting strategy, documents and interviews"]},
  de:{hook:"Wenn mehrere Karrierefragen zusammenkommen, reicht ein Einzeltermin manchmal nicht aus. Entdecken Sie ein Coaching über sechs aufeinander abgestimmte Sitzungen.",focus:["Ziele und mögliche Richtungen klären","Strategie, Bewerbungen und Interviews verbinden"]},
  tr:{hook:"Birden fazla kariyer sorunuz varsa tek görüşme yeterli olmayabilir. Hedeflerinize göre şekillenen altı seanslık yaklaşımı keşfedin.",focus:["Hedefleri ve olası yolları netleştirmek","Strateji, başvuru ve mülakatı bütünleştirmek"]}
 }
};
export function serviceStory(id:string,lang:Lang):Intro {
 return stories[id]?.[lang]??stories.industry[lang];
}

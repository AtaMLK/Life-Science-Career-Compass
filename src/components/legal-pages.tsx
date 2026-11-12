import Link from "next/link";
import type {Lang} from "@/lib/content";

type LegalKind="impressum"|"datenschutz";
const word={en:{home:"Back to website",privacy:"Privacy policy",imprint:"Imprint",draft:"Draft — publication review required"},de:{home:"Zurück zur Website",privacy:"Datenschutzerklärung",imprint:"Impressum",draft:"Entwurf — vor Veröffentlichung prüfen"},tr:{home:"Siteye dön",privacy:"Gizlilik politikası",imprint:"Yasal bilgiler",draft:"Taslak — yayından önce kontrol edilmeli"}};
const email="Ls.career-compass@mail.de";

export default function LegalPages({lang,kind}:{lang:Lang;kind:LegalKind}){
 const t=word[lang];
 return <div className="legal-page">
  <header className="legal-page-header"><Link href={"/"+lang}>← {t.home}</Link><nav aria-label="Legal navigation"><Link href={"/"+lang+"/impressum"}>{t.imprint}</Link><Link href={"/"+lang+"/datenschutz"}>{t.privacy}</Link></nav></header>
  <main>
   <span className="legal-eyebrow">LIFE SCIENCE CAREER COMPASS · {t.draft}</span>
   <h1>{kind==="impressum"?"Impressum":"Datenschutzerklärung"}</h1>
   <p className="legal-draft"><strong>Redaktioneller Entwurf:</strong> Diese Seite ist noch nicht als abschließend rechtskonform freigegeben. Die ladungsfähige Anschrift, der genaue Geschäftsstatus, die technischen Dienste, gegebenenfalls steuerliche Angaben und Aufbewahrungsfristen sind vor Veröffentlichung mit der Anbieterin zu prüfen. Bei einer Übertragung zu Wix muss der Hosting-Abschnitt aktualisiert werden.</p>
   {kind==="impressum"?<Impressum/>:<Privacy/>}
  </main>
  <footer className="legal-page-footer"><Link href={"/"+lang}>{t.home}</Link><Link href={"/"+lang+"/impressum"}>Impressum</Link><Link href={"/"+lang+"/datenschutz"}>Datenschutzerklärung</Link></footer>
 </div>;
}

function Impressum(){
 return <>
  <h2>Angaben gemäß § 5 DDG</h2>
  <p><strong>Diensteanbieterin</strong><br/>Dr. Farzaneh Hähndel<br/>Life Science Career Compass<br/><span className="legal-fill">[Vollständige ladungsfähige Straße und Hausnummer]</span><br/><span className="legal-fill">[Postleitzahl, Ort, Deutschland]</span></p>
  <h2>Kontakt</h2>
  <p>E-Mail: <a href={"mailto:"+email}>{email}</a><br/>Telefon: <a href="tel:+4915785331977">+49 157 85331977</a></p>
  <h2>Weitere gesetzliche Angaben</h2>
  <p><span className="legal-fill">[Rechtsform bzw. selbstständige/freiberufliche Tätigkeit und gegebenenfalls Registereintrag, Registernummer, Aufsichtsbehörde oder Berufsregelung nach tatsächlicher Rechtslage ergänzen.]</span></p>
  <p><span className="legal-fill">[USt-IdNr. oder Wirtschafts-Identifikationsnummer nur angeben, soweit erteilt und gesetzlich erforderlich. Keine private Steuernummer unbedacht veröffentlichen.]</span></p>
  <h2>Umsatzsteuer</h2>
  <p>Sofern die Voraussetzungen vorliegen, findet die Kleinunternehmerregelung nach § 19 UStG Anwendung. In diesem Fall wird auf Rechnungen keine Umsatzsteuer gesondert ausgewiesen. <span className="legal-fill">[Steuerlichen Status vor Veröffentlichung bestätigen.]</span></p>
  <h2>Verantwortung für Inhalte</h2>
  <p>Dr. Farzaneh Hähndel, Anschrift wie oben. <span className="legal-fill">[Etwaige zusätzliche Pflichtangaben bei journalistisch-redaktionellen Inhalten nach § 18 Abs. 2 MStV und Verbraucherstreitbeilegung im Einzelfall prüfen.]</span></p>
 </>;
}

function Privacy(){
 return <>
  <h2>1. Verantwortliche Stelle</h2>
  <p>Dr. Farzaneh Hähndel, Life Science Career Compass<br/><span className="legal-fill">[Vollständige ladungsfähige Anschrift ergänzen]</span><br/>E-Mail: <a href={"mailto:"+email}>{email}</a></p>
  <h2>2. Bereitstellung der Website und Hosting</h2>
  <p>Derzeit wird die Website über Vercel bereitgestellt. Bei Aufruf der Website können technisch erforderliche Verbindungsdaten (insbesondere IP-Adresse, Browserinformationen, Datum, Uhrzeit und angeforderte Ressourcen) zur Auslieferung, Stabilität und Sicherheit verarbeitet werden. Rechtsgrundlage ist — soweit anwendbar — Art. 6 Abs. 1 lit. f DSGVO. Empfänger kann der eingesetzte Hosting-Dienstleister sein. <span className="legal-fill">[Konkreten Vertragspartner, Datenstandorte, Drittlandübermittlungen, Garantien und Speicherfristen im Vercel-Konto überprüfen und hier präzisieren; bei Wix-Migration vollständig ersetzen.]</span></p>
  <h2>3. Kontaktaufnahme per E-Mail</h2>
  <p>Bei Kontaktaufnahme per E-Mail werden die freiwillig mitgeteilten Daten zur Bearbeitung Ihrer Anfrage verarbeitet. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO für vorvertragliche Maßnahmen oder Art. 6 Abs. 1 lit. f DSGVO für allgemeine Kommunikation. Nachrichten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten bestehen. <span className="legal-fill">[E-Mail-Anbieter und tatsächlich geltende Fristen prüfen.]</span></p>
  <h2>4. Interaktiver Karriere-Kompass</h2>
  <p>Die Auswahl im Karriere-Kompass wird nach der derzeitigen Code-Fassung zunächst lokal im Browser ausgewertet. Es findet dadurch keine automatische Übermittlung der Antworten an uns statt. Erst wenn Sie selbst den E-Mail-Link für eine Anfrage verwenden und die E-Mail absenden, erhalten wir die darin enthaltenen Angaben. <span className="legal-fill">[Nach jeder Funktionsänderung erneut überprüfen.]</span></p>
  <h2>4a. Sprachvorauswahl und Spracheinstellung</h2>
  <p>Beim Besuch der sprachneutralen Startadresse wird das durch den Hostinganbieter anhand der IP-Adresse ermittelte Länderkennzeichen für die Sprachauswahl verwendet: Deutschland, Österreich und die Schweiz werden zunächst zur deutschen Version geleitet, alle übrigen oder nicht erkannten Länder zur englischen Version. Die Anwendung speichert das Länderkennzeichen nicht zusätzlich in einer eigenen Datenbank. Eine von Ihnen ausdrücklich ausgewählte Sprache (Deutsch, Englisch oder Türkisch) wird als funktionale Einstellung in einem Erstanbieter-Cookie <code>lscc-language</code> für höchstens ein Jahr hinterlegt und hat Vorrang vor der geografischen Vorauswahl. Direkte Links zu einer Sprachversion bleiben unverändert erreichbar. <span className="legal-fill">[Prüfen, ob eingesetzte Hosting-/CDN-Anbieter Standortdaten zusätzlich protokollieren; tatsächliche Speicherfristen ergänzen.]</span></p>
  <h2>5. Lokale Einstellungen und optionale Reichweitenmessung</h2>
  <p>Die Website kann Ihre Anzeigeeinstellung (Hell/Dunkel) sowie eine Entscheidung zur optionalen Analyse im Browser speichern. Falls Google Analytics tatsächlich aktiviert ist, erfolgt das Laden der Analysedienste nach der aktuellen technischen Umsetzung erst nach Ihrer Einwilligung; Rechtsgrundlage sind Art. 6 Abs. 1 lit. a DSGVO und, für den Zugriff auf Endgeräte, § 25 TDDDG. Eine erteilte Einwilligung kann über die Cookie-Einstellungen widerrufen werden. <span className="legal-fill">[Prüfen, ob Analytics aktiviert ist, ob Cookies/ähnliche Technologien zum Einsatz kommen, welche Google-Dienste/Empfänger/Drittlandtransfers bestehen und welche Speicherfristen gelten.]</span></p>
  <h2>6. Externe Links</h2>
  <p>Die Website enthält Links zu externen sozialen Netzwerken. Wenn Sie diesen Links folgen, gelten die Datenschutzinformationen des jeweiligen Anbieters. Nach dem derzeit geprüften Quellcode werden auf der Hauptseite keine Social-Media-Feeds automatisch eingebettet. <span className="legal-fill">[Nach Änderungen an Wix-Apps, Einbettungen und externen Schriftarten erneut kontrollieren.]</span></p>
  <h2>7. Empfänger und Datenübermittlungen</h2>
  <p>Die Übermittlung personenbezogener Daten kann an technische Dienstleister (insbesondere Hosting und E-Mail) erfolgen, soweit dies für den jeweiligen Zweck erforderlich ist. Eine etwaige Verarbeitung außerhalb des EWR und die angewandten Garantien sind dienstleisterbezogen zu dokumentieren. <span className="legal-fill">[Dienstleisterliste, Auftragsverarbeitungsverträge und Drittlandmechanismen ergänzen.]</span></p>
  <h2>8. Betroffenenrechte</h2>
  <p>Nach Maßgabe der DSGVO haben Sie insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Erteilte Einwilligungen können jederzeit mit Wirkung für die Zukunft widerrufen werden. Zudem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde. Anfragen können an die oben genannte E-Mail-Adresse gerichtet werden.</p>
  <h2>9. Aktualisierung</h2>
  <p>Diese Erklärung ist an die tatsächlich eingesetzten Dienste anzupassen und bei funktionalen, organisatorischen oder gesetzlichen Änderungen zu aktualisieren. <span className="legal-fill">[Stand und verantwortliche Freigabe ergänzen.]</span></p>
 </>;
}

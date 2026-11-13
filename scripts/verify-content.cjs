/* eslint-disable @typescript-eslint/no-require-imports -- Node-only content QA */
const fs=require("node:fs");
const vm=require("node:vm");
const ts=require("typescript");
const assert=require("node:assert/strict");
function readModule(path){
  const source=fs.readFileSync(path,"utf8");
  const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
  const box={module:{exports:{}}};box.exports=box.module.exports;
  vm.runInNewContext(js,box,{filename:path});
  return box.module.exports;
}
const {services,copy}=readModule("src/lib/content.ts");
const {serviceTranslations,editorialLocale}=readModule("src/lib/editorial-locale.ts");
const expected=["industry","academia","cv","cv-from-scratch","letter-review","letter-from-scratch","documents","interview","salary","coaching"];
assert.deepEqual(Array.from(services,s=>s.id),expected,"Consultation inventory changed without source review");
assert.equal(new Set(services.map(s=>s.id)).size,services.length);
for(const service of services){
  assert(service.name.length>=5&&service.description.length>=30,`Incomplete service: ${service.id}`);
  assert(service.individual.startsWith("€"),`Missing approved-format EUR display: ${service.id}`);
  assert(service.duration.length>0);
  for(const lang of ["de","tr"]){
    const row=serviceTranslations[lang]?.[service.id];
    assert(row&&row.name.length>=4&&row.description.length>=20,`Untranslated consultation: ${lang}/${service.id}`);
  }
}
assert.match(copy.en.timeline[0],/BSc/,"Retired MSc data reintroduced in English");
assert.match(copy.de.timeline[0],/BSc/,"Retired MSc data reintroduced in German");
assert.match(copy.tr.timeline[0],/Lisans/,"Retired MSc data reintroduced in Turkish");
for(const lang of ["en","de","tr"]){
  const x=editorialLocale[lang];
  for(const [key,number] of [["people","01"],["services","02"],["storyLabel","04"],["processLabel","05"],["investmentLabel","06"],["faqLabel","07"]]){
    const v=x[key];
    assert(v?.startsWith(number+" / "),`Section numbering mismatch: ${lang}/${key}: ${v}`);
  }
  assert(copy[lang].faq.some(([question,answer])=>/garant|guarant/i.test(question+" "+answer)),"Missing outcome caveat in "+lang);
}
const landing=fs.readFileSync("src/app/[lang]/page.tsx","utf8");
assert(landing.includes('from "@/components/editorial-site"'),"Active homepage must use reviewed editorial design");
assert(!fs.existsSync("src/components/site.tsx"),"Legacy homepage has been reintroduced");
assert(!fs.existsSync("src/components/friendly-site.tsx"),"Deprecated production homepage was copied into active branch");
const career=fs.readFileSync("src/components/career-finder.tsx","utf8");
assert(career.includes('["industry","cv","interview","salary"]'),"Salary choice must not be routed to default long-form coaching");
assert(career.includes('answers[1]===3&&answers[0]===3?"coaching"'),"Career-change counseling path missing");
const editorial=fs.readFileSync("src/components/editorial-site.tsx","utf8");
assert(editorial.includes('href={`/${lang}/services?service=${id}`}'),"Service entry lost its deep link");
const policy=fs.readFileSync("src/components/legal-pages.tsx","utf8");
assert(policy.includes('legalTranslations[lang]'),"Legal pages missing EN/TR full prose");
console.log("CONTENT QA PASSED: ten services, three languages, active editorial home, BSc label, no stale components, distinct section numbering, quiz recommendations and consultation links");

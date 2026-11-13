/* eslint-disable @typescript-eslint/no-require-imports -- Node-only CommonJS regression script */
// Regression checks for location-based language defaults; no internet/server required.
const assert=require("node:assert/strict");
const fs=require("node:fs");
const vm=require("node:vm");
const ts=require("typescript");
const src=fs.readFileSync("src/lib/geo-language.ts","utf8");
const out=ts.transpileModule(src,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const sandbox={exports:{},module:{exports:{}},window:{location:{protocol:"https:"}},document:{cookie:""}};
sandbox.exports=sandbox.module.exports;
vm.runInNewContext(out,sandbox,{filename:"geo-language.js"});
const {defaultLanguage,rememberLanguage}=sandbox.module.exports;
for(const country of ["DE","AT","CH","de","at","ch"]){
 assert.equal(defaultLanguage(country,null),"de",`Expected German default in ${country}`);
}
for(const country of ["TR","US","FR","GB","IR",null,undefined,""]){
 assert.equal(defaultLanguage(country,null),"en",`Expected English default in ${country}`);
}
for(const cookie of ["en","de","tr"]){
 assert.equal(defaultLanguage("DE",cookie),cookie,"Explicit selection must win over geo detection");
 assert.equal(defaultLanguage("US",cookie),cookie,"Explicit selection must win outside DACH");
}
assert.equal(defaultLanguage("CH","invalid"),"de","Invalid cookie should not override detected country");
rememberLanguage("tr");
assert.match(sandbox.document.cookie,/lscc-language=tr/);
assert.match(sandbox.document.cookie,/Max-Age=31536000/);
assert.match(sandbox.document.cookie,/SameSite=Lax/);
assert.match(sandbox.document.cookie,/Secure/);
console.log("Geo language and explicit preference regression checks passed");

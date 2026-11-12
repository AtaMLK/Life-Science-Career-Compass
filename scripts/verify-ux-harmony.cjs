/* eslint-disable @typescript-eslint/no-require-imports -- standalone Node/Playwright QA */
const {chromium}=require("playwright");
const fs=require("node:fs");
const assert=require("node:assert/strict");
const base=process.env.QA_BASE_URL || "http://127.0.0.1:3000";
const folder="qa-harmony";
fs.mkdirSync(folder,{recursive:true});

function checkLocalLinks(list,baseUrl) {
  const allowed=new Set(["/","/en","/de","/tr"]);
  for(const lang of ["en","de","tr"]) {
    for(const part of ["/services","/impressum","/datenschutz"])allowed.add("/"+lang+part);
  }
  for(const item of list) {
    const href=item.href;
    if(!href || /^(mailto:|tel:|https?:\/\/)/i.test(href) && !href.startsWith(baseUrl))continue;
    const parsed=new URL(href,baseUrl);
    if(parsed.origin!==new URL(baseUrl).origin)continue;
    assert(allowed.has(parsed.pathname.replace(/\/$/,"")||"/"),"Unexpected internal link route "+href);
  }
}

async function auditPage(page,label,width,height) {
  const measurements=await page.evaluate(()=>{
    const rect=(selector)=>{const node=document.querySelector(selector);const r=node?.getBoundingClientRect();return r?{height:r.height,width:r.width,top:r.top}:null;};
    const urls=Array.from(document.querySelectorAll("a[href]")).map(a=>({href:a.getAttribute("href"),name:a.textContent?.trim()}));
    const brokenFragments=urls.filter(a=>a.href?.startsWith("#")&&!document.getElementById(a.href.slice(1))).map(x=>x.href);
    const visible=document.body.innerText||"";
    return {hero:rect(".editorial-hero"),nav:rect(".creative-nav"),viewport:innerHeight,documentWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,journeys:document.querySelectorAll(".journey-v3").length,timelines:document.querySelectorAll(".career-path").length,proofs:document.querySelectorAll(".proof").length,duplicatePriceLists:document.querySelectorAll(".price-reveal-button").length,brokenFragments,links:urls,hasUnrenderedCode:/\{e\.showPrices\}/.test(visible)};
  });
  assert(measurements.documentWidth<=measurements.clientWidth+3,`Horizontal overflow on ${label} @${width} (doc ${measurements.documentWidth}, viewport ${measurements.clientWidth})`);
  assert.equal(measurements.journeys,1,`Expected one GSAP Journey on ${label}`);
  assert.equal(measurements.timelines,0,"Chronological story timeline duplicated");
  assert.equal(measurements.proofs,0,"Credential proof block duplicated");
  assert.equal(measurements.duplicatePriceLists,0,"Prices duplicated on home");
  assert.deepEqual(measurements.brokenFragments,[],`Dead in-page fragment on ${label}`);
  assert.equal(measurements.hasUnrenderedCode,false,"Accidental JSX text displayed");
  assert(measurements.hero&&measurements.nav,"Missing hero/navigation on "+label);
  if(width>=761&&height>=760){
    const expected=height-measurements.nav.height;
    assert(measurements.hero.height>=expected-3,`Hero not viewport-height: ${measurements.hero.height} vs ${expected}`);
    assert(measurements.hero.height<=expected+4,`Hero unexpectedly taller than one viewport: ${measurements.hero.height} vs ${expected}`);
  }else if(width<=760){
    assert(measurements.hero.height>=height-measurements.nav.height-3,`Mobile hero shorter than viewport on ${label}`);
  }
  checkLocalLinks(measurements.links,base);
  const filename=`${folder}/${label}-${width}x${height}-hero.png`;
  await page.screenshot({path:filename});
  console.log(JSON.stringify({label,viewport:`${width}x${height}`,heroHeight:Math.round(measurements.hero.height),navHeight:Math.round(measurements.nav.height),linkCount:measurements.links.length,overflow:Math.max(0,measurements.documentWidth-measurements.clientWidth),screenshot:filename}));
}

(async()=>{
  const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
  const pageErrors=[];
  try {
    const sets=[{width:1440,height:900},{width:1024,height:768},{width:390,height:844},{width:360,height:640}];
    for(const {width,height} of sets){
      const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
      page.on("pageerror",error=>pageErrors.push(`${width}x${height}: ${error.message}`));
      const response=await page.goto(base+"/de",{waitUntil:"domcontentloaded",timeout:30000});
      assert.equal(response.status(),200,`DE home did not respond with 200`);
      await page.waitForTimeout(420);
      await auditPage(page,"de",width,height);
      if(width===1440||width===390){
        for(const lang of ["en","tr"]){
          const res=await page.goto(base+"/"+lang,{waitUntil:"domcontentloaded"});
          assert.equal(res.status(),200);
          await page.waitForTimeout(420);
          await auditPage(page,lang,width,height);
        }
        const responseServices=await page.goto(base+"/de/services?service=interview#package-explorer",{waitUntil:"domcontentloaded"});
        assert.equal(responseServices.status(),200,"Service detail route failed");
        await page.waitForFunction(()=>document.querySelector(".package-option.active")?.getAttribute("data-service-id")==="interview",{timeout:5000});
        const rates=page.locator(".package-choices button.package-rate");
        assert.equal(await rates.count(),3,"Interview must offer three distinct session formats");
        await rates.nth(1).click();
        assert.equal(await rates.nth(1).getAttribute("aria-pressed"),"true","Small-group selection failed");
        const fallback=await page.locator(".package-contact").getAttribute("href");
        assert(fallback.startsWith("mailto:")||fallback.startsWith("https://"),"Missing payment/contact handoff");
        if(fallback.startsWith("mailto:"))assert(decodeURIComponent(fallback).includes("Kleingruppe"),"Contact request must mention the chosen format");
        const items=await page.locator("a[href]").evaluateAll(nodes=>nodes.map(a=>({href:a.getAttribute("href")})));
        checkLocalLinks(items,base);
        await page.screenshot({path:`${folder}/de-${width}x${height}-services.png`});
        for(const path of ["/de/impressum","/de/datenschutz"]){
          const res=await page.goto(base+path,{waitUntil:"domcontentloaded"});
          assert.equal(res.status(),200,`Legal page missing: ${path}`);
        }
      }
      await page.close();
    }
    assert.deepEqual(pageErrors,[],"Runtime errors: "+pageErrors.join("; "));
    console.log("UX HARMONY QA PASSED: locale routes, anchor links, service deep links, tier selection, hero viewport, duplicate section checks and responsive widths");
  } finally {await browser.close();}
})().catch(error=>{console.error(error.stack||error);process.exitCode=1;});

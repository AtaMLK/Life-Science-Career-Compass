/* eslint-disable @typescript-eslint/no-require-imports */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict');
(async()=>{const b=await chromium.launch({headless:true,channel:'msedge'});const p=await b.newPage({reducedMotion:'reduce'});
for(const width of [1280,390]){await p.setViewportSize({width,height:900});for(const lang of ['en','de','tr']){
 await p.goto('http://localhost:3000/'+lang);const original=p.url();
 for(let f=0;f<4;f++){await p.locator('.field-card').nth(f).click();assert.equal(await p.locator('.field-card[aria-pressed=true]').count(),1);assert.equal(await p.locator('.field-preview li').count(),3);
 for(let n=0;n<4;n++){await p.locator('.need-options button').nth(n).click();assert.equal(p.url(),original);assert.equal(await p.locator('.need-options button[aria-pressed=true]').count(),1);const expected=n===0?(f===0?'academia':'industry'):['','cv','interview','coaching'][n];assert.ok((await p.locator('.explorer-actions a').first().getAttribute('href')).includes('service='+expected));assert.equal(await p.locator('.support-preview li').count(),3);}}
 await p.locator('.field-card').first().focus();await p.keyboard.press('Space');assert.equal(await p.locator('.field-card').first().getAttribute('aria-pressed'),'true');
 assert.equal(await p.locator('.compact-timeline article').count(),6);const h=await p.locator('.journey-compact').evaluate(x=>x.getBoundingClientRect().height);assert.ok(h<(width===390?1800:900),'compact journey: '+h);
 assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2));
 if(lang==='en'){await p.locator('.career-explorer').screenshot({path:`audit-explorer-${width}.png`});await p.locator('#about').screenshot({path:`audit-about-${width}.png`});await p.locator('.journey-compact').screenshot({path:`audit-journey-${width}.png`});await p.goto('http://localhost:3000/en/services');await p.screenshot({path:`audit-services-${width}.png`});await p.locator('.package-layout').screenshot({path:`audit-packages-${width}.png`});}
 console.log('PASS 16 field/support combinations, keyboard, no navigation, compact journey',lang,width);
}}
await b.close();})().catch(e=>{console.error(e);process.exit(1)});

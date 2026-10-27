/* eslint-disable @typescript-eslint/no-require-imports */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const base=process.env.AUDIT_BASE_URL||'http://localhost:3000';
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 const results=[],errors=[],links=new Set();
 const context=await browser.newContext({reducedMotion:'reduce'});
 const page=await context.newPage();
 page.on('pageerror',e=>errors.push(e.message));
 for(const width of [1280,390]){
  await page.setViewportSize({width,height:900});
  for(const lang of ['en','de','tr']){
   for(const suffix of ['', '/services']){
    const path=`/${lang}${suffix}`;const response=await page.goto(base+path);assert.equal(response.status(),200,path);
    await page.locator('h1').waitFor();assert.equal(await page.locator('html').getAttribute('lang'),lang);
    assert.equal(await page.locator('h1').count(),1);
    const missing=await page.evaluate(()=>Array.from(document.querySelectorAll('a[href^="#"]')).filter(a=>!document.getElementById(a.getAttribute('href').slice(1))).map(a=>a.getAttribute('href')));assert.deepEqual(missing,[],path+' anchors');
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),path+' horizontal overflow '+width);
    const json=await page.locator('script[type="application/ld+json"]').allTextContents();json.forEach(s=>JSON.parse(s));
    for(const image of await page.locator('img').all()){if(!await image.isVisible())continue;await image.scrollIntoViewIfNeeded();await image.evaluate(img=>img.decode());assert.ok(await image.evaluate(img=>img.naturalWidth>0));}
    if(!suffix){
     const answers=page.locator('.answer-list button');
     await answers.nth(1).click();await page.locator('.finder-bottom button').first().click();assert.match(await page.locator('.finder-progress').innerText(),/1 \/ 6/);
     for(let i=0;i<6;i++)await page.locator('.answer-list button').nth(i===1?1:0).click();
     assert.equal(await page.locator('.finder-preferences dd').count(),6);
     const href=await page.locator('.finder-result a').getAttribute('href');assert.ok(href.includes('body=')&&href.startsWith('mailto:'));
     await page.locator('.finder-bottom button').last().click();assert.equal(await answers.count(),4);
     const faq=page.locator('.friendly-faq-row button').last();await faq.click();assert.equal(await faq.getAttribute('aria-expanded'),'true');await faq.click();assert.equal(await faq.getAttribute('aria-expanded'),'false');
     await page.locator('.certificate-open').click();assert.ok(await page.locator('dialog').evaluate(el=>el.open));await page.keyboard.press('Escape');assert.equal(await page.locator('dialog').evaluate(el=>el.open),false);
     await page.locator('.certificate-open').click();await page.locator('.certificate-close').click();assert.equal(await page.locator('dialog').evaluate(el=>el.open),false);
     await page.locator('.theme-pill').click();assert.ok(['dark','light'].includes(await page.locator('.friendly').getAttribute('data-theme')));
     if(width===390){await page.locator('.friendly-menu').click();assert.equal(await page.locator('.friendly-menu').getAttribute('aria-expanded'),'true');await page.locator('.friendly-links a').first().click();assert.equal(await page.locator('.friendly-menu').getAttribute('aria-expanded'),'false');}
    }else{
     for(const option of await page.locator('.package-option').all()){const name=await option.locator('strong').innerText();await option.click();assert.equal(await page.locator('.package-display h3').innerText(),name);assert.equal(await option.getAttribute('aria-pressed'),'true');}
     const oldTheme=await page.locator('main').getAttribute('data-theme');await page.locator('.service-theme-switch').click();assert.notEqual(await page.locator('main').getAttribute('data-theme'),oldTheme);
    }
    for(const href of await page.locator('a[href^="/"]').evaluateAll(items=>items.map(a=>a.getAttribute('href'))))links.add(href);
    results.push({path,width,status:'passed'});console.log('PASS',path,width);
   }
  }
 }
 await page.goto(base+'/en/services?service=cv#package-explorer');await page.waitForFunction(()=>document.querySelector('.package-option.active')?.getAttribute('data-service-id')==='cv');
 await page.goto(base+'/en');await page.locator('.certificate-open').click();await page.screenshot({path:'audit-modal.png'});
 for(const link of links){const response=await context.request.get(base+link);assert.equal(response.status(),200,link);}
 assert.equal((await context.request.get(base+'/fr')).status(),404);
 assert.equal((await context.request.get(base+'/icon.svg')).status(),200);
 assert.deepEqual(errors,[],'Browser errors');
 fs.writeFileSync('audit-results.json',JSON.stringify({results,browserErrors:errors,checkedAt:new Date().toISOString()},null,2));
 await browser.close();console.log('All browser checks passed');
})().catch(e=>{console.error(e);process.exit(1)});

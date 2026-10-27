/* eslint-disable @typescript-eslint/no-require-imports */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 const context=await browser.newContext();const page=await context.newPage();const requests=[];
 await context.route('**/*',route=>{const url=route.request().url();if(/googletagmanager|google-analytics/.test(url)){requests.push(url);return route.fulfill({status:200,contentType:'text/javascript',body:'/* intercepted test tag */'});}return route.continue();});
 await page.goto('http://127.0.0.1:3001/en');await page.locator('.cookie-banner').waitFor();assert.equal(requests.length,0);
 assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'),'https://career-compass.test/en');
 assert.equal(await page.locator('meta[property="og:image"]').count(),1);
 await page.locator('.cookie-actions button').first().click();await page.reload();assert.equal(await page.locator('.cookie-banner').count(),0);assert.equal(requests.length,0);
 await page.locator('.cookie-settings').click();await page.locator('.cookie-actions button').last().click();await page.waitForFunction(()=>!!document.getElementById('lscc-google-analytics'));assert.equal(requests.length,1);
 await page.waitForFunction(()=>window.dataLayer.some(x=>x[0]==='event'&&x[1]==='page_view'));
 const countBefore=await page.evaluate(()=>window.dataLayer.filter(x=>x[0]==='event'&&x[1]==='page_view').length);
 await page.locator('.hero-copy a').nth(1).click();await page.waitForURL('**/en/services');await page.waitForFunction(()=>window.dataLayer.filter(x=>x[0]==='event'&&x[1]==='page_view').length===2);assert.equal(countBefore,1);
 await page.locator('.package-option').nth(2).click();const event=await page.evaluate(()=>{const e=window.dataLayer.find(x=>x[0]==='event'&&x[1]==='service_select');return Array.from(e)});assert.equal(event[2].service_id,'cv');
 await page.locator('.cookie-settings').click();await page.locator('.cookie-actions button').first().click();await page.waitForLoadState('load');assert.equal(await page.evaluate(()=>localStorage.getItem('lscc-analytics-consent-v1')),'declined');assert.equal(await page.locator('#lscc-google-analytics').count(),0);
 const sitemap=await context.request.get('http://127.0.0.1:3001/sitemap.xml');const xml=await sitemap.text();assert.equal((xml.match(/<loc>/g)||[]).length,6);assert.ok(xml.includes('career-compass.test/tr/services'));
 const robots=await context.request.get('http://127.0.0.1:3001/robots.txt');assert.ok((await robots.text()).includes('Sitemap: https://career-compass.test/sitemap.xml'));
 console.log('PASS consent: no tag before permission, rejection persists, acceptance loads once, SPA page views, service events, withdrawal, canonical, OG image, 6 sitemap URLs, robots sitemap');
 await page.setViewportSize({width:390,height:900});await page.goto('http://localhost:3000/en');await page.locator('.certificate-open').click();const sizes=await page.locator('dialog').evaluate(d=>({outer:d.getBoundingClientRect().height,inner:d.firstElementChild.getBoundingClientRect().height}));assert.ok(sizes.outer-sizes.inner<4,JSON.stringify(sizes));await page.screenshot({path:'audit-modal.png'});console.log('PASS mobile dialog height',sizes);
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

// Paste into Wix Editor > Home > Page Code (not the Custom Element JS file).
// Set Home Custom Element's ID in Wix Properties to: careerHomeElement
// Wix 'to()' navigation does NOT work in the ordinary Editor Preview.
import wixLocationFrontend from 'wix-location-frontend';

$w.onReady(() => {
  $w('#careerHomeElement').on('compassNavigate', (event) => {
    const { path, lang } = event.detail || {};
    if (path !== '/services') return;
    const language = ['en', 'de', 'tr'].includes(lang) ? lang : 'en';
    wixLocationFrontend.to('/services?lang=' + encodeURIComponent(language));
  });
});

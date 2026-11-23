// Paste into Wix Editor > Services > Page Code (not the Custom Element JS file).
// Set Services Custom Element's ID in Wix Properties to: careerServicesElement
// Wix 'to()' navigation does NOT work in the ordinary Editor Preview.
import wixLocationFrontend from 'wix-location-frontend';

$w.onReady(() => {
  $w('#careerServicesElement').on('compassNavigate', (event) => {
    const { path, lang } = event.detail || {};
    if (path !== '/') return;
    const language = ['en', 'de', 'tr'].includes(lang) ? lang : 'en';
    wixLocationFrontend.to('/?lang=' + encodeURIComponent(language));
  });
});

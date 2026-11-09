// One-off: copies the site's images and video from the old builder's servers into public/media.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const files = [
  ["logo.png", "https://static.readdy.ai/image/4428baccc60709cd2682246ca105b4f4/1196234564d857bc2c894e5f71f7555b.png"],
  ["hero.jpg", "https://static.readdy.ai/image/4428baccc60709cd2682246ca105b4f4/a7da6e7f6542fa2303f2e7cb9044ea87.jpeg"],
  ["hero.mp4", "https://static.readdy.ai/video/0af12a1027d1d5372071bb53d7f5559b/2b83f4c358c728a9559e26a807ae5895.mp4"],
  ["aerial.jpg", "https://readdy.ai/api/search-image?query=Professional%20drone%20pilot%20flying%20a%20camera%20drone%20outdoors%20over%20a%20modern%20Yorkshire%20business%20park%20at%20golden%20hour%2C%20drone%20in%20sharp%20focus%20in%20the%20foreground%2C%20soft%20warm%20light%2C%20cinematic%20commercial%20photography%2C%20high%20detail&width=1600&height=1200&seq=jsq-aerial-02&orientation=landscape"],
  ["leeds.jpg", "https://readdy.ai/api/search-image?query=Leeds%20city%20skyline%20at%20dusk%20with%20brick%20mills%20and%20towers%20in%20the%20right%20third%20of%20the%20frame%2C%20left%20half%20calm%20empty%20hazy%20darkening%20sky%2C%20wet%20rooftops%2C%20cinematic%20wide%20landscape%20photography&width=2400&height=1350&seq=jsq-panel-studio&orientation=landscape"],
  ["services/brand.jpg", "https://readdy.ai/api/search-image?query=Overhead%20flat%20lay%20of%20a%20complete%20brand%20identity%20kit%20on%20a%20warm%20off-white%20studio%20desk%2C%20charcoal%20and%20deep%20red%20letterhead%20with%20bold%20minimal%20typography%2C%20stacked%20business%20cards%2C%20folded%20brand%20guideline%20booklet%20showing%20a%20simple%20geometric%20logo%2C%20soft%20natural%20window%20light%2C%20gentle%20shadows%2C%20premium%20editorial%20product%20photography%2C%20high%20detail&width=900&height=1200&seq=jsq-featured-brand-01&orientation=portrait"],
  ["services/print.jpg", "https://readdy.ai/api/search-image?query=Open%20A4%20brochure%20spread%20resting%20on%20a%20pale%20concrete%20surface%20with%20a%20clean%20editorial%20layout%2C%20large%20uppercase%20headlines%20and%20deep%20red%20accent%20blocks%2C%20a%20small%20stack%20of%20matte%20business%20cards%20and%20a%20folded%20flyer%20beside%20it%2C%20warm%20off-white%20palette%2C%20soft%20directional%20daylight%2C%20shallow%20depth%20of%20field%2C%20premium%20print%20design%20mockup%20photography&width=900&height=1200&seq=jsq-featured-print-01&orientation=portrait"],
  ["services/digital.jpg", "https://readdy.ai/api/search-image?query=Smartphone%20and%20open%20laptop%20side%20by%20side%20on%20a%20warm%20white%20studio%20desk%2C%20both%20screens%20showing%20a%20matching%20social%20media%20campaign%20grid%20and%20a%20clean%20website%20layout%20with%20charcoal%20type%20and%20red%20call%20to%20action%20buttons%2C%20minimal%20interface%20design%2C%20soft%20morning%20light%2C%20crisp%20shadows%2C%20editorial%20technology%20product%20photography%2C%20high%20detail&width=900&height=1200&seq=jsq-featured-digital-01&orientation=portrait"],
  ["services/infographics.jpg", "https://readdy.ai/api/search-image?query=Printed%20infographic%20poster%20propped%20against%20the%20wall%20of%20a%20design%20studio%2C%20clean%20data%20visualisation%20with%20donut%20charts%2C%20bar%20graphs%20and%20simple%20line%20icons%20in%20charcoal%20and%20deep%20red%20on%20warm%20white%20paper%2C%20a%20few%20colour%20swatch%20cards%20and%20a%20pencil%20below%2C%20soft%20natural%20light%2C%20premium%20editorial%20photography&width=900&height=1200&seq=jsq-featured-infographic-01&orientation=portrait"],
  ["services/uiux.jpg", "https://readdy.ai/api/search-image?query=Two%20minimal%20interface%20screens%20pinned%20on%20a%20warm%20off-white%20studio%20wall%2C%20a%20mobile%20app%20onboarding%20flow%20and%20a%20desktop%20dashboard%20layout%20printed%20on%20paper%20with%20charcoal%20type%20and%20deep%20red%20accent%20buttons%2C%20clean%20grid%20alignment%2C%20soft%20natural%20window%20light%2C%20gentle%20shadows%2C%20premium%20design%20portfolio%20photography%2C%20high%20detail&width=900&height=1200&seq=jsq-featured-uiux-01&orientation=portrait"],
  ["services/packaging.jpg", "https://readdy.ai/api/search-image?query=A%20small%20group%20of%20matte%20printed%20cartons%20and%20label%20mock-ups%20arranged%20on%20a%20pale%20concrete%20plinth%2C%20charcoal%20and%20deep%20red%20packaging%20design%20with%20clean%20minimal%20typography%2C%20one%20kraft%20box%20open%20to%20reveal%20its%20interior%20sleeve%2C%20warm%20off-white%20palette%2C%20soft%20directional%20daylight%2C%20premium%20product%20photography%2C%20high%20detail&width=900&height=1200&seq=jsq-featured-packaging-01&orientation=portrait"]
];

let failed = 0;
for (const [name, url] of files) {
  const out = join('public', 'media', name);
  try {
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, buf);
    console.log(`saved ${out} (${(buf.length / 1024).toFixed(0)} KB, ${res.headers.get('content-type')})`);
  } catch (err) {
    failed += 1;
    console.error(`FAILED ${name}: ${err.message}`);
  }
}
if (failed) process.exit(1);

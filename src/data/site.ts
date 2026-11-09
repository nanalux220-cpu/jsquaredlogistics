// All the words, links and images on the site live here, so content can change without touching layout code.

export const site = {
  name: 'Jsquaredlogistics',
  short: 'J Squared',
  tagline: 'Graphic design studio, Leeds',
  logo: 'https://static.readdy.ai/image/4428baccc60709cd2682246ca105b4f4/1196234564d857bc2c894e5f71f7555b.png',
  heroImage: 'https://static.readdy.ai/image/4428baccc60709cd2682246ca105b4f4/a7da6e7f6542fa2303f2e7cb9044ea87.jpeg',
  heroVideo: 'https://static.readdy.ai/video/0af12a1027d1d5372071bb53d7f5559b/2b83f4c358c728a9559e26a807ae5895.mp4',
  aerialImage: 'https://jsquaredlogistics.co.uk/wp-content/uploads/elementor/thumbs/man-with-drone-in-a-warehouse-PMQEJ35-2-r0dfsrgiizsty6q0y1pg1ykvmk9de4jj4q607e3br0.jpg',
  leedsImage: 'https://readdy.ai/api/search-image?query=Leeds%20city%20skyline%20at%20dusk%20with%20brick%20mills%20and%20towers%20in%20the%20right%20third%20of%20the%20frame%2C%20left%20half%20calm%20empty%20hazy%20darkening%20sky%2C%20wet%20rooftops%2C%20cinematic%20wide%20landscape%20photography&width=2400&height=1350&seq=jsq-panel-studio&orientation=landscape',
};

export const contact = {
  addressLines: ['83 Roseville Road', 'Leeds (Safestore)', 'LS8 5DT'],
  phone: '+44 7427 259935',
  phoneHref: '+447427259935',
  email: 'admin@jsquaredlogistics.co.uk',
  mapEmbed: 'https://www.google.com/maps?q=83%20Roseville%20Road%2C%20Leeds%20LS8%205DT%2C%20United%20Kingdom&z=15&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=83%20Roseville%20Road%2C%20Leeds%20LS8%205DT%2C%20United%20Kingdom',
};

// Paste the studio's real profile links here. A button only shows once its link is filled in.
const allSocials = [
  { label: 'Facebook', icon: 'facebook', href: '' },
  { label: 'Instagram', icon: 'instagram', href: '' },
  { label: 'X (Twitter)', icon: 'twitter', href: '' },
  { label: 'YouTube', icon: 'youtube', href: '' },
] as const;
export const socials = allSocials.filter((s) => s.href);

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#aerial', label: 'Aerial' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
];

export type ServiceIcon = 'brand' | 'print' | 'digital' | 'info' | 'uiux' | 'pack';

export const services: {
  title: string; icon: ServiceIcon; text: string; img: string; alt: string; items: string[];
}[] = [
  {
    title: 'Brand Identity',
    icon: 'brand',
    text: 'The whole look of your business, drawn once and used consistently everywhere, so every touchpoint sounds like the same voice.',
    img: 'https://readdy.ai/api/search-image?query=Overhead%20flat%20lay%20of%20a%20complete%20brand%20identity%20kit%20on%20a%20warm%20off-white%20studio%20desk%2C%20charcoal%20and%20deep%20red%20letterhead%20with%20bold%20minimal%20typography%2C%20stacked%20business%20cards%2C%20folded%20brand%20guideline%20booklet%20showing%20a%20simple%20geometric%20logo%2C%20soft%20natural%20window%20light%2C%20gentle%20shadows%2C%20premium%20editorial%20product%20photography%2C%20high%20detail&width=900&height=1200&seq=jsq-featured-brand-01&orientation=portrait',
    alt: 'Brand identity kit with letterhead, business cards and brand guidelines',
    items: ['Logo design', 'Typography and colour', 'Brand guidelines'],
  },
  {
    title: 'Print Design',
    icon: 'print',
    text: 'Brochures, flyers and business cards prepared properly for press: the right stock, the right bleed, and proofs you can sign off with confidence.',
    img: 'https://readdy.ai/api/search-image?query=Open%20A4%20brochure%20spread%20resting%20on%20a%20pale%20concrete%20surface%20with%20a%20clean%20editorial%20layout%2C%20large%20uppercase%20headlines%20and%20deep%20red%20accent%20blocks%2C%20a%20small%20stack%20of%20matte%20business%20cards%20and%20a%20folded%20flyer%20beside%20it%2C%20warm%20off-white%20palette%2C%20soft%20directional%20daylight%2C%20shallow%20depth%20of%20field%2C%20premium%20print%20design%20mockup%20photography&width=900&height=1200&seq=jsq-featured-print-01&orientation=portrait',
    alt: 'Printed brochure spread, business cards and flyer',
    items: ['Brochures and flyers', 'Business cards', 'Print-ready files'],
  },
  {
    title: 'Digital Design',
    icon: 'digital',
    text: 'Visuals for websites, social media and online ads, sized for every placement and ready to hand straight to your marketing team.',
    img: 'https://readdy.ai/api/search-image?query=Smartphone%20and%20open%20laptop%20side%20by%20side%20on%20a%20warm%20white%20studio%20desk%2C%20both%20screens%20showing%20a%20matching%20social%20media%20campaign%20grid%20and%20a%20clean%20website%20layout%20with%20charcoal%20type%20and%20red%20call%20to%20action%20buttons%2C%20minimal%20interface%20design%2C%20soft%20morning%20light%2C%20crisp%20shadows%2C%20editorial%20technology%20product%20photography%2C%20high%20detail&width=900&height=1200&seq=jsq-featured-digital-01&orientation=portrait',
    alt: 'Social media campaign and website screens',
    items: ['Social media graphics', 'Email templates', 'Online ads'],
  },
  {
    title: 'Infographics',
    icon: 'info',
    text: 'Complex numbers turned into graphics people actually read, with clear hierarchy, honest charts and a story that carries.',
    img: 'https://readdy.ai/api/search-image?query=Printed%20infographic%20poster%20propped%20against%20the%20wall%20of%20a%20design%20studio%2C%20clean%20data%20visualisation%20with%20donut%20charts%2C%20bar%20graphs%20and%20simple%20line%20icons%20in%20charcoal%20and%20deep%20red%20on%20warm%20white%20paper%2C%20a%20few%20colour%20swatch%20cards%20and%20a%20pencil%20below%2C%20soft%20natural%20light%2C%20premium%20editorial%20photography&width=900&height=1200&seq=jsq-featured-infographic-01&orientation=portrait',
    alt: 'Infographic poster with charts and icons',
    items: ['Reports and data', 'Charts and icons', 'Presentation visuals'],
  },
  {
    title: 'UI/UX Design',
    icon: 'uiux',
    text: 'Websites and app screens designed journey first: wireframes, flows and a clickable prototype agreed before any code is written.',
    img: 'https://readdy.ai/api/search-image?query=Two%20minimal%20interface%20screens%20pinned%20on%20a%20warm%20off-white%20studio%20wall%2C%20a%20mobile%20app%20onboarding%20flow%20and%20a%20desktop%20dashboard%20layout%20printed%20on%20paper%20with%20charcoal%20type%20and%20deep%20red%20accent%20buttons%2C%20clean%20grid%20alignment%2C%20soft%20natural%20window%20light%2C%20gentle%20shadows%2C%20premium%20design%20portfolio%20photography%2C%20high%20detail&width=900&height=1200&seq=jsq-featured-uiux-01&orientation=portrait',
    alt: 'Mobile app flow and dashboard screens',
    items: ['Wireframes and flows', 'Clickable prototypes', 'Interface design'],
  },
  {
    title: 'Packaging Design',
    icon: 'pack',
    text: 'Labels, cartons and sleeves that work on the shelf and in the hand, with dielines and print files that match the mock-up.',
    img: 'https://readdy.ai/api/search-image?query=A%20small%20group%20of%20matte%20printed%20cartons%20and%20label%20mock-ups%20arranged%20on%20a%20pale%20concrete%20plinth%2C%20charcoal%20and%20deep%20red%20packaging%20design%20with%20clean%20minimal%20typography%2C%20one%20kraft%20box%20open%20to%20reveal%20its%20interior%20sleeve%2C%20warm%20off-white%20palette%2C%20soft%20directional%20daylight%2C%20premium%20product%20photography%2C%20high%20detail&width=900&height=1200&seq=jsq-featured-packaging-01&orientation=portrait',
    alt: 'Printed cartons and label mock-ups',
    items: ['Labels and cartons', 'Dielines and mock-ups', 'Shelf-ready artwork'],
  },
];

export const aerialPoints = [
  { title: 'Aerial photography', text: 'Drone shots of sites, buildings and events that show the full picture.' },
  { title: 'Designed, not just shot', text: 'Footage and stills finished with your brand colours, type and graphics.' },
  { title: 'Ready to publish', text: 'Delivered sized for your website, social channels, brochures and pitches.' },
];

export const processSteps = [
  { n: '01', title: 'Brief', text: 'A short call or email about your brand, audience and deadline. We agree scope, budget and timing before anything is drawn.' },
  { n: '02', title: 'Concepts', text: 'Moodboards, sketches and type ideas. You see two or three directions and we talk through what each is trying to say.' },
  { n: '03', title: 'Design', text: 'The chosen direction is built out properly across every social, digital and print format you need.' },
  { n: '04', title: 'Proof & handover', text: 'Proofs are signed off, then print-ready and digital files arrive with a short brand guide to keep things consistent.' },
];

export const stats = [
  { value: '6', label: 'Design services under one roof' },
  { value: '4', label: 'Clear steps from brief to handover' },
  { value: '1 day', label: 'Typical reply to new enquiries' },
  { value: '20 mi', label: 'In-person radius around Leeds' },
];

export const about = {
  title: 'A Leeds studio for everyday business design',
  body: [
    'We are a Leeds-based creative studio specialising in graphic design for everyday life and business. Known for creativity and attention to detail, we make designs that inspire, communicate and drive results.',
    'We meet local clients in person and work online with clients worldwide, so collaboration stays easy wherever you are.',
  ],
  operatingArea:
    'We currently operate in the Leeds area. Businesses outside a 20 mile radius may need to cover travel costs for in-person work. Get in touch for details.',
};

export const faqs = [
  {
    q: 'Do you only work with businesses in Leeds?',
    a: 'No. The studio is based in Leeds and we meet local clients in person, but most projects run online, so we work with clients anywhere. For in-person work beyond 20 miles of Leeds, travel costs may apply.',
  },
  {
    q: 'What do I need to get started?',
    a: 'Just a short description of your business, who you want to reach and when you need the work. Send it through the form and we will come back with questions, timings and a clear quote.',
  },
  {
    q: 'How many design options will I see?',
    a: 'At the concept stage you see two or three directions. Once you pick one, we refine it across every format you need before anything is signed off.',
  },
  {
    q: 'Which files do I get at the end?',
    a: 'Print-ready files for your printer, web-ready files for screens and social, and a short brand guide so your colours, type and logo stay consistent.',
  },
  {
    q: 'Can you combine several services into one project?',
    a: 'Yes. Many clients start with a brand identity and roll it out to print, social and packaging. Doing it together keeps everything looking like one brand and is usually quicker.',
  },
];

export const serviceOptions = [...services.map((s) => s.title), 'Aerial content', 'Not sure yet'];

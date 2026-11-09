// All the words, links and images on the site live here, so content can change without touching layout code.

export const site = {
  name: 'Jsquaredlogistics',
  short: 'J Squared',
  tagline: 'Graphic design studio, Leeds',
  logo: '/media/logo.png',
  heroImage: '/media/hero.webp',
  heroImageSmall: '/media/hero-800.webp',
  heroVideo: '/media/hero.mp4',
  studioImage: '/media/studio.webp',
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
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export type ServiceIcon = 'brand' | 'print' | 'digital' | 'info' | 'uiux' | 'pack';

export const services: {
  title: string; icon: ServiceIcon; text: string; img: string; alt: string; items: string[];
}[] = [
  {
    title: 'Brand Identity',
    icon: 'brand',
    text: 'The whole look of your business, drawn once and used consistently everywhere, so every touchpoint sounds like the same voice.',
    img: '/media/services/brand.webp',
    alt: 'Brand identity kit with letterhead, business cards and brand guidelines',
    items: ['Logo design', 'Typography and colour', 'Brand guidelines'],
  },
  {
    title: 'Print Design',
    icon: 'print',
    text: 'Brochures, flyers and business cards prepared properly for press: the right stock, the right bleed, and proofs you can sign off with confidence.',
    img: '/media/services/print.webp',
    alt: 'Printed brochure spread, business cards and flyer',
    items: ['Brochures and flyers', 'Business cards', 'Print-ready files'],
  },
  {
    title: 'Digital Design',
    icon: 'digital',
    text: 'Visuals for websites, social media and online ads, sized for every placement and ready to hand straight to your marketing team.',
    img: '/media/services/digital.webp',
    alt: 'Social media campaign and website screens',
    items: ['Social media graphics', 'Email templates', 'Online ads'],
  },
  {
    title: 'Infographics',
    icon: 'info',
    text: 'Complex numbers turned into graphics people actually read, with clear hierarchy, honest charts and a story that carries.',
    img: '/media/services/infographics.webp',
    alt: 'Infographic poster with charts and icons',
    items: ['Reports and data', 'Charts and icons', 'Presentation visuals'],
  },
  {
    title: 'UI/UX Design',
    icon: 'uiux',
    text: 'Websites and app screens designed journey first: wireframes, flows and a clickable prototype agreed before any code is written.',
    img: '/media/services/uiux.webp',
    alt: 'Mobile app flow and dashboard screens',
    items: ['Wireframes and flows', 'Clickable prototypes', 'Interface design'],
  },
  {
    title: 'Packaging Design',
    icon: 'pack',
    text: 'Labels, cartons and sleeves that work on the shelf and in the hand, with dielines and print files that match the mock-up.',
    img: '/media/services/packaging.webp',
    alt: 'Printed cartons and label mock-ups',
    items: ['Labels and cartons', 'Dielines and mock-ups', 'Shelf-ready artwork'],
  },
];

export const processSteps = [
  { n: '01', title: 'Brief', text: 'A short call or email about your brand, audience and deadline. We agree scope, budget and timing before anything is drawn.', result: 'Clear scope and quote' },
  { n: '02', title: 'Concepts', text: 'Moodboards, sketches and type ideas. You see two or three directions and we talk through what each is trying to say.', result: '2 to 3 creative directions' },
  { n: '03', title: 'Design', text: 'The chosen direction is built out properly across every social, digital and print format you need.', result: 'Every format you need' },
  { n: '04', title: 'Proof & handover', text: 'Proofs are signed off, then print-ready and digital files arrive with a short brand guide to keep things consistent.', result: 'Final files and brand guide' },
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

export const serviceOptions = [...services.map((s) => s.title), 'Not sure yet'];

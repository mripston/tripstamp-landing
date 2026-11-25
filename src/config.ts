// Everything app-specific lives in this file (plus src/data/landing.ts, the
// colour tokens at the top of src/styles/global.css, and the images in public/).
// Pages and components only read from here.
//
// Any string still containing "REPLACE" fails scripts/verify_build.sh, so a
// half-filled site can never be deployed.

export const SITE = {
  name: 'Tripstamp',
  title: 'Tripstamp: Travel Map of Countries Visited & Schengen Days',
  description: 'Tripstamp is a travel map for iPhone. Stamp the countries you have visited, log trips, and track days abroad and Schengen 90/180 days left. No account.',
  url: 'https://mripston.github.io/tripstamp-landing',
  lang: 'en',
  gaId: '',
  appStoreId: '6839241797',
  providerToken: '',
  countryCode: 'us',
  rating: { value: 0, count: 0 },
  price: 'Free',
  platform: 'iPhone',
  minOs: 'iOS 17 or later',
  appCategory: 'TravelApplication',
  company: 'Streamlined Studios',
  companyUrl: 'https://www.streamlinedstudios.com',
  email: 'matt@streamlinedstudios.com',
  twitter: 'StrmlinedStudio',
  privacyUrl: 'https://www.streamlinedstudios.com/privacy/',
  termsUrl: 'https://www.streamlinedstudios.com/terms/',
  footerBlurb: 'A travel map of the countries you have visited, with your days abroad and Schengen 90/180 days counted.',
  disclaimer: 'Day counts are estimates to help you plan. They are not legal or immigration advice.',
};

// App Store URL for a given placement. Every link on the site goes through this.
export function storeUrl(placement: string): string {
  const base = `https://apps.apple.com/${SITE.countryCode}/app/id${SITE.appStoreId}`;
  if (!SITE.providerToken) return base;
  const ct = `site-${placement}`.slice(0, 40);
  return `${base}?pt=${SITE.providerToken}&ct=${encodeURIComponent(ct)}&mt=8`;
}

export const CATEGORIES: Record<string, string> = {
  'schengen': 'Schengen',
  'travel-tracking': 'Travel Tracking',
  'guides': 'Guides',
};

export const HOME = {
  eyebrow: 'Free on iPhone',
  h1: 'The travel map that counts',
  highlight: 'your days abroad',
  h1End: '.',
  lead: 'Tripstamp is a travel map for iPhone: stamp every country you have visited, log your trips with dates, and always know your days abroad and how many Schengen days you have left.',
  heroShots: [
    { file: 'hero-1', alt: 'Tripstamp world map with visited countries stamped' },
    { file: 'hero-2', alt: 'Tripstamp Schengen 90/180 counter showing days used and days left' },
  ],
  stats: [
    { value: '195', label: 'countries to stamp' },
    { value: '90/180', label: 'Schengen counter' },
    { value: '0', label: 'accounts needed' },
    { value: 'Free', label: 'map, trips and stats' },
  ],
  stepsHeading: 'How Tripstamp works in three steps',
  steps: [
    { title: 'Stamp your countries', text: 'Tap a country on the map to mark it visited, lived or want to go.' },
    { title: 'Log your trips', text: 'Add trips with dates. One trip can cross several borders, and every day is counted.' },
    { title: 'Check your days', text: 'See days abroad this year and, with Pro, your Schengen 90/180 days used and left.' },
  ],
  featuresEyebrow: 'Why Tripstamp',
  featuresHeading: 'A travel map that does the counting',
  featuresLead: 'The map, trips, places and stats are free. Pro adds the day counters and finds trips in your photos.',
  features: [
    { icon: 'M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4z', title: 'Countries visited map', text: 'Tap any country to stamp it as visited, lived or want to go. No caps on countries, trips or places.' },
    { icon: 'M4 6h16M4 12h16M4 18h10', title: 'Trip log with dates', text: 'Log trips with dates. One trip can cross several borders, and days abroad are totalled for you.' },
    { icon: 'M3 12a9 9 0 1018 0 9 9 0 00-18 0M12 7v5l3 2', title: 'Schengen 90/180 counter (Pro)', text: 'See days used in the rolling 180-day window, days left, and how long you can stay from any entry date.' },
    { icon: 'M4 5h16v14H4zM4 15l5-5 4 4 3-3 4 4', title: 'Find trips in your photos (Pro)', text: 'Tripstamp reads the date and place of your photos on your iPhone and suggests trips. You review them before anything is saved.' },
    { icon: 'M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z', title: 'No account, your data stays yours', text: 'No sign-up and no email. It syncs through your own iCloud, and you can export everything to JSON or CSV.' },
    { icon: 'M6 8a6 6 0 1112 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 004 0', title: 'Limit alerts (Pro)', text: 'Set your own day limits, such as 183-day tax residency, and get an alert before you reach one.' },
  ],
  shots: [
    { file: 'shot-1', alt: 'Tripstamp travel map with 14 countries visited' },
    { file: 'shot-2', alt: 'Schengen 90/180 days counter with 40 of 90 days used' },
    { file: 'shot-3', alt: 'Trips list with days counted for each trip' },
    { file: 'shot-4', alt: 'Find trips in your photos screen' },
    { file: 'shot-5', alt: 'Travel stats: countries visited, continents and days abroad' },
    { file: 'shot-6', alt: 'All countries list with visited and want to go marks' },
  ],
  split: {
    eyebrow: 'Your data, your iCloud',
    heading: 'A travel tracker that does not want your account',
    text: 'Most countries-visited apps ask you to sign up. Tripstamp does not. Your trips, places and photos stay on your devices and in your own iCloud.',
    checks: [
      { title: 'No sign-up', text: 'No account, no email and no marketing opt-in.' },
      { title: 'Photos read on device', text: 'Photo trips are found on your iPhone. Nothing is uploaded.' },
      { title: 'Export anytime', text: 'Export everything to JSON or CSV and import it back.' },
    ],
  },
  faq: [
    { q: 'Is Tripstamp free?', a: 'The map, countries, trips, places, stats, iCloud sync and export are free. Tripstamp Pro is an optional auto-renewing subscription, monthly or yearly, that adds the Schengen 90/180 counter, custom day limits, limit alerts, automatic trip detection and finding trips in your photos.' },
    { q: 'Does Tripstamp calculate my Schengen days?', a: 'Yes, with Pro. It counts days used in the rolling 180-day window, days left, and how long you can stay from any entry date. The counts are estimates for planning, not legal or immigration advice.' },
    { q: 'Do I need an account?', a: 'No. There is no sign-up. Your data syncs through your own iCloud.' },
    { q: 'Does it upload my photos or location?', a: 'No. Finding trips in your photos reads the date and place of each photo on your iPhone, and you review the suggestions before anything is saved. Location is used only when you tap I am here.' },
    { q: 'Is there an Android version?', a: 'No. Tripstamp is for iPhone (iOS 17 or later) only.' },
    { q: 'Can I export my trips?', a: 'Yes. You can export everything to JSON or CSV at any time and import it back.' },
  ],
  blogHeading: 'Guides for tracking your travels',
};

export const CTA = {
  heading: 'Stamp your first country.',
  text: 'Free to download. No account. The map and trips are free.',
  postHeading: 'Try Tripstamp',
  postText: 'Stamp the countries you have visited and count your days abroad.',
};

export const BLOG = {
  title: 'Tripstamp Blog: Travel Tracking and Schengen Guides',
  description: 'Guides on tracking countries visited, days abroad and Schengen 90/180 days.',
  eyebrow: 'The Tripstamp blog',
  heading: 'Travel tracking guides',
  lead: 'Practical guides on tracking where you have been and how many days you have spent there.',
  rssDescription: 'Guides on tracking countries visited and Schengen days.',
};

export const NOT_FOUND = {
  heading: "That page doesn't exist",
  text: 'The link may be old or mistyped.',
};

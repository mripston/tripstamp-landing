// Keyword landing pages. Each entry becomes a page at /<slug>/.
// One page per search phrase the app can genuinely answer (from the ASO
// research), 2-4 pages. The slug IS the phrase: 'tv-remote-for-samsung'.
// An empty array is fine: the routes and footer column disappear.

export interface LandingPage {
  slug: string;
  nav: string;
  title: string;
  description: string;
  h1: string;
  highlight: string;
  lead: string;
  shot: string;
  shotAlt: string;
  introHeading: string;
  intro: string[];
  points: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  faq: { q: string; a: string }[];
}

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'schengen-90-180-calculator',
    nav: 'Schengen 90/180 calculator',
    title: 'Schengen 90/180 Calculator for iPhone | Tripstamp',
    description: 'Count your Schengen days in the rolling 180-day window, see days left and how long you can stay from any entry date. Tripstamp for iPhone.',
    h1: 'A Schengen 90/180 calculator',
    highlight: 'that lives in your travel log',
    lead: 'Tripstamp counts the days you have used in the rolling 180-day window, shows how many are left, and tells you how long you can stay from any entry date.',
    shot: 'shot-2',
    shotAlt: 'Tripstamp Schengen 90/180 counter with 40 of 90 days used',
    introHeading: 'Your trips already hold the answer',
    intro: [
      'The 90/180 rule counts every day you spent in the Schengen area in the last 180 days. Doing that by hand from old bookings is slow, so Tripstamp counts from the trips you have already logged.',
      'The Schengen counter is part of Tripstamp Pro. The counts are estimates to help you plan. They are not legal or immigration advice, so check official sources before you travel.',
    ],
    points: [
      { title: 'Days used and days left', text: 'See how many days you have used in the rolling 180-day window and how many remain.' },
      { title: 'Plan from any entry date', text: 'Pick an entry date and see how long you can stay.' },
      { title: 'Your own limits too', text: 'Track other rules, like 183-day tax residency or a visa limit, and get an alert before you reach one.' },
    ],
    steps: [
      { title: 'Log your trips', text: 'Add trips with dates, or let Tripstamp find them in your photos.' },
      { title: 'Open the Limits tab', text: 'See Schengen days used and left in the rolling 180-day window.' },
      { title: 'Plan your next entry', text: 'Pick an entry date to see how long you can stay.' },
    ],
    faq: [
      { q: 'Is the Schengen counter free?', a: 'No. It is part of Tripstamp Pro, an optional subscription. The travel map, trips and stats are free.' },
      { q: 'Is this legal advice?', a: 'No. Day counts are estimates for planning, not legal or immigration advice.' },
      { q: 'Does it work on Android?', a: 'No. Tripstamp is for iPhone only.' },
    ],
  },
  {
    slug: 'countries-visited-map',
    nav: 'Countries visited map',
    title: 'Countries Visited Map for iPhone | Tripstamp',
    description: 'Stamp the countries you have visited on a world map, log trips with dates and see your stats. Free on iPhone, no account.',
    h1: 'A countries visited map',
    highlight: 'you stamp with a tap',
    lead: 'Tripstamp is a countries visited map for iPhone. Tap a country to mark it visited, lived or want to go, then see how much of the world you have covered.',
    shot: 'shot-1',
    shotAlt: 'Tripstamp world map with visited countries stamped',
    introHeading: 'Every country, no caps',
    intro: [
      'Mark any country as visited, lived or want to go. Add cities and places, or tap I am here to check in to the country you are in.',
      'The map, stats, trips and places are free, with no cap on countries, trips or places. Your stats show countries, percent of the world, continents and days abroad this year.',
    ],
    points: [
      { title: 'Visited, lived, want to go', text: 'Three marks for every country, so your map shows where you have been and where you are headed.' },
      { title: 'Stats that update themselves', text: 'Countries, percent of the world, continents, longest stay and days abroad.' },
      { title: 'No account', text: 'Syncs through your own iCloud, and you can export to JSON or CSV.' },
    ],
    steps: [
      { title: 'Tap a country', text: 'Choose visited, lived or want to go.' },
      { title: 'Add places', text: 'Add cities and places, or check in with I am here.' },
      { title: 'See your stats', text: 'Open Stats for countries, continents and percent of the world.' },
    ],
    faq: [
      { q: 'Is the map free?', a: 'Yes. The map, countries, trips, places, stats, iCloud sync and export are free.' },
      { q: 'Can I add trips from my photos?', a: 'Yes, with Pro. Tripstamp reads the date and place of your photos on your iPhone and suggests trips for you to review.' },
      { q: 'Does it need an account?', a: 'No.' },
    ],
  },
  {
    slug: 'travel-days-tracker',
    nav: 'Travel days tracker',
    title: 'Travel Days Tracker: Count Days Abroad | Tripstamp',
    description: 'Log trips and count your days abroad each year. Tripstamp totals days per trip and per country, with custom day limits on Pro. iPhone, no account.',
    h1: 'A travel days tracker',
    highlight: 'for every trip you take',
    lead: 'Tripstamp logs your trips with dates and totals your days abroad, so you can see where the days went without a spreadsheet.',
    shot: 'shot-3',
    shotAlt: 'Tripstamp trips list with days counted',
    introHeading: 'Days abroad, counted for you',
    intro: [
      'Log a trip with start and end dates. One trip can cross several borders, and Tripstamp counts the days.',
      'With Pro you can set your own day limits, such as 183 days for tax residency, and get an alert before you reach one. Day counts are estimates, not legal or tax advice.',
    ],
    points: [
      { title: 'Trips across borders', text: 'One trip can cover several countries.' },
      { title: 'Days abroad this year', text: 'See your total on the stats screen.' },
      { title: 'Custom limits (Pro)', text: 'Track any rule with a day limit and get alerts.' },
    ],
    steps: [
      { title: 'Add a trip', text: 'Enter dates and the countries you visited.' },
      { title: 'Review days', text: 'See days per trip and days abroad this year.' },
      { title: 'Set a limit', text: 'With Pro, add a day limit and an alert.' },
    ],
    faq: [
      { q: 'Can it find my past trips?', a: 'With Pro, yes. It reads photo dates and places on your iPhone and suggests trips. You review them first.' },
      { q: 'Can I export my data?', a: 'Yes, to JSON or CSV at any time.' },
      { q: 'Is it tax advice?', a: 'No. Day counts are estimates to help you plan.' },
    ],
  },
];

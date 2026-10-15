export interface Listing {
  id: string;
  mlsNumber: string;
  title: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  status: 'Active' | 'Pending' | 'Closed' | 'Under Contract';
  type: 'Luxury Single Family' | 'Multi-Family Duplex' | 'Residential';
  location: string;
  neighborhood: string;
  beds: number;
  baths: number;
  sqft: number;
  lotSize: string;
  yearBuilt: number;
  coverImage: string;
  galleryImages: string[];
  description: string;
  highlights: string[];
  schools: {
    elementary: string;
    middle: string;
    high: string;
  };
  priceHistory?: {
    date: string;
    price: string;
    change: string;
  }[];
  propertySpecs: {
    label: string;
    value: string;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  transactionType: string;
  location: string;
  languageHighlight?: string;
  outcomeMetric: string;
}

export const AGENT_PROFILE = {
  name: 'Lemn Tesfaye',
  title: 'Licensed Real Estate Broker & Fiduciary Negotiator',
  brokerage: 'Skyline Properties, Inc.',
  brokerageTag: "Washington's Premier Independent Real Estate Firm",
  licenseNumber: 'WA DOL #253313',
  mlsAffiliation: 'Northwest Multiple Listing Service (NWMLS)',
  phone: '(206) 375-9349',
  phoneRaw: '2063759349',
  email: 'lemn.tesfaye@skylineproperties.com',
  officeAddress: 'Puget Sound Regional Offices, Seattle & Bellevue, WA',
  agentPhoto: 'https://mobilerealtyapps-agent-photos.s3.amazonaws.com/homespotter/agent_photo_253313_orig_0215140218',
  heroImage: '/src/assets/images/seattle_luxury_architectural_hero_1792085059254.jpg',
  stats: [
    { label: 'Avg Buyer Concession Won', value: '4.2%', context: 'Below initial list pricing' },
    { label: 'List-to-Sale Price Ratio', value: '98.8%', context: 'For seller-represented clients' },
    { label: 'Multilingual Languages', value: '3+', context: 'English, Amharic & Tigrinya' },
    { label: 'Average Days to Mutual', value: '18 Days', context: 'Fast, strategic closings' },
  ],
  languages: [
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      fluency: 'Native Professional Fluency',
      description: 'Precise contract drafting, escrow negotiation, and aggressive buyer/seller advocacy.',
    },
    {
      code: 'am',
      name: 'Amharic',
      nativeName: 'አማርኛ',
      fluency: 'Native Fluency',
      description: 'Empowering the Ethiopian and East African community across Seattle and the USA with complete clarity on mortgage, title, and escrow contracts.',
    },
    {
      code: 'ti',
      name: 'Tigrinya',
      nativeName: 'ትግርኛ',
      fluency: 'Fluent Speaking & Consultation',
      description: 'Bridging cultural nuance, wealth preservation, and intergenerational property investments for diverse families.',
    },
  ],
  missionStatement:
    'Real estate transactions are among the most financially consequential milestones in life. As your licensed broker, I operate with an uncompromising fiduciary mandate: listening intently, negotiating with relentless rigor, and translating complex real estate contracts across languages so you always maintain the decisive upper hand.',
};

export const FEATURED_LISTINGS: Listing[] = [
  {
    id: 'listing-2535662',
    mlsNumber: '2535662',
    title: 'Modern Architectural Sanctuary & Nature Preserve',
    tagline: 'Brand new luxury modern residence set against a permanently protected natural stream preserve in Queen Anne.',
    price: 2499000,
    originalPrice: 2650000,
    status: 'Active',
    type: 'Luxury Single Family',
    location: 'Seattle, WA',
    neighborhood: 'Queen Anne / Magnolia (Area 700)',
    beds: 4,
    baths: 4,
    sqft: 2547,
    lotSize: '0.092 ac / 4,000 sqft',
    yearBuilt: 2026,
    coverImage: 'https://listing-images.homespotter.com/14/l/160087/160087014-1.jpg',
    galleryImages: [
      'https://listing-images.homespotter.com/14/l/160087/160087014-1.jpg',
      'https://listing-images.homespotter.com/14/l/160087/160087014-2.jpg',
      'https://listing-images.homespotter.com/14/l/160087/160087014-3.jpg',
      'https://listing-images.homespotter.com/14/l/160087/160087014-4.jpg',
      'https://listing-images.homespotter.com/14/l/160087/160087014-5.jpg',
      'https://listing-images.homespotter.com/14/l/160087/160087014-6.jpg',
      'https://listing-images.homespotter.com/14/l/160087/160087014-7.jpg',
      'https://listing-images.homespotter.com/14/l/160087/160087014-8.jpg',
      'https://listing-images.homespotter.com/14/l/160087/160087014-9.jpg',
    ],
    description:
      'A truly rare opportunity to own a thoughtfully designed modern luxurious residence where striking contemporary architecture meets an irreplaceable natural setting. New construction of this caliber is exceptionally rare on a property featuring a permanently protected nature area, preserved in perpetuity, where a tranquil stream winds through mature trees and lush native vegetation. Designed for sophisticated living and effortless entertaining with Thermador appliances, 3 wet bars, quartz waterfall surfaces, expansive walls of glass, and an expansive rooftop deck with a full outdoor kitchen and 360-degree views.',
    highlights: [
      'Thermador Master Culinary Suite with integrated paneling',
      '3 Dedicated Wet Bars across entertaining levels',
      'Permanently protected in-perpetuity natural stream buffer',
      'Rooftop Terrace with complete aluminum outdoor kitchen & gas grill',
      '360° panoramic views of Queen Anne & Seattle skyline',
      'Spa-inspired primary retreat with freestanding soaking tub & rain shower',
    ],
    schools: {
      elementary: 'Queen Anne Elementary',
      middle: 'McClure Middle School',
      high: 'Lincoln High School',
    },
    priceHistory: [
      { date: '10/08/2026', price: '$2,499,000', change: '-$100,000 strategic price realignment' },
      { date: '09/08/2026', price: '$2,599,000', change: '-$51,000 tactical price adjustment' },
      { date: '07/10/2026', price: '$2,650,000', change: 'Initial MLS Debut' },
    ],
    propertySpecs: [
      { label: 'County', value: 'King County, WA' },
      { label: 'Heating / Cooling', value: 'High-Efficiency Multi-Zone Heat Pump' },
      { label: 'Flooring', value: 'Engineered White Oak Hardwood & Italian Porcelain' },
      { label: 'Parking', value: 'Attached 2-Car Garage with EV 240V Outlet' },
      { label: 'Sewer / Water', value: 'Public Seattle Municipal' },
      { label: 'CDOM / DOM', value: '97 Days (Negotiation Opportunity)' },
    ],
  },
  {
    id: 'listing-2578946',
    mlsNumber: '2578946',
    title: 'Versatile Oak Tree Corner Duplex & Investment Asset',
    tagline: 'High-potential multi-family asset on a generous corner lot with dual kitchens and proven rental yield.',
    price: 880000,
    originalPrice: 880000,
    status: 'Active',
    type: 'Multi-Family Duplex',
    location: 'Seattle, WA',
    neighborhood: 'Licton Springs / Ballard / Green Lake (Area 705)',
    beds: 5,
    baths: 3,
    sqft: 1990,
    lotSize: '0.107 ac / 4,668 sqft',
    yearBuilt: 1926,
    coverImage: '/src/assets/images/modern_craftsman_duplex_1792085060071.jpg',
    galleryImages: [
      '/src/assets/images/modern_craftsman_duplex_1792085060071.jpg',
      '/src/assets/images/seattle_luxury_architectural_hero_1792085059254.jpg',
    ],
    description:
      'Unlock the potential of this versatile Oak Tree duplex, ideally positioned near shopping, dining, entertainment, public transit, and major North Seattle commuter corridors. Featuring a flexible floor plan with a second kitchen, generous living spaces, and established rental history. The expansive, fully fenced corner yard provides tenant appeal and off-street parking. Ideal for portfolio expansion, house hacking, or value-add redevelopment in one of Seattle’s rapidly appreciating corridors.',
    highlights: [
      'Two fully equipped autonomous living units with independent entrances',
      'Dual full kitchens for immediate rental income or multi-gen living',
      'Prime corner parcel (4,668 sq ft) with ample off-street tenant parking',
      'Minutes to Northgate Light Rail Station, Green Lake & Oak Tree Cinema Plaza',
      'Strong historical occupancy and high cash-flow potential',
      'Zoned for future ADU/DADU expansion or long-term appreciation',
    ],
    schools: {
      elementary: 'Licton Springs K-8',
      middle: 'Robert Eagle Staff Middle School',
      high: 'Ingraham High School',
    },
    priceHistory: [
      { date: '09/17/2026', price: '$880,000', change: 'Current MLS Listing Price' },
    ],
    propertySpecs: [
      { label: 'Unit Layout', value: '3 Bed Main Unit / 2 Bed Lower Unit' },
      { label: 'County', value: 'King County, WA' },
      { label: 'Lot Type', value: 'Corner Lot, Fully Fenced Yard' },
      { label: 'Parking', value: 'Off-Street Multi-Vehicle Driveway' },
      { label: 'Investment Fit', value: 'House-Hack, BRRRR, or Turnkey Rental' },
    ],
  },
  {
    id: 'listing-closed-bellevue',
    mlsNumber: '2489114',
    title: 'Somerset Contemporary Hillside Residence',
    tagline: 'Represented relocation tech executive buyers against multiple competing offers.',
    price: 1850000,
    originalPrice: 1895000,
    status: 'Closed',
    type: 'Luxury Single Family',
    location: 'Bellevue, WA',
    neighborhood: 'Somerset / Eastside',
    beds: 4,
    baths: 3.5,
    sqft: 3120,
    lotSize: '0.22 ac',
    yearBuilt: 2019,
    coverImage: '/src/assets/images/seattle_luxury_architectural_hero_1792085059254.jpg',
    galleryImages: ['/src/assets/images/seattle_luxury_architectural_hero_1792085059254.jpg'],
    description:
      'Negotiated a $45,000 price discount alongside a $12,500 seller-paid temporary 2-1 interest rate buy-down, saving the buyers over $850/month in first-year payments.',
    highlights: [
      'Represented Buyer in high-demand Bellevue school district',
      'Negotiated 2-1 temporary rate buy-down credit ($12,500 value)',
      'Closed in 21 days with preferred cross-border lender',
    ],
    schools: {
      elementary: 'Somerset Elementary',
      middle: 'Tyee Middle School',
      high: 'Newport High School',
    },
    propertySpecs: [
      { label: 'Transaction Role', value: 'Buyer Broker Representation' },
      { label: 'Concession Won', value: '$45,000 price drop + $12,500 rate buy-down' },
      { label: 'Financing', value: 'Jumbo Conventional 30-Yr' },
    ],
  },
];

export const NEGOTIATION_PILLARS = [
  {
    number: '01',
    title: 'Empirical Valuation & Price Anchoring',
    summary:
      'We dismantle inflated seller expectations or defend your listing price using hyper-local micro-comps, absorption rates, and off-market intelligence rather than guesswork.',
    tactics: [
      '3-Tier Comparative CMA (Adjusted square footage, lot topography, view premiums)',
      'Days-On-Market (DOM) leverage mapping for targeted discount thresholds',
      'Appraisal risk mitigation modeling before offers are finalized',
    ],
  },
  {
    number: '02',
    title: 'Aggressive Contingency & Contract Engineering',
    summary:
      'In Washington state real estate contracts, clauses win or lose deals. Every Form 22 and Form 35 contingency is tailored to preserve your earnest money and enforce seller performance.',
    tactics: [
      'Form 35 Inspection response strategy: credit demands over sloppy seller repairs',
      'Targeted escalation clauses with precise cap parameters to avoid overbidding',
      'Seller-funded temporary 2-1 and 3-2-1 rate buy-down contract structuring',
    ],
  },
  {
    number: '03',
    title: 'Cross-Cultural Bridge & Multi-Party Alignment',
    summary:
      'Real estate markets in Seattle and across the US bring together multicultural buyers, overseas investors, family estates, and corporate tech relocations.',
    tactics: [
      'Seamless multi-language communication in English, Amharic, and Tigrinya',
      'Elimination of misunderstandings that derail complex legal and escrow terms',
      'Direct, respectful diplomacy that secures mutual acceptance where others deadlock',
    ],
  },
  {
    number: '04',
    title: 'Escrow Defense & Post-Inspection Resolution',
    summary:
      'The initial contract signing is only the opening bell. A firm negotiator stays vigilant until the deed records, guarding against hidden title encumbrances and lender delays.',
    tactics: [
      'Strict adherence to statutory inspection timelines and formal written notices',
      'Pre-closing walkthrough verification with punch-list escrow holdbacks',
      'Coordination with preferred title officers, appraisers, and settlement attorneys',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'Lemn is unmatched. When we bought our Queen Anne home, there were two competing bids. Instead of telling us to wildly overpay, Lemn analyzed the listing agent’s timeline and structured an inspection term that won the seller over. We closed under budget. His firm negotiation saved us over $50,000.',
    clientName: 'Daniel & Sarah K.',
    clientRole: 'Tech Relocation Buyers',
    transactionType: 'Queen Anne Luxury Residence Purchase',
    location: 'Seattle, WA',
    outcomeMetric: '$52,000 under rival escalations',
  },
  {
    id: 'test-2',
    quote:
      'For our family, being able to communicate directly in Amharic while navigating King County property rules was a blessing. Lemn walked our elders through every single clause of the title report and mortgage contract. He stood firm during the inspection phase and got the seller to replace the entire HVAC system before closing.',
    clientName: 'Yohannes & Meron T.',
    clientRole: 'First-Time Luxury Homeowners',
    transactionType: 'Bellevue Residential Purchase',
    location: 'Bellevue, WA',
    languageHighlight: 'Amharic (አማርኛ) Consultation',
    outcomeMetric: '100% Full HVAC Replacement ($18,400 credit)',
  },
  {
    id: 'test-3',
    quote:
      'I was looking for an income duplex in North Seattle for my 1031 exchange. Lemn identified the Licton Springs property, calculated the cap rate accurately, and negotiated seller concessions that covered all closing costs. He is sharp, direct, and has immense market insight.',
    clientName: 'Marcus Sterling',
    clientRole: 'Commercial & Multi-Family Investor',
    transactionType: 'Seattle Duplex Acquisition',
    location: 'Seattle, WA',
    outcomeMetric: '6.9% Cap Rate + $11,000 Seller Credit',
  },
];

export const MULTILINGUAL_CONTENT = {
  en: {
    welcome: 'Welcome',
    tagline: 'Fiduciary Advocate & Firm Real Estate Negotiator',
    heroKicker: 'Puget Sound & Greater US Property Markets',
    statement:
      'Protecting your capital and family legacy with data-driven negotiation, contract mastery, and seamless communication.',
    negotiationPledge:
      'I never let my clients settle for weak compromises. Whether defending your home valuation or demanding seller concessions, I represent your financial interests with unwavering firmness.',
    consultationCta: 'Schedule Strategy Session',
    callNow: 'Direct: (206) 375-9349',
    langSelectorLabel: 'View Agent Bio in:',
  },
  am: {
    welcome: 'እንኳን ደህና መጡ',
    tagline: 'ጠንካራ ተደራዳሪ እና ታማኝ የሪል እስቴት ወኪል',
    heroKicker: 'በሲያትል እና በመላው አሜሪካ የሪል እስቴት አገልግሎት',
    statement:
      'የእርስዎን እና የቤተሰብዎን ሀብት በጠንካራ የውል ድርድር፣ በሙያዊ ዕውቀት እና ግልጽ በሆነ ቋንቋ በአስተማማኝ ሁኔታ እናስጠብቃለን።',
    negotiationPledge:
      'በሪል እስቴት ግዢም ሆነ ሽያጭ ወቅት የደንበኞቻችን መብትና ጥቅም ሳይሸራረፍ እንዲከበር ያለመታከት እንሟገታለን። የኮንትራት ውሎችና የዋጋ ቅናሾች ለርስዎ በሚበጅ መልኩ እንዲፈጸሙ እናደርጋለን።',
    consultationCta: 'የምክክር ቀጠሮ ይያዙ',
    callNow: 'ቀጥታ ስልክ: (206) 375-9349',
    langSelectorLabel: 'የወኪሉን መግለጫ በቋንቋ ይመልከቱ:',
  },
  ti: {
    welcome: 'እንቋዕ ብደሓን መጻእኹም',
    tagline: 'ጽኑዕ ተደራዳርን ውፉይ ወከል ሪል እስቴትን',
    heroKicker: 'ኣብ ሲያትልን መላእ ኣመሪካን ዘሎ ዕዳጋ ገዛውቲ',
    statement:
      'ንብረትኩምን ናይ ስድራቤትኩም መጻእን ብንጹር ውልን ብቑዕ ድርድርን ንምሕላው ብትግሃት ንሰርሕ።',
    negotiationPledge:
      'ኣብ ምግዛእን ምሻጥን ገዛውቲ ረብሓኹም ዝለዓለ ደረጃ ንክሕዝ ብጽንዓት ንደራደር። ውዕላትን ዝግባእኩም ጥቅማጥቅምን ብግቡእ ክረጋገጽ ሓላፍነት ንወስድ።',
    consultationCta: 'ናይ ምኽሪ ቆጸራ ሓዙ',
    callNow: 'ቀጥታ ደውሉ: (206) 375-9349',
    langSelectorLabel: 'መግለጺ ብቛንቋ ምረጹ:',
  },
};

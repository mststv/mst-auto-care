/**
 * Content for the service pages and the city (service-area) pages.
 * English only: these pages target English searches. The Russian version lives at /ru/.
 * Prices come from src/lib/prices.ts so they stay in sync with the home page.
 */
import { startingPrices } from "./prices";

export type PriceKey = keyof typeof startingPrices;

export type Faq = { q: string; a: string };

export type ServicePageData = {
  slug: string;
  nav: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  image: { src: string; w: number; h: number; alt: string } | null;
  offerTitle: string;
  offers: { key: PriceKey; title: string; text: string }[];
  sections: { h2: string; body: string[] }[];
  faqs: Faq[];
  schemaName: string;
};

export const servicePages: ServicePageData[] = [
  {
    slug: "ppf",
    nav: "PPF",
    title: "PPF & Clear Bra in Bensalem, PA | MST Auto Wraps",
    description:
      "Clear and color paint protection film (PPF) in Bensalem, PA. Partial PPF from $150, full body from $3,000. Studio or mobile service. Call 215-833-1552.",
    h1: "Paint Protection Film (PPF) in Bensalem, PA",
    eyebrow: "Clear bra · Color PPF",
    intro: [
      "Paint protection film is a clear (or colored) urethane film installed over your factory paint. It takes the rock chips, road debris and light scratches so your paint does not.",
      "We install PPF in our private studio in Bensalem, PA, or come to you.",
    ],
    image: { src: "/images/work/ppf-install", w: 576, h: 490, alt: "Installer squeegeeing clear paint protection film onto a black car's front fender" },
    offerTitle: "PPF packages and starting prices",
    offers: [
      { key: "ppfPartial", title: "Partial PPF", text: "High-impact areas only, like the front bumper, rocker panels, door edges or door cups." },
      { key: "ppfFront", title: "Full Front PPF", text: "Front bumper, full hood, front fenders and mirrors: the areas that take most rock chips." },
      { key: "ppfFull", title: "Full Body Clear PPF", text: "Every painted panel covered with clear film." },
      { key: "ppfColor", title: "Color PPF", text: "Change the color of your car and protect the paint at the same time. Gloss, satin or matte." },
    ],
    sections: [
      {
        h2: "Clear PPF or color PPF?",
        body: [
          "Clear PPF keeps your factory color and adds an invisible protective layer. Color PPF works like a color change wrap, but with the thickness and protection of paint protection film.",
          "Not sure how much coverage you need? Send us the make and model and how you drive, and we will suggest the right package.",
        ],
      },
      {
        h2: "How it works",
        body: [
          "1. Call or text 215-833-1552, or send the form below with your car and the coverage you want.",
          "2. We give you a price and pick a date. Work is done in our Bensalem studio or at your location.",
          "3. The paint is cleaned and prepped, the film is installed panel by panel, and edges are finished by hand.",
        ],
      },
    ],
    faqs: [
      { q: "How much does PPF cost?", a: "Partial PPF starts at $150, full front PPF at $1,500, full body clear PPF at $3,000 and full color PPF at $3,500. The final price depends on the car and the coverage." },
      { q: "Do you come to me?", a: "Yes. Mobile service is available. We also work in our private studio in Bensalem, PA." },
      { q: "Is PPF the same as a clear bra?", a: "Yes. \"Clear bra\" is the older name for clear paint protection film on the front of the car." },
    ],
    schemaName: "Paint Protection Film (PPF) Installation",
  },
  {
    slug: "vinyl-wraps",
    nav: "Vinyl Wraps",
    title: "Vinyl Car Wraps in Bensalem, PA | MST Auto Wraps",
    description:
      "Color change vinyl wraps, chrome delete, roof and accent wraps in Bensalem, PA. Full wraps from $2,500. Studio or mobile service. Call 215-833-1552.",
    h1: "Vinyl Car Wraps in Bensalem, PA",
    eyebrow: "Color change · Chrome delete",
    intro: [
      "A vinyl wrap gives your car a new color or finish without repainting it. Gloss, satin or matte, and your factory paint stays underneath.",
      "We wrap cars in our private studio in Bensalem, PA, or come to you.",
    ],
    image: { src: "/images/work/wrap-blue-front", w: 1320, h: 1464, alt: "BMW 5 Series wrapped in satin blue vinyl, front view in the studio" },
    offerTitle: "Vinyl wrap services and starting prices",
    offers: [
      { key: "colorChange", title: "Full Color Change Wrap", text: "The whole car in a new color: gloss, satin or matte." },
      { key: "chromeDelete", title: "Chrome Delete", text: "Chrome window trim, badges and grilles wrapped in black." },
      { key: "roofWrap", title: "Roof Wrap", text: "Gloss black or any color roof." },
      { key: "accentWrap", title: "Accent Wraps", text: "Mirrors, stripes, spoilers, hood and trim pieces." },
    ],
    sections: [
      {
        h2: "Full wrap or just the details?",
        body: [
          "A full color change is the biggest transformation. If you want a smaller change, chrome delete, a black roof or wrapped mirrors change the look of a car for a fraction of the price.",
          "We help you choose the color and finish before the job starts.",
        ],
      },
      {
        h2: "How it works",
        body: [
          "1. Call or text 215-833-1552, or send the form below with your car and the color you have in mind.",
          "2. We give you a price and pick a date. Work is done in our Bensalem studio or at your location.",
          "3. The car is cleaned and prepped, panels are wrapped one by one, and edges and seams are finished by hand.",
        ],
      },
    ],
    faqs: [
      { q: "How much does a car wrap cost?", a: "A full color change wrap starts at $2,500. Chrome delete starts at $300, a roof wrap at $300 and accent wraps at $150. The final price depends on the car and the film." },
      { q: "Will a wrap damage my paint?", a: "A vinyl wrap goes over your factory paint and keeps it covered while the wrap is on." },
      { q: "Do you come to me?", a: "Yes. Mobile service is available, or bring the car to our private studio in Bensalem, PA." },
    ],
    schemaName: "Vinyl Car Wrap Installation",
  },
  {
    slug: "commercial-wraps",
    nav: "Commercial Wraps",
    title: "Commercial Vehicle Wraps in Bensalem, PA | MST Auto Wraps",
    description:
      "Commercial vehicle wraps, logos and lettering for vans, trucks and cars in Bensalem, PA and Philadelphia. Wraps from $1,500. Call 215-833-1552.",
    h1: "Commercial Vehicle Wraps & Lettering in Bensalem, PA",
    eyebrow: "Fleet · Vans · Lettering",
    intro: [
      "Your work vehicle is on the road every day. A commercial wrap or simple lettering turns it into advertising for your business.",
      "We install commercial wraps and lettering in our Bensalem, PA studio or at your business.",
    ],
    image: null,
    offerTitle: "Commercial services and starting prices",
    offers: [
      { key: "adWrap", title: "Commercial Wraps", text: "Full or partial wraps with your brand, colors and design." },
      { key: "adLettering", title: "Logos & Lettering", text: "Logo, phone number, website and services on doors, sides or rear glass." },
    ],
    sections: [
      {
        h2: "Full wrap or lettering?",
        body: [
          "A full or partial wrap covers the vehicle in your brand design. Lettering is the budget option: your logo, phone number and website cut from vinyl and applied to the doors, sides or rear window.",
          "Send us your logo and the vehicle, and we will tell you what fits your budget.",
        ],
      },
      {
        h2: "How it works",
        body: [
          "1. Call or text 215-833-1552, or send the form below with the vehicle and what you want on it.",
          "2. We agree on the layout and price, and pick a date.",
          "3. We install the wrap or lettering in our studio or at your location.",
        ],
      },
    ],
    faqs: [
      { q: "How much does a commercial wrap cost?", a: "Commercial wraps start at $1,500 and logos & lettering start at $250. The final price depends on the vehicle and how much of it is covered." },
      { q: "Can you come to our business?", a: "Yes. We install at your business or in our private studio in Bensalem, PA." },
    ],
    schemaName: "Commercial Vehicle Wraps & Lettering",
  },
];

export type CityPageData = {
  slug: string;
  nav: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  towns: string[];
  local: { h2: string; body: string[] };
  /** schema.org areaServed for this page */
  area: { type: "City" | "AdministrativeArea"; name: string };
};

export const cityPages: CityPageData[] = [
  {
    slug: "bensalem-pa",
    nav: "Bensalem & Bucks County",
    title: "PPF & Car Wraps in Bensalem & Bucks County | MST Auto Wraps",
    description:
      "PPF, vinyl wraps and commercial wraps from our private studio in Bensalem, PA. Mobile service across Bucks County. Call or text 215-833-1552.",
    h1: "PPF & Car Wraps in Bensalem and Bucks County",
    eyebrow: "Bensalem, PA 19020",
    intro: [
      "MST Auto Wraps is based in Bensalem. Our private studio is here, so most Bucks County cars are wrapped indoors. Mobile service is available too.",
      "The studio address is not public. You get it when you book.",
    ],
    towns: ["Bensalem", "Trevose", "Feasterville", "Langhorne", "Levittown", "Newtown", "Yardley", "Doylestown", "New Hope", "Huntingdon Valley"],
    local: {
      h2: "Studio work or mobile service",
      body: [
        "Bring your car to our Bensalem studio, or we come to your home or business anywhere in Bucks County.",
        "We speak English and Russian.",
      ],
    },
    area: { type: "AdministrativeArea", name: "Bucks County, PA" },
  },
  {
    slug: "main-line",
    nav: "Main Line & King of Prussia",
    title: "PPF & Car Wraps on the Main Line, PA | MST Auto Wraps",
    description:
      "Mobile PPF and vinyl wraps for King of Prussia, Bryn Mawr, Villanova, Wayne and Gladwyne. Partial PPF from $150. Call or text 215-833-1552.",
    h1: "PPF & Car Wraps on the Main Line",
    eyebrow: "King of Prussia · Bryn Mawr · Wayne",
    intro: [
      "We protect and wrap cars across the Main Line and Montgomery County, from King of Prussia to Gladwyne.",
      "Mobile service comes to your home or office, or you can bring the car to our private studio in Bensalem.",
    ],
    towns: ["King of Prussia", "Wayne", "Villanova", "Bryn Mawr", "Gladwyne", "Blue Bell", "Ambler"],
    local: {
      h2: "Mobile service on the Main Line",
      body: [
        "Most Main Line clients choose mobile service: we come to you with everything needed for the job.",
        "We speak English and Russian.",
      ],
    },
    area: { type: "AdministrativeArea", name: "Main Line, PA" },
  },
  {
    slug: "philadelphia",
    nav: "Philadelphia",
    title: "PPF & Car Wraps in Philadelphia, PA | MST Auto Wraps",
    description:
      "Clear & color PPF, vinyl car wraps and commercial wraps for Philadelphia drivers. Studio in nearby Bensalem or mobile service. Call 215-833-1552.",
    h1: "PPF & Car Wraps in Philadelphia",
    eyebrow: "Philadelphia, PA",
    intro: [
      "Our studio in Bensalem is right next to Northeast Philadelphia, so city drivers can drop their car off or book mobile service.",
      "We serve all of Philadelphia, including Northeast Philly and Chestnut Hill.",
    ],
    towns: ["Northeast Philadelphia", "Center City", "Chestnut Hill", "Fishtown", "South Philadelphia"],
    local: {
      h2: "Studio or mobile in Philly",
      body: [
        "Bring the car to our private studio in Bensalem, or we come to your home, garage or business in Philadelphia.",
        "We speak English and Russian.",
      ],
    },
    area: { type: "City", name: "Philadelphia, PA" },
  },
];

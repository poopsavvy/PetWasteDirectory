import { mapsOnlyProviders } from './maps-only-providers.mjs';
import { additionalProviders } from './additional-providers.mjs';
import { mapLinks } from './map-links.mjs';
// Add competitors only after confirming their official website and service area.
// Poop Savvy is featured by ownership, not an independent quality ranking.
export const cities = [
  { slug: 'desoto', name: 'DeSoto', context: 'Before booking a visit in DeSoto, ask whether your address is on the provider’s route and whether waste disposal is included.' },
  { slug: 'cedar-hill', name: 'Cedar Hill', context: 'For a Cedar Hill yard, compare access requirements, cleanup frequency, and how a provider handles sloped or heavily planted areas.' },
  { slug: 'duncanville', name: 'Duncanville', context: 'When requesting service in Duncanville, share your yard size, number of dogs, and any gate instructions so a provider can confirm the scope.' },
  { slug: 'lancaster', name: 'Lancaster', context: 'For a Lancaster property, ask about address coverage and first-visit cleanup before choosing a recurring schedule.' },
  { slug: 'red-oak', name: 'Red Oak', context: 'For service in Red Oak, confirm route availability directly. Providers may serve only part of a city or require a minimum visit frequency.' },
  { slug: 'waxahachie', name: 'Waxahachie', context: 'For a Waxahachie home, confirm travel charges and route coverage before booking. A nearby directory listing is not a guarantee of address coverage.' },
  { slug: 'midlothian', name: 'Midlothian', context: 'For a larger Midlothian property, describe the areas you want cleaned and ask whether the quote covers the entire yard or a designated dog area.' },
  { slug: 'glenn-heights', name: 'Glenn Heights', context: 'Poop Savvy and Booty Scoopy both name Glenn Heights on their official service-area lists. Confirm your exact address and whether waste disposal uses your outdoor trash bin.' },
  { slug: 'ovilla', name: 'Ovilla', context: 'Poop Savvy and Booty Scoopy both list Ovilla. Describe any separate dog runs or large yard areas when asking for a quote, and confirm the route schedule for your address.' },
  { slug: 'dallas', name: 'Dallas', context: 'Dallas covers a large area. Give the provider your ZIP code and neighborhood so they can confirm route availability before you compare quotes.' },
];
export const checkedDate = '2026-10-02';
export const providers = [
  {
    slug: 'poop-savvy', name: 'Poop Savvy', featured: true,
    description: 'Family-owned pet waste removal based in DeSoto. Weekly, every-other-week, and one-time cleanup.',
    services: ['Pet waste removal', 'One-time cleanup', 'Commercial cleanup'], serviceKeys: ['pet-waste-removal', 'one-time', 'commercial'],
    website: 'https://poop-savvy.com/', quoteUrl: 'https://poop-savvy.com/#quote-section', phone: '972-388-8255',
    verifiedCities: ['desoto', 'lancaster', 'duncanville', 'cedar-hill', 'glenn-heights', 'red-oak', 'ovilla', 'midlothian'],
    sourceUrl: 'https://poop-savvy.com/', source: 'Official website: service areas, contact information, services, and waste disposal policy.',
    details: ['Owned and operated by Josh and Dee Reed.', 'The official site also describes commercial cleanup and HOA pet waste station work.', 'Collected waste is double-bagged and placed in your outdoor trash bin; haul-away is not offered.', 'The website lists no long-term contracts and prepaid monthly billing. Confirm current terms directly.'],
  },
  {
    slug: 'booty-scoopy', name: 'Booty Scoopy', featured: false,
    description: 'DeSoto-based, family-owned service offering recurring cleanup, one-time visits, and yard deodorizing.',
    services: ['Pet waste removal', 'One-time cleanup', 'Deodorizing'], serviceKeys: ['pet-waste-removal', 'one-time', 'deodorizing'],
    website: 'https://www.bootyscoopy.com/', quoteUrl: 'https://client.sweepandgo.com/booty-scoopy-aqx0c/register', phone: '469-383-8899',
    verifiedCities: ['desoto', 'cedar-hill', 'lancaster', 'red-oak', 'midlothian', 'waxahachie', 'glenn-heights', 'ovilla'],
    sourceUrl: 'https://www.bootyscoopy.com/desoto-pet-waste-removal', source: 'Official DeSoto page and service-area list.',
    details: ['The website lists weekly, biweekly, and twice-weekly recurring plans.', 'The DeSoto page says waste is double-bagged and placed in the customer’s trash receptacle.', 'Ask the provider about your address, visit schedule, and current quote.'],
  },
  {
    slug: 'scoop-soldiers', name: 'Scoop Soldiers', featured: false,
    description: 'Residential and commercial pet waste removal with optional deodorizing and sanitization.',
    services: ['Pet waste removal', 'One-time cleanup', 'Deodorizing', 'Commercial cleanup'], serviceKeys: ['pet-waste-removal', 'one-time', 'deodorizing', 'commercial'],
    website: 'https://www.scoopsoldiers.com/locations/dallas', quoteUrl: 'https://www.scoopsoldiers.com/get-a-quote', phone: '877-930-7667',
    verifiedCities: ['desoto', 'cedar-hill', 'duncanville', 'lancaster', 'midlothian', 'dallas'],
    sourceUrl: 'https://www.scoopsoldiers.com/locations/dallas', source: 'Official Dallas location page with named service areas.',
    details: ['The website lists recurring schedules and one-time cleanup.', 'The Dallas page says collected waste is removed from the property.', 'Confirm the exact address, add-ons, and current pricing with the provider.'],
  },
  {
    slug: 'the-scoopinator', name: 'The Scoopinator', featured: false,
    description: 'Residential cleanup and commercial pet waste station service in Dallas, Duncanville, and Cedar Hill.',
    services: ['Pet waste removal', 'One-time cleanup', 'Commercial cleanup'], serviceKeys: ['pet-waste-removal', 'one-time', 'commercial'],
    website: 'https://www.thescoopinator.com/', quoteUrl: 'https://www.thescoopinator.com/', phone: '214-668-6312',
    verifiedCities: ['dallas', 'duncanville', 'cedar-hill'],
    sourceUrl: 'https://www.thescoopinator.com/', source: 'Official website with named cities and public contact details.',
    details: ['The website lists weekly, biweekly, and one-time cleanings.', 'The site says collected pet waste is hauled away.', 'Quotes are available by calling or texting the public number on the website.'],
  },
  {
    slug: 'poop-911', name: 'POOP 911 DeSoto', featured: false,
    description: 'Recurring residential pet waste removal with a dedicated DeSoto service page.',
    services: ['Pet waste removal'], serviceKeys: ['pet-waste-removal'],
    website: 'https://www.poop911.com/locations/desoto-tx-pet-waste-removal', quoteUrl: 'https://www.poop911.com/locations/desoto-tx-pet-waste-removal', phone: '469-718-5951',
    verifiedCities: ['desoto'],
    sourceUrl: 'https://www.poop911.com/locations/desoto-tx-pet-waste-removal', source: 'Official DeSoto page naming ZIP codes 75115 and 75123. Other city pages were inaccessible and are not treated as verified.',
    details: ['The official DeSoto page advertises recurring yard cleanup.', 'Confirm address availability and current terms through the provider’s website.', 'The local Google Maps listing publishes 469-718-5951; the official site also lists the national (877) POOP-911 contact.'],
  },
];
providers.push(...additionalProviders, ...mapsOnlyProviders);
for (const provider of providers) provider.mapsUrl = provider.mapsUrl || mapLinks[provider.slug] || '';

export function normalizeSiteUrl(value) {
  if (!value) return '';
  const input = value.trim();
  return /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\/?$/.test(input) ? `https://${input.replace(/\/$/, '')}` : input;
}
export const config = {
  siteUrl: normalizeSiteUrl(process.env.SITE_URL || ''),
  quoteUrl: process.env.POOP_SAVVY_QUOTE_URL || providers[0].quoteUrl,
  phone: process.env.POOP_SAVVY_PHONE || providers[0].phone,
};
export function providersForCity(slug) {
  return orderedProviders(slug === 'all' ? providers : providers.filter(p => p.slug === 'poop-savvy' || p.verifiedCities.includes(slug)));
}
export function orderedProviders(items) {
  return [...items].sort((a, b) => Number(b.slug === 'poop-savvy') - Number(a.slug === 'poop-savvy') || a.name.localeCompare(b.name));
}

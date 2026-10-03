# Pet Waste Directory

A static, responsive pet waste removal directory focused on DeSoto and the southern Dallas area. Poop Savvy always receives the first featured placement, with an explicit ownership disclosure.

## Develop

Requires Node.js 22 or newer. There are no third-party runtime or build dependencies.

```sh
cd /workspace/PetWasteDirectory
npm ci --cache /workspace/.cache/npm
npm test
npm run dev
```

Development server: port 4321. `npm run dev` builds once and serves the result; rerun `npm run build` after source changes. `PORT` can override the server port. Existing cloud tasks already have isolated checkouts; do not create a worktree unless explicitly requested.

## Structure

- `src/data.mjs`: provider information, city pages, production configuration, featured ordering.
- `src/templates.mjs`: semantic HTML pages, metadata, ownership disclosures.
- `src/styles.css`: shared design system and responsive layouts.
- `public/assets/app.js`: client-side search, city selection, and Formspree submissions.
- `scripts/build.mjs`: static output into ignored `dist/`.
- `scripts/serve.mjs`: development/static server with correct 404 responses.
- `tests/directory.test.mjs`: ordering, disclosures, indexing, and escaping checks.

## Current content status

Twenty-four provider profiles are included: 21 supported by official websites and three explicitly labeled Google Maps listings. Ten city pages cover DeSoto, Cedar Hill, Duncanville, Lancaster, Red Oak, Waxahachie, Midlothian, Glenn Heights, Ovilla, and Dallas. Competitors appear on city pages only where their official website confirms coverage; regional listings without verified routes appear in the all-provider directory. Poop Savvy stays featured first under city, search, and service filters, explicitly flagging unconfirmed coverage in Dallas and Waxahachie. Featured placement reflects ownership, not an independent quality ranking.

The quote form submits directly to the owner-provided Formspree endpoint, `https://formspree.io/f/mzebwlzj`. It collects name, email, optional phone, city, ZIP, dog count, frequency, and notes. JavaScript keeps visitors on the page, shows success only after an HTTP success response, and retains inputs on failure. Without JavaScript it posts normally to Formspree. Delivery recipients and spam rules are managed in the owner's Formspree dashboard. The privacy page explains this processing. Competitor website buttons are replaced with directory quote links, including a CTA at the bottom of each profile. The selected provider is included in the Formspree submission. Visitors must agree that Poop Savvy receives their inquiry and may contact them or share it with their selected provider for a paid referral. No automatic forwarding or lead sale is implemented; delivery to another company remains a separate owner action. Source URLs remain in research documentation.

Canonical URLs and sitemap use the configured domain. Bare hostnames are normalized to HTTPS. City pages with confirmed provider coverage are indexable; an unsupported city remains noindex.

Google Maps research covered ten city searches and 60 distinct candidate listings. Official websites were checked before publishing service-area claims; duplicate branches were consolidated and remote results excluded. The user-approved environment proxy CA restored Chromium access with TLS verification enabled. Maps returned a limited, changing view; this is not an exhaustive inventory. See `docs/research.md` and `docs/maps-inventory.json`.

## Production settings

Configure these environment values during the build, using verified owner information:

- `SITE_URL`: actual HTTPS directory domain, needed for canonical URLs and `sitemap.xml`.
- `POOP_SAVVY_QUOTE_URL`: legacy external quote destination; the on-page form uses the owner-provided Formspree endpoint.
- `POOP_SAVVY_PHONE`: optional real public phone number.

```sh
npm run build
```

Deploy the generated `dist/` to a static host supporting directory `index.html` pages and `404.html`. No host has been selected or deployed. Never use a made-up canonical domain. HTTPS URL validation is enforced by the build. Configure the host's logging/contact details in the privacy policy before launch.

## SEO and publication

The HTML includes crawlable text, provider and guide links, page titles/descriptions, semantic headings, and factual Organization/WebSite structured data. No AggregateRating, independent number-one ranking, or fake address is emitted. Adding structured data does not guarantee rich results or search rankings.

Before public launch:

1. Refresh Google Maps and official-source research periodically; verify additional providers before adding them.
2. Verify the Formspree form is active and its notification recipient is correct in the owner dashboard.
3. Confirm the configured production domain and select a static host.
4. Update the privacy page for the selected host and verify live forms.
5. Deploy and submit the generated sitemap in Google Search Console.

## Validation

`npm test` runs 12 meaningful tests. Browser QA used Python Playwright with the existing `/usr/bin/chromium` because a Browser/IAB plugin was unavailable. Desktop 1440px and mobile 390px were checked for image loading, search/reset, city navigation, form validation and success/error feedback, all 40 pages, source-based city/service filters, directory quote routing, sitemap, and 404 handling. Formspree browser requests were intercepted to test validation, payload, HTTP failure with retained inputs, and successful confirmation without sending a real lead.

See `docs/design-review.md` for the design comparison and deliberate content changes.

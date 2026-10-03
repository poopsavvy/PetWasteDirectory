# Research record

Research performed October 2–3, 2026. Ten Google Maps searches covered DeSoto and the nine neighboring directory cities. Up to three result-feed scrolls per query produced 60 distinct candidate place links. The sanitized discovery inventory is in [maps-inventory.json](maps-inventory.json). Forty-five unique candidate websites were reviewed; dynamic sites were also inspected in Chromium where needed.

Maps returned a limited view. Results included remote businesses, duplicate branches, and companies without confirmed local routes. Appearance in a search result does not establish service coverage. This directory contains 24 consolidated provider profiles: 21 with official website evidence and three explicitly Maps-sourced profiles. It is not an exhaustive census.

Poop Savvy receives the first placement because it owns this directory. This is disclosed on the site and remains visible under filters. No copied ratings, reviews, invented prices, independent number-one claim, or unverified address is published. Competitors retain their own contact links.

## Published sources

| Provider | Source | Confirmed directory cities or scope |
| --- | --- | --- |
| Poop Savvy | [Official website](https://poop-savvy.com/) | DeSoto, Lancaster, Duncanville, Cedar Hill, Glenn Heights, Red Oak, Ovilla, Midlothian |
| Booty Scoopy | [Official website](https://www.bootyscoopy.com/desoto-pet-waste-removal) | DeSoto, Cedar Hill, Lancaster, Red Oak, Midlothian, Waxahachie, Glenn Heights, Ovilla |
| Scoop Soldiers | [Official website](https://www.scoopsoldiers.com/locations/dallas) | DeSoto, Cedar Hill, Duncanville, Lancaster, Midlothian, Dallas |
| The Scoopinator | [Official website](https://www.thescoopinator.com/) | Dallas, Duncanville, Cedar Hill |
| POOP 911 DeSoto | [Official website](https://www.poop911.com/locations/desoto-tx-pet-waste-removal) | DeSoto |
| Top Dog Scoop Co. | [Official website](https://topdogscoopco.com/) | Red Oak, Glenn Heights, Ovilla, Midlothian, Waxahachie |
| Scoopity Doo Doo | [Official website](https://pooperscoopers.indallasfortworth.com/) | Midlothian, Waxahachie, Ovilla, Red Oak |
| Magic Unicorn | [Official website](https://www.magicunicorndfw.com/) | DeSoto, Duncanville, Lancaster, Dallas |
| Pet Butler of Dallas | [Official website](https://www.petbutler.com/locations/dallas-texas-pooper-scooper/) | DeSoto, Cedar Hill, Duncanville, Dallas |
| Doggy Doggz | [Official website](https://doggydoggz.com/) | Dallas |
| Sgt. Poopers | [Official website](https://sgtpoopers.com/) | Dallas |
| Poopie Patrol | [Official website](https://poopiepatrol.com/) | Dallas |
| Scoop Masters DFW | [Official website](https://www.scoopmasters.com/dallas) | Dallas |
| Pappy the Pooper Scooper | [Official website](https://www.pappythepooperscooper.com/) | Dallas |
| Pet Waste Inc. | [Official website](https://petwaste.com/dfw/) | Dallas |
| I Scoop Poop | [Official website](https://www.iscooppoopdfw.com/) | DFW Metroplex |
| GoodBoy! Pet Waste Removal | [Official website](https://www.goodboypetwasteremoval.com/our-services) | Ellis County |
| Super Scoopers | [Official website](https://www.superscoopers.com/) | DFW Metroplex |
| Pet Doodie | [Official website](https://petdoodie.com/) | Dallas |
| Scoop It | [Official website](https://www.scoopit.com/) | Fort Worth Metroplex |
| EcoClear Solutions | [Official website](https://ecoclearsolutions.net/) | DFW Metroplex |
| Tony’s Pet Waste Removal | [Google Maps](https://www.google.com/maps/place/Tony%27s+pet+waste+removal/data=!4m7!3m6!1s0x864e915131deb205:0xc367abc5343d3c02!8m2!3d32.7430719!4d-96.963595!16s%2Fg%2F11j8p88thp!19sChIJBbLeMVGRToYRAjw9NMWrZ8M) | Maps listing only; city coverage unconfirmed |
| PAWS Pooper Scoopers | [Google Maps](https://www.google.com/maps/place/PAWS+Pooper+Scoopers+Pet+Waste+Removal/data=!4m7!3m6!1s0x864c274624a396bd:0x2f57bf5f4f15a253!8m2!3d32.9707712!4d-96.877321!16s%2Fg%2F11txv82h0l!19sChIJvZajJEYnTIYRU6IVT1-_Vy8) | Maps listing only; city coverage unconfirmed |
| DoodyCalls of Dallas–Fort Worth | [Google Maps](https://www.google.com/maps/place/DoodyCalls%C2%AE+of+Dallas-Fort+Worth/data=!4m7!3m6!1s0x43053fcd267faa81:0xc236d9692777b7ca!8m2!3d32.8051163!4d-97.0347402!16s%2Fg%2F11vrlkjkgc!19sChIJgap_Js0_BUMRyrd3J2nZNsI) | Maps listing only; city coverage unconfirmed |

Individual profiles include source links, service details, and coverage qualifications. Nearby POOP 911 branches are recorded in src/poop-911-locations.mjs and consolidated in one profile; multiple Doggy Doggz places are also consolidated. Remote Austin, Houston, California, and New Mexico results were excluded from the local directory. Regional providers without explicit coverage appear only in the regional view.

## Access and limitations

The user explicitly approved trusting the environment-supplied proxy CA. Chromium was restored using its supported NSS trust store, with TLS verification enabled. The helper is retained outside the checkout at /workspace/.cloud-setup/browser-trust.py; Chromium research needs access to that user trust database. No certificate-verification bypass was used.

DoodyCalls' official website returned a Cloudflare HTTP 403, including in a normal browser. Its profile therefore uses the verified public Maps listing and avoids unsupported coverage claims. The configured owner quote continuation destination also returned HTTP 403; it is retained alongside the independently verified https://poop-savvy.com/#quote-section form link. The local quote tool prepares a message without submitting a lead.

Poop Savvy's website names eight directory cities; Dallas and Waxahachie are explicitly marked unconfirmed. Routes, contact details, prices, and availability can change and should be reconfirmed directly. No site deployment or Search Console submission has been performed.

## Quote form update

The owner supplied https://formspree.io/f/mzebwlzj and authorized connecting it. The directory quote form now POSTs to this endpoint. This supersedes the local message preparation flow above. Name and email are required; phone is optional. Success and failure handling were browser-tested using intercepted responses; no actual lead or email delivery was tested. Recipient configuration is managed by the owner in Formspree.

## Directory lead routing update

Competitor website anchors have been removed from listings and profiles. Source URLs remain in research documentation and source data; public Maps reference links remain. Quote buttons open the directory form with the chosen provider identified. Submissions go to the owner's Formspree endpoint. No automatic forwarding or lead sale is implemented. The referral copy and consent checkbox have been removed at the owner's request.

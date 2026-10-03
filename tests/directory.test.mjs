import test from 'node:test';
import assert from 'node:assert/strict';
import { orderedProviders, providersForCity, cities, config, normalizeSiteUrl, providers } from '../src/data.mjs';
import { home, cityPage, profile, quote, escape } from '../src/templates.mjs';
test('Poop Savvy stays first regardless of alphabetical order or input position',()=>{
 const result=orderedProviders([{slug:'aaa',name:'AAA Cleanup'},{slug:'poop-savvy',name:'Poop Savvy'},{slug:'zzz',name:'Z Cleanup'}]);
 assert.equal(result[0].slug,'poop-savvy');assert.equal(result[1].slug,'aaa');
});
test('Poop Savvy is featured first on every city page; competitors require confirmed city coverage',()=>{
 for(const city of cities){const entries=providersForCity(city.slug);assert.equal(entries[0].slug,'poop-savvy');assert.ok(entries.slice(1).every(p=>p.verifiedCities.includes(city.slug)));}
});
test('unsupported Poop Savvy cities disclose that coverage is unconfirmed',()=>{
 assert.match(cityPage(cities.find(c=>c.slug==='dallas')),/City coverage not confirmed/);
});
test('static home has crawlable provider links and ownership disclosure',()=>{
 const html=home();assert.match(html,/href="\/providers\/poop-savvy\/"/);assert.match(html,/Owned and operated by Poop Savvy/);assert.match(html,/Booty Scoopy/);assert.match(html,/POOP 911/);
});
test('verified city pages are indexable; a city with no verified coverage is noindex',()=>{
 assert.match(cityPage(cities[0]),/content="index,follow"/);
 assert.match(cityPage({slug:'unknown-city',name:'Unknown City',context:'Confirm coverage.'}),/noindex,follow/);
});
test('competitor profiles use their own contact routes and source evidence',()=>{
 for(const p of providers.slice(1)){const html=profile(p);assert.ok(html.includes(p.quoteUrl));assert.ok(html.includes(p.sourceUrl));assert.ok(!html.split('<main id="main">')[1].split('</main>')[0].includes('href="/quote/"'));
 }
});
test('quote workflow does not falsely claim to submit a lead',()=>{
 assert.match(quote(),/This message has not been sent/);assert.match(quote(),/Get my quote from Poop Savvy/);
 if(config.quoteUrl)assert.match(quote(),/Continue to Poop Savvy/);
});
test('public hostname configuration gains HTTPS without changing full URLs',()=>{
 assert.equal(normalizeSiteUrl('directory.example.com'),'https://directory.example.com');assert.equal(normalizeSiteUrl('https://directory.example.com/'),'https://directory.example.com/');
});
test('listing copy escapes markup',()=>{assert.equal(escape('<script>"&'), '&lt;script&gt;&quot;&amp;');});
test('regional and Maps-only providers do not acquire invented city coverage',()=>{
 for(const p of providers.filter(p=>p.mapsOnly || (p.region && !p.verifiedCities.length))){
  assert.ok(providersForCity('all').some(row=>row.slug===p.slug));
  for(const city of cities) assert.ok(!providersForCity(city.slug).some(row=>row.slug===p.slug));
 }
});
test('Maps-only profiles distinguish their evidence from official website coverage',()=>{
 const p=providers.find(p=>p.slug==='tonys-pet-waste-removal');
 const html=profile(p);assert.match(html,/Maps-sourced listing/);assert.match(html,/View the Maps source/);assert.ok(html.includes(p.mapsUrl));
});
test('a missing public number does not create an empty call link',()=>{
 assert.ok(!profile(providers.find(p=>p.slug==='pet-doodie')).includes('href="tel:"'));
});

import { mkdir, rm, writeFile, copyFile, cp } from 'node:fs/promises';
import { cities, config, providers } from '../src/data.mjs';
import { home, cityPage, profile, quote, guide, about, privacy, allProviders, layout } from '../src/templates.mjs';
import { paw } from '../src/icons.mjs';
for (const [name, value] of Object.entries({SITE_URL:config.siteUrl, POOP_SAVVY_QUOTE_URL:config.quoteUrl})) {
  if (value && !/^https:\/\//.test(value)) throw new Error(`${name} must be an absolute HTTPS URL`);
  if (value) { try { const url = new URL(value); if (url.username || url.password) throw new Error(); } catch { throw new Error(`${name} must be a valid public HTTPS URL without credentials`); } }
}
await rm(new URL('../dist',import.meta.url),{recursive:true,force:true});
await mkdir('dist',{recursive:true});
await cp('public','dist',{recursive:true});
await copyFile('src/styles.css','dist/assets/styles.css');
await writeFile('dist/assets/favicon.svg',paw.replace('aria-hidden="true"','xmlns="http://www.w3.org/2000/svg"').replace('currentColor','#173f35'));
const pages = [['/',home()],['/providers/',allProviders()],...providers.map(p=>[`/providers/${p.slug}/`,profile(p)]),['/quote/',quote()],['/guides/choosing-a-provider/',guide()],['/about/',about()],['/privacy/',privacy()],...cities.map(city=>[`/cities/${city.slug}/`,cityPage(city)])];
for (const [path,content] of pages) {await mkdir(`dist${path}`,{recursive:true}); await writeFile(`dist${path}index.html`,content);}
await writeFile('dist/404.html',layout({title:'Page not found | Pet Waste Directory',description:'Find pet waste removal providers near DeSoto.',noindex:true,body:'<section class="page-head"><h1>This trail ends here.</h1><p>We couldn’t find that page.</p><a class="button green" href="/">Back to the directory</a></section>'}));
const indexable = pages.filter(([,content])=>!content.includes('content="noindex,follow"'));
const xmlEscape=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
if (config.siteUrl) await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${indexable.map(([path])=>`<url><loc>${xmlEscape(new URL(path,config.siteUrl).href)}</loc></url>`).join('')}</urlset>`);
await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\n${config.siteUrl ? `Sitemap: ${new URL('/sitemap.xml',config.siteUrl).href}\n` : ''}`);
console.log(`Built ${pages.length} static pages. ${config.siteUrl ? 'Canonical URLs and sitemap enabled.' : 'Set SITE_URL to the actual production domain before deployment.'}`);
console.log(config.quoteUrl ? 'Direct quote route enabled.' : 'Quote tool prepares a local message; owner contact URL still needed.');

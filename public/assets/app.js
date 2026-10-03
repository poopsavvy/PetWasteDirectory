const form = document.querySelector('[data-location-form]');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const slug = new FormData(form).get('city');
  window.location.assign(slug === 'all' ? '/providers/#directory' : `/cities/${encodeURIComponent(slug)}/#directory`);
});
document.querySelector('[data-city-filter]')?.addEventListener('change', event => {
  window.location.assign(event.target.value === 'all' ? '/providers/#directory' : `/cities/${encodeURIComponent(event.target.value)}/#directory`);
});
const search = document.querySelector('[data-provider-search]');
const service = document.querySelector('[data-service-filter]');
function filter() {
  const term = search?.value.trim().toLowerCase() || '';
  let count = 0;
  document.querySelectorAll('[data-provider]').forEach(row => {
    const shown = row.dataset.name.includes(term) && (service.value === 'all' || row.dataset.services.split(' ').includes(service.value));
    row.hidden = !shown && row.dataset.featured !== 'true';
    if (shown) count++;
  });
  const empty = document.querySelector('[data-empty]');
  if (empty) empty.hidden = count > 0;
  const live = document.querySelector('[data-count]');
  if (live) live.textContent = `${count} matching provider${count === 1 ? '' : 's'}. Poop Savvy remains featured.`;
}
search?.addEventListener('input', filter);
service?.addEventListener('change', filter);
document.querySelector('[data-reset]')?.addEventListener('click', () => { search.value = ''; service.value = 'all'; filter(); search.focus(); });
const quote = document.querySelector('[data-quote-form]');
if (quote) {
  const city = new URLSearchParams(location.search).get('city');
  if ([...quote.elements.city.options].some(o => o.value === city)) quote.elements.city.value = city;
  quote.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(quote);
    const cityName = quote.elements.city.selectedOptions[0].textContent;
    const message = `Hi Poop Savvy! I’d like a pet waste removal quote.\n\nCity: ${cityName}\nZIP code: ${data.get('zip')}\nNumber of dogs: ${data.get('dogs')}\nPreferred frequency: ${data.get('frequency')}\n${data.get('notes') ? `Additional details: ${data.get('notes')}\n` : ''}\nPlease confirm service availability, what is included, and the price for my property.`;
    document.querySelector('#quote-message').value = message;
    const result = document.querySelector('[data-quote-result]');
    result.hidden = false;
    result.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
}
document.querySelector('[data-copy]')?.addEventListener('click', async () => {
  const text = document.querySelector('#quote-message');
  const status = document.querySelector('[data-copy-status]');
  try { await navigator.clipboard.writeText(text.value); status.textContent = 'Copied. Your request has not been sent.'; }
  catch { text.focus(); text.select(); status.textContent = 'Select and copy the message above. Your request has not been sent.'; }
});

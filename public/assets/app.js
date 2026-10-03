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
  let sending = false;
  quote.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending || !quote.reportValidity()) return;
    sending = true;
    const button = quote.querySelector('[type="submit"]');
    const status = quote.querySelector('[data-quote-status]');
    button.disabled = true;
    quote.setAttribute('aria-busy', 'true');
    status.textContent = 'Sending your request…';
    try {
      const response = await fetch(quote.action, {method: 'POST', body: new FormData(quote), headers: {Accept: 'application/json'}});
      if (!response.ok) throw new Error('Submission failed');
      quote.hidden = true;
      const result = document.querySelector('[data-quote-result]');
      result.hidden = false;
      result.focus();
    } catch {
      status.textContent = 'We couldn’t confirm your request was sent. Your details are still here. Please try again or call Poop Savvy.';
    } finally {
      sending = false;
      button.disabled = false;
      quote.removeAttribute('aria-busy');
    }
  });
}

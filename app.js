const dialog = document.querySelector('.search-dialog');
const input = document.querySelector('#search-input');
const results = document.querySelector('#search-results');
const status = document.querySelector('#search-status');
const base = document.currentScript.dataset.base;
let indexPromise;
let opener;
let queryVersion = 0;
async function getIndex() {
  if (!indexPromise) indexPromise = fetch(`${base}/search-index.json`).then(response => {
    if (!response.ok) throw new Error('Search index unavailable');
    return response.json();
  }).catch(error => { indexPromise = undefined; throw error; });
  return indexPromise;
}
function closeSearch() { dialog.close(); opener?.focus(); }
async function search() {
  const version = ++queryVersion;
  const query = input.value.trim().toLocaleLowerCase();
  results.replaceChildren();
  status.textContent = 'Loading documentation…';
  try {
    const index = await getIndex();
    if (version !== queryVersion) return;
    const terms = query.split(/\s+/).filter(Boolean);
    const matches = terms.length ? index.map(item => {
      const title = item.title.toLocaleLowerCase();
      const body = item.text.toLocaleLowerCase();
      const group = item.group.toLocaleLowerCase();
      const score = terms.every(term => `${title} ${body} ${group}`.includes(term))
        ? terms.reduce((n, term) => n + (title.includes(term) ? 10 : 0) + (group.includes(term) ? 3 : 0) + (body.includes(term) ? 1 : 0), title === query ? 50 : 0) : 0;
      return { ...item, score };
    }).filter(item => item.score > 0).sort((a, b) => b.score - a.score) : index.filter(item => ['installation', 'coming-from-arc', 'Peek-on-Shift-Click', 'Hide-Toolbar', 'Little-Dia'].some(id => decodeURIComponent(item.url).endsWith(`/${id}/`)));
    status.textContent = query ? `${matches.length} ${matches.length === 1 ? 'result' : 'results'}${matches.length ? '' : '. Try a feature name like “toolbar” or “tabs”.'}` : 'A few places to start';
    for (const item of matches.slice(0, 25)) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.url;
      const category = document.createElement('small');
      category.textContent = item.group;
      const title = document.createElement('strong');
      title.textContent = item.title;
      const excerpt = document.createElement('p');
      const pos = terms.length ? Math.max(0, item.text.toLowerCase().indexOf(terms[0]) - 45) : 0;
      excerpt.textContent = `${pos ? '…' : ''}${item.text.slice(pos, pos + 150)}${item.text.length > pos + 150 ? '…' : ''}`;
      a.append(category, title, excerpt);
      li.append(a);
      results.append(li);
    }
  } catch {
    if (version === queryVersion) status.textContent = 'Search couldn’t load. Try typing again, or browse Documentation in the navigation.';
  }
}
function openSearch(button) {
  opener = button || document.activeElement;
  if (!dialog.open) dialog.showModal();
  input.focus();
  search();
}
document.querySelectorAll('[data-search-open]').forEach(button => button.addEventListener('click', () => openSearch(button)));
document.querySelector('[data-search-close]').addEventListener('click', closeSearch);
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeSearch(); } });
dialog.addEventListener('cancel', event => { event.preventDefault(); closeSearch(); });
input.addEventListener('input', search);
input.addEventListener('keydown', event => { if (event.key === 'ArrowDown') { event.preventDefault(); results.querySelector('a')?.focus(); } if (event.key === 'Enter') results.querySelector('a')?.click(); });
results.addEventListener('keydown', event => {
  const links = [...results.querySelectorAll('a')];
  const current = links.indexOf(document.activeElement);
  if (event.key === 'ArrowDown') { event.preventDefault(); links[Math.min(links.length - 1, current + 1)]?.focus(); }
  if (event.key === 'ArrowUp') { event.preventDefault(); if (current <= 0) input.focus(); else links[current - 1].focus(); }
});
document.addEventListener('keydown', event => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); openSearch(); } });
for (const pre of document.querySelectorAll('.prose pre')) {
  const button = document.createElement('button');
  button.className = 'copy-code';
  button.textContent = 'Copy';
  button.setAttribute('aria-label', 'Copy command');
  const feedback = document.createElement('span');
  feedback.className = 'sr-only';
  feedback.setAttribute('role', 'status');
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(pre.querySelector('code').textContent);
      button.textContent = 'Copied';
      feedback.textContent = 'Command copied';
      setTimeout(() => { button.textContent = 'Copy'; feedback.textContent = ''; }, 2000);
    } catch { button.textContent = 'Select text'; feedback.textContent = 'Copy unavailable. Select the command and copy it manually.'; }
  });
  pre.append(button, feedback);
}
const mobileNav = document.querySelector('.mobile-nav');
if (mobileNav && matchMedia('(max-width: 767px)').matches) mobileNav.open = false;

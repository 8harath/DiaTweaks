import { mkdir, readFile, writeFile, readdir, cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = path.join(root, 'dist');
const base = (process.env.SITE_BASE || '').replace(/\/$/, '');
if (base && !/^\/[\w/-]+$/.test(base)) throw new Error('SITE_BASE must be a path such as /DiaTweaks');
const href = (p = '') => `${base}/${p}`;
const repo = 'https://github.com/JaceThings/DiaTweaks';
const escape = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const slug = s => s.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '').replace(/\s+/g, '-');
const source = JSON.parse(await readFile(path.join(root, 'content/wiki-source.json'), 'utf8'));
const side = await readFile(path.join(root, 'content/wiki/_Sidebar.md'), 'utf8');
const groups = [];
const docs = new Map();
for (const line of side.split('\n')) {
  const group = line.match(/^- \*\*(.+)\*\*$/);
  if (group) groups.push({ title: group[1], pages: [] });
  const page = line.match(/^(\s+)- \[([^\]]+)\]\(([^)]+)\)/);
  if (page) {
    const [, indent, title, id] = page;
    const md = await readFile(path.join(root, 'content/wiki', `${id}.md`), 'utf8');
    const item = { title, id, md, group: groups.at(-1).title, child: indent.length > 2, url: href(`wiki/${encodeURIComponent(id)}/`) };
    docs.set(id, item);
    groups.at(-1).pages.push(item);
  }
}
docs.set('Home', { title: 'All tweaks', id: 'Home', md: await readFile(path.join(root, 'content/wiki/Home.md'), 'utf8'), url: href('wiki/'), group: 'Documentation' });
const readme = await readFile(path.join(root, '../README.md'), 'utf8');
const segment = (start, end) => readme.split(start)[1].split(end)[0].trim();
const guides = [
  { id: 'installation', title: 'Install DiaTweaks', label: 'Installation', group: 'Getting started', md: `A few steps in Terminal. After that, make it yours in Settings.\n\n> **Before you begin:** DiaTweaks is unofficial and supports Apple Silicon Macs running macOS 14 or later. It modifies a copy of Dia, including its signature. Read the steps below before installing.\n\n## Install\n\n${segment('## Install', '## The `diatweaks` command')}\n\n## Choose your first tweak\n\nOpen **Dia → Settings → Patches**. Every tweak has its own switch, preview, and wiki page. Start with the [Coming from Arc](../coming-from-arc/) guide, or [browse all tweaks](../wiki/).\n\n## Password managers\n\nApple Passwords, its passkeys, and 1Password need the matching tweak enabled in the **Passwords** section. These are off by default. Read [Allow iCloud Passkeys](../wiki/Allow-iCloud-Passkeys/) or [Allow 1Password](../wiki/Allow-1Password/) before relying on them.\n\n## If something feels wrong\n\nSee [updates and recovery](../maintenance/) for restoring the original app and troubleshooting.` },
  { id: 'coming-from-arc', title: 'A familiar place to start.', label: 'Coming from Arc', group: 'Getting started', md: await readFile(path.join(root, 'content/coming-from-arc.md'), 'utf8') },
  { id: 'commands', title: 'The command-line guide', label: 'Commands', group: 'Reference', md: `Prefer Terminal? Every tweak is a command away.\n\n${segment('## The `diatweaks` command', '## Updating')}` },
  { id: 'maintenance', title: 'Updates & recovery', label: 'Updates & recovery', group: 'Getting started', md: `Keep your setup current, and know how to get back to the original Dia.\n\n## Updating\n\n${segment('## Updating', '## FAQ')}\n\n## Questions & troubleshooting\n\n${segment('## FAQ', '## Uninstall')}\n\n## Restore the original Dia\n\n${segment('## Uninstall', '## Contributing')}` },
  { id: 'contributing', title: 'Built in the open.', label: 'Contributing', group: 'Community', md: `DiaTweaks is maintained by Jace and its contributors. The wiki, previews, code, and this website are public.\n\n## Improve the documentation\n\nFound an unclear explanation? Suggest a change in the [upstream repository](${repo}/issues), and link the wiki page. The wiki is the source of truth; this website renders a versioned snapshot of it.\n\n## Make a tweak\n\nStart with [Discoveries](../wiki/Discoveries/) to learn how Dia is built. Then read the project's [contribution guide](${repo}/blob/main/CONTRIBUTING.md) for patch structure, tests, and pull request requirements.\n\n## Improve this website\n\nThe website lives in \`website/\` in the repository. It builds to static HTML and runs on GitHub Pages. See [the website README](${repo}/blob/main/website/README.md) for local development and wiki synchronization.\n\n## Independent by design\n\nDiaTweaks is unofficial and is not affiliated with The Browser Company. Dia and Arc belong to their respective owners.` }
].map(g => ({ ...g, url: href(`${g.id}/`) }));

function rewriteUrl(url, kind) {
  const raw = 'https://raw.githubusercontent.com/wiki/JaceThings/DiaTweaks/';
  if (url.startsWith(raw)) return href(`wiki-assets/${url.slice(raw.length)}`);
  if (url.startsWith(`${repo}/wiki`)) {
    const rest = url.slice(`${repo}/wiki`.length).replace(/^\//, '');
    const [id, hash] = rest.split('#');
    if (!id || id === 'Home') return href('wiki/') + (hash ? `#${hash}` : '');
    if (docs.has(decodeURIComponent(id))) return docs.get(decodeURIComponent(id)).url + (hash ? `#${hash}` : '');
  }
  if (url.startsWith(`${repo}/blob/main/README.md`)) {
    if (url.includes('#the-diatweaks-command')) return href('commands/');
    if (url.includes('#install')) return href('installation/');
    return href('maintenance/');
  }
  if (kind === 'a' && !/^(https?:|mailto:|#|\/|\.\.)/.test(url)) {
    const [id, hash] = url.replace(/\.md(?=#|$)/, '').split('#');
    if (docs.has(decodeURIComponent(id))) return docs.get(decodeURIComponent(id)).url + (hash ? `#${hash}` : '');
  }
  return url;
}
function render(md) {
  const headings = [];
  const html = marked.parse(md).replace(/<h([2-4])>(.*?)<\/h\1>/gs, (_, level, text) => {
    const title = text.replace(/<[^>]+>/g, '');
    const id = slug(title);
    if (level === '2') headings.push({ title, id });
    return `<h${level} id="${escape(id)}">${text}<a class="heading-anchor" href="#${escape(id)}" aria-label="Link to ${escape(title)}">#</a></h${level}>`;
  });
  return { headings, html: sanitizeHtml(html, {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img', 'details', 'summary', 'video', 'source'],
    allowedAttributes: { ...sanitizeHtml.defaults.allowedAttributes, '*': ['id', 'class'], a: ['href', 'title', 'aria-label'], img: ['src', 'alt', 'width', 'height', 'loading', 'decoding'], video: ['src', 'controls', 'muted', 'loop', 'playsinline', 'poster'], source: ['src', 'type'] },
    transformTags: {
      a: (tag, attrs) => ({ tagName: tag, attribs: { ...attrs, href: rewriteUrl(attrs.href || '', 'a') } }),
      img: (tag, attrs) => ({ tagName: tag, attribs: { ...attrs, src: rewriteUrl(attrs.src || '', 'img'), loading: 'lazy', decoding: 'async' } })
    }
  }) };
}
const link = (url, title, cls = '') => `<a class="${cls}" href="${url}">${escape(title)}</a>`;
function header(active = '') {
  return `<a class="skip-link" href="#main">Skip to content</a><header class="site-header"><a class="wordmark" href="${href()}" aria-label="DiaTweaks home">dia<span class="brand-divider">/</span>tweaks<span class="brand-dot"></span></a><nav aria-label="Main navigation">${link(href('wiki/'), 'Documentation', active === 'wiki' ? 'active' : '')}${link(href('coming-from-arc/'), 'Coming from Arc', active === 'coming-from-arc' ? 'active' : '')}${link(repo, 'GitHub ↗', 'github-link')}</nav><button class="search-trigger" data-search-open><span>Search the docs</span><kbd>⌘ K</kbd></button></header>`;
}
function footer() {
  return `<footer class="site-footer"><div><a class="wordmark" href="${href()}">dia<span class="brand-divider">/</span>tweaks</a><p>A community project. A browser that feels like yours.</p><small>Unofficial. Not affiliated with The Browser Company.</small></div><div>${link(repo, 'Source code ↗')}${link(`${repo}/wiki`, 'Original wiki ↗')}${link(href('contributing/'), 'Contribute')}</div></footer>`;
}
function search() {
  return `<dialog class="search-dialog" aria-labelledby="search-title"><div class="search-top"><h2 id="search-title">Find your tweak.</h2><button data-search-close aria-label="Close search">Esc</button></div><label class="sr-only" for="search-input">Search documentation</label><input id="search-input" type="search" placeholder="Try “Peek”, “toolbar”, or “passwords”…" autocomplete="off"><p id="search-status" role="status">Search all guides and wiki pages.</p><ul id="search-results"></ul><div class="search-help">Search by feature, question, or command. <span>↵ open a result · Esc close</span></div></dialog>`;
}
function shell(title, content, cls = '', active = '') {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${escape(title === 'Home' ? 'Make Dia feel like home. Community guides, Arc-inspired tweaks, and the complete DiaTweaks wiki.' : `${title} — DiaTweaks documentation, options, and instructions.`)}"><meta name="theme-color" content="#f8f8f2"><title>${title === 'Home' ? 'DiaTweaks — Make Dia feel like home.' : `${escape(title)} · DiaTweaks`}</title><link rel="icon" href="${href('favicon.svg')}" type="image/svg+xml"><link rel="stylesheet" href="${href('styles.css')}"><script defer src="${href('app.js')}" data-base="${base}"></script></head><body class="${cls}">${header(active)}${content}${footer()}${search()}</body></html>`;
}
function sidebar(current) {
  const fixed = `<div class="sidebar-start"><p class="nav-label">Start here</p>${guides.filter(g => g.id !== 'contributing').map(g => link(g.url, g.label, current.id === g.id ? 'current' : '')).join('')}</div>`;
  return `<aside class="sidebar"><details class="mobile-nav" open><summary>Explore the docs <span>⌄</span></summary><nav aria-label="Documentation">${fixed}<p class="nav-label">The wiki</p>${link(href('wiki/'), 'All tweaks', current.id === 'Home' ? 'current' : '')}${groups.map(g => `<details class="nav-group" ${g.title === current.group ? 'open' : ''}><summary>${escape(g.title)}<span>${g.pages.length}</span></summary>${g.pages.map(p => `<a class="${p.child ? 'nested ' : ''}${p.id === current.id ? 'current' : ''}" ${p.id === current.id ? 'aria-current="page"' : ''} href="${p.url}">${escape(p.title)}</a>`).join('')}</details>`).join('')}<p class="nav-label">Community</p>${link(href('contributing/'), 'Contributing')}${link(`${repo}/issues`, 'Report an issue ↗')}</nav></details></aside>`;
}
async function emit(route, html) {
  const dir = path.join(out, route);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'index.html'), html);
}
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(path.join(root, 'public'), out, { recursive: true });

const descriptions = {
  'Page': 'More room for what you’re reading.', 'Toolbar': 'A quieter frame around the web.', 'Sidebar & Tab Bar': 'Your tabs, with a little less clutter.',
  'Tabs': 'Keep, close, group, and find your place.', 'Command Bar': 'A familiar way to go anywhere.', 'New Tab Page': 'A fresh start, with less in the way.',
  'AI': 'Choose how much AI is right for you.', 'Window': 'Make yourself at home on macOS.', 'Passwords': 'Reconnect your passwords and passkeys.', 'Links': 'A quick look, without losing your place.', 'Making tweaks': 'Notes from under the hood.'
};
const categories = groups.filter(g => g.title !== 'Making tweaks');
const count = categories.reduce((sum, g) => sum + g.pages.length, 0);
const featured = ['Peek-on-Shift-Click', 'Little-Dia', 'Hide-Toolbar', 'Open-New-Tabs-in-Command-Bar'];
const home = `<main id="main"><section class="hero"><div class="hero-copy"><p class="eyebrow"><span class="tiny-dot"></span> A little more familiar. A little more you.</p><h1>Make Dia<br>feel like home.</h1><p class="hero-description">The familiar touches you miss. The small changes you want. Your guide to making Dia yours.</p><div class="hero-actions">${link(href('installation/'), 'Get started ↗', 'button primary')}${link(href('wiki/'), 'Explore the tweaks', 'text-link')}</div></div><figure class="hero-visual"><div class="visual-topline"><span>SMALL TWEAKS. BIG DIFFERENCE.</span><span>01 / PEEK</span></div><img src="${href('wiki-assets/previews/vertical-peek.webp')}" width="800" height="500" alt="Real DiaTweaks preview: a link opened in a Peek card over the current page" fetchpriority="high"><figcaption><span>Keep your place. Take a peek.</span>${link(href('wiki/Peek-on-Shift-Click/'), 'Meet Peek ↗')}</figcaption></figure></section><section class="context-strip"><p>Made for your Mac.<br><span>Apple Silicon · macOS 14+</span></p><p>Small, independent, open source.<br><span>Built by Jace & the community.</span></p><p>${count} ways to make it yours.<br><span>Every tweak has an on / off switch.</span></p></section><section class="arc-section"><div class="arc-symbol" aria-hidden="true">Arc<span>→</span>Dia</div><div><h2>New browser.<br>Familiar instincts.</h2><p>Peek at a link. Fold away your pinned tabs. Bring back a command bar that stays out of your way. Start with the things you already love.</p>${link(href('coming-from-arc/'), 'Coming from Arc →', 'text-link')}</div><div class="familiar-list">${featured.map((id, i) => `<a href="${docs.get(id).url}"><span class="list-number">0${i + 1}</span><span>${escape(docs.get(id).title)}</span><span>↗</span></a>`).join('')}</div></section><section class="browse-section"><div class="section-heading"><h2>Less searching.<br>More making it yours.</h2><p>Pick a part of your browser. Find out what you can change.</p></div><div class="category-grid">${categories.map((g, i) => `<a class="category" href="${href(`wiki/#${slug(g.title)}`)}"><span class="category-number">${String(i + 1).padStart(2, '0')}</span><h3>${escape(g.title)}</h3><p>${descriptions[g.title]}</p><span class="category-bottom">${g.pages.length} ${g.pages.length === 1 ? 'tweak' : 'tweaks'} <span>↗</span></span></a>`).join('')}</div></section><section class="start-section"><h2>A few steps.<br>A browser that’s yours.</h2><div><p>Install once, then explore at your own pace. The documentation walks you through the details, including updates and getting back to the original Dia.</p>${link(href('installation/'), 'Get started ↗', 'button primary')}</div></section></main>`;
await emit('', shell('Home', home, 'home'));

for (const doc of [...guides, ...docs.values()]) {
  const rendered = render(doc.md);
  const isWiki = docs.has(doc.id);
  const original = isWiki ? `${repo}/wiki/${encodeURIComponent(doc.id)}` : `${repo}/blob/main/${doc.id === 'coming-from-arc' ? 'website/content/coming-from-arc.md' : 'README.md'}`;
  const wikiIndex = doc.id === 'Home';
  const directory = wikiIndex ? `<p class="directory-intro">${count} tweaks, organized just like Settings. Every page explains what changes, how to turn it on, and when you might want it.</p><div class="wiki-directory">${categories.map(g => `<section id="${slug(g.title)}"><h2>${escape(g.title)}</h2><p>${descriptions[g.title]}</p><div>${g.pages.map(p => `<a href="${p.url}" class="${p.child ? 'sub-tweak' : ''}">${escape(p.title)}<span>↗</span></a>`).join('')}</div></section>`).join('')}</div><section class="developer-banner"><h2>Curious about how it works?</h2><p>Explore the developer notes on Dia’s internals and making your own tweaks.</p>${link(href('wiki/Discoveries/'), 'Read Discoveries →', 'text-link')}</section>` : rendered.html;
  const toc = wikiIndex ? categories.map(g => ({ title: g.title, id: slug(g.title) })) : rendered.headings;
  const main = `<div class="docs-layout">${sidebar(doc)}<main id="main" class="doc-main"><div class="breadcrumb">${link(href('wiki/'), 'Documentation')}<span>/</span>${escape(doc.group)}</div><div class="doc-title"><h1>${escape(doc.title)}</h1>${wikiIndex ? '<p>Small changes. Your kind of browser.</p>' : ''}</div><article class="prose">${directory}</article><div class="source-note"><p>${isWiki ? `From the DiaTweaks wiki · snapshot <a href="${repo}/wiki/${doc.id}/_history">${source.commit.slice(0, 7)}</a>` : 'A DiaTweaks community guide'}</p>${link(original, isWiki ? 'View original page ↗' : 'View source ↗')}</div><div class="doc-next">${link(href('installation/'), '← Installation')}${link(href('wiki/'), 'Explore all tweaks →')}</div></main><aside class="toc"><p class="nav-label">On this page</p><nav aria-label="On this page">${toc.map(h => link(`#${h.id}`, h.title)).join('')}</nav><div class="toc-help"><p>Something unclear?</p>${link(`${repo}/issues`, 'Help improve the docs ↗')}</div></aside></div>`;
  await emit(isWiki ? (wikiIndex ? 'wiki' : `wiki/${doc.id}`) : doc.id, shell(doc.title, main, 'documentation', isWiki ? 'wiki' : doc.id));
}
const entries = [...guides, ...docs.values()].map(d => ({ title: d.title, group: d.group, url: d.url, text: d.md.replace(/<[^>]*>/g, ' ').replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[#*`|]/g, '').replace(/\s+/g, ' ').trim() }));
await writeFile(path.join(out, 'search-index.json'), JSON.stringify(entries));
await writeFile(path.join(out, '404.html'), shell('Page not found', `<main id="main" class="not-found"><p>404 / A wrong turn</p><h1>Let’s find your way back.</h1><p>This page may have moved. Browse the wiki or search for the tweak you had in mind.</p>${link(href('wiki/'), 'Explore the tweaks →', 'button primary')}</main>`));
await writeFile(path.join(out, '.nojekyll'), '');
await writeFile(path.join(out, 'build-info.json'), JSON.stringify({ base, pages: entries.length + 1, wikiCommit: source.commit }));
console.log(`Built ${entries.length + 1} pages at ${base || '/'} from wiki ${source.commit.slice(0, 7)}.`);

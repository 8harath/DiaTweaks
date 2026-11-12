import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseDocument } from 'htmlparser2';
import { findAll, getAttributeValue, textContent } from 'domutils';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const info = JSON.parse(await readFile(path.join(root, 'build-info.json'), 'utf8'));
const origin = 'https://example.test';
const pages = new Map();
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (file.endsWith('.html')) {
      const html = await readFile(file, 'utf8');
      const doc = parseDocument(html);
      const elements = findAll(node => node.type === 'tag', doc.children);
      const ids = new Set(elements.map(e => e.attribs.id).filter(Boolean));
      assert.equal(elements.filter(e => e.name === 'h1').length, 1, `${file}: expected one h1`);
      assert.ok(elements.some(e => e.name === 'main' && e.attribs.id === 'main'), `${file}: main landmark missing`);
      assert.ok(!/<script(?! defer src=)/.test(html), `${file}: unexpected inline script`);
      pages.set(file, { elements, ids, html });
    }
  }
}
await walk(root);
const failures = [];
let checkedLinks = 0;
for (const [file, page] of pages) {
  const relative = path.relative(root, file).replaceAll(path.sep, '/');
  const pageUrl = new URL(`${info.base}/${relative.replace(/index\.html$/, '')}`, origin);
  for (const el of page.elements) {
    const raw = getAttributeValue(el, el.name === 'a' || el.name === 'link' ? 'href' : 'src');
    if (!raw || /^(mailto:|data:)/.test(raw)) continue;
    const url = new URL(raw, pageUrl);
    if (url.origin !== origin) continue;
    if (info.base && !url.pathname.startsWith(info.base + '/')) { failures.push(`${relative}: escaped project base: ${raw}`); continue; }
    let target = path.join(root, decodeURIComponent(url.pathname.slice(info.base.length)));
    try {
      if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
      await stat(target);
      if (url.hash && pages.has(target) && !pages.get(target).ids.has(decodeURIComponent(url.hash.slice(1)))) failures.push(`${relative}: missing anchor ${raw}`);
      checkedLinks++;
    } catch { failures.push(`${relative}: missing file ${raw}`); }
    if (el.name === 'img') assert.ok('alt' in el.attribs, `${relative}: missing image alt`);
  }
}
assert.deepEqual(failures, [], `Broken internal links:\n${failures.join('\n')}`);
const search = JSON.parse(await readFile(path.join(root, 'search-index.json'), 'utf8'));
assert.equal(search.length, info.pages - 1);
assert.equal(new Set(search.map(s => s.url)).size, search.length, 'Duplicate search URLs');
assert.ok(search.find(s => s.title === 'Peek on Shift-Click').text.includes('diatweaks enable peek'));
assert.ok(search.find(s => s.title === 'Install DiaTweaks').text.includes('xcode-select --install'));
const hide = pages.get(path.join(root, 'wiki/Hide-Toolbar/index.html'));
assert.ok(textContent(parseDocument(hide.html)).includes("It's experimental"));
assert.ok(hide.html.includes(`${info.base}/wiki/Show-Toolbar-on-Hover/`));
console.log(`Verified ${pages.size} HTML files, ${checkedLinks} local links/assets, search coverage, install steps, and wiki cross-links at ${info.base || '/'}.`);

import { execFileSync } from 'node:child_process';
import { mkdir, readdir, readFile, writeFile, copyFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = process.env.WIKI_SOURCE ? path.resolve(process.env.WIKI_SOURCE) : path.join(root, '.wiki-cache');
if (!process.env.WIKI_SOURCE) {
  await rm(source, { recursive: true, force: true });
  execFileSync('git', ['clone', '--depth', '1', 'https://github.com/JaceThings/DiaTweaks.wiki.git', source], { stdio: 'inherit' });
}
// Snapshot only documentation and media it references; never execute wiki content.
const files = (await readdir(source)).filter(name => name.endsWith('.md'));
const contentDir = path.join(root, 'content/wiki');
await rm(contentDir, { recursive: true, force: true });
await mkdir(contentDir, { recursive: true });
await rm(path.join(root, 'public/wiki-assets'), { recursive: true, force: true });
const media = new Set(['previews/vertical-peek.webp', 'previews/vertical-littleDia.webp', 'previews/vertical-hideToolbar.webp']);
for (const name of files) {
  const md = await readFile(path.join(source, name), 'utf8');
  await writeFile(path.join(contentDir, name), md);
  for (const match of md.matchAll(/https:\/\/raw\.githubusercontent\.com\/wiki\/JaceThings\/DiaTweaks\/([^\s)"<>]+)/g)) {
    media.add(decodeURIComponent(match[1]));
  }
}
for (const name of media) {
  if (!/^(previews|icons|images|appicons)\/(?:[\w-]+\/)*[\w.-]+$/.test(name) || name.includes('..')) throw new Error(`Unexpected media path: ${name}`);
  const target = path.join(root, 'public/wiki-assets', name);
  await mkdir(path.dirname(target), { recursive: true });
  await copyFile(path.join(source, name), target);
}
const commit = execFileSync('git', ['-C', source, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
await writeFile(path.join(root, 'content/wiki-source.json'), JSON.stringify({ repository: 'https://github.com/JaceThings/DiaTweaks/wiki', commit, pages: files.filter(n => !n.startsWith('_')).length }, null, 2) + '\n');
console.log(`Synced ${files.length - 1} wiki pages and ${media.size} media files at ${commit}.`);

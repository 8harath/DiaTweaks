import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('../dist/', import.meta.url)));
const port = Number(process.env.PORT || 4321);
const { base } = JSON.parse(await readFile(path.join(root, 'build-info.json'), 'utf8'));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml', '.mp4': 'video/mp4' };
http.createServer(async (req, res) => {
  try {
    let name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (base) {
      if (name === '/' || name === base) { res.writeHead(302, { Location: `${base}/` }); res.end(); return; }
      if (!name.startsWith(base + '/')) throw new Error('Outside project base');
      name = name.slice(base.length);
    }
    let target = path.resolve(root, '.' + name);
    if (target !== root && !target.startsWith(root + path.sep)) throw new Error('Invalid path');
    if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
    const data = await readFile(target);
    res.writeHead(200, { 'Content-Type': types[path.extname(target)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(await readFile(path.join(root, '404.html'), 'utf8').catch(() => 'Not found'));
  }
}).listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}${base}/`));

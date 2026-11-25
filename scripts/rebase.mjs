// The site is published at https://mripston.github.io/tripstamp-landing/ (no custom domain),
// so root-absolute links in the built HTML need the repo path prefix. Set BASE="" for a custom domain.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const BASE = process.env.BASE ?? '/tripstamp-landing';
if (!BASE) process.exit(0);
function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(html|css|js|xml)$/.test(f)) {
      const s = readFileSync(p, 'utf8');
      const t = s
        .replace(/(\b(?:href|src|srcset|action|content)=")\/(?!\/|tripstamp-landing\/)/g, `$1${BASE}/`)
        .replace(/url\(\/(?!\/)/g, `url(${BASE}/`);
      const u = t.replace(/https:\/\/mripston\.github\.io\/(?!tripstamp-landing)/g, `https://mripston.github.io${BASE}/`);
      if (u !== s) writeFileSync(p, u);
    }
  }
}
walk('dist');

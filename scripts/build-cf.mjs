// scripts/build-cf.mjs
import { execSync } from 'node:child_process';

try {
  // ВАЖНО: без "build" — CLI ожидает 0 аргументов на Pages
  execSync('npx @cloudflare/next-on-pages@latest', { stdio: 'inherit' });
} catch (e) {
  process.exit(e.status || 1);
}

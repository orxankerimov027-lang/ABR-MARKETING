// scripts/build-cf.mjs
import { execSync } from 'node:child_process';

try {
  // Жёстко запускаем build без всяких внешних аргументов
  execSync('npx @cloudflare/next-on-pages@latest build', { stdio: 'inherit' });
} catch (e) {
  process.exit(e.status || 1);
}

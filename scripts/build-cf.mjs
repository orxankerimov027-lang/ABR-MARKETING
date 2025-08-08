// scripts/build-cf.mjs
import { execSync } from "node:child_process";

try {
  // ВАЖНО: без подкоманды "build" — Pages передаёт свои аргументы, CLI ждёт 0 аргументов
  execSync("npx @cloudflare/next-on-pages@latest", { stdio: "inherit" });
} catch (e) {
  process.exit(e.status || 1);
}

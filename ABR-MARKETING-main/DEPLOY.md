# Cloudflare Pages деплой (SSR + i18n)

## Что изменено
- Убран `output: 'export'` и `experimental.buildCache` из `next.config.js`
- Добавлен `wrangler.toml`
- Обновлён `package.json` (скрипт `cf:build`, devDeps)

## Инструкция для Cloudflare Pages
- **Build command:** `npm install --legacy-peer-deps && npm run cf:build`
- **Environment:** Node 20+ (на Pages по умолчанию ок)
- **Output dir:** автоматически (`.vercel/output/static` использовать не нужно)

Переменные окружения (если появятся) задаются в `Pages → Settings → Environment variables`.

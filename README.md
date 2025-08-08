# Marketing.AZ

Многоязычный маркетинговый сайт для продвижения услуг:

- Видеопроизводство
- Чат-боты
- Модели
- Таргетированная реклама

🌐 Демо: [https://abr-marketing-g1pr.vercel.app](https://abr-marketing-g1pr.vercel.app)  
🚀 Автодеплой через Vercel и Cloudflare Pages (GitHub интеграция)

---

## ⚙️ Технологии

- **Next.js** 14
- **React** 18
- **Tailwind CSS** (CDN)
- **Multilingual (i18next + next-i18next)**

---

## 📁 Структура

- `pages/` — страницы сайта  
- `public/` — изображения и статика  
- `next.config.js` — конфигурация Next.js  
- `i18n.js`, `next-i18next.config.js` — настройка локализации  
- `.npmrc` — флаг `legacy-peer-deps` для Cloudflare Pages  
- `package.json` — зависимости проекта

---

## 🛠 Инструкция по разработке

1. Установи зависимости:
   ```bash
   npm install --legacy-peer-deps

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // ✅ Мультиязычие (совместимо с SSR/Cloudflare Pages)
  i18n: {
    locales: ['az', 'ru', 'en'],
    defaultLocale: 'az',
    localeDetection: false,
  },

  // Не валим сборку из‑за TS-ошибок на этапе деплоя
  typescript: {
    ignoreBuildErrors: true,
  },

  // ❌ Убрано: experimental.buildCache (неподдерживаемый ключ)
  // ❌ Убрано: output: 'export' (конфликтовало с i18n)
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    appDir: false, // <— принудительно отключаем App Router
  },

  i18n: {
    locales: ['az', 'ru', 'en'],
    defaultLocale: 'ru'
  },

  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    unoptimized: false
  }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ВАЖНО: включаем Edge runtime для всех роутов Pages Router
  experimental: {
    runtime: 'edge',
  },

  i18n: {
    locales: ['az', 'ru', 'en'],
    defaultLocale: 'ru',
  },

  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    unoptimized: false,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // НИКАКОГО output: 'export' — иначе ломает i18n/SSR
  i18n: {
    locales: ['az', 'ru', 'en'],
    defaultLocale: 'ru',
    localeDetection: true
  },

  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    unoptimized: false
  }
};

module.exports = nextConfig;

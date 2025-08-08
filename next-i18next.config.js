/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    locales: ['az', 'ru', 'en'],
    defaultLocale: 'ru'
  },
  reloadOnPrerender: false,
  fallbackLng: 'ru',
  ns: ['common'],
  defaultNS: 'common',
};

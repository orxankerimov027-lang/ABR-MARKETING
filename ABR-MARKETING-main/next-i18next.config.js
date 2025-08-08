/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    locales: ['az', 'ru', 'en'], // список поддерживаемых локалей
    defaultLocale: 'az',         // язык по умолчанию
    localeDetection: true,       // автоматическое определение локали (можно отключить, если нужно)
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development', // для удобства разработки
};

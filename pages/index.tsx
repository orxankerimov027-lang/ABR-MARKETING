import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>AIMarket.AZ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <body className="bg-white text-gray-800 font-sans">
        {/* Header */}
        <header className="flex items-center justify-between px-4 sm:px-6 py-4 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
          <div className="text-xl sm:text-2xl font-extrabold text-purple-600 tracking-wide">AIMarket.AZ</div>
          <nav className="hidden md:flex space-x-6 lg:space-x-10 text-base lg:text-lg font-semibold">
            <a href="#" className="hover:text-purple-600 transition">Главная</a>
            <a href="#services" className="hover:text-purple-600 transition">Услуги</a>
            <a href="#portfolio" className="hover:text-purple-600 transition">Портфолио</a>
            <a href="#models" className="hover:text-purple-600 transition">Модели</a>
            <a href="#clients" className="hover:text-purple-600 transition">Клиенты</a>
            <a href="#contact" className="hover:text-purple-600 transition">Контакты</a>
          </nav>
          <div className="hidden md:block text-sm space-x-2">
            <button className="hover:underline">AZ</button>
            <button className="font-bold text-purple-600 hover:underline">RU</button>
            <button className="hover:underline">EN</button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-16 sm:pt-20 md:pt-28 pb-10 md:pb-16 px-4 bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-100">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-6xl mx-auto">
            {/* Текст */}
            <div className="md:w-1/2 text-center md:text-left md:pt-10">
              <h1 className="text-[22px] sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3 md:whitespace-nowrap">
                Прокачай свой бренд с нами
              </h1>
              <p className="text-[15px] sm:text-lg md:text-xl mb-3 sm:mb-4">
                Видео, модели, чат-боты и автоматизация — всё в одном месте
              </p>
              <a
                href="#contact"
                className="inline-block bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-purple-700 transition"
              >
                Оставить заявку
              </a>
            </div>

            {/* Картинка */}
            <div className="md:w-1/2 mt-5 sm:mt-7 md:mt-0 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://i.ibb.co/dZDh2bf/image.png"
                alt="Hero"
                className="w-full h-44 sm:h-60 md:h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">Наши услуги</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            <div className="bg-white shadow-lg p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition text-center min-h-[220px] sm:min-h-[260px] flex flex-col items-center justify-start">
              <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 text-white mb-3 sm:mb-4">💬</div>
              <h3 className="text-lg sm:text-2xl font-semibold mb-2">Чат-боты</h3>
              <p className="text-sm sm:text-base">Автоматизация продаж и поддержки через Instagram, WhatsApp и Telegram</p>
            </div>
            <div className="bg-white shadow-lg p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition text-center min-h-[220px] sm:min-h-[260px] flex flex-col items-center justify-start">
              <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 text-white mb-3 sm:mb-4">🎥</div>
              <h3 className="text-lg sm:text-2xl font-semibold mb-2">Видео-контент</h3>
              <p className="text-sm sm:text-base">Reels,Instagram,TikTok,Youtube, реклама и съёмки под ключ</p>
            </div>
            <div className="bg-white shadow-lg p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition text-center min-h-[220px] sm:min-h-[260px] flex flex-col items-center justify-start">
              <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 text-white mb-3 sm:mb-4">👥</div>
              <h3 className="text-lg sm:text-2xl font-semibold mb-2">Модели</h3>
              <p className="text-sm sm:text-base">Кастинги, база моделей, профессиональные съёмки</p>
            </div>
            <div className="bg-white shadow-lg p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition text-center min-h-[220px] sm:min-h-[260px] flex flex-col items-center justify-start">
              <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 text-white mb-3 sm:mb-4">📢</div>
              <h3 className="text-lg sm:text-2xl font-semibold mb-2">Реклама</h3>
              <p className="text-sm sm:text-base">Таргет, охваты, аналитика, результат</p>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-12 sm:py-16 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">Портфолио</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            <img src="https://images.unsplash.com/photo-1612548401945-9e75a63f0c1d?auto=format&fit=crop&w=800&q=80" alt="Portfolio 1" className="rounded-lg shadow-md hover:scale-105 transition duration-300" />
            <img src="https://images.unsplash.com/photo-1607083206173-611c7d47a3f1?auto=format&fit=crop&w=800&q=80" alt="Portfolio 2" className="rounded-lg shadow-md hover:scale-105 transition duration-300" />
            <img src="https://images.unsplash.com/photo-1621939514731-4e3b33c016b6?auto=format&fit=crop&w=800&q=80" alt="Portfolio 3" className="rounded-lg shadow-md hover:scale-105 transition duration-300" />
          </div>
        </section>

        {/* Clients */}
        <section id="clients" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">Наши клиенты</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 items-center justify-center">
            <a href="https://lcwaikiki.com" target="_blank" className="flex flex-col items-center space-y-2">
              <img src="https://i.ibb.co/N68vFdvd/lc-waikiki-seeklogo.png" alt="LC Waikiki" className="h-6 sm:h-8 max-w-[100px] sm:max-w-[120px] object-contain" />
              <span className="text-xs sm:text-sm font-semibold text-center">LC Waikiki</span>
            </a>
            <a href="https://koton.com" target="_blank" className="flex flex-col items-center space-y-2">
              <img src="https://i.ibb.co/2YKjDJMG/koton-seeklogo.png" alt="Koton" className="h-6 sm:h-8 max-w-[100px] sm:max-w-[120px] object-contain" />
              <span className="text-xs sm:text-sm font-semibold text-center">Koton</span>
            </a>
            <a href="https://decathlon.com" target="_blank" className="flex flex-col items-center space-y-2">
              <img src="https://i.ibb.co/N6C0QRqq/decathlon-seeklogo.png" alt="Decathlon" className="h-6 sm:h-8 max-w-[100px] sm:max-w-[120px] object-contain" />
              <span className="text-xs sm:text-sm font-semibold text-center">Decathlon</span>
            </a>
            <a href="https://penti.com" target="_blank" className="flex flex-col items-center space-y-2">
              <img src="https://i.ibb.co/7JXQhN8G/penti.jpg" alt="Penti" className="h-6 sm:h-8 max-w-[100px] sm:max-w-[120px] object-contain" />
              <span className="text-xs sm:text-sm font-semibold text-center">Penti</span>
            </a>
            <a href="https://greyder.com" target="_blank" className="flex flex-col items-center space-y-2">
              <img src="https://i.ibb.co/0jztjMF6/Greyder-Logo-Vector-svg.png" alt="Greyder" className="h-6 sm:h-8 max-w-[100px] sm:max-w-[120px] object-contain" />
              <span className="text-xs sm:text-sm font-semibold text-center">Greyder</span>
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">Связаться с нами</h2>
          <p className="text-center mb-4 sm:mb-6 text-sm sm:text-base">
            📞 WhatsApp: <a href="https://wa.me/994502001508" className="text-purple-600 hover:underline">050 200 15 08</a><br />
            📸 Instagram: <a href="#" className="text-purple-600 hover:underline">@ваш_инстаграм</a>
          </p>
          <p className="text-center text-xs sm:text-sm">📩 Или заполните форму на сайте</p>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 text-center py-4 sm:py-6 mt-6 sm:mt-10 text-xs sm:text-sm text-gray-600">
          © 2025 AIMarket.AZ — Все права защищены
        </footer>
      </body>
    </>
  );
}

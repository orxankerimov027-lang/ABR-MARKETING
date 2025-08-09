import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>AIMarket.AZ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      {/* Глобальные цвета из shukurov.az */}
      <style>{`
        :root{
          --brand-blue:#046BD2; /* ast-global-color-0 */
          --brand-blue-2:#045CB4; /* ast-global-color-1 */
          --brand-dark:#181818;   /* общий фон */
          --brand-card:#111111;   /* карточки/плашки */
          --brand-text:#FFFFFF;   /* основной текст */
          --brand-muted:#D1D5DB;  /* вторичный текст */
        }
      `}</style>

      <div className="bg-[var(--brand-dark)] text-[var(--brand-text)] font-sans min-h-screen">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--brand-dark)]/90 backdrop-blur-md border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="text-2xl font-extrabold tracking-wide">AIMarket.AZ</div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
              <a href="#" className="hover:text-[var(--brand-blue)] transition">Главная</a>
              <a href="#services" className="hover:text-[var(--brand-blue)] transition">Услуги</a>
              <a href="#portfolio" className="hover:text-[var(--brand-blue)] transition">Портфолио</a>
              <a href="#models" className="hover:text-[var(--brand-blue)] transition">Модели</a>
              <a href="#clients" className="hover:text-[var(--brand-blue)] transition">Клиенты</a>
              <a href="#contact" className="hover:text-[var(--brand-blue)] transition">Контакты</a>
            </nav>

            <div className="hidden md:flex items-center gap-3 text-xs">
              <button className="hover:text-[var(--brand-blue)]">AZ</button>
              <button className="font-bold text-[var(--brand-blue)]">RU</button>
              <button className="hover:text-[var(--brand-blue)]">EN</button>
            </div>
          </div>
        </header>

        {/* Hero */}
        {/* На мобильных сразу от верхней кромки: компенсируем высоту хедера минимально */}
        <section className="pt-16 md:pt-28 pb-8 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
            {/* Текст сначала (мобайл) */}
            <div className="order-1">
              <h1
                className="
                  text-[28px] leading-tight sm:text-3xl md:text-5xl font-extrabold
                  mb-3 md:mb-5
                "
              >
                Прокачай свой бренд с нами
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-[var(--brand-muted)] mb-4 md:mb-6">
                Видео, модели, чат-боты и автоматизация — всё в одном месте
              </p>

              {/* Кнопка в стиле shukurov: белая кнопка, чёрный текст */}
              <a
                href="#contact"
                className="
                  inline-block rounded-full
                  bg-white text-black
                  px-5 py-2.5 md:px-6 md:py-3
                  font-semibold
                  shadow-sm ring-1 ring-white/10
                  hover:opacity-90 transition
                "
              >
                Оставить заявку
              </a>
            </div>

            {/* Картинка справа на десктопе, ниже на мобайле */}
            <div className="order-2 md:order-none">
              <div className="rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.25)] ring-1 ring-white/10">
                <img
                  src="https://i.ibb.co/dZDh2bf/image.png"
                  alt="Hero"
                  className="w-full h-56 sm:h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-14 md:py-16 px-4 bg-transparent">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-10">
            Наши услуги
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {[
              { icon: '💬', title: 'Чат-боты', text: 'Автоматизация продаж и поддержки через Instagram, WhatsApp и Telegram' },
              { icon: '🎥', title: 'Видео-контент', text: 'Reels, Instagram, TikTok, YouTube, реклама и съёмки под ключ' },
              { icon: '👥', title: 'Модели', text: 'Кастинги, база моделей, профессиональные съёмки' },
              { icon: '📢', title: 'Реклама', text: 'Таргет, охваты, аналитика, результат' },
            ].map((s, i) => (
              <div
                key={i}
                className="
                  bg-[var(--brand-card)]/95 border border-white/5
                  rounded-2xl p-6 md:p-8 text-center
                  hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                  hover:border-white/10 transition
                  min-h-[220px] md:min-h-[260px]
                  flex flex-col items-center
                "
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl mb-4
                                bg-[var(--brand-blue)] text-white text-xl font-bold">
                  {s.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm md:text-base text-[var(--brand-muted)]">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-14 md:py-16 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-10">
            Портфолио
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <img src="https://images.unsplash.com/photo-1612548401945-9e75a63f0c1d?auto=format&fit=crop&w=800&q=80" alt="Portfolio 1" className="rounded-xl ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition" />
            <img src="https://images.unsplash.com/photo-1607083206173-611c7d47a3f1?auto=format&fit=crop&w=800&q=80" alt="Portfolio 2" className="rounded-xl ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition" />
            <img src="https://images.unsplash.com/photo-1621939514731-4e3b33c016b6?auto=format&fit=crop&w=800&q=80" alt="Portfolio 3" className="rounded-xl ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition" />
          </div>
        </section>

        {/* Clients */}
        <section id="clients" className="py-14 md:py-16 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-10">
            Наши клиенты
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {[
              { href:'https://lcwaikiki.com', img:'https://i.ibb.co/N68vFdvd/lc-waikiki-seeklogo.png', name:'LC Waikiki' },
              { href:'https://koton.com', img:'https://i.ibb.co/2YKjDJMG/koton-seeklogo.png', name:'Koton' },
              { href:'https://decathlon.com', img:'https://i.ibb.co/N6C0QRqq/decathlon-seeklogo.png', name:'Decathlon' },
              { href:'https://penti.com', img:'https://i.ibb.co/7JXQhN8G/penti.jpg', name:'Penti' },
              { href:'https://greyder.com', img:'https://i.ibb.co/0jztjMF6/Greyder-Logo-Vector-svg.png', name:'Greyder' },
            ].map((c, i)=>(
              <a key={i} href={c.href} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 opacity-90 hover:opacity-100 transition">
                <img src={c.img} alt={c.name} className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition" />
                <span className="text-xs sm:text-sm font-semibold text-center text-[var(--brand-muted)]">{c.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-14 md:py-16 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Связаться с нами</h2>
          <p className="text-center mb-6 text-[var(--brand-muted)]">
            📞 WhatsApp: <a href="https://wa.me/994502001508" className="underline hover:text-[var(--brand-blue)]">050 200 15 08</a><br />
            📸 Instagram: <a href="#" className="underline hover:text-[var(--brand-blue)]">@ваш_инстаграм</a>
          </p>
          <div className="text-center">
            <a
              href="#"
              className="inline-block rounded-full bg-white text-black px-6 py-3 font-semibold shadow-sm ring-1 ring-white/10 hover:opacity-90 transition"
            >
              Заполнить форму
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 text-center py-6 text-xs text-[var(--brand-muted)]">
          © 2025 AIMarket.AZ — Все права защищены
        </footer>
      </div>
    </>
  );
}

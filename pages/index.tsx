import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>AIMarket.AZ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      {/* Палитра гибрид (светлый фон + золото) */}
      <style>{`
        :root{
          --base:#FFF7EA;      /* тёплая база */
          --text:#22232A;      /* основной текст на светлом */
          --muted:#4B5563;     /* вторичный текст */
          --card:#FFFFFF;      /* карточки/плашки */
          --gold:#C9A44C;      /* акцентное золото */
          --gold-2:#E3C983;    /* светлое золото (hover/бордер) */
          --ring:rgba(0,0,0,.06);
        }
        /* Пастельный градиент как в правом превью */
        .pastel-bg{
          background:
            radial-gradient(900px 380px at 15% -10%, rgba(201,164,76,0.22) 0%, rgba(201,164,76,0) 60%),
            radial-gradient(800px 360px at 90% 0%, rgba(255,246,207,0.65) 0%, rgba(255,246,207,0) 60%),
            radial-gradient(700px 300px at 30% 60%, rgba(246,233,255,0.55) 0%, rgba(246,233,255,0) 60%),
            radial-gradient(700px 260px at 85% 65%, rgba(255,240,220,0.55) 0%, rgba(255,240,220,0) 60%),
            var(--base);
        }
      `}</style>

      <div className="min-h-screen bg-[var(--base)] text-[var(--text)] font-sans">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--base)]/85 backdrop-blur-md border-b border-[var(--ring)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            {/* Логотип в золоте */}
            <div className="text-xl sm:text-2xl font-extrabold tracking-wide text-[var(--gold)]">
              AIMarket.AZ
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
              {[
                ['#','Главная'],
                ['#services','Услуги'],
                ['#portfolio','Портфолио'],
                ['#models','Модели'],
                ['#clients','Клиенты'],
                ['#contact','Контакты'],
              ].map(([href,label])=>(
                <a key={href} href={href} className="hover:text-[var(--gold)] transition">{label}</a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3 text-xs">
              <button className="hover:text-[var(--gold)]">AZ</button>
              <button className="font-bold text-[var(--gold)]">RU</button>
              <button className="hover:text-[var(--gold)]">EN</button>
            </div>
          </div>
        </header>

        {/* Hero (фон как справа на изображении) */}
        <section className="pt-2 sm:pt-3 md:pt-28 pb-8 md:pb-16 pastel-bg">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
            {/* Текст + кнопка */}
            <div>
              <h1 className="text-[26px] sm:text-4xl md:text-5xl font-extrabold leading-tight text-[var(--gold)]">
                Прокачай свой бренд с нами
              </h1>
              <p className="mt-3 text-[16px] sm:text-lg md:text-xl text-[var(--muted)]">
                Видео, модели, чат-боты и автоматизация — всё в одном месте
              </p>
              <a
                href="#contact"
                className="mt-3 inline-block rounded-full
                           bg-[var(--gold)] text-black
                           px-5 sm:px-6 py-2.5 sm:py-3 font-semibold
                           shadow-sm ring-1 ring-[var(--gold-2)]
                           hover:bg-[var(--gold-2)] hover:ring-[var(--gold-2)]
                           transition"
              >
                Оставить заявку
              </a>
            </div>

            {/* Изображение */}
            <div className="rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)] ring-1 ring-[var(--ring)] mt-5 sm:mt-7 md:mt-0">
              <img
                src="https://i.ibb.co/dZDh2bf/image.png"
                alt="Hero"
                className="w-full h-48 sm:h-60 md:h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-14 md:py-16 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-10 text-[var(--gold)]">
            Наши услуги
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {[
              { icon:'💬', title:'Чат-боты', text:'Автоматизация продаж и поддержки через Instagram, WhatsApp и Telegram' },
              { icon:'🎥', title:'Видео-контент', text:'Reels, Instagram, TikTok, YouTube, реклама и съёмки под ключ' },
              { icon:'👥', title:'Модели', text:'Кастинги, база моделей, профессиональные съёмки' },
              { icon:'📢', title:'Реклама', text:'Таргет, охваты, аналитика, результат' },
            ].map((s,i)=>(
              <div key={i}
                   className="bg-[var(--card)] border border-[var(--ring)] rounded-2xl p-6 md:p-8 text-center
                              hover:shadow-[0_10px_40px_rgba(0,0,0,0.10)]
                              hover:border-[var(--gold-2)]/60 transition
                              min-h-[220px] md:min-h-[260px] flex flex-col items-center">
                <div className="grid h-14 w-14 place-items-center rounded-2xl mb-4
                                bg-[var(--gold)] text-black text-xl font-bold">
                  {s.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[var(--gold)]">{s.title}</h3>
                <p className="text-sm md:text-base text-[var(--muted)]">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-14 md:py-16 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-10 text-[var(--gold)]">Портфолио</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <img src="https://images.unsplash.com/photo-1612548401945-9e75a63f0c1d?auto=format&fit=crop&w=800&q=80" alt="Portfolio 1" className="rounded-xl ring-1 ring-[var(--ring)] shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition" />
            <img src="https://images.unsplash.com/photo-1607083206173-611c7d47a3f1?auto=format&fit=crop&w=800&q=80" alt="Portfolio 2" className="rounded-xl ring-1 ring-[var(--ring)] shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition" />
            <img src="https://images.unsplash.com/photo-1621939514731-4e3b33c016b6?auto=format&fit=crop&w=800&q=80" alt="Portfolio 3" className="rounded-xl ring-1 ring-[var(--ring)] shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition" />
          </div>
        </section>

        {/* Clients */}
        <section id="clients" className="py-14 md:py-16 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-10 text-[var(--gold)]">Наши клиенты</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {[
              { href:'https://lcwaikiki.com', img:'https://i.ibb.co/N68vFdvd/lc-waikiki-seeklogo.png', name:'LC Waikiki' },
              { href:'https://koton.com', img:'https://i.ibb.co/2YKjDJMG/koton-seeklogo.png', name:'Koton' },
              { href:'https://decathlon.com', img:'https://i.ibb.co/N6C0QRqq/decathlon-seeklogo.png', name:'Decathlon' },
              { href:'https://penti.com', img:'https://i.ibb.co/7JXQhN8G/penti.jpg', name:'Penti' },
              { href:'https://greyder.com', img:'https://i.ibb.co/0jztjMF6/Greyder-Logo-Vector-svg.png', name:'Greyder' },
            ].map((c, i)=>(
              <a key={i} href={c.href} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 opacity-90 hover:opacity-100 transition">
                <img src={c.img} alt={c.name} className="h-8 max-w-[120px] object-contain" />
                <span className="text-xs sm:text-sm font-semibold text-center text-[var(--muted)]">{c.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-14 md:py-16 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[var(--gold)]">Связаться с нами</h2>
          <p className="text-center mb-6 text-[var(--muted)]">
            📞 WhatsApp: <a href="https://wa.me/994502001508" className="underline hover:text-[var(--gold)]">050 200 15 08</a><br />
            📸 Instagram: <a href="#" className="underline hover:text-[var(--gold)]">@ваш_инстаграм</a>
          </p>
          <div className="text-center">
            <a
              href="#"
              className="inline-block rounded-full
                         bg-[var(--gold)] text-black
                         px-6 py-3 font-semibold shadow-sm
                         ring-1 ring-[var(--gold-2)]
                         hover:bg-[var(--gold-2)] hover:ring-[var(--gold-2)]
                         transition"
            >
              Заполнить форму
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[var(--ring)] text-center py-6 text-xs text-[var(--muted)]">
          © 2025 AIMarket.AZ — Все права защищены
        </footer>
      </div>
    </>
  );
}

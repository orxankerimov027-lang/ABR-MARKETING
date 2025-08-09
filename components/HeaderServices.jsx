import React from "react";
import { MessageSquare, Video, Users, Megaphone } from "lucide-react";

export default function Preview() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="w-full border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 text-white font-semibold">
              A
            </div>
            <span className="text-2xl font-bold">AIMarket.AZ</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {['Главная','Услуги','Портфолио','Модели','Клиенты','Контакты'].map((label) => (
              <a key={label} href="#" className="text-[18px] lg:text-[19px] font-medium hover:text-violet-600">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm">
              <a href="#" className="opacity-70 hover:opacity-100">AZ</a>
              <a href="#" className="font-semibold">RU</a>
              <a href="#" className="opacity-70 hover:opacity-100">EN</a>
            </div>
            <a href="#" className="relative inline-flex translate-y-[2px] items-center justify-center rounded-2xl bg-violet-600 px-6 py-4 text-[16px] font-medium text-white shadow-lg hover:bg-violet-700">Оставить заявку</a>
          </div>
        </div>
      </header>

      {/* Services — УВЕЛИЧЕННЫЕ КАРТОЧКИ как на 3‑м скрине */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold">Наши услуги</h2>
          <p className="mt-2 text-lg text-gray-600">Комплексные решения для роста вашего бренда</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: <MessageSquare className="h-7 w-7" />, title: 'AI Чатбот', desc: 'AI-powered чатбот для поддержки клиентов и продаж' },
            { icon: <Video className="h-7 w-7" />, title: 'Видеопродакшн', desc: 'Профессиональный видеоконтент для брендов' },
            { icon: <Users className="h-7 w-7" />, title: 'Модельный кастинг', desc: 'Обеспечение профессиональными моделями и талантами' },
            { icon: <Megaphone className="h-7 w-7" />, title: 'Реклама', desc: 'Таргет, охваты, аналитика, результат' },
          ].map((s) => (
            <a
              key={s.title}
              href="#"
              className="group rounded-3xl border bg-white p-10 shadow-sm transition-all hover:shadow-xl text-center min-h-[260px] flex flex-col items-center justify-start"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 text-white">
                {s.icon}
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 max-w-[28ch] text-base text-gray-600">{s.desc}</p>
              <span className="mt-5 inline-flex items-center text-base font-medium text-violet-600 group-hover:underline">
                Узнать больше →
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

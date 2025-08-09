import React, { useState } from 'react';
// Link не нужен, т.к. на этой странице только внешние ссылки
// import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const budgetOptions = [
  { label: '₼100 – ₼500', value: '100-500' },
  { label: '₼500 – ₼1,000', value: '500-1000' },
  { label: '₼1,000 – ₼5,000', value: '1000-5000' },
  { label: '₼5,000 – ₼10,000', value: '5000-10000' },
  { label: '₼10,000+', value: '10000+' },
  { label: 'Обсудим отдельно', value: 'custom' },
];

const serviceOptions = [
  'AI Чатбот',
  'Видеопродакшн',
  'Модельный кастинг',
  'Комплексные услуги',
  'Другое',
];

export default function ContactPage() {
  const { t } = useTranslation('common');

  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setErr(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Не удалось отправить сообщение');
      setDone(true);
      (e.target as HTMLFormElement).reset();
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
      });
    } catch (error: any) {
      setErr(error?.message || 'Ошибка отправки');
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <main style={{ margin: '0 auto', maxWidth: 1120, padding: '40px 16px' }}>
        <section
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: 16,
            padding: 24,
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: 24, fontWeight: 600, margin: 0, marginBottom: 8 }}>
            Спасибо за сообщение!
          </h1>
          <p style={{ color: '#6b7280', fontSize: 14, marginTop: 8 }}>
            Мы с вами скоро свяжемся. Для более быстрого ответа или вопросов можете
            воспользоваться WhatsApp или Instagram сообщениями.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 12,
              maxWidth: 420,
              margin: '16px auto 0',
            }}
          >
            <a
              href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || 'https://wa.me/994102151508'}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: '12px 16px',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              Открыть WhatsApp
            </a>
            <a
              href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK || '#'}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: '12px 16px',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              Открыть Instagram
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main style={{ margin: '0 auto', maxWidth: 1120, padding: '40px 16px' }}>
      <h1 style={{ fontSize: 28, fontWeight: 600, margin: 0 }}>Оставить заявку</h1>
      <p style={{ color: '#6b7280', fontSize: 14, marginTop: 8 }}>
        Расскажите о проекте — ответим в течение 24 часов.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 24,
          marginTop: 24,
        }}
      >
        {/* Левая колонка — форма */}
        <section
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: 16,
            padding: 24,
          }}
        >
          <form onSubmit={onSubmit} style={{ display: 'grid', gap: 16 }}>
            {/* Имя + Email */}
            <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr' }}>
              <div>
                <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>
                  Имя *
                </label>
                <input
                  name="name"
                  required
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    border: '1px solid #e5e7eb',
                    borderRadius: 12,
                    padding: '10px 12px',
                    outline: 'none',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>
                  E-mail *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    border: '1px solid #e5e7eb',
                    borderRadius: 12,
                    padding: '10px 12px',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Телефон + Услуга */}
            <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr' }}>
              <div>
                <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>
                  Телефон
                </label>
                <input
                  name="phone"
                  placeholder="+994 10 215 15 08"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    border: '1px solid #e5e7eb',
                    borderRadius: 12,
                    padding: '10px 12px',
                    outline: 'none',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>
                  Услуга
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    border: '1px solid #e5e7eb',
                    borderRadius: 12,
                    padding: '10px 12px',
                    outline: 'none',
                    background: 'white',
                  }}
                >
                  <option value="">Выберите услугу</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Бюджет */}
            <div>
              <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>
                Бюджет (AZN)
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                style={{
                  width: '100%',
                  border: '1px solid #e5e7eb',
                  borderRadius: 12,
                  padding: '10px 12px',
                  outline: 'none',
                  background: 'white',
                }}
              >
                <option value="">Выберите диапазон</option>
                {budgetOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Сообщение */}
            <div>
              <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>
                Сообщение *
              </label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Опишите задачу, сроки и пожелания…"
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: '100%',
                  border: '1px solid #e5e7eb',
                  borderRadius: 12,
                  padding: '10px 12px',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
              <p style={{ color: '#6b7280', fontSize: 12, marginTop: 6 }}>
                * Обязательные поля. Мы ответим в течение 24 часов.
              </p>
            </div>

            {err && (
              <p style={{ color: '#ef4444', fontSize: 14, margin: 0 }}>{err}</p>
            )}

            <button
              disabled={submitting}
              style={{
                width: '100%',
                border: 'none',
                borderRadius: 12,
                padding: '12px 16px',
                background: '#111827',
                color: 'white',
                cursor: 'pointer',
                opacity: submitting ? 0.7 : 1,
              }}
            >
              {submitting ? 'Отправляем…' : 'Отправить сообщение'}
            </button>
          </form>
        </section>

        {/* Правая колонка */}
        <aside
          style={{
            display: 'grid',
            gap: 16,
          }}
        >
          <div
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 16,
              padding: 24,
            }}
          >
            <h2 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>
              Контактная информация
            </h2>
            <ul
              style={{
                marginTop: 16,
                padding: 0,
                listStyle: 'none',
                display: 'grid',
                gap: 12,
                fontSize: 14,
              }}
            >
              <li>
                <div style={{ fontWeight: 600 }}>Телефон</div>
                <a
                  href="tel:+994102151508"
                  style={{ color: '#2563eb', textDecoration: 'none' }}
                >
                  +994 10 215 15 08
                </a>
              </li>
              <li>
                <div style={{ fontWeight: 600 }}>Email</div>
                <a
                  href="mailto:info@aimarket.az"
                  style={{ color: '#2563eb', textDecoration: 'none' }}
                >
                  info@aimarket.az
                </a>
              </li>
              <li>
                <div style={{ fontWeight: 600 }}>Адрес</div>
                <div>Asug Ali 4, Şəhər Bağları kompleksi, Баку</div>
              </li>
              <li>
                <div style={{ fontWeight: 600 }}>Режим работы</div>
                <div>Пн–Пт: 9:00–18:00</div>
              </li>
            </ul>
          </div>

          <div
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 16,
              padding: 24,
            }}
          >
            <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>Быстрая связь</h3>
            <div style={{ display: 'grid', gap: 12, marginTop: 12 }}>
              <a
                href={
                  process.env.NEXT_PUBLIC_WHATSAPP_LINK ||
                  'https://wa.me/994102151508'
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: 12,
                  padding: '12px 16px',
                  textAlign: 'center',
                  textDecoration: 'none',
                }}
              >
                WhatsApp
              </a>
              <a
                href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK || '#'}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: 12,
                  padding: '12px 16px',
                  textAlign: 'center',
                  textDecoration: 'none',
                }}
              >
                Instagram
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

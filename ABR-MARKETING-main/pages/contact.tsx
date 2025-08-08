import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Contact() {
  const { t } = useTranslation('common');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить отправку формы на сервер (fetch, axios и т.д.)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
        <p>{t('contact_thanks', 'Спасибо! Ваше сообщение отправлено.')}</p>
      </section>
    );
  }

  return (
    <section style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>{t('contact_title', 'Контактная страница')}</h1>
      <p>{t('contact_description', 'Свяжитесь с нами')}</p>

      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}
      >
        <label>
          {t('contact_form_name', 'Имя')}:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          {t('contact_form_email', 'Email')}:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          {t('contact_form_message', 'Сообщение')}:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">{t('contact_form_submit', 'Отправить')}</button>
      </form>
    </section>
  );
}

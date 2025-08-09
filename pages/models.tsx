export const config = { runtime: "nodejs" };

import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Models() {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    portfolioLink: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика отправки данных (например, API вызов)
    setSubmitted(true);
  };

  if (submitted) {
    return <p>{t('form_thanks', 'Спасибо! Ваши данные отправлены.')}</p>;
  }

  return (
    <section style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>{t('models_form_title', 'Форма для моделей')}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {t('models_form_name', 'Имя')}:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          {t('models_form_email', 'Email')}:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          {t('models_form_experience', 'Опыт')}:
          <textarea name="experience" value={formData.experience} onChange={handleChange} required />
        </label>
        <br />
        <label>
          {t('models_form_portfolio', 'Ссылка на портфолио')}:
          <input type="url" name="portfolioLink" value={formData.portfolioLink} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">{t('models_form_submit', 'Отправить')}</button>
      </form>
    </section>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  } catch (error) {
    console.error('Ошибка загрузки переводов:', error);
    return {
      props: {},
    };
  }
}

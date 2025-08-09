export const config = { runtime: 'nodejs' };

import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Services() {
  const { t } = useTranslation('common');

  const services = [
    {
      id: 1,
      title: t('service_models_title', 'Модели'),
      description: t(
        'service_models_desc',
        'Подбор моделей для съемок, кастинги, анкеты моделей.'
      ),
    },
    {
      id: 2,
      title: t('service_video_title', 'Видео и съемки'),
      description: t(
        'service_video_desc',
        'Производство видеороликов, Reels, TikTok, рекламные клипы.'
      ),
    },
    {
      id: 3,
      title: t('service_ads_title', 'Таргетированная реклама'),
      description: t(
        'service_ads_desc',
        'Запуск и настройка таргетированной рекламы в Instagram, Facebook, TikTok с таргетингом по вашим базам.'
      ),
    },
    {
      id: 4,
      title: t('service_chatbots_title', 'AI чатботы и CRM интеграция'),
      description: t(
        'service_chatbots_desc',
        'Разработка и настройка чатботов с AI для Instagram, WhatsApp, Telegram. Интеграция с CRM для автоматизации продаж.'
      ),
    },
  ];

  return (
    <section style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h1>{t('services_page_title', 'Наши услуги')}</h1>
      {services.map(service => (
        <div key={service.id} style={{ marginBottom: '30px' }}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
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

export const runtime = 'edge';

import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const videoCases = [
  {
    id: 1,
    titleKey: 'case_1_title',
    descriptionKey: 'case_1_desc',
    videoUrl: 'https://www.youtube.com/embed/XXXXXXXXXXX',
  },
  {
    id: 2,
    titleKey: 'case_2_title',
    descriptionKey: 'case_2_desc',
    videoUrl: 'https://www.youtube.com/embed/YYYYYYYYYYY',
  },
];

export default function Portfolio() {
  const { t } = useTranslation('common');

  return (
    <section style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h1>{t('portfolio_title')}</h1>
      <p>{t('portfolio_description')}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '30px' }}>
        {videoCases.map(({ id, titleKey, descriptionKey, videoUrl }) => (
          <div key={id}>
            <h3>{t(titleKey)}</h3>
            <p>{t(descriptionKey)}</p>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src={videoUrl}
                title={t(titleKey)}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            </div>
          </div>
        ))}
      </div>
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

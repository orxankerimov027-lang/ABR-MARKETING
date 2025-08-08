import React from 'react';
import { useTranslation } from 'next-i18next';

const partners = [
  { id: 1, nameKey: 'company_a', logoUrl: '/logos/company-a.png' },
  { id: 2, nameKey: 'company_b', logoUrl: '/logos/company-b.png' },
  { id: 3, nameKey: 'company_c', logoUrl: '/logos/company-c.png' },
];

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

export default function PartnersAndCases() {
  const { t } = useTranslation('common'); // без явных типов

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('partners_title')}</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {partners.map((partner) => (
            <div key={partner.id} className="w-36 text-center">
              <img
                src={partner.logoUrl}
                alt={t(partner.nameKey)}
                className="mx-auto max-w-full h-auto mb-2"
              />
              <p className="text-sm text-gray-700">{t(partner.nameKey)}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">{t('cases_title')}</h2>
        <div className="flex flex-col gap-12 items-center">
          {videoCases.map((caseItem) => (
            <div key={caseItem.id} className="w-full max-w-3xl">
              <h3 className="text-xl font-semibold mb-2">{t(caseItem.titleKey)}</h3>
              <p className="mb-4">{t(caseItem.descriptionKey)}</p>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded">
                <iframe
                  src={caseItem.videoUrl}
                  title={t(caseItem.titleKey)}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

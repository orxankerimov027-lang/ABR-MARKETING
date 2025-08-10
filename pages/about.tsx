import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function About() {
  const { t } = useTranslation('common');
  const { locale, asPath } = useRouter();
  return (
    <>
      <Head>
        <title>{t('about_title')}</title>
        <meta name="description" content={t('about_meta')} />
      </Head>
      <div className='min-h-screen bg-white text-black p-8'>
        <h1 className='text-3xl font-bold mb-4'>{t('about_heading')}</h1>
        <p className='mb-4'>{t('about_text')}</p>
        <Link href='/contact' locale={locale} className='inline-block bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition'>
          {t('btn_apply')}
        </Link>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}

import Head from 'next/head';
import {useState} from 'react';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export async function getStaticProps({locale}: {locale: string}) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}

export default function ContactPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setErr(null);
    const fd = new FormData(e.currentTarget); const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
      const data = await res.json().catch(()=>({}));
      if (res.ok && data?.ok) router.push('/contact?success=1'); else setErr(data?.error || 'Failed to send');
    } catch (e:any) { setErr(e?.message || 'Network error'); } finally { setLoading(false); }
  }

  const success = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('success') === '1';

  return (
    <>
      <Head><title>AIMarket.AZ — {t('nav_contact')}</title></Head>
      <div className="min-h-screen bg-[var(--base)] text-[var(--text)]">
        <div className="max-w-2xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-[var(--gold)] mb-6">{t('contact_form_title')}</h1>
          {success ? (
            <div className="rounded-xl border border-[var(--ring)] bg-[var(--card)] p-6">
              <p className="text-green-700 font-semibold mb-3">{t('contact_success')}</p>
              <a href="/" className="underline hover:text-[var(--gold)]">{t('back_home')}</a>
            </div>
          ) : (
          <form onSubmit={onSubmit} className="rounded-xl border border-[var(--ring)] bg-[var(--card)] p-6 grid gap-4">
            <div><label className="block text-sm mb-1">{t('field_name')}</label><input name="name" required className="w-full border rounded-md p-2" /></div>
            <div><label className="block text-sm mb-1">Email</label><input type="email" name="email" required className="w-full border rounded-md p-2" /></div>
            <div><label className="block text-sm mb-1">{t('field_phone')}</label><input name="phone" className="w-full border rounded-md p-2" /></div>
            <div><label className="block text-sm mb-1">{t('field_service')}</label><input name="service" className="w-full border rounded-md p-2" /></div>
            <div><label className="block text-sm mb-1">{t('field_budget')}</label><input name="budget" className="w-full border rounded-md p-2" /></div>
            <div><label className="block text-sm mb-1">{t('field_message')}</label><textarea name="message" rows={4} className="w-full border rounded-md p-2" /></div>
            {err && <p className="text-red-600 text-sm">{err}</p>}
            <button type="submit" disabled={loading} className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] text-black px-6 py-3 font-semibold shadow-sm ring-1 ring-[var(--gold-2)] hover:bg-[var(--gold-2)] hover:ring-[var(--gold-2)] transition disabled:opacity-60">
              {loading ? t('sending') : t('send')}
            </button>
          </form>
          )}
        </div>
      </div>
    </>
  );
}

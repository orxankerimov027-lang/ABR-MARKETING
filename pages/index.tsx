// pages/index.tsx
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>ABR Marketing — прокачай свой бренд</title>
        <meta name="description" content="Видео, модели, чат-боты и автоматизация — всё в одном месте" />
      </Head>

      <section className="mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex rounded-full px-3 py-1 mb-4 text-sm backdrop-blur bg-white/60">
              Новое в сезоне
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Прокачай свой бренд с нами
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-xl">
              Видео, модели, чат-боты и автоматизация — всё в одном месте.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/services" className="rounded-2xl text-base inline-flex h-11 items-center px-5 bg-[#0f172a] text-white">
                Услуги
              </Link>
              <Link href="/portfolio" className="rounded-2xl text-base inline-flex h-11 items-center px-5 border border-black/10">
                Портфолио
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="aspect-[4/5] rounded-3xl bg-white/70 backdrop-blur border border-black/5 shadow-sm flex items-end p-4">
                  <div>
                    <div className="text-xs text-slate-500">Коллекция</div>
                    <div className="font-medium">Case #{i}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -left-4 -top-4 rounded-2xl bg-[#0f172a] text-white px-3 py-2 shadow-lg">
              4.9
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// components/SiteHeader.tsx
'use client';

import Link from 'next/link';
import {useEffect, useRef} from 'react';

export default function SiteHeader({locale='az'}:{locale?: 'az'|'ru'|'en'}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(()=>{
    const el = ref.current;
    if(!el) return;
    const setH = ()=>{
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--header-h', h+'px');
    };
    setH();
    const ro = new ResizeObserver(setH);
    ro.observe(el);
    return ()=>ro.disconnect();
  },[]);

  return (
    <header
      ref={ref}
      className="sticky top-0 z-50 w-full border-b border-black/5 bg-[rgba(255,255,255,0.85)] backdrop-blur supports-[backdrop-filter]:bg-[rgba(255,255,255,0.6)]"
      style={{paddingTop: 'env(safe-area-inset-top)'}}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-14 md:h-16 items-center justify-between gap-3">
          <Link href={`/${locale}`} className="inline-flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="h-6 md:h-7 w-auto object-contain" />
            <span className="font-semibold tracking-tight md:text-lg hidden sm:inline">AI Market</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href={`/${locale}`} className="opacity-80 hover:opacity-100">Ana səhifə</Link>
            <Link href={`/${locale}/services`} className="opacity-80 hover:opacity-100">Xidmətlər</Link>
            <Link href={`/${locale}/portfolio`} className="opacity-80 hover:opacity-100">Portfolio</Link>
            <Link href={`/${locale}/models`} className="opacity-80 hover:opacity-100">Modellər</Link>
            <Link href={`/${locale}/contact`} className="opacity-80 hover:opacity-100">Əlaqə</Link>
          </nav>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/az" className="px-2 py-1 rounded-md hover:bg-black/5">AZ</Link>
            <Link href="/ru" className="px-2 py-1 rounded-md hover:bg-black/5">RU</Link>
            <Link href="/en" className="px-2 py-1 rounded-md hover:bg-black/5">EN</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Navbar() {
  const router = useRouter();
  const { locale } = router;

  return (
    <nav style={{ padding: '20px', backgroundColor: '#222', color: '#fff' }}>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link
            href="/"
            locale={locale}
            style={{ color: router.pathname === '/' ? '#0af' : '#fff' }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            locale={locale}
            style={{ color: router.pathname === '/services' ? '#0af' : '#fff' }}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            locale={locale}
            style={{ color: router.pathname === '/portfolio' ? '#0af' : '#fff' }}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/models"
            locale={locale}
            style={{ color: router.pathname === '/models' ? '#0af' : '#fff' }}
          >
            Models
          </Link>
        </li>
      </ul>
    </nav>
  );
}

'use client';

import { useEffect, useState } from 'react';

const BASE = '';

export default function LegalNav() {
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    const referrer = document.referrer;
    if (
      referrer.includes('gymbuddies.nolancode.com') ||
      referrer.includes('localhost')
    ) {
      setShowBack(true);
    }
  }, []);

  return (
    <nav
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '1rem 0',
        background: 'rgba(8,6,15,0.9)',
        backdropFilter: 'blur(20px)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        className='container'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href={`${BASE}/`} style={{ textDecoration: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE}/img/logo-long.png`}
            alt='Gym Buddies'
            style={{ height: '44px', width: 'auto' }}
          />
        </a>
        {showBack && (
          <a
            href='https://gymbuddies.nolancode.com'
            className='back-link'
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
            }}
          >
            ← Back to app
          </a>
        )}
      </div>
    </nav>
  );
}

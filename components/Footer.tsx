'use client';

const BASE = '';

export default function Footer() {
  const isMobile = window.innerWidth <= 768;

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '2.5rem 0',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className='container'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          {/* Logo + tagline */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE}/img/logo-long.png`}
              alt='Gym Buddies'
              style={{
                height: isMobile ? '70px' : '80px',
                width: 'auto',
                margin: '0 0 0.5rem 10px',
              }}
            />
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Train together. Grow stronger.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Features', href: '#features' },
              { label: 'Download', href: '#download' },
              { label: 'Privacy Policy', href: `${BASE}/privacy` },
              { label: 'Terms of Service', href: `${BASE}/terms` },
              {
                label: 'Support',
                href: 'mailto:support@gymbuddies.nolancode.com',
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--teal)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-muted)')
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            © {new Date().getFullYear()} Nolancode. All rights reserved.
          </p>
          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Made with 💪 in Henderson, Nevada
          </p>
        </div>
      </div>
    </footer>
  );
}

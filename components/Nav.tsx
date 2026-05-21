'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BASE = '';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Screenshots', href: '#screenshots' },
  { label: 'Free', href: '#free' },
  { label: 'Community', href: '#community' },
  { label: 'Download', href: '#download' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(8,6,15,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.06)'
            : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a
            href='#'
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE}/img/logo-long.png`}
              style={{
                height: isMobile ? '80px' : '120px',
                width: 'auto',
              }}
            />
          </a>

          {/* Desktop links */}
          <div
            id='desktop-nav'
            style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--teal)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-secondary)')
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href='#download'
              className='btn-primary'
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}
            >
              Get the App
            </a>
          </div>

          {/* Hamburger */}
          <button
            id='hamburger-btn'
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
            }}
            aria-label='Toggle menu'
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  background:
                    menuOpen && i === 1 ? 'transparent' : 'var(--text-primary)',
                  transition: 'all 0.3s ease',
                  transform:
                    menuOpen && i === 0
                      ? 'rotate(45deg) translate(5px, 5px)'
                      : menuOpen && i === 2
                        ? 'rotate(-45deg) translate(5px, -5px)'
                        : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 49,
              background: 'rgba(8,6,15,0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              padding: '2rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--teal)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-primary)')
                }
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href='#download'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className='btn-primary'
              style={{ marginTop: '1rem' }}
              onClick={() => setMenuOpen(false)}
            >
              Get the App
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          #desktop-nav { display: none !important; }
          #hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

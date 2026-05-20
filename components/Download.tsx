'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const BASE = '/gym-buddies-lp';

export default function Download() {
  return (
    <section
      id='download'
      className='section'
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Full background glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(45,212,191,0.08) 0%, rgba(61,43,122,0.15) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className='orb orb-purple'
        style={{
          width: '800px',
          height: '800px',
          top: '-200px',
          left: '-300px',
          opacity: 0.4,
        }}
      />
      <div
        className='orb orb-teal'
        style={{
          width: '600px',
          height: '600px',
          bottom: '-200px',
          right: '-200px',
          opacity: 0.3,
        }}
      />

      <div
        className='container'
        style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}
      >
        <FadeIn>
          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE}/img/logo-icon.png`}
            alt='Gym Buddies'
            style={{
              width: '96px',
              height: '96px',
              margin: '0 auto 2.5rem',
              display: 'block',
              borderRadius: '22px',
              boxShadow: '0 0 60px rgba(45,212,191,0.25)',
            }}
          />

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              lineHeight: 1.05,
              marginBottom: '1.25rem',
            }}
          >
            Ready to train <span className='gradient-text'>together?</span>
          </h2>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.75,
              maxWidth: '520px',
              margin: '0 auto 2.5rem',
              fontWeight: 300,
            }}
          >
            Gym Buddies is coming soon to iOS and Android. Completely free,
            forever. Join the waitlist and be the first to know when we launch.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            {/* App Store */}
            <motion.button
              whileHover={{ y: -3, boxShadow: '0 0 40px rgba(45,212,191,0.3)' }}
              className='btn-primary disabled'
              disabled
              style={{
                gap: '0.75rem',
                padding: '1rem 2rem',
                opacity: 0.5,
                cursor: 'not-allowed',
              }}
            >
              <svg
                width='22'
                height='22'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div
                  style={{ fontSize: '0.7rem', fontWeight: 400, lineHeight: 1 }}
                >
                  Coming soon to
                </div>
                <div
                  style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.2 }}
                >
                  App Store
                </div>
              </div>
            </motion.button>

            {/* Google Play */}
            <motion.button
              whileHover={{ y: -3 }}
              className='btn-secondary disabled'
              disabled
              style={{
                gap: '0.75rem',
                padding: '1rem 2rem',
                opacity: 0.5,
                cursor: 'not-allowed',
              }}
            >
              <svg
                width='22'
                height='22'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M3.18 23.76c.3.17.64.24.99.18L14.76 12 10.23 7.47 3.18 23.76zm17.14-10.93L17.5 11.3l-2.74 2.7 2.74 2.7 2.84-1.55c.81-.45.81-1.57-.02-2.02zM3.54.28C3.24.1 2.9.03 2.55.1L13.38 11 8.84 15.54 3.54.28zM14.76 12l2.74-2.7-2.74-2.7L3.18.24c-.3-.17-.64-.24-.99-.18L14.76 12z' />
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div
                  style={{ fontSize: '0.7rem', fontWeight: 400, lineHeight: 1 }}
                >
                  Coming soon to
                </div>
                <div
                  style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.2 }}
                >
                  Google Play
                </div>
              </div>
            </motion.button>
          </div>
        </FadeIn>

        {/* Waitlist form */}
        <FadeIn delay={200}>
          <div style={{ maxWidth: '480px', margin: '0 auto' }}>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.05em',
              }}
            >
              GET NOTIFIED AT LAUNCH
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <input
                type='email'
                placeholder='your@email.com'
                style={{
                  flex: 1,
                  minWidth: '200px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: '0.875rem 1.25rem',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  fontFamily: 'var(--font-body)',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = 'var(--teal)')
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')
                }
              />
              <motion.button
                whileHover={{
                  y: -2,
                  boxShadow: '0 0 20px rgba(45,212,191,0.3)',
                }}
                className='btn-primary'
                style={{ flexShrink: 0 }}
              >
                Notify me
              </motion.button>
            </div>
            <p
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                marginTop: '0.75rem',
              }}
            >
              No spam, ever. Just a heads up when we launch. 🚀
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

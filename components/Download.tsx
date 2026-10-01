'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const BASE = '';

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
            Gym Buddies is live on iOS and Android. Completely free, forever.
            Download today and start training with your friends.
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
            <motion.a
              href='https://apps.apple.com/us/app/gym-buddies-workout-social/id6788955105'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ y: -3, boxShadow: '0 0 40px rgba(45,212,191,0.3)' }}
              className='btn-primary'
              style={{
                gap: '0.75rem',
                padding: '1rem 2rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
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
                  Download on the
                </div>
                <div
                  style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.2 }}
                >
                  App Store
                </div>
              </div>
            </motion.a>

            {/* Google Play */}
            <motion.a
              href='https://play.google.com/store/apps/details?id=com.nolancode.gymbuddies'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ y: -3, boxShadow: '0 0 40px rgba(45,212,191,0.3)' }}
              className='btn-primary'
              style={{
                gap: '0.75rem',
                padding: '1rem 2rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <svg
                width='22'
                height='22'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z' />
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div
                  style={{ fontSize: '0.7rem', fontWeight: 400, lineHeight: 1 }}
                >
                  Get it on
                </div>
                <div
                  style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.2 }}
                >
                  Google Play
                </div>
              </div>
            </motion.a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

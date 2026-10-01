'use client';

import { motion } from 'framer-motion';

const BASE = '';

export default function Hero() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      className='mesh-bg'
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '8rem 0 4rem',
      }}
    >
      {/* Orbs */}
      <div
        className='orb orb-purple'
        style={{
          width: '700px',
          height: '700px',
          top: '-200px',
          left: '-200px',
          opacity: 0.6,
        }}
      />
      <div
        className='orb orb-teal'
        style={{
          width: '500px',
          height: '500px',
          bottom: '-100px',
          right: '-100px',
          opacity: 0.4,
        }}
      />

      <div
        className='container'
        style={{ position: 'relative', zIndex: 2, width: '100%' }}
      >
        <div
          className='hero-grid'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left: copy */}
          <motion.div variants={container} initial='hidden' animate='show'>
            <motion.div variants={item} style={{ marginBottom: '1.5rem' }}>
              <span className='tag'>
                🚀 Now on iOS & Android — Free Forever
              </span>
            </motion.div>

            <motion.div variants={item} style={{ marginBottom: '1rem' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE}/img/logo-long.png`}
                alt='Gym Buddies'
                style={{
                  height: '60px',
                  width: 'auto',
                  marginBottom: '1.5rem',
                }}
              />
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                }}
              >
                Train together.{' '}
                <span className='gradient-text'>Grow stronger.</span>
              </h1>
            </motion.div>

            <motion.p
              variants={item}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '520px',
                marginBottom: '2.5rem',
                fontWeight: 300,
              }}
            >
              The social fitness platform that keeps you accountable, connected,
              and progressing. Track workouts, follow friends, get AI-powered
              plans, and level up together — completely free.
            </motion.p>

            <motion.div
              variants={item}
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '3rem',
              }}
            >
              {/* App Store button */}
              <motion.a
                href='https://apps.apple.com/us/app/gym-buddies-workout-social/id6788955105'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{
                  y: -3,
                  boxShadow: '0 0 40px rgba(45,212,191,0.3)',
                }}
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
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    Download on the
                  </div>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    App Store
                  </div>
                </div>
              </motion.a>

              {/* Google Play button */}
              <motion.a
                href='https://play.google.com/store/apps/details?id=com.nolancode.gymbuddies'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{
                  y: -3,
                  boxShadow: '0 0 40px rgba(45,212,191,0.3)',
                }}
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
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    Get it on
                  </div>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    Google Play
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(45,212,191,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#2DD4BF'
                  strokeWidth='2.5'
                >
                  <polyline points='20 6 9 17 4 12' />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  Now live on the App Store & Google Play
                </div>
                <div
                  style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}
                >
                  Free forever · no ads, no paywalls
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'relative' }}
            >
              {/* Glow behind phone */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-40px',
                  background:
                    'radial-gradient(ellipse, rgba(45,212,191,0.15) 0%, transparent 70%)',
                  borderRadius: '50%',
                  zIndex: 0,
                }}
              />

              <div
                className='phone-frame teal-glow'
                style={{ position: 'relative', zIndex: 1 }}
              >
                <div className='phone-notch' />
                <div className='phone-screen' style={{ top: '30px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${BASE}/img/screens/feed.webp`}
                    alt='Gym Buddies social feed with workout posts and reactions'
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                  />
                </div>
              </div>

              {/* Floating achievement badge */}
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className='glass'
                style={{
                  position: 'absolute',
                  top: '60px',
                  right: '-80px',
                  padding: '0.6rem 0.9rem',
                  borderRadius: '12px',
                  background: 'rgba(14,11,26,0.92)',
                  borderColor: 'rgba(45,212,191,0.2)',
                  whiteSpace: 'nowrap',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: 'var(--teal)',
                  }}
                >
                  🏆 New Achievement!
                </div>
                <div
                  style={{
                    fontSize: '0.6rem',
                    color: 'var(--text-muted)',
                    marginTop: '2px',
                  }}
                >
                  7-day streak unlocked
                </div>
              </motion.div>

              {/* Floating reaction bubble */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [1, -1, 1] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className='glass'
                style={{
                  position: 'absolute',
                  bottom: '100px',
                  left: '-90px',
                  padding: '0.6rem 0.9rem',
                  borderRadius: '12px',
                  background: 'rgba(14,11,26,0.92)',
                  borderColor: 'rgba(109,79,194,0.3)',
                  whiteSpace: 'nowrap',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: '#A78BFA',
                  }}
                >
                  💪 Alex reacted
                </div>
                <div
                  style={{
                    fontSize: '0.6rem',
                    color: 'var(--text-muted)',
                    marginTop: '2px',
                  }}
                >
                  to your workout
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

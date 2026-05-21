'use client';

import { motion } from 'framer-motion';

const BASE = '';

// Mini social feed mockup screen content
function FeedScreen() {
  const posts = [
    {
      name: 'Alex K.',
      time: '2m',
      content: 'Just crushed leg day 🔥 New PR on squats!',
      emoji: '💪',
      reactions: 14,
    },
    {
      name: 'Sarah M.',
      time: '8m',
      content: 'Week 3 of my AI plan done. Already seeing results!',
      emoji: '⚡',
      reactions: 28,
    },
    {
      name: 'Jordan T.',
      time: '15m',
      content: 'Morning run complete. 5K in 24mins 🏃',
      emoji: '🔥',
      reactions: 9,
    },
  ];

  return (
    <div
      style={{
        height: '100%',
        background: '#0E0B1A',
        overflowY: 'hidden',
        padding: '8px 0',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '8px 12px 6px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.85rem',
            color: 'var(--teal)',
          }}
        >
          Feed
        </span>
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            background:
              'linear-gradient(135deg, var(--teal), var(--purple-light))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.6rem',
            color: '#fff',
            fontWeight: 700,
          }}
        >
          D
        </div>
      </div>

      {/* Posts */}
      {posts.map((post, i) => (
        <div
          key={i}
          style={{
            padding: '10px 12px',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '6px',
            }}
          >
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                background: `linear-gradient(135deg, hsl(${i * 60 + 160}, 70%, 40%), hsl(${i * 60 + 200}, 80%, 30%))`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.55rem',
                color: '#fff',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {post.name[0]}
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                {post.name}
              </div>
              <div style={{ fontSize: '0.55rem', color: 'var(--text-muted)' }}>
                {post.time} ago
              </div>
            </div>
          </div>
          <p
            style={{
              fontSize: '0.65rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              marginBottom: '6px',
            }}
          >
            {post.content}
          </p>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span
              style={{
                fontSize: '0.6rem',
                background: 'rgba(45,212,191,0.1)',
                border: '1px solid rgba(45,212,191,0.2)',
                borderRadius: '99px',
                padding: '2px 6px',
                color: 'var(--teal)',
              }}
            >
              {post.emoji} {post.reactions}
            </span>
            <span style={{ fontSize: '0.55rem', color: 'var(--text-muted)' }}>
              💬 Reply
            </span>
          </div>
        </div>
      ))}

      {/* Bottom nav bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '44px',
          background: 'rgba(14,11,26,0.95)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '0 8px',
        }}
      >
        {['🏠', '🔍', '➕', '💬', '👤'].map((icon, i) => (
          <div
            key={i}
            style={{
              fontSize: i === 0 ? '1rem' : '0.8rem',
              opacity: i === 0 ? 1 : 0.4,
              filter: i === 0 ? 'none' : 'grayscale(1)',
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

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
                🚀 Coming to iOS & Android — Free Forever
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
              <button
                className='btn-primary disabled'
                disabled
                style={{ gap: '0.75rem' }}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <div
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 400,
                      opacity: 0.8,
                      lineHeight: 1,
                    }}
                  >
                    Coming soon to
                  </div>
                  <div
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    App Store
                  </div>
                </div>
              </button>

              {/* Google Play button */}
              <button
                className='btn-secondary disabled'
                disabled
                style={{ gap: '0.75rem', opacity: 0.4, cursor: 'not-allowed' }}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M3.18 23.76c.3.17.64.24.99.18L14.76 12 10.23 7.47 3.18 23.76zm17.14-10.93L17.5 11.3l-2.74 2.7 2.74 2.7 2.84-1.55c.81-.45.81-1.57-.02-2.02zM3.54.28C3.24.1 2.9.03 2.55.1L13.38 11 8.84 15.54 3.54.28zM14.76 12l2.74-2.7-2.74-2.7L3.18.24c-.3-.17-.64-.24-.99-.18L14.76 12z' />
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <div
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 400,
                      opacity: 0.8,
                      lineHeight: 1,
                    }}
                  >
                    Coming soon to
                  </div>
                  <div
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    Google Play
                  </div>
                </div>
              </button>
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
              <div style={{ display: 'flex' }}>
                {['#2DD4BF', '#6D4FC2', '#22D3EE', '#A78BFA', '#5EEAD4'].map(
                  (color, i) => (
                    <div
                      key={i}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background: color,
                        border: '2px solid var(--bg-primary)',
                        marginLeft: i === 0 ? 0 : '-8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        color: '#08060F',
                      }}
                    >
                      {['A', 'J', 'S', 'M', 'R'][i]}
                    </div>
                  ),
                )}
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  Beta testers waiting
                </div>
                <div
                  style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}
                >
                  Be the first to train together
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
                  <FeedScreen />
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

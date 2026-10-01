'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const BASE = '';

// Real screenshots from the app, shown inside the phone frame.
const screens = [
  {
    id: 'feed',
    label: 'Social Feed',
    emoji: '📱',
    src: `${BASE}/img/screens/feed.webp`,
    alt: 'Gym Buddies social feed with workout posts and reactions',
  },
  {
    id: 'workout',
    label: 'Workout Tracker',
    emoji: '🏋️',
    src: `${BASE}/img/screens/workout.webp`,
    alt: 'Live workout session logging sets, weight and reps',
  },
  {
    id: 'chat',
    label: 'Group Chat',
    emoji: '💬',
    src: `${BASE}/img/screens/chat.webp`,
    alt: 'Group chat planning a leg day session',
  },
  {
    id: 'nutrition',
    label: 'Nutrition',
    emoji: '🥗',
    src: `${BASE}/img/screens/nutrition.webp`,
    alt: 'Nutrition tracker with calories, macros and water intake',
  },
  {
    id: 'profile',
    label: 'Profile',
    emoji: '👤',
    src: `${BASE}/img/screens/profile.webp`,
    alt: 'User profile with stats, streaks and ring progress',
  },
];

export default function Screenshots() {
  const [active, setActive] = useState(0);

  return (
    <section
      id='screenshots'
      className='section'
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div
        className='orb orb-teal'
        style={{
          width: '500px',
          height: '500px',
          bottom: '0',
          left: '-150px',
          opacity: 0.3,
        }}
      />

      <div className='container' style={{ position: 'relative', zIndex: 2 }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className='section-label'>See it in action</p>
            <div className='divider' style={{ margin: '0.75rem auto 1rem' }} />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}
            >
              Built for your{' '}
              <span className='gradient-text'>whole fitness life.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Tab selector */}
        <FadeIn delay={100}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            {screens.map((screen, i) => (
              <button
                key={screen.id}
                onClick={() => setActive(i)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '99px',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: active === i ? 'var(--teal)' : 'transparent',
                  borderColor:
                    active === i ? 'var(--teal)' : 'rgba(255,255,255,0.12)',
                  color: active === i ? '#08060F' : 'var(--text-secondary)',
                }}
              >
                {screen.emoji} {screen.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Phone display */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '-60px',
                background:
                  'radial-gradient(ellipse, rgba(45,212,191,0.12) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0,
              }}
            />
            <div
              className='phone-frame teal-glow'
              style={{
                position: 'relative',
                zIndex: 1,
                width: '300px',
                height: '620px',
              }}
            >
              <div className='phone-notch' />
              <div className='phone-screen' style={{ top: '30px' }}>
                {/* All screens are rendered and cross-faded so switching tabs
                    doesn't wait on an image download. */}
                {screens.map((screen, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <motion.img
                    key={screen.id}
                    src={screen.src}
                    alt={screen.alt}
                    initial={false}
                    animate={{
                      opacity: active === i ? 1 : 0,
                      scale: active === i ? 1 : 0.97,
                    }}
                    transition={{ duration: 0.3 }}
                    aria-hidden={active !== i}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

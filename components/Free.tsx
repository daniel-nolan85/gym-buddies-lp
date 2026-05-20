'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const included = [
  { emoji: '📱', text: 'Full social feed with media posts' },
  { emoji: '💬', text: 'Unlimited group and direct chats' },
  { emoji: '🤖', text: 'AI-generated workout & diet plans' },
  { emoji: '🥗', text: 'Complete nutrition tracker' },
  { emoji: '🏆', text: 'Achievements, streaks & challenges' },
  { emoji: '👥', text: 'Buddy system & community features' },
  { emoji: '📊', text: 'Full workout history & analytics' },
  { emoji: '🔔', text: 'Push notifications & reminders' },
  { emoji: '🎯', text: 'Personal records & progress tracking' },
];

export default function Free() {
  return (
    <section
      id='free'
      className='section'
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Purple mesh background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(61,43,122,0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className='orb orb-purple'
        style={{
          width: '600px',
          height: '600px',
          top: '-100px',
          right: '-200px',
          opacity: 0.5,
        }}
      />

      <div className='container' style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <FadeIn>
            <div style={{ textAlign: 'center' }}>
              <p className='section-label' style={{ display: 'inline-flex' }}>
                No catch. No cost.
              </p>
            </div>
            <div className='divider' style={{ margin: '0.75rem auto 1rem' }} />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
                lineHeight: 1.1,
              }}
            >
              100% Free. <span className='purple-gradient-text'>Forever.</span>
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                lineHeight: 1.75,
                marginBottom: '3rem',
                fontWeight: 300,
              }}
            >
              Gym Buddies is completely free for every user, every feature,
              every day. No subscriptions, no paywalls, no premium tiers. We
              believe fitness tools should be accessible to everyone.
            </p>
          </FadeIn>

          {/* Feature grid */}
          <FadeIn delay={100}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '0.75rem',
                marginBottom: '3rem',
              }}
            >
              {included.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className='glass'
                  style={{
                    borderRadius: '12px',
                    padding: '0.9rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>
                    {item.emoji}
                  </span>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.text}
                  </span>
                  <span
                    style={{
                      marginLeft: 'auto',
                      color: 'var(--teal)',
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='3'
                    >
                      <polyline points='20 6 9 17 4 12' />
                    </svg>
                  </span>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div
              className='glass teal-glow'
              style={{
                borderRadius: '20px',
                padding: '2rem',
                borderColor: 'rgba(45,212,191,0.2)',
                display: 'inline-block',
                width: '100%',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎉</div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Everything. Free. Always.
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: 1.65,
                  maxWidth: '500px',
                  margin: '0 auto',
                }}
              >
                We're building Gym Buddies because we love fitness and
                community. Every feature you see is included at no cost —
                download it, use it, share it with your training partners.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

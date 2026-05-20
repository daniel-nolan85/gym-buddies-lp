'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const stats = [
  { value: 'Day 1', label: 'Community launching soon', emoji: '🚀' },
  { value: 'All', label: 'Free features for all users', emoji: '🎁' },
  { value: '8', label: 'Core features built', emoji: '⚡' },
  { value: '100%', label: 'Community driven', emoji: '👥' },
];

const communityFeatures = [
  {
    title: 'Find Your Tribe',
    description:
      'Follow friends, connect with gym buddies, and build your fitness network. Your feed shows the people who matter to your training.',
    emoji: '🤝',
  },
  {
    title: 'Group Challenges',
    description:
      'Join community challenges across beginner, intermediate, and advanced levels. Compete on leaderboards and earn bonus points for streaks and PRs during challenges.',
    emoji: '⚔️',
  },
  {
    title: 'Celebrate Together',
    description:
      'Achievement unlocks, streak milestones, and personal records are shared moments. React, comment, and cheer each other on.',
    emoji: '🎉',
  },
  {
    title: 'Group Chats',
    description:
      'Create groups for your gym crew, running club, or training partners. Share media, voice notes, quote messages, and stay connected between sessions.',
    emoji: '💬',
  },
  {
    title: 'Buddy System',
    description:
      'Add gym buddies for a closer connection. See their activity, celebrate their achievements, and keep each other accountable.',
    emoji: '👊',
  },
  {
    title: 'Share Your Journey',
    description:
      'Post workouts, progress photos, nutrition wins, and motivation. Build your fitness story and inspire others in the community.',
    emoji: '📸',
  },
];

export default function Community() {
  return (
    <section
      id='community'
      className='section'
      style={{ position: 'relative' }}
    >
      <div
        className='orb orb-teal'
        style={{
          width: '500px',
          height: '500px',
          top: '50%',
          right: '-200px',
          opacity: 0.25,
        }}
      />

      <div className='container' style={{ position: 'relative', zIndex: 2 }}>
        <FadeIn>
          <div style={{ marginBottom: '4rem' }}>
            <p className='section-label'>Better together</p>
            <div className='divider' />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                maxWidth: '600px',
                lineHeight: 1.15,
              }}
            >
              Fitness is better{' '}
              <span className='gradient-text'>when you do it together.</span>
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginTop: '1rem',
                fontSize: '0.975rem',
                maxWidth: '520px',
                lineHeight: 1.7,
              }}
            >
              Gym Buddies is built around the idea that community is the most
              powerful fitness tool there is. Every feature is designed to keep
              you connected and accountable.
            </p>
          </div>
        </FadeIn>

        {/* Stats row */}
        <FadeIn delay={100}>
          <div
            className='stats-grid'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              marginBottom: '4rem',
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className='glass'
                style={{
                  borderRadius: '16px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <div style={{ fontSize: '1.5rem' }}>{stat.emoji}</div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--teal)',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Community features grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
            alignItems: 'stretch',
          }}
        >
          {communityFeatures.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 60} direction='up'>
              <motion.div
                whileHover={{ y: -4 }}
                className='glass'
                style={{
                  borderRadius: '16px',
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  height: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--teal-dim)',
                    border: '1px solid var(--teal-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                  }}
                >
                  {feature.emoji}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.83rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

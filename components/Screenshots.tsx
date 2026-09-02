'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';

// Individual screen mockup components
function WorkoutScreen() {
  return (
    <div
      style={{
        height: '100%',
        background: '#0E0B1A',
        padding: '0',
        overflowY: 'hidden',
      }}
    >
      <div
        style={{
          padding: '10px 12px 8px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.85rem',
            color: 'var(--text-primary)',
          }}
        >
          Today's Workout
        </span>
        <div
          style={{ fontSize: '0.6rem', color: 'var(--teal)', marginTop: '2px' }}
        >
          Day 4 · Push Day 💪
        </div>
      </div>
      <div style={{ padding: '8px 12px' }}>
        {[
          { name: 'Bench Press', sets: '4 × 8', weight: '80kg', done: true },
          {
            name: 'Incline DB Press',
            sets: '3 × 10',
            weight: '30kg',
            done: true,
          },
          { name: 'Cable Flyes', sets: '3 × 12', weight: '20kg', done: false },
          {
            name: 'Tricep Pushdown',
            sets: '4 × 12',
            weight: '35kg',
            done: false,
          },
          {
            name: 'Overhead Extension',
            sets: '3 × 15',
            weight: '25kg',
            done: false,
          },
        ].map((ex, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 0',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                border: `2px solid ${ex.done ? 'var(--teal)' : 'rgba(255,255,255,0.2)'}`,
                background: ex.done ? 'var(--teal)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {ex.done && (
                <span
                  style={{
                    fontSize: '0.5rem',
                    color: '#08060F',
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  color: ex.done ? 'var(--text-muted)' : 'var(--text-primary)',
                  textDecoration: ex.done ? 'line-through' : 'none',
                }}
              >
                {ex.name}
              </div>
              <div style={{ fontSize: '0.55rem', color: 'var(--text-muted)' }}>
                {ex.sets} · {ex.weight}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            marginTop: '10px',
            background:
              'linear-gradient(135deg, rgba(45,212,191,0.15), rgba(61,43,122,0.15))',
            borderRadius: '8px',
            padding: '8px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '0.6rem',
              color: 'var(--text-muted)',
              marginBottom: '3px',
            }}
          >
            Progress
          </div>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--teal)',
            }}
          >
            2 / 5 exercises complete
          </div>
          <div
            style={{
              height: '4px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '2px',
              marginTop: '5px',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '40%',
                background:
                  'linear-gradient(90deg, var(--teal), var(--purple-light))',
                borderRadius: '2px',
              }}
            />
          </div>
        </div>
      </div>
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
        }}
      >
        {['🏠', '🔍', '➕', '💬', '👤'].map((icon, i) => (
          <div
            key={i}
            style={{
              fontSize: i === 2 ? '1rem' : '0.8rem',
              opacity: i === 2 ? 1 : 0.4,
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatScreen() {
  const messages = [
    {
      sender: 'Alex',
      text: 'Anyone hitting the gym tonight? 💪',
      time: '7:30pm',
      mine: false,
    },
    {
      sender: 'You',
      text: 'Yep! Leg day, you in?',
      time: '7:31pm',
      mine: true,
    },
    {
      sender: 'Alex',
      text: "Always 🔥 Let's go!",
      time: '7:31pm',
      mine: false,
    },
    {
      sender: 'Sarah',
      text: 'Joining too! See you at 8 🏃‍♀️',
      time: '7:33pm',
      mine: false,
    },
  ];

  return (
    <div
      style={{
        height: '100%',
        background: '#0E0B1A',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          padding: '10px 12px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background:
              'linear-gradient(135deg, var(--teal), var(--purple-light))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.65rem',
            fontWeight: 700,
            color: '#08060F',
          }}
        >
          GB
        </div>
        <div>
          <div
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
            }}
          >
            Gym Crew 🏋️
          </div>
          <div style={{ fontSize: '0.55rem', color: 'var(--teal)' }}>
            4 members · 2 online
          </div>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          padding: '8px 10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          overflowY: 'hidden',
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: msg.mine ? 'row-reverse' : 'row',
              gap: '6px',
              alignItems: 'flex-end',
            }}
          >
            {!msg.mine && (
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: `hsl(${i * 80 + 160}, 70%, 40%)`,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.5rem',
                  color: '#fff',
                  fontWeight: 700,
                }}
              >
                {msg.sender[0]}
              </div>
            )}
            <div style={{ maxWidth: '70%' }}>
              {!msg.mine && (
                <div
                  style={{
                    fontSize: '0.5rem',
                    color: 'var(--text-muted)',
                    marginBottom: '2px',
                  }}
                >
                  {msg.sender}
                </div>
              )}
              <div
                style={{
                  background: msg.mine
                    ? 'linear-gradient(135deg, var(--teal), var(--purple-light))'
                    : 'rgba(255,255,255,0.06)',
                  borderRadius: msg.mine
                    ? '12px 12px 2px 12px'
                    : '12px 12px 12px 2px',
                  padding: '5px 8px',
                }}
              >
                <div
                  style={{
                    fontSize: '0.62rem',
                    color: msg.mine ? '#08060F' : 'var(--text-primary)',
                    fontWeight: msg.mine ? 600 : 400,
                  }}
                >
                  {msg.text}
                </div>
              </div>
              <div
                style={{
                  fontSize: '0.5rem',
                  color: 'var(--text-muted)',
                  marginTop: '2px',
                  textAlign: msg.mine ? 'right' : 'left',
                }}
              >
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: '8px 10px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.04)',
            borderRadius: '20px',
            padding: '6px 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>
            Message...
          </span>
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'var(--teal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{ fontSize: '0.6rem', color: '#08060F', fontWeight: 700 }}
            >
              ↑
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NutritionScreen() {
  const macros = [
    { label: 'Protein', value: 142, goal: 180, color: '#EF4444' },
    { label: 'Carbs', value: 210, goal: 250, color: '#F59E0B' },
    { label: 'Fats', value: 58, goal: 70, color: '#8B5CF6' },
  ];

  return (
    <div style={{ height: '100%', background: '#0E0B1A', overflowY: 'hidden' }}>
      <div
        style={{
          padding: '10px 12px 8px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.85rem',
            color: 'var(--text-primary)',
          }}
        >
          Nutrition
        </span>
        <div
          style={{
            fontSize: '0.6rem',
            color: 'var(--text-muted)',
            marginTop: '2px',
          }}
        >
          Today · May 19
        </div>
      </div>
      <div style={{ padding: '10px 12px' }}>
        {/* Calorie ring */}
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background:
                'conic-gradient(var(--teal) 0deg, var(--teal) 259deg, rgba(255,255,255,0.1) 259deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#0E0B1A',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--teal)',
                  lineHeight: 1,
                }}
              >
                1,820
              </div>
              <div style={{ fontSize: '0.45rem', color: 'var(--text-muted)' }}>
                / 2,200 kcal
              </div>
            </div>
          </div>
        </div>
        {/* Macros */}
        {macros.map((macro) => (
          <div key={macro.label} style={{ marginBottom: '8px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '3px',
              }}
            >
              <span
                style={{
                  fontSize: '0.6rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                }}
              >
                {macro.label}
              </span>
              <span
                style={{
                  fontSize: '0.6rem',
                  color: macro.color,
                  fontWeight: 600,
                }}
              >
                {macro.value}g / {macro.goal}g
              </span>
            </div>
            <div
              style={{
                height: '4px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '2px',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${(macro.value / macro.goal) * 100}%`,
                  background: macro.color,
                  borderRadius: '2px',
                }}
              />
            </div>
          </div>
        ))}
        {/* Water */}
        <div
          style={{
            marginTop: '10px',
            background: 'rgba(45,212,191,0.06)',
            border: '1px solid rgba(45,212,191,0.15)',
            borderRadius: '8px',
            padding: '8px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}
            >
              💧 Water
            </span>
            <span
              style={{
                fontSize: '0.65rem',
                color: 'var(--teal)',
                fontWeight: 600,
              }}
            >
              1.8L / 2.5L
            </span>
          </div>
          <div
            style={{
              height: '4px',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '2px',
              marginTop: '5px',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '72%',
                background: 'var(--teal)',
                borderRadius: '2px',
              }}
            />
          </div>
        </div>
      </div>
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
        }}
      >
        {['🏠', '🔍', '➕', '💬', '👤'].map((icon, i) => (
          <div
            key={i}
            style={{ fontSize: '0.8rem', opacity: i === 1 ? 1 : 0.4 }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div style={{ height: '100%', background: '#0E0B1A', overflowY: 'hidden' }}>
      {/* Cover */}
      <div
        style={{
          height: '70px',
          background: 'linear-gradient(135deg, var(--purple), var(--teal))',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '12px',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background:
              'linear-gradient(135deg, var(--teal), var(--purple-light))',
            border: '3px solid #0E0B1A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            fontWeight: 700,
            color: '#08060F',
          }}
        >
          D
        </div>
      </div>
      <div style={{ padding: '28px 12px 8px' }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}
        >
          Daniel N.
        </div>
        <div
          style={{
            fontSize: '0.6rem',
            color: 'var(--text-muted)',
            marginBottom: '8px',
          }}
        >
          @daniel_fits
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '6px',
            marginBottom: '10px',
          }}
        >
          {[
            { label: 'Workouts', value: '142' },
            { label: 'Streak', value: '28d' },
            { label: 'Buddies', value: '24' },
            { label: 'PRs', value: '18' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                textAlign: 'center',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '6px',
                padding: '5px 2px',
              }}
            >
              <div
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--teal)',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.5rem', color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        {/* Achievements */}
        <div
          style={{
            fontSize: '0.6rem',
            color: 'var(--text-muted)',
            marginBottom: '5px',
            fontFamily: 'var(--font-mono)',
          }}
        >
          ACHIEVEMENTS
        </div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {['🔥', '💪', '⚡', '🏆', '🎯', '🌟'].map((badge, i) => (
            <div
              key={i}
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'rgba(45,212,191,0.1)',
                border: '1px solid rgba(45,212,191,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
              }}
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
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
        }}
      >
        {['🏠', '🔍', '➕', '💬', '👤'].map((icon, i) => (
          <div
            key={i}
            style={{ fontSize: '0.8rem', opacity: i === 4 ? 1 : 0.4 }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

const screens = [
  { id: 'feed', label: 'Social Feed', emoji: '📱', component: null },
  {
    id: 'workout',
    label: 'Workout Tracker',
    emoji: '🏋️',
    component: <WorkoutScreen />,
  },
  { id: 'chat', label: 'Group Chat', emoji: '💬', component: <ChatScreen /> },
  {
    id: 'nutrition',
    label: 'Nutrition',
    emoji: '🥗',
    component: <NutritionScreen />,
  },
  {
    id: 'profile',
    label: 'Profile',
    emoji: '👤',
    component: <ProfileScreen />,
  },
];

// Import FeedScreen from Hero or recreate inline
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
          <div style={{ display: 'flex', gap: '8px' }}>
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
        }}
      >
        {['🏠', '🔍', '➕', '💬', '👤'].map((icon, i) => (
          <div
            key={i}
            style={{
              fontSize: i === 0 ? '1rem' : '0.8rem',
              opacity: i === 0 ? 1 : 0.4,
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

screens[0].component = <FeedScreen />;

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
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    style={{ height: '100%' }}
                  >
                    {screens[active].component}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        <p
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          * UI mockups — final app may vary slightly
        </p>
      </div>
    </section>
  );
}

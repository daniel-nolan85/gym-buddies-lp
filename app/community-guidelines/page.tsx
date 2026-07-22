import LegalNav from '@/components/LegalNav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Guidelines — Gym Buddies',
  description: 'Community Guidelines for the Gym Buddies mobile application.',
};

const BASE = '';

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.25rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
        marginBottom: '1rem',
        paddingBottom: '0.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {title}
    </h2>
    <div
      style={{
        color: 'var(--text-secondary)',
        lineHeight: 1.8,
        fontSize: '0.95rem',
      }}
    >
      {children}
    </div>
  </div>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ marginBottom: '1rem' }}>{children}</p>
);

const UL = ({ items }: { items: string[] }) => (
  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
    {items.map((item, i) => (
      <li key={i} style={{ marginBottom: '0.5rem' }}>
        {item}
      </li>
    ))}
  </ul>
);

export default function CommunityGuidelines() {
  return (
    <div
      style={{
        background: 'var(--bg-primary)',
        minHeight: '100vh',
        fontFamily: 'var(--font-body)',
      }}
    >
      <LegalNav />

      <div
        className='container'
        style={{ maxWidth: '780px', padding: '4rem 1.5rem' }}
      >
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--teal)',
              marginBottom: '0.75rem',
            }}
          >
            Legal
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}
          >
            Community Guidelines
          </h1>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.875rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Last updated: July 21, 2026
          </p>
        </div>

        <Section title='Our Community'>
          <P>
            Gym Buddies is a social fitness community built around mutual
            support, shared goals, and positive encouragement. These guidelines
            exist to ensure that every member feels safe, respected, and
            motivated to achieve their fitness goals.
          </P>
          <P>
            By using Gym Buddies, you agree to follow these guidelines. Failure
            to do so may result in content removal, account suspension, or
            permanent banning at our sole discretion.
          </P>
        </Section>

        <Section title='Be Respectful'>
          <P>
            Gym Buddies is a place for encouragement, not judgement. We expect
            all members to:
          </P>
          <UL
            items={[
              'Treat every member with kindness and respect, regardless of their fitness level, appearance, background, or goals',
              'Offer constructive and supportive feedback — not criticism or ridicule',
              'Celebrate the achievements of others, no matter how big or small',
              'Avoid language or behaviour that is demeaning, condescending, or dismissive',
            ]}
          />
        </Section>

        <Section title='Keep It Relevant'>
          <P>
            Gym Buddies is a fitness-focused community. Please keep your content
            relevant to fitness, health, nutrition, and related lifestyle
            topics. This includes:
          </P>
          <UL
            items={[
              'Workout logs, personal records, and fitness milestones',
              'Nutrition tips, meal prep, and healthy eating habits',
              'Motivation, mindset, and wellness content',
              'Progress photos and transformation journeys shared respectfully',
              'Challenges, goals, and accountability check-ins',
            ]}
          />
          <P>
            Off-topic content, promotional material, and spam will be removed.
          </P>
        </Section>

        <Section title='Prohibited Content'>
          <P>
            The following content is not permitted on Gym Buddies under any
            circumstances:
          </P>
          <UL
            items={[
              'Harassment, bullying, intimidation, or targeted abuse of any member',
              'Hate speech, discrimination, or content that degrades individuals based on race, ethnicity, gender, religion, sexual orientation, disability, or body type',
              'Sexually explicit, pornographic, or suggestive content',
              'Content that exploits, endangers, or sexualises minors in any way',
              'Content that promotes violence, self-harm, eating disorders, or dangerous fitness practices',
              'Before-and-after content that promotes unhealthy body image, extreme weight loss, or disordered eating',
              'Spam, unsolicited advertising, or repeated promotional posts',
              'Impersonation of other users, public figures, or Gym Buddies staff',
              'Sharing of another person\'s private information without their consent ("doxxing")',
              'Misinformation about health, fitness, or nutrition that could cause harm',
            ]}
          />
        </Section>

        <Section title='Safe Fitness Advice'>
          <P>
            We care about the health and safety of our community. When sharing
            fitness or nutrition advice:
          </P>
          <UL
            items={[
              'Do not promote practices that are medically unsafe, extreme, or potentially harmful',
              'Do not claim to provide professional medical, dietary, or clinical advice unless you are a verified healthcare professional',
              'Always encourage others to consult a qualified healthcare provider before making significant changes to their exercise or nutrition routine',
              'Be mindful that what works for you may not be safe or appropriate for others',
            ]}
          />
        </Section>

        <Section title='Verified Coaches'>
          <P>
            Members with the Verified Coach badge have submitted fitness
            credentials for review by our team. However:
          </P>
          <UL
            items={[
              'Verified Coach status does not mean the coach is medically licensed or that their advice is clinically endorsed by Gym Buddies',
              'All fitness and nutrition advice — from any source — should be followed with appropriate caution and professional consultation where necessary',
              'Verified Coaches are held to the same community standards as all other members and may have their status revoked for guideline violations',
            ]}
          />
        </Section>

        <Section title='Reporting and Enforcement'>
          <P>
            If you encounter content or behaviour that violates these
            guidelines, please use the in-app reporting feature. Our admin team
            reviews all reports and may take the following actions:
          </P>
          <UL
            items={[
              'Remove content that violates these guidelines',
              'Issue a warning to the member responsible',
              "Temporarily suspend the member's account",
              'Permanently ban the member from Gym Buddies',
            ]}
          />
          <P>
            We aim to review all reports promptly. The severity of the action
            taken will depend on the nature and frequency of the violation.
            Nolancode reserves the right to take any action we deem appropriate
            in our sole discretion.
          </P>
        </Section>

        <Section title='Contact Us'>
          <P>
            If you have questions about these guidelines or want to report
            something that cannot be handled through the in-app reporting
            feature, please contact us:
          </P>
          <div
            style={{
              background: 'rgba(45,212,191,0.06)',
              border: '1px solid rgba(45,212,191,0.15)',
              borderRadius: '12px',
              padding: '1.25rem',
              marginTop: '0.5rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              <strong style={{ color: 'var(--text-primary)' }}>
                Nolancode
              </strong>
              <br />
              Email:{' '}
              <a
                href='mailto:support@nolancode.com'
                style={{ color: 'var(--teal)', textDecoration: 'none' }}
              >
                support@nolancode.com
              </a>
              <br />
              Henderson, Nevada, United States
            </p>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '1.5rem 0',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          © {new Date().getFullYear()} Nolancode. All rights reserved. ·{' '}
          <a
            href={`${BASE}/terms`}
            className='legal-link'
            style={{ color: 'var(--teal)', textDecoration: 'none' }}
          >
            Terms of Service
          </a>{' '}
          ·{' '}
          <a
            href={`${BASE}/privacy`}
            className='legal-link'
            style={{ color: 'var(--teal)', textDecoration: 'none' }}
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

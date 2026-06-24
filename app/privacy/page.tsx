import type { Metadata } from 'next';
import LegalNav from '@/components/LegalNav';

export const metadata: Metadata = {
  title: 'Privacy Policy — Gym Buddies',
  description: 'Privacy Policy for the Gym Buddies mobile application.',
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

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.875rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Last updated: June 24, 2026
          </p>
        </div>

        <Section title='1. Introduction'>
          <P>
            Welcome to Gym Buddies ("the App"), operated by Nolancode ("we,"
            "us," or "our"). This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our mobile
            application available on iOS and Android.
          </P>
          <P>
            By downloading, installing, or using Gym Buddies, you agree to the
            collection and use of information in accordance with this policy. If
            you do not agree with the terms of this Privacy Policy, please do
            not access or use the App.
          </P>
          <P>
            We are committed to protecting your personal information and your
            right to privacy. If you have any questions or concerns about this
            policy or our practices, please contact us at{' '}
            <strong style={{ color: 'var(--teal)' }}>
              support@gymbuddies.nolancode.com
            </strong>
            .
          </P>
        </Section>

        <Section title='2. Information We Collect'>
          <P>
            <strong style={{ color: 'var(--text-primary)' }}>
              Information you provide directly:
            </strong>
          </P>
          <UL
            items={[
              'Account registration information: name, email address, and username provided through Clerk authentication (including Google OAuth if used)',
              'Profile information: profile photo, cover image, bio, location (city/region only), fitness interests, fitness level, and fitness goals',
              'Workout data: exercises, sets, reps, weights, duration, completion status, and personal records',
              'Nutrition data: food entries, calorie counts, macro breakdowns (protein, carbs, fats), and water intake logs',
              'Social content: posts, comments, reactions, chat messages, voice notes, and any media you upload (images and videos)',
              'Plan data: workout plans and diet plans you create or save, including AI-generated plans',
              'Achievement and streak data: earned badges, milestone progress, and workout streak history',
              'Push notification token: to deliver notifications to your device',
            ]}
          />
          <P>
            <strong style={{ color: 'var(--text-primary)' }}>
              Voice recordings:
            </strong>{' '}
            When you record and send voice messages in chat, or leave voice
            comments on posts, plans, or profile images, the audio recording is
            captured, uploaded, and stored on Cloudinary's secure servers. Voice
            recordings are user-initiated — the App only records when you
            actively hold the record button. Recordings are stored as part of
            your content and are subject to the same retention and deletion
            rules as other media you upload. You can delete individual voice
            recordings at any time by deleting the message or comment containing
            them, or by deleting your account.
          </P>
          <P>
            <strong style={{ color: 'var(--text-primary)' }}>
              Health and fitness data:
            </strong>
          </P>
          <UL
            items={[
              'Workout history, exercise logs, sets, reps, weights, and personal records',
              'Nutrition logs including food entries, calorie counts, and macro breakdowns (protein, carbs, fats, water intake)',
              'Fitness goals, fitness level, and body-related preferences you provide',
              'Streak data, achievement history, and progress milestones',
            ]}
          />
          <P>
            Health and fitness data you provide is stored securely and is used
            solely to operate the App's features. It is not sold or shared with
            third parties except as strictly necessary to provide the service
            (for example, storing data on MongoDB Atlas). You can delete your
            health and fitness data at any time by deleting your account from
            within the App.
          </P>
          <P>
            <strong style={{ color: 'var(--text-primary)' }}>
              Information collected automatically:
            </strong>
          </P>
          <UL
            items={[
              'Device information: device type, operating system version, and unique device identifiers',
              'Usage data: features accessed, screens viewed, and interaction patterns within the App',
              'Log data: IP address, access times, and error reports',
            ]}
          />
        </Section>

        <Section title='3. How We Use Your Information'>
          <P>We use the information we collect to:</P>
          <UL
            items={[
              'Create and manage your account and authenticate your identity via Clerk',
              'Provide, operate, and maintain the App and all its features',
              'Generate AI-powered workout and diet plans personalised to your goals and fitness level',
              'Enable social features including posts, comments, reactions, group chats, and buddy connections',
              'Send push notifications about activity related to your account (reactions, messages, achievements, streak reminders) — you can manage these in your device settings',
              'Track and display your workout history, personal records, streaks, and achievements',
              'Provide nutrition tracking and calorie/macro analysis',
              'Process and store media files (images and videos) you upload via Cloudinary',
              'Enable real-time chat and social features via Socket.io',
              'Analyse usage patterns to improve the App and develop new features',
              'Respond to your support requests and communications',
              'Enforce our Terms of Service and community guidelines',
              'Comply with applicable laws and regulations',
              'Store and deliver voice recordings you create within the App via Cloudinary secure cloud storage',
            ]}
          />
        </Section>

        <Section title='4. Third-Party Services'>
          <P>
            We use the following third-party services to operate Gym Buddies.
            Each has its own privacy policy governing their use of your data:
          </P>
          <UL
            items={[
              'Clerk (clerk.com) — Authentication and user identity management. Clerk processes your email address and OAuth tokens. View their privacy policy at clerk.com/privacy',
              'Cloudinary (cloudinary.com) — Cloud storage and delivery of images and videos you upload. View their privacy policy at cloudinary.com/privacy',
              "MongoDB Atlas — Secure cloud database storage for your app data, hosted on MongoDB's infrastructure",
              'Inngest (inngest.com) — Background job processing for features such as AI plan generation and notifications',
              'Sevalla — Application hosting and infrastructure provider',
              'Expo (expo.dev) — Mobile app framework and push notification delivery (via Expo Push Notification Service)',
              'OpenAI (openai.com) — AI services used to generate personalised workout and diet plans, global and personal challenges, motivational content, and nutrition estimates. Your fitness preferences, goals, and food log queries are sent to OpenAI for processing; no personally identifiable information beyond these inputs is transmitted. View their privacy policy at openai.com/policies/privacy-policy',
              'Sentry (sentry.io) — Error tracking and performance monitoring. Sentry may receive device information, IP addresses, and error context data when errors occur within the App. View their privacy policy at sentry.io/privacy',
              'Resend (resend.com) — Transactional email delivery for system notifications and alerts. View their privacy policy at resend.com/privacy',
            ]}
          />
          <P>
            We do not sell your personal data to any third party. Third-party
            services we use receive only the minimum data required to perform
            their specific function.
          </P>
        </Section>

        <Section title='5. Data Storage and Security'>
          <P>
            Your data is stored securely on MongoDB Atlas servers. Media files
            are stored on Cloudinary's secure cloud infrastructure.
            Authentication data is managed by Clerk.
          </P>
          <P>
            We implement industry-standard security measures including HTTPS/TLS
            encryption for all data in transit, access controls, and regular
            security reviews. However, no method of transmission over the
            internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </P>
          <P>
            We retain your personal data for as long as your account is active
            or as needed to provide services. If you delete your account, we
            will delete or anonymise your personal data within 30 days, except
            where we are required to retain it for legal compliance purposes.
          </P>
        </Section>

        <Section title='6. Social Features and Public Content'>
          <P>
            Gym Buddies is a social application. Please be aware of the
            following regarding content you share:
          </P>
          <UL
            items={[
              'Posts you share on the feed are visible to other users in the community',
              'Your profile information (name, username, profile photo, bio, and any fields you choose to make public) is visible to other users',
              'Workout stats, personal records, achievements, and streak information can be made public or private via your privacy settings',
              'Chat messages in group chats are visible to all members of that group',
              'Content you post cannot be guaranteed to remain private once shared, even if you later delete it, as other users may have seen or interacted with it',
            ]}
          />
          <P>
            You can control the visibility of most profile fields in the App's
            privacy settings.
          </P>
        </Section>

        <Section title="7. Children's Privacy">
          <P>
            Gym Buddies is not directed to children under the age of 13, and we
            do not knowingly collect personal information from children under
            13. If you are a parent or guardian and believe your child under 13
            has provided us with personal information, please contact us
            immediately at support@gymbuddies.nolancode.com. If we become aware
            that we have collected personal information from a child under 13
            without parental consent, we will take steps to remove that
            information.
          </P>
          <P>
            Users between the ages of 13 and 17 should obtain parental consent
            before using the App.
          </P>
        </Section>

        <Section title='8. Your Rights and Choices'>
          <P>
            Depending on your location, you may have the following rights
            regarding your personal data:
          </P>
          <UL
            items={[
              'Access: request a copy of the personal data we hold about you',
              'Correction: request that we correct inaccurate or incomplete data',
              'Deletion: request that we delete your personal data ("right to be forgotten")',
              'Portability: request that we provide your data in a portable format',
              'Restriction: request that we restrict processing of your data in certain circumstances',
              'Objection: object to our processing of your data for certain purposes',
            ]}
          />
          <P>
            You can manage most of your data directly within the App. To request
            account deletion or exercise other rights, contact us at
            support@gymbuddies.nolancode.com. We will respond to your request
            within 30 days.
          </P>
          <P>
            <strong style={{ color: 'var(--text-primary)' }}>
              Push Notifications:
            </strong>{' '}
            You can opt out of push notifications at any time through your
            device's notification settings.
          </P>
          <P>
            <strong style={{ color: 'var(--text-primary)' }}>
              Account Deletion:
            </strong>{' '}
            You can delete your account from within the App settings. Upon
            deletion, your profile, posts, and personal data will be removed
            within 30 days.
          </P>
        </Section>

        <Section title='9. California Privacy Rights (CCPA)'>
          <P>
            If you are a California resident, you have additional rights under
            the California Consumer Privacy Act (CCPA):
          </P>
          <UL
            items={[
              'The right to know what personal information we collect, use, disclose, and sell',
              'The right to delete personal information we have collected',
              'The right to opt-out of the sale of personal information — we do not sell personal information',
              'The right to non-discrimination for exercising your CCPA rights',
            ]}
          />
          <P>
            To exercise your California privacy rights, contact us at
            support@gymbuddies.nolancode.com.
          </P>
        </Section>

        <Section title='10. International Users and GDPR'>
          <P>
            If you are located in the European Economic Area (EEA), United
            Kingdom, or Switzerland, you have rights under the General Data
            Protection Regulation (GDPR) or applicable local law.
          </P>
          <P>
            Our legal bases for processing your data include: performance of a
            contract (providing the App's services), legitimate interests
            (improving the App, preventing fraud), consent (for optional
            features and marketing communications), and legal obligation.
          </P>
          <P>
            Data may be transferred to and processed in the United States and
            other countries where our service providers operate. We ensure
            appropriate safeguards are in place for international transfers.
          </P>
        </Section>

        <Section title='11. Changes to This Privacy Policy'>
          <P>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for legal, operational, or regulatory
            reasons. We will notify you of any material changes by updating the
            "Last updated" date at the top of this policy and, where
            appropriate, by sending you a push notification or email.
          </P>
          <P>
            We encourage you to review this Privacy Policy periodically. Your
            continued use of the App after any changes constitutes your
            acceptance of the updated policy.
          </P>
        </Section>

        <Section title='12. Contact Us'>
          <P>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our privacy practices, please contact us:
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
                href='mailto:support@gymbuddies.nolancode.com'
                style={{ color: 'var(--teal)', textDecoration: 'none' }}
              >
                support@gymbuddies.nolancode.com
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
          </a>
        </p>
      </div>
    </div>
  );
}

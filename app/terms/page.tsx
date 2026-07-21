import LegalNav from '@/components/LegalNav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Gym Buddies',
  description: 'Terms of Service for the Gym Buddies mobile application.',
};

const BASE = '';

const Section = ({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) => (
  <div id={id} style={{ marginBottom: '2.5rem' }}>
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

export default function TermsOfService() {
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
            Terms of Service
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

        <Section title='1. Agreement to Terms'>
          <P>
            These Terms of Service ("Terms") constitute a legally binding
            agreement between you and Nolancode ("we," "us," or "our") governing
            your access to and use of the Gym Buddies mobile application ("the
            App") available on iOS and Android platforms.
          </P>
          <P>
            By downloading, installing, registering for, or using the App, you
            confirm that you have read, understood, and agree to be bound by
            these Terms and our Privacy Policy. If you do not agree to these
            Terms, do not download or use the App.
          </P>
          <P>
            We reserve the right to modify these Terms at any time. We will
            notify you of material changes through the App or by email. Your
            continued use of the App after changes are posted constitutes your
            acceptance of the revised Terms.
          </P>
        </Section>

        <Section title='2. Eligibility'>
          <P>To use Gym Buddies, you must:</P>
          <UL
            items={[
              'Be at least 18 years of age',
              'Have the legal capacity to enter into a binding agreement',
              'Not be prohibited from using the App under applicable laws',
              'Not have previously had your account terminated by us for a violation of these Terms',
            ]}
          />
          <P>
            By using the App, you represent and warrant that you meet all
            eligibility requirements.
          </P>
        </Section>

        <Section title='3. Account Registration and Security'>
          <P>
            To access most features of Gym Buddies, you must create an account.
            You agree to:
          </P>
          <UL
            items={[
              'Provide accurate, current, and complete information during registration',
              'Maintain and promptly update your account information',
              'Keep your account credentials secure and confidential',
              'Accept responsibility for all activities that occur under your account',
              'Notify us immediately of any unauthorised use of your account at support@nolancode.com',
            ]}
          />
          <P>
            We use Clerk for authentication. Your password is never stored
            directly by us. You may register using email/password or Google
            OAuth. We are not responsible for losses caused by unauthorised
            access to your account that result from your failure to safeguard
            your credentials.
          </P>
          <P>
            You may not create an account on behalf of another person without
            their permission, or create multiple accounts for abusive purposes.
          </P>
        </Section>

        <Section title='4. The Service — What We Provide'>
          <P>
            Gym Buddies provides the following features, all completely free of
            charge:
          </P>
          <UL
            items={[
              'Social fitness feed for sharing workouts, progress, and achievements',
              'Real-time group and direct messaging with media sharing',
              'AI-powered workout and diet plan generation',
              'Nutrition tracking with macro and calorie logging',
              'Workout logging and personal record tracking',
              'Achievement system, streak tracking, and progress rings',
              'Buddy system and community challenge participation',
              'Profile customisation and privacy controls',
            ]}
          />
          <P>
            We reserve the right to modify, suspend, or discontinue any feature
            of the App at any time, with or without notice. We will not be
            liable to you for any such modification, suspension, or
            discontinuation.
          </P>
        </Section>

        <Section title='5. User Content'>
          <P>
            <strong style={{ color: 'var(--text-primary)' }}>Ownership:</strong>{' '}
            You retain ownership of all content you create and submit through
            the App ("User Content"), including posts, photos, videos, messages,
            and workout data.
          </P>
          <P>
            <strong style={{ color: 'var(--text-primary)' }}>
              Licence to us:
            </strong>{' '}
            By submitting User Content to the App, you grant Nolancode a
            non-exclusive, worldwide, royalty-free, sublicensable licence to
            use, reproduce, display, and distribute your User Content solely for
            the purpose of operating and improving the App. This licence ends
            when you delete your content or account.
          </P>
          <P>
            <strong style={{ color: 'var(--text-primary)' }}>
              Your responsibilities:
            </strong>{' '}
            You are solely responsible for all User Content you submit. You
            represent and warrant that:
          </P>
          <UL
            items={[
              'You own or have the necessary rights to the content you post',
              'Your content does not infringe any third-party intellectual property rights',
              'Your content complies with these Terms and all applicable laws',
              'You have obtained all necessary consents from individuals depicted in your content',
            ]}
          />
        </Section>

        <Section title='6. Prohibited Conduct'>
          <P>You agree not to use the App to:</P>
          <UL
            items={[
              'Post content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable',
              'Harass, bully, intimidate, or threaten other users',
              'Post content that is sexually explicit, pornographic, or exploits minors in any way',
              'Post content that promotes violence, discrimination, or hate against any individual or group',
              'Impersonate any person or entity, or misrepresent your affiliation with any person or entity',
              'Post spam, unsolicited advertising, or promotional material',
              'Distribute malware, viruses, or any other malicious code',
              'Scrape, crawl, or use automated tools to access the App or its content',
              'Attempt to gain unauthorised access to any part of the App or its infrastructure',
              'Reverse engineer, decompile, or disassemble the App',
              'Violate any applicable local, national, or international laws or regulations',
              'Circumvent any content filtering or security measures',
              'Collect or store personal data about other users without their consent',
            ]}
          />
          <P>
            We reserve the right to determine what constitutes a violation of
            these prohibitions in our sole discretion. Violations may result in
            immediate account suspension or termination.
          </P>
        </Section>

        <Section title='7. Community Guidelines' id='community-guidelines'>
          <P>Gym Buddies is a fitness community. We expect all users to:</P>
          <UL
            items={[
              'Be respectful and supportive of other members',
              'Keep content relevant to fitness, health, nutrition, and related lifestyle topics',
              'Not post content that promotes dangerous, harmful, or medically unsound fitness advice',
              'Not post before-and-after content that promotes unhealthy body image or disordered eating',
              'Report content or behaviour that violates these guidelines using the in-app reporting feature',
            ]}
          />
          <P>
            Our admin team reviews reported content and may remove content,
            issue warnings, suspend, or permanently ban users who violate our
            community guidelines.
          </P>
          <P>
            For the full version of our Community Guidelines, visit{' '}
            <a
              href={`${BASE}/community-guidelines`}
              style={{ color: 'var(--teal)', textDecoration: 'none' }}
            >
              gymbuddies.nolancode.com/community-guidelines
            </a>
            .
          </P>
        </Section>

        <Section title='8. AI-Generated Content'>
          <P>
            Gym Buddies uses artificial intelligence (via third-party AI
            providers) to generate personalised workout and diet plans. By using
            AI plan generation, you acknowledge that:
          </P>
          <UL
            items={[
              'All workout, nutrition, and dietary content in the App — whether AI-generated, sourced from a food database, submitted by other users, or created by a Verified Coach — is provided for informational purposes only and does not constitute professional medical, dietary, or fitness advice',
              'You should consult a qualified healthcare provider or certified personal trainer before beginning any new exercise or nutrition programme, especially if you have pre-existing health conditions, injuries, or dietary requirements',
              'AI-generated content may contain errors, inaccuracies, or recommendations that are not appropriate for your specific circumstances, fitness level, or health conditions',
              'Nutrition estimates generated by AI are approximate and should not be relied upon for medical dietary management',
              'We are not liable for any injury, illness, adverse health outcome, or loss resulting from following AI-generated content of any kind within the App',
            ]}
          />
        </Section>

        <Section title='8a. Verified Coach Programme'>
          <P>
            Gym Buddies operates a Verified Coach programme that allows eligible
            users to apply for a "Verified Coach" badge displayed on their
            profile and content. By using the App, you acknowledge and agree to
            the following regarding this programme:
          </P>
          <UL
            items={[
              'The Verified Coach badge indicates that a user has submitted fitness-related credentials or qualifications for review by our team. It does not indicate medical certification, licensure, or any form of regulatory approval',
              'Verification is conducted by Nolancode staff and is based on the information submitted by the applicant. We do not independently verify the authenticity of all credentials submitted',
              "A Verified Coach badge does not mean the creator's plans, advice, or content are medically safe or appropriate for your specific health conditions, injuries, or fitness level",
              'Plans and content created by Verified Coaches are community content and should not be treated as professional medical or clinical advice',
              'You should always consult a qualified healthcare provider before beginning any fitness or nutrition programme, regardless of whether it was created by a Verified Coach, an unverified community member, or generated by AI',
              'Nolancode reserves the right to revoke Verified Coach status at any time if credentials are found to be inaccurate, misleading, or if the user violates our community guidelines',
            ]}
          />
          <P>
            To apply for Verified Coach status, use the in-app verification
            request feature. Approval is at Nolancode's sole discretion and is
            not guaranteed.
          </P>
        </Section>

        <Section title='9. Intellectual Property'>
          <P>
            The App, including its design, code, branding, logos, text,
            graphics, and all other content created by Nolancode (excluding User
            Content), is owned by Nolancode and protected by copyright,
            trademark, and other intellectual property laws.
          </P>
          <P>
            The Gym Buddies name, logo, and all associated marks are trademarks
            of Nolancode. You may not use our trademarks without our prior
            written consent.
          </P>
          <P>
            You are granted a limited, non-exclusive, non-transferable,
            revocable licence to use the App for personal, non-commercial
            purposes in accordance with these Terms.
          </P>
        </Section>

        <Section title='10. Privacy'>
          <P>
            Your use of the App is also governed by our Privacy Policy, which is
            incorporated into these Terms by reference. Please review our
            Privacy Policy at{' '}
            <a
              href={`${BASE}/privacy`}
              style={{ color: 'var(--teal)', textDecoration: 'none' }}
            >
              gymbuddies.nolancode.com/privacy
            </a>{' '}
            to understand our practices.
          </P>
        </Section>

        <Section title='11. Account Suspension and Termination'>
          <P>
            We reserve the right to suspend or terminate your account, with or
            without notice, for any of the following reasons:
          </P>
          <UL
            items={[
              'Violation of these Terms or our community guidelines',
              'Conduct we determine, in our sole discretion, to be harmful to other users, us, or third parties',
              'Extended periods of inactivity (accounts inactive for more than 24 months)',
              'Legal requirements or law enforcement requests',
            ]}
          />
          <P>
            You may terminate your account at any time by using the account
            deletion feature within the App. Upon termination, your right to use
            the App ceases immediately.
          </P>
          <P>
            We will retain certain data after account deletion as required by
            law or for legitimate business purposes, as described in our Privacy
            Policy.
          </P>
        </Section>

        <Section title='12. Disclaimers'>
          <P>
            THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST
            EXTENT PERMITTED BY LAW, NOLANCODE DISCLAIMS ALL WARRANTIES,
            INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </P>
          <P>
            We do not warrant that the App will be uninterrupted, error-free,
            secure, or free of viruses. We do not warrant the accuracy or
            completeness of any content in the App, including AI-generated plans
            and community content.
          </P>
          <P>
            <strong style={{ color: 'var(--text-primary)' }}>
              Health and Fitness Disclaimer:
            </strong>{' '}
            The App is not a substitute for professional medical advice,
            diagnosis, or treatment. Always seek the advice of a qualified
            healthcare provider before starting a new fitness or nutrition
            programme. Never disregard professional medical advice or delay
            seeking it because of something you read or generated in this App.
          </P>
        </Section>

        <Section title='12a. Assumption of Risk'>
          <P>
            Physical exercise, strength training, and changes to diet or
            nutrition carry inherent risks, including but not limited to muscle
            strain, joint injury, cardiovascular events, and in rare cases,
            serious injury or death. By using any workout, exercise, or
            nutrition feature of the App — whether AI-generated, created by
            another user, or created by a Verified Coach — you knowingly and
            voluntarily assume all such risks.
          </P>
          <P>
            You confirm that you are physically able to participate in the
            activities suggested by the App, and that you will stop immediately
            and seek medical attention if you experience pain, dizziness,
            shortness of breath, chest pain, or any other warning sign during
            exercise. If you have any pre-existing medical condition, injury,
            are pregnant, or are uncertain about your fitness to exercise, you
            must consult a physician before using any workout or nutrition
            feature of the App.
          </P>
        </Section>

        <Section title='13. Limitation of Liability'>
          <P>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NOLANCODE AND ITS
            OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR
            ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES, INCLUDING BUT NOT LIMITED TO:
          </P>
          <UL
            items={[
              'Loss of profits, data, or goodwill',
              'Physical injury or property damage resulting from your use of the App or participation in fitness activities',
              'Unauthorised access to or alteration of your content or data',
              'Any content posted by other users',
              'Any bugs, viruses, or other harmful code transmitted through the App',
            ]}
          />
          <P>
            Our total liability to you for any claim arising out of or related
            to these Terms or the App shall not exceed the greater of $100 USD
            or the amount you paid us in the twelve months preceding the claim
            (which, given the App is free, will typically be $0).
          </P>
        </Section>

        <Section title='14. Indemnification'>
          <P>
            You agree to indemnify, defend, and hold harmless Nolancode and its
            officers, directors, employees, and agents from and against any
            claims, liabilities, damages, losses, and expenses (including
            reasonable legal fees) arising out of or in any way connected with:
          </P>
          <UL
            items={[
              'Your access to or use of the App',
              'Your User Content',
              'Your violation of these Terms',
              'Your violation of any third-party rights',
            ]}
          />
        </Section>

        <Section title='15. Governing Law and Dispute Resolution'>
          <P>
            These Terms shall be governed by and construed in accordance with
            the laws of the State of Nevada, United States, without regard to
            its conflict of law provisions.
          </P>
          <P>
            Any dispute arising out of or relating to these Terms or the App
            shall first be attempted to be resolved through informal
            negotiation. If informal resolution fails, disputes shall be
            submitted to binding arbitration in Clark County, Nevada, in
            accordance with the American Arbitration Association's Consumer
            Arbitration Rules.
          </P>
          <P>
            Notwithstanding the above, either party may seek injunctive or other
            equitable relief in a court of competent jurisdiction to prevent
            irreparable harm.
          </P>
          <P>
            You and Nolancode agree that any dispute resolution proceedings will
            be conducted on an individual basis only and not in a class,
            consolidated, or representative action.
          </P>
        </Section>

        <Section title='16. Contact Us'>
          <P>If you have any questions about these Terms, please contact us:</P>
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

import type { Metadata } from 'next';
import './globals.css';

const BASE = '/gym-buddies-lp';

export const metadata: Metadata = {
  title: 'Gym Buddies — Train Together. Grow Stronger.',
  description:
    'Gym Buddies is a free social fitness app for iOS and Android. Track workouts, connect with friends, follow AI-generated plans, and earn achievements together.',
  keywords: [
    'fitness app',
    'workout tracker',
    'social fitness',
    'gym app',
    'React Native',
    'free fitness app',
    'workout plans',
    'nutrition tracker',
  ],
  authors: [{ name: 'Nolancode' }],
  openGraph: {
    title: 'Gym Buddies — Train Together. Grow Stronger.',
    description:
      'A free social fitness platform for iOS and Android. Track, connect, and grow stronger together.',
    type: 'website',
    url: 'https://gymbuddies.nolancode.com',
    images: [{ url: `${BASE}/img/logo-block.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Buddies — Train Together. Grow Stronger.',
    description: 'A free social fitness platform for iOS and Android.',
  },
  icons: {
    icon: `${BASE}/img/logo-icon.png`,
    apple: `${BASE}/img/logo-icon.png`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body>{children}</body>
    </html>
  );
}

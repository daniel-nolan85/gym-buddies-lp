import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import Free from '@/components/Free';
import Community from '@/components/Community';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Free />
        <Community />
        <Download />
      </main>
      <Footer />
    </>
  );
}

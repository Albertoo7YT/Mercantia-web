import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Trust } from '@/components/sections/Trust';
import { Integrations } from '@/components/sections/Integrations';
import { Compare } from '@/components/sections/Compare';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/Footer';
import { DemoProvider } from '@/lib/demo-context';
import { WhatsAppFab } from '@/components/ui/WhatsAppFab';

export default function HomePage() {
  return (
    <DemoProvider>
      <div className="ambient" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Trust />
        <Integrations />
        <Compare />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </DemoProvider>
  );
}

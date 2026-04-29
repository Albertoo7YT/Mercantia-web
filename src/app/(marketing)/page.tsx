import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { HowItFits } from '@/components/sections/HowItFits';
import { Features } from '@/components/sections/Features';
import { HiddenCost } from '@/components/sections/HiddenCost';
import { Trust } from '@/components/sections/Trust';
import { LiveDemo } from '@/components/sections/LiveDemo';
import { Integrations } from '@/components/sections/Integrations';
import { Compare } from '@/components/sections/Compare';
import { Testimonials } from '@/components/sections/Testimonials';
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
        <HowItFits />
        <Features />
        <HiddenCost />
        <Trust />
        <LiveDemo />
        <Integrations />
        <Compare />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </DemoProvider>
  );
}

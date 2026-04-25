import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DemoProvider } from '@/lib/demo-context';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DemoProvider>
      <div className="ambient" />
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-6">{children}</article>
      </main>
      <Footer />
    </DemoProvider>
  );
}

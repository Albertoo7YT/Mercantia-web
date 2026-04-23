'use client';

import { Button } from '@/components/ui/Button';
import { useDemo } from '@/lib/demo-context';
import { HeroMockup } from '@/components/HeroMockup';
import { TypewriterText } from '@/components/ui/TypewriterText';

export function Hero() {
  const { openDemo } = useDemo();

  return (
    <section className="pt-24 md:pt-28 pb-10 relative text-center">
      <div className="max-w-[1220px] mx-auto px-6 relative z-[2]">
        <div className="inline-flex items-center gap-2.5 py-1 pl-3.5 pr-1 bg-surface border border-[rgba(15,23,42,0.08)] rounded-full text-[13px] text-ink-2 mb-8 shadow-soft animate-fade-up">
          <span className="bg-accent-soft text-accent font-semibold text-[11px] py-0.5 px-2 rounded-full">
            NUEVO
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-ring" />
          Módulo de reservas y backorder disponible
        </div>

        <h1
          className="font-display font-bold mb-6 animate-fade-up [animation-delay:0.1s] [animation-fill-mode:both]"
          style={{
            fontSize: 'clamp(44px, 7vw, 88px)',
            lineHeight: '0.98',
            letterSpacing: '-0.045em',
          }}
        >
          Tus comerciales venden<br />
          <TypewriterText
            words={[
              'sin fricciones.',
              'desde cualquier lugar.',
              'en tiempo real.',
              'sin tocar un Excel.',
              'con stock al día.',
            ]}
          />
        </h1>

        <p
          className="text-ink-2 max-w-[600px] mx-auto mb-10 animate-fade-up [animation-delay:0.2s] [animation-fill-mode:both]"
          style={{ fontSize: 'clamp(17px, 1.4vw, 20px)', lineHeight: '1.55' }}
        >
          Catálogo, stock, pedidos y garantías en un solo lugar. Tus representantes trabajan desde el móvil, la oficina recibe todo estructurado y el Excel desaparece.
        </p>

        <div className="flex gap-2.5 justify-center flex-wrap mb-4 animate-fade-up [animation-delay:0.3s] [animation-fill-mode:both]">
          <Button variant="primary" size="lg" withArrow onClick={openDemo}>
            Reservar demo
          </Button>
          <Button variant="outline" size="lg" asLink href="#producto">
            Ver funcionalidades
          </Button>
        </div>

        <div className="inline-flex gap-5 text-[13px] text-ink-3 animate-fade-up [animation-delay:0.4s] [animation-fill-mode:both]">
          <Meta>Setup en 48h</Meta>
          <Meta>Sin permanencia</Meta>
          <Meta>Datos en la UE</Meta>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}

function Meta({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
      {children}
    </span>
  );
}

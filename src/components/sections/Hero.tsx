'use client';

import { Button } from '@/components/ui/Button';
import { HeroMockup } from '@/components/HeroMockup';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { DEMO_URL, whatsappUrl } from '@/lib/contact';

export function Hero() {
  return (
    <section className="pt-24 md:pt-28 pb-10 relative text-center">
      <div className="max-w-[1220px] mx-auto px-6 relative z-[2]">
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 py-1 pl-1.5 pr-3.5 bg-surface border border-accent/30 rounded-full text-[13px] text-ink-2 mb-8 shadow-soft animate-fade-up hover:border-accent transition-colors group no-underline"
        >
          <span className="bg-accent text-white font-semibold text-[10px] py-1 px-2 rounded-full uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Live
          </span>
          <span>
            Demo pública disponible · sin registro
            <span className="text-accent ml-1.5 transition-transform group-hover:translate-x-0.5 inline-block">→</span>
          </span>
        </a>

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

        <div className="flex flex-col items-center gap-3 mb-4 animate-fade-up [animation-delay:0.3s] [animation-fill-mode:both]">
          <div className="flex gap-2.5 justify-center flex-wrap">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 py-4 px-7 bg-ink hover:bg-accent text-white font-semibold text-base rounded-[12px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,77,26,0.35)] tracking-tight no-underline"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
              </span>
              Probar demo en vivo
              <span className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>

            <Button variant="outline" size="lg" asLink href="/contacto">
              Contactar
            </Button>
          </div>

          <a
            href={whatsappUrl('Hola, me interesa Mercantia y tengo algunas preguntas')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-3 hover:text-accent transition-colors inline-flex items-center gap-1.5 mt-1 no-underline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            o pregunta por WhatsApp
          </a>
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

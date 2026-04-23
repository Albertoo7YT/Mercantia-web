'use client';

import { Button } from '@/components/ui/Button';
import { useDemo } from '@/lib/demo-context';
import { whatsappUrl } from '@/lib/contact';

export function CTA() {
  const { openDemo, openCallRequest } = useDemo();

  return (
    <section className="pt-0 pb-4" id="demo">
      <div className="max-w-[1220px] mx-auto px-6">
        <div
          className="relative rounded-3xl py-20 px-12 overflow-hidden text-center text-white"
          style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          }}
        >
          <div
            className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,77,26,0.18), transparent 55%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
            }}
          />

          <div className="relative z-[1]">
            <h2
              className="font-display font-bold mb-5"
              style={{
                fontSize: 'clamp(40px, 6vw, 72px)',
                lineHeight: '1',
                letterSpacing: '-0.04em',
              }}
            >
              15 minutos.<br />Con tu catálogo <span className="text-gradient">real</span>.
            </h2>
            <p className="text-[18px] text-white/70 max-w-[520px] mx-auto mb-8 leading-snug">
              Te enseñamos cómo quedaría Mercantia con tus productos, tus precios y tus comerciales. Sin compromiso, sin PowerPoints.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center flex-wrap max-w-md sm:max-w-none mx-auto">
              <Button
                variant="primary"
                size="lg"
                withArrow
                onClick={openDemo}
                className="!bg-accent hover:!bg-white hover:!text-ink justify-center w-full sm:w-auto"
              >
                Reservar demo
              </Button>
              <button
                type="button"
                onClick={openCallRequest}
                className="py-3.5 px-5 text-[15px] font-semibold rounded-[10px] inline-flex items-center justify-center gap-1.5 transition-all border border-white/20 text-white hover:border-white hover:bg-white/10 tracking-tight w-full sm:w-auto cursor-pointer"
              >
                Solicitar llamada
              </button>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 text-[15px] font-semibold rounded-[10px] inline-flex items-center justify-center gap-2 transition-all border border-white/20 text-white hover:border-white hover:bg-white/10 no-underline tracking-tight w-full sm:w-auto"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

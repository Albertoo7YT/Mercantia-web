'use client';

import { DEMO_URL } from '@/lib/contact';

export function LiveDemo() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-bg to-warm">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,77,26,0.15), transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-[1100px] mx-auto px-6 relative z-[1]">
        <div className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-[0_30px_60px_-30px_rgba(15,23,42,0.15)]">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.4]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
            }}
          />

          <div className="relative z-[1] text-center max-w-[640px] mx-auto">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-6 py-1.5 px-3.5 bg-accent-soft rounded-full font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Demo en vivo · Disponible ahora
            </div>

            <h2
              className="font-display font-bold mb-5"
              style={{
                fontSize: 'clamp(34px, 5vw, 56px)',
                lineHeight: '1.02',
                letterSpacing: '-0.035em',
              }}
            >
              ¿Lo quieres ver{' '}
              <span className="text-gradient">funcionando</span>?
            </h2>

            <p className="text-[18px] text-ink-2 leading-relaxed mb-8">
              Hemos preparado una instancia abierta con datos ficticios para que toques Mercantia sin esperar a una llamada. Cambia entre roles, navega el catálogo, mira pedidos. Como si fuera tuya.
            </p>

            <ul className="flex flex-wrap gap-2.5 justify-center mb-9 text-sm text-ink-2">
              <DemoFeature>Sin registro</DemoFeature>
              <DemoFeature>Sin instalación</DemoFeature>
              <DemoFeature>3 roles disponibles</DemoFeature>
              <DemoFeature>Datos ficticios realistas</DemoFeature>
            </ul>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 py-5 px-10 bg-ink hover:bg-accent text-white font-semibold text-[17px] rounded-[14px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(255,77,26,0.4)] tracking-tight no-underline group"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald" />
              </span>
              Abrir demo en vivo
              <span className="text-xl leading-none transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>

            <p className="text-[13px] text-ink-3 mt-6 max-w-[460px] mx-auto leading-relaxed">
              Modo solo lectura. Cuando quieras la tuya con tus productos, comerciales y clientes,{' '}
              <a href="/contacto" className="text-accent hover:underline cursor-pointer font-medium">
                hablamos en una llamada
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="inline-flex items-center gap-1.5 bg-bg-soft border border-[rgba(15,23,42,0.06)] rounded-full py-1.5 px-3.5">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#059669"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-shrink-0"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span className="font-medium">{children}</span>
    </li>
  );
}

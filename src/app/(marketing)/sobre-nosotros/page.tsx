import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DemoProvider } from '@/lib/demo-context';
import { Button } from '@/components/ui/Button';
import { whatsappUrl } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Sobre nosotros — Mercantia',
  description:
    'Detrás de Mercantia: Alberto Izquierdo, desarrollador y fundador. Construimos software B2B cercano, sin intermediarios.',
};

export default function SobreNosotrosPage() {
  return (
    <DemoProvider>
      <div className="ambient" />
      <Navbar />

      <main className="pt-32 pb-20">
        {/* HERO */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-6 py-1 px-3 bg-accent-soft rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Sobre nosotros
          </div>

          <h1
            className="font-display font-bold mb-8"
            style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              lineHeight: '1',
              letterSpacing: '-0.04em',
            }}
          >
            Hola, soy <span className="text-gradient">Alberto</span>.
          </h1>

          <p className="text-xl text-ink-2 leading-relaxed mb-6">
            Hace un año empecé a construir lo que hoy es Mercantia, casi sin querer. Una empresa familiar necesitaba dejar de gestionar pedidos por WhatsApp y acabé metido hasta el fondo programando la solución.
          </p>

          <p className="text-xl text-ink-2 leading-relaxed">
            Un año después, <strong className="text-ink font-semibold">varios clientes lo usan a diario</strong> para que sus comerciales vendan sin Excel, sin mensajes perdidos y sin llamadas a oficina preguntando si hay stock.
          </p>
        </section>

        {/* FOUNDER CARD */}
        <section className="max-w-3xl mx-auto px-6 mb-24">
          <div className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-72 h-72 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,77,26,0.15), transparent 60%)',
                filter: 'blur(60px)',
              }}
            />

            <div className="relative z-10 grid md:grid-cols-[200px_1fr] gap-8 items-start">
              <div className="relative mx-auto md:mx-0">
                {/*
                  PLACEHOLDER FOTO:
                  Cuando Alberto tenga foto profesional, reemplazar este div por:
                    import Image from 'next/image';
                    <Image src="/alberto.jpg" alt="Alberto Izquierdo" width={200} height={200} className="rounded-2xl object-cover" />
                */}
                <div className="w-[200px] h-[200px] rounded-2xl bg-gradient-accent grid place-items-center font-display font-bold text-white text-7xl tracking-tight shadow-lg">
                  AI
                </div>
                <div className="absolute -bottom-3 -right-3 bg-surface border border-[rgba(15,23,42,0.08)] rounded-xl px-3 py-2 shadow-md">
                  <span className="font-mono text-[10px] text-ink-3 uppercase tracking-wider">
                    Fundador
                  </span>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight mb-1">
                  Alberto Izquierdo
                </h2>
                <p className="font-mono text-sm text-ink-3 mb-6">
                  Desarrollador · Alicante, España
                </p>

                <div className="space-y-4 text-ink-2 leading-relaxed">
                  <p>
                    Llevo <strong className="text-ink font-semibold">8 años programando</strong>. Empecé con 14 cacharreando con webs y desde entonces no he parado.
                  </p>
                  <p>
                    Actualmente estudio el{' '}
                    <strong className="text-ink font-semibold">
                      Doble Grado en Ingeniería Informática y ADE
                    </strong>
                    , compaginándolo con el desarrollo de Mercantia y el trato con los clientes que ya lo usan.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-5">
                  <a
                    href="https://www.linkedin.com/in/alberto-izquierdo-2a0540211/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-ink-2 hover:text-accent transition-colors"
                    aria-label="LinkedIn de Alberto Izquierdo"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>

                  <a
                    href="mailto:hola@mercantia.pro"
                    className="inline-flex items-center gap-2 text-sm font-medium text-ink-2 hover:text-accent transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    hola@mercantia.pro
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HISTORIA */}
        <section className="max-w-3xl mx-auto px-6 mb-24">
          <h2
            className="font-display font-bold mb-8"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: '1.05',
              letterSpacing: '-0.035em',
            }}
          >
            Cómo nació <span className="text-gradient">Mercantia</span>
          </h2>

          <div className="space-y-5 text-lg text-ink-2 leading-relaxed">
            <p>
              Todo empezó con una empresa familiar que llevaba años funcionando con pedidos por WhatsApp, Excel que se pasaban por email y llamadas constantes entre oficina y comerciales. Lo típico del B2B tradicional.
            </p>
            <p>
              Me pidieron si podía ayudar con &quot;algo que organizara aquello&quot;. Empecé a programar un portal interno, pero según iba avanzando me di cuenta de que{' '}
              <strong className="text-ink font-semibold">no era solo un problema de esa empresa</strong>
              {' '}— era el problema de miles de fabricantes y distribuidores en España que seguían funcionando igual.
            </p>
            <p>
              Así que decidí convertirlo en producto. Un año después, Mercantia es una plataforma completa, con varios clientes activos que la usan cada día para gestionar su operativa comercial.
            </p>
          </div>
        </section>

        {/* CÓMO TRABAJO */}
        <section className="max-w-3xl mx-auto px-6 mb-24">
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: '1.05',
              letterSpacing: '-0.035em',
            }}
          >
            Cómo <span className="text-gradient">trabajo</span>
          </h2>
          <p className="text-lg text-ink-2 leading-relaxed mb-10">
            Al ser una sola persona detrás, el trato con los clientes funciona diferente al de una empresa grande. Esto es lo que significa en la práctica:
          </p>

          <div className="grid gap-4">
            <Principle
              number="01"
              title="Hablas directamente conmigo"
              description="Sin call centers, sin tickets con referencia aleatoria, sin un comercial que te pase a otro departamento. Escribes un WhatsApp y respondo yo."
            />
            <Principle
              number="02"
              title="Los cambios se hacen rápido"
              description="Si un cliente necesita algo razonable, suele estar en producción en días, no en trimestres. Yo programo, yo despliego, yo te aviso."
            />
            <Principle
              number="03"
              title="Nunca te voy a presionar"
              description="No hay comerciales con objetivos mensuales. Si Mercantia no encaja con tu negocio, te lo digo claro. Prefiero que no me contrates que venderte algo que no te sirve."
            />
            <Principle
              number="04"
              title="Sé lo que hace falta y lo que no"
              description="No añado funcionalidades para justificar un precio más alto. Mercantia tiene lo necesario para vender bien, sin campanas ni luces que nadie usa."
            />
          </div>
        </section>

        {/* LA EMPRESA */}
        <section className="max-w-3xl mx-auto px-6 mb-24">
          <h2
            className="font-display font-bold mb-6"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: '1.05',
              letterSpacing: '-0.035em',
            }}
          >
            La <span className="text-gradient">empresa</span>
          </h2>
          <p className="text-lg text-ink-2 leading-relaxed mb-8">
            Aunque programo y atiendo yo, Mercantia opera a través de una sociedad legalmente constituida. Esto te da la tranquilidad de trabajar con una entidad formal, con CIF, facturación en regla y responsabilidad jurídica.
          </p>

          <div className="bg-bg-soft border border-[rgba(15,23,42,0.08)] rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <LegalField label="Razón social" value="A. Izquierdo SL" />
              <LegalField label="CIF" value="B13309356" />
              <LegalField
                label="Domicilio"
                value="C/ La Mancha, 6. Socuéllamos (Ciudad Real), CP 13630"
              />
              <LegalField
                label="Email"
                value="hola@mercantia.pro"
                href="mailto:hola@mercantia.pro"
              />
            </div>
          </div>

          <p className="text-sm text-ink-3 mt-6">
            Puedes consultar la{' '}
            <Link href="/legal/privacidad" className="text-accent hover:underline">
              Política de Privacidad
            </Link>
            ,{' '}
            <Link href="/legal/terminos" className="text-accent hover:underline">
              Términos y Condiciones
            </Link>
            {' '}y{' '}
            <Link href="/legal/aviso-legal" className="text-accent hover:underline">
              Aviso Legal
            </Link>
            {' '}para más detalles.
          </p>
        </section>

        {/* CTA FINAL */}
        <section className="max-w-3xl mx-auto px-6">
          <div
            className="relative rounded-3xl py-12 px-8 md:py-16 md:px-12 overflow-hidden text-center text-white"
            style={{
              background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
            }}
          >
            <div
              className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[400px] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255,77,26,0.18), transparent 55%)',
                filter: 'blur(60px)',
              }}
            />

            <div className="relative z-10">
              <h2
                className="font-display font-bold mb-5"
                style={{
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.03em',
                }}
              >
                ¿Hablamos sin <span className="text-gradient">compromiso</span>?
              </h2>
              <p className="text-white/70 mb-8 max-w-md mx-auto">
                Te cuento si Mercantia encaja o no con tu negocio, en 15 minutos. Sin PowerPoints, sin letra pequeña.
              </p>

              <div className="flex gap-3 justify-center flex-wrap">
                <Button
                  variant="primary"
                  size="lg"
                  withArrow
                  asLink
                  href="/#demo"
                  className="!bg-accent hover:!bg-white hover:!text-ink"
                >
                  Pedir demo
                </Button>
                <a
                  href={whatsappUrl('Hola Alberto, me interesa Mercantia')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-5 text-[15px] font-semibold rounded-[10px] inline-flex items-center gap-1.5 transition-all border border-white/20 text-white hover:border-white hover:bg-white/10 no-underline tracking-tight"
                >
                  WhatsApp directo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </DemoProvider>
  );
}

function Principle({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid md:grid-cols-[60px_1fr] gap-4 md:gap-6 py-5 border-b border-[rgba(15,23,42,0.08)] last:border-b-0">
      <div className="font-mono text-sm text-accent font-semibold tracking-widest pt-1">
        {number}
      </div>
      <div>
        <h3 className="font-display text-xl font-bold tracking-tight mb-2">{title}</h3>
        <p className="text-ink-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function LegalField({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a href={href} className="text-ink hover:text-accent transition-colors">
      {value}
    </a>
  ) : (
    <span className="text-ink">{value}</span>
  );

  return (
    <div>
      <div className="font-mono text-[11px] text-ink-3 uppercase tracking-wider mb-1 font-semibold">
        {label}
      </div>
      <div className="font-medium text-[15px]">{content}</div>
    </div>
  );
}

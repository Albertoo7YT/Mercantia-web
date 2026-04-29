'use client';

import { Fragment, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DemoProvider, useDemo } from '@/lib/demo-context';
import { Button } from '@/components/ui/Button';
import { whatsappUrl } from '@/lib/contact';

export default function PreciosPage() {
  return (
    <DemoProvider>
      <div className="ambient" />
      <Navbar />
      <main>
        <PreciosHero />
        <PlansGrid />
        <ValueProps />
        <ComparisonTable />
        <Testimonial />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </DemoProvider>
  );
}

/* ==================== HERO ==================== */

function PreciosHero() {
  return (
    <section className="pt-16 md:pt-24 pb-10 relative text-center overflow-hidden">
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,77,26,0.15), transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-[1220px] mx-auto px-6 relative z-[2]">
        <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-6 py-1.5 px-3.5 bg-accent-soft rounded-full font-medium animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-ring" />
          Pagas por lo que necesitas
        </div>

        <h1
          className="font-display font-bold mb-6 animate-fade-up [animation-delay:0.1s] [animation-fill-mode:both]"
          style={{
            fontSize: 'clamp(44px, 7.5vw, 92px)',
            lineHeight: '0.96',
            letterSpacing: '-0.045em',
          }}
        >
          Precios{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-gradient">simples</span>
            <span className="absolute -left-1 -right-1 bottom-[10%] h-[7%] bg-accent opacity-[0.12] rounded z-0" />
          </span>
          .<br />
          Sin letra pequeña.
        </h1>

        <p
          className="text-ink-2 max-w-[580px] mx-auto mb-10 leading-snug animate-fade-up [animation-delay:0.2s] [animation-fill-mode:both]"
          style={{ fontSize: 'clamp(17px, 1.35vw, 19px)' }}
        >
          Todos los módulos en todos los planes. Pagas por el tamaño de tu equipo y nada más. Cancelas cuando quieras.
        </p>

        <div className="flex justify-center gap-5 flex-wrap text-[13px] text-ink-3 animate-fade-up [animation-delay:0.3s] [animation-fill-mode:both]">
          <HeroFeature>Sin permanencia</HeroFeature>
          <HeroFeature>Todos los módulos incluidos</HeroFeature>
          <HeroFeature>Actualizaciones gratis</HeroFeature>
        </div>
      </div>
    </section>
  );
}

function HeroFeature({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
      {children}
    </span>
  );
}

/* ==================== PLANS GRID ==================== */

interface Plan {
  name: string;
  tagline: string;
  monthly: number;
  seats: {
    comerciales: number | string;
    oficina: number | string;
    admin: number | string;
  };
  features: string[];
  cta: string;
  popular?: boolean;
  custom?: boolean;
}

const PLANS: Plan[] = [
  {
    name: 'Starter',
    tagline: 'Para empezar',
    monthly: 49.99,
    seats: { comerciales: 3, oficina: 1, admin: 1 },
    features: [
      'Todos los módulos del portal',
      'Logo y colores de tu marca',
      'Subdominio propio (tuempresa.mercantia.pro)',
      'Conexión con tu ERP (en la instalación)',
      'Importación CSV / Excel',
      'App web móvil y tablet',
      'Soporte por email + WhatsApp · respuesta <4h',
      'Onboarding asistido',
    ],
    cta: 'Empezar con Starter',
  },
  {
    name: 'Pro',
    tagline: 'Cuando necesitas integrar',
    monthly: 99.99,
    seats: { comerciales: 10, oficina: 3, admin: 2 },
    features: [
      'Todo lo de Starter',
      'API REST + Webhooks',
    ],
    cta: 'Empezar con Pro',
    popular: true,
  },
  {
    name: 'Business',
    tagline: 'Operativa compleja',
    monthly: 199.99,
    seats: { comerciales: 25, oficina: 8, admin: 5 },
    features: [
      'Todo lo de Pro',
      'Multi-almacén',
    ],
    cta: 'Empezar con Business',
  },
  {
    name: 'Enterprise',
    tagline: 'A tu medida',
    monthly: 0,
    seats: { comerciales: 'Ilimitado', oficina: 'Ilimitado', admin: 'Ilimitado' },
    features: [
      'Todo lo de Business',
      'Dominio propio (pedidos.tuempresa.com)',
      'Multi-marca / multi-sociedad',
      'Integraciones a medida incluidas',
      'Soporte dedicado',
    ],
    cta: 'Hablemos',
    custom: true,
  },
];

function PlansGrid() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('annual');
  const { openDemo } = useDemo();

  return (
    <section className="pb-20">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center bg-surface border border-[rgba(15,23,42,0.08)] rounded-full p-1.5 shadow-soft">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all ${
                billing === 'monthly'
                  ? 'bg-ink text-white shadow-sm'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all inline-flex items-center gap-2 ${
                billing === 'annual'
                  ? 'bg-ink text-white shadow-sm'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              Anual
              <span className="bg-accent text-white text-[10px] font-bold py-0.5 px-1.5 rounded-full">
                1 mes gratis
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 max-xl:grid-cols-2 max-md:grid-cols-1">
          {PLANS.map((plan) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              billing={billing}
              onCtaClick={openDemo}
            />
          ))}
        </div>

        <div className="text-center mt-12 max-w-[640px] mx-auto leading-relaxed">
          <p className="text-sm text-ink-2 mb-3">
            <strong className="text-ink">Instalación desde 199€</strong> (importación simple) hasta presupuestos a medida según complejidad de tus datos e integraciones. Te damos el presupuesto exacto en la demo.
          </p>
          <p className="text-sm text-ink-3">
            Precios sin IVA · Sin permanencia · Cancela cuando quieras
          </p>
        </div>
      </div>
    </section>
  );
}

interface PlanCardProps {
  plan: Plan;
  billing: 'monthly' | 'annual';
  onCtaClick: () => void;
}

function PlanCard({ plan, billing, onCtaClick }: PlanCardProps) {
  const monthlyEquivalent =
    billing === 'annual' ? (plan.monthly * 11) / 12 : plan.monthly;
  const annualPrice = plan.monthly * 11;

  // Spanish decimal format: integer part + ",XX"
  const fmtSpanish = (n: number) =>
    n.toFixed(2).replace('.', ',');
  const splitPrice = (n: number) => {
    const [int, dec] = n.toFixed(2).split('.');
    return { int, dec };
  };
  const { int: priceInt, dec: priceDec } = splitPrice(monthlyEquivalent);

  return (
    <div
      className={`relative rounded-2xl p-7 transition-all duration-300 ${
        plan.popular
          ? 'bg-gradient-to-b from-surface to-[#fffaf7] border-2 border-accent shadow-[0_30px_60px_-20px_rgba(255,77,26,0.25)] lg:scale-[1.03] z-10'
          : 'bg-surface border border-[rgba(15,23,42,0.08)] hover:border-[rgba(15,23,42,0.16)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.15)]'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white font-sans text-[11px] font-semibold py-1.5 px-4 rounded-full tracking-wider whitespace-nowrap uppercase flex items-center gap-1.5">
          <span className="text-amber-200">★</span>
          Más popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display text-2xl font-bold tracking-tight mb-1 leading-tight">
          {plan.name}
        </h3>
        <p className="text-[13px] text-ink-3 leading-snug">{plan.tagline}</p>
      </div>

      <div className="mb-6 pb-6 border-b border-[rgba(15,23,42,0.08)] min-h-[110px]">
        {plan.custom ? (
          <div>
            <div className="font-display text-[40px] font-bold tracking-tight leading-none mb-2">
              A medida
            </div>
            <div className="text-sm text-ink-3">Presupuesto personalizado</div>
          </div>
        ) : (
          <>
            <div className="flex items-baseline gap-0.5">
              <span className="font-display text-[54px] font-bold tracking-tight leading-none">
                {priceInt}
              </span>
              <span className="font-display text-[26px] font-bold text-ink leading-none tracking-tight">
                ,{priceDec}
              </span>
              <span className="font-display text-2xl font-bold text-ink-3 leading-none ml-1">€</span>
              <span className="text-sm text-ink-3 ml-1.5">/mes</span>
            </div>
            <div className="text-xs text-ink-3 mt-2 font-mono">
              {billing === 'annual'
                ? `${fmtSpanish(annualPrice)}€ facturados al año · sin IVA`
                : 'Facturación mensual · sin IVA'}
            </div>
          </>
        )}
      </div>

      <div className="mb-6 pb-6 border-b border-[rgba(15,23,42,0.08)]">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold mb-3">
          Usuarios
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between items-baseline">
            <span className="text-sm text-ink-2">Comerciales</span>
            <span className="text-[15px] font-semibold text-ink tabular-nums">{plan.seats.comerciales}</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-sm text-ink-2">Oficina</span>
            <span className="text-[15px] font-semibold text-ink tabular-nums">{plan.seats.oficina}</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-sm text-ink-2">Admin</span>
            <span className="text-[15px] font-semibold text-ink tabular-nums">{plan.seats.admin}</span>
          </div>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex gap-2.5 items-start text-[13px] text-ink-2 leading-snug">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={plan.popular ? '#ff4d1a' : '#059669'}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 mt-1"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={plan.popular ? 'primary' : 'outline'}
        size="lg"
        withArrow
        onClick={onCtaClick}
        className={`w-full justify-center ${plan.popular ? '!bg-accent hover:!bg-ink' : ''}`}
      >
        {plan.cta}
      </Button>
    </div>
  );
}

/* ==================== VALUE PROPS ==================== */

function ValueProps() {
  const items = [
    {
      icon: (
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </>
      ),
      title: 'Cero permanencia',
      desc: 'Cancelas cuando quieras con 15 días de preaviso. Sin contratos a 12 meses, sin penalizaciones.',
    },
    {
      icon: (
        <>
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 4 4 5-5" />
        </>
      ),
      title: 'Todo incluido, siempre',
      desc: 'Todos los módulos en todos los planes. Si mañana lanzamos algo nuevo, ya lo tienes sin pagar extra.',
    },
    {
      icon: (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </>
      ),
      title: 'Sin sorpresas',
      desc: 'Te avisamos siempre antes de cualquier cambio. Si pasas del límite de comerciales, lo decides tú.',
    },
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-bg to-warm">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl p-7 transition-all hover:border-[rgba(15,23,42,0.14)] hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-[10px] bg-accent-soft text-accent grid place-items-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-[14px] text-ink-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== COMPARISON TABLE ==================== */

interface ComparisonRow {
  category: string;
  items: Array<{
    name: string;
    starter: boolean | string;
    pro: boolean | string;
    business: boolean | string;
    enterprise: boolean | string;
  }>;
}

const COMPARISON: ComparisonRow[] = [
  {
    category: 'Módulos del portal',
    items: [
      { name: 'Pedidos con estado visible', starter: true, pro: true, business: true, enterprise: true },
      { name: 'Catálogo con stock real', starter: true, pro: true, business: true, enterprise: true },
      { name: 'Stock con auditoría total', starter: true, pro: true, business: true, enterprise: true },
      { name: 'Reservas y backorder', starter: true, pro: true, business: true, enterprise: true },
      { name: 'Garantías y RMA', starter: true, pro: true, business: true, enterprise: true },
      { name: 'Permisos granulares', starter: true, pro: true, business: true, enterprise: true },
    ],
  },
  {
    category: 'Usuarios',
    items: [
      { name: 'Comerciales', starter: '3', pro: '10', business: '25', enterprise: 'Ilimitado' },
      { name: 'Usuarios oficina', starter: '1', pro: '3', business: '8', enterprise: 'Ilimitado' },
      { name: 'Usuarios admin', starter: '1', pro: '2', business: '5', enterprise: 'Ilimitado' },
    ],
  },
  {
    category: 'Personalización',
    items: [
      { name: 'Logo propio', starter: true, pro: true, business: true, enterprise: true },
      { name: 'Colores de marca', starter: true, pro: true, business: true, enterprise: true },
      { name: 'Subdominio propio (tuempresa.mercantia.pro)', starter: true, pro: true, business: true, enterprise: true },
      { name: 'Dominio propio (pedidos.tuempresa.com)', starter: false, pro: false, business: false, enterprise: true },
    ],
  },
  {
    category: 'Integraciones',
    items: [
      { name: 'Conexión con tu ERP (en la instalación)', starter: true, pro: true, business: true, enterprise: true },
      { name: 'Importación CSV / Excel', starter: true, pro: true, business: true, enterprise: true },
      { name: 'API REST', starter: false, pro: true, business: true, enterprise: true },
      { name: 'Webhooks', starter: false, pro: true, business: true, enterprise: true },
      { name: 'Integraciones a medida (presupuestadas aparte)', starter: 'Setup', pro: 'Setup', business: 'Setup', enterprise: 'Incluidas' },
    ],
  },
  {
    category: 'Operativa avanzada',
    items: [
      { name: 'Multi-almacén', starter: false, pro: false, business: true, enterprise: true },
      { name: 'Multi-marca / multi-sociedad', starter: false, pro: false, business: false, enterprise: true },
    ],
  },
  {
    category: 'Soporte',
    items: [
      { name: 'Soporte por email', starter: true, pro: true, business: true, enterprise: true },
      { name: 'WhatsApp directo', starter: true, pro: true, business: true, enterprise: true },
      { name: 'Respuesta <4h laborables', starter: true, pro: true, business: true, enterprise: true },
      { name: 'Soporte dedicado', starter: false, pro: false, business: false, enterprise: true },
    ],
  },
  {
    category: 'Onboarding',
    items: [
      { name: 'Importación inicial de datos', starter: true, pro: true, business: true, enterprise: true },
      { name: 'Onboarding asistido', starter: true, pro: true, business: true, enterprise: true },
      { name: 'Configuración de marca', starter: true, pro: true, business: true, enterprise: true },
    ],
  },
];

function ComparisonTable() {
  return (
    <section className="py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[680px] mx-auto">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-5 py-1 px-3 bg-accent-soft rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Comparativa detallada
          </div>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: 'clamp(36px, 4.8vw, 58px)',
              lineHeight: '1.02',
              letterSpacing: '-0.035em',
            }}
          >
            Qué incluye <span className="text-gradient">cada plan</span>
          </h2>
          <p className="text-lg text-ink-2 leading-snug">
            Todos los módulos esenciales están en todos los planes. La diferencia está en el tamaño del equipo, integraciones y soporte.
          </p>
        </div>

        <div className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl overflow-hidden shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[800px]">
              <thead className="sticky top-0 z-10">
                <tr className="border-b border-[rgba(15,23,42,0.08)] bg-bg-soft">
                  <th className="text-left py-5 px-6 font-display font-bold text-[15px] text-ink min-w-[300px]">
                    Características
                  </th>
                  <th className="py-5 px-4 font-display font-bold text-[15px] text-ink min-w-[120px]">
                    Starter
                  </th>
                  <th className="py-5 px-4 font-display font-bold text-[15px] text-accent bg-accent-soft/50 min-w-[120px]">
                    Pro
                  </th>
                  <th className="py-5 px-4 font-display font-bold text-[15px] text-ink min-w-[120px]">
                    Business
                  </th>
                  <th className="py-5 px-4 font-display font-bold text-[15px] text-ink min-w-[120px]">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((category, ci) => (
                  <Fragment key={category.category}>
                    <tr className="bg-bg-soft/60">
                      <td
                        colSpan={5}
                        className="py-3 px-6 font-mono text-[11px] uppercase tracking-widest text-ink-3 font-semibold"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, ii) => (
                      <tr
                        key={`item-${ci}-${ii}`}
                        className="border-b border-[rgba(15,23,42,0.05)] last:border-b-0 hover:bg-bg-soft/40 transition-colors"
                      >
                        <td className="py-3.5 px-6 text-ink-2">{item.name}</td>
                        <CompCell value={item.starter} />
                        <CompCell value={item.pro} highlight />
                        <CompCell value={item.business} />
                        <CompCell value={item.enterprise} />
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-6 text-xs text-ink-3 md:hidden">
          ← Desliza horizontalmente para ver todas las columnas →
        </div>
      </div>
    </section>
  );
}

function CompCell({ value, highlight }: { value: boolean | string; highlight?: boolean }) {
  return (
    <td className={`py-3.5 px-4 text-center ${highlight ? 'bg-accent-soft/30' : ''}`}>
      {typeof value === 'string' ? (
        <span className="text-sm font-semibold text-ink">{value}</span>
      ) : value ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#059669"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline-block"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ) : (
        <span className="text-ink-4 font-mono">—</span>
      )}
    </td>
  );
}

/* ==================== TESTIMONIAL ==================== */

function Testimonial() {
  return (
    <section className="py-20 bg-gradient-to-b from-bg to-warm">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-80 h-80 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,77,26,0.12), transparent 60%)',
              filter: 'blur(60px)',
            }}
          />

          <div className="relative z-10 text-center">
            <div className="text-6xl text-accent/30 font-display font-bold leading-none mb-2 select-none">
              &ldquo;
            </div>

            <blockquote
              className="font-display text-ink mb-8 max-w-[700px] mx-auto"
              style={{
                fontSize: 'clamp(22px, 2.8vw, 32px)',
                lineHeight: '1.3',
                letterSpacing: '-0.02em',
                fontWeight: 600,
              }}
            >
              Llevamos 8 meses y <span className="text-gradient">hemos reducido a la mitad</span> el tiempo que dedicamos a gestionar pedidos. Lo mejor es que el equipo lo adoptó sin resistencia.
            </blockquote>

            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-accent grid place-items-center text-white font-bold text-sm">
                PA
              </div>
              <div className="text-left">
                <div className="font-semibold text-[15px] text-ink">Pablo A.</div>
                <div className="text-[13px] text-ink-3 font-mono">
                  Director comercial · Cliente desde 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== FAQ ==================== */

const PRICING_FAQS = [
  {
    q: '¿Por qué algunas funciones aparecen en todos los planes?',
    a: 'Porque cosas como tu logo, tus colores, tu subdominio o la conexión con tu ERP no deberían bloquearse para forzarte a un plan superior. Las diferencias entre planes están en lo que realmente escala con el tamaño de tu equipo: API, multi-almacén, soporte prioritario, SLA. Si una empresa de 3 comerciales necesita su marca personalizada, le sale a 49€/mes, no 99€.',
  },
  {
    q: '¿Por qué no mostráis el precio de la instalación?',
    a: 'Porque depende mucho del caso. Una importación simple de 200 productos no tiene el mismo coste que conectar tu ERP con 15 años de histórico. En la demo te damos el presupuesto exacto en menos de 24h, sin compromiso y sin letra pequeña.',
  },
  {
    q: '¿Qué pasa si supero el número de comerciales del plan?',
    a: 'Te avisamos antes de cobrarte de más. Puedes cambiar al siguiente tier al instante con prorrateo proporcional. Nunca te cobramos extras por sorpresa: siempre decides tú si subir de plan.',
  },
  {
    q: '¿Puedo cambiar de plan más adelante?',
    a: 'Sí, en cualquier momento. Si subes de plan, prorrateamos lo que ya pagaste. Si bajas, el cambio se aplica en la siguiente facturación. Sin penalizaciones por reducir.',
  },
  {
    q: '¿Qué incluye exactamente la instalación?',
    a: 'Importación de tu catálogo (Excel/CSV o conexión directa con tu ERP), carga de clientes, configuración de tu marca (logo + colores), creación de tu subdominio propio, conexión con tu sistema contable si aplica, y formación al equipo. El precio del setup se valora según complejidad: una importación simple de 200 productos sin ERP empieza desde 199€; conectar un ERP con histórico complejo y multi-marca puede llegar a 1.500€ o más. En la demo te damos el presupuesto exacto.',
  },
  {
    q: '¿De verdad no hay permanencia?',
    a: 'De verdad. Puedes cancelar cuando quieras dando 15 días de preaviso. Si cancelas, tienes 30 días para exportar todos tus datos antes de que se eliminen definitivamente. Nada de contratos a 12 meses.',
  },
  {
    q: '¿Ofrecéis garantía si no me convence?',
    a: 'Sí. Durante los primeros 30 días, si ves que Mercantia no encaja con tu negocio, cancelas sin penalización y exportamos tus datos. El setup es una inversión inicial que cubre nuestro trabajo técnico de implementación, por lo que no se reembolsa, pero no pagas nada más.',
  },
  {
    q: '¿Los precios incluyen IVA?',
    a: 'No, todos los precios mostrados son sin IVA. Se aplicará el 21% correspondiente en la factura para clientes en España. Clientes intracomunitarios con CIF válido quedan exentos con inversión del sujeto pasivo.',
  },
  {
    q: '¿Las actualizaciones del software están incluidas?',
    a: 'Sí, todas. Cualquier mejora, módulo nuevo o funcionalidad que lancemos en el futuro ya la tienes sin coste adicional mientras seas cliente activo.',
  },
  {
    q: '¿Ofrecéis algún descuento?',
    a: 'Sí. El pago anual tiene 1 mes gratis (pagas 11 meses por 12). Además, aplicamos descuentos permanentes para entidades sin ánimo de lucro y centros educativos. Y para clientes que llevan 3+ años, un 10% adicional de fidelidad.',
  },
];

function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24" id="preguntas-precios">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[680px] mx-auto">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-5 py-1 px-3 bg-accent-soft rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Dudas frecuentes
          </div>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: 'clamp(36px, 4.8vw, 58px)',
              lineHeight: '1.02',
              letterSpacing: '-0.035em',
            }}
          >
            Todo sobre <span className="text-gradient">precios</span>
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl overflow-hidden shadow-soft">
          {PRICING_FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
              isLast={i === PRICING_FAQS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  isLast,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer group ${
        isLast ? '' : 'border-b border-[rgba(15,23,42,0.08)]'
      }`}
    >
      <div className="flex justify-between items-center gap-5 py-5 px-7 text-[17px] font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
        <span>{question}</span>
        <div
          className={`w-8 h-8 rounded-lg grid place-items-center relative flex-shrink-0 transition-all duration-300 ${
            isOpen ? 'bg-accent text-white' : 'bg-bg-soft text-ink'
          }`}
        >
          <span className="absolute w-3 h-px bg-current top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <span
            className={`absolute w-px h-3 bg-current top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
              isOpen ? 'scale-y-0' : 'scale-y-100'
            }`}
          />
        </div>
      </div>
      <div
        className="overflow-hidden transition-[max-height] duration-400"
        style={{ maxHeight: isOpen ? '400px' : '0' }}
      >
        <div className="px-7 pb-6 text-[15px] leading-relaxed text-ink-2">{answer}</div>
      </div>
    </div>
  );
}

/* ==================== CTA FINAL ==================== */

function PricingCTA() {
  const { openDemo } = useDemo();

  return (
    <section className="pb-28">
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
              background:
                'radial-gradient(ellipse at center, rgba(255,77,26,0.2), transparent 55%)',
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
              ¿Sigues con dudas?
            </h2>
            <p className="text-[18px] text-white/70 max-w-[540px] mx-auto mb-9 leading-snug">
              Cuéntanos tu caso en 15 minutos. Te decimos qué plan encaja, te damos presupuesto de instalación y te enseñamos Mercantia funcionando con datos reales.
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              <Button
                variant="primary"
                size="lg"
                withArrow
                onClick={openDemo}
                className="!bg-accent hover:!bg-white hover:!text-ink"
              >
                Pedir demo gratis
              </Button>
              <a
                href={whatsappUrl('Hola, tengo dudas sobre los precios de Mercantia')}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 text-[15px] font-semibold rounded-[10px] inline-flex items-center gap-2 transition-all border border-white/20 text-white hover:border-white hover:bg-white/10 no-underline tracking-tight"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-5 text-[13px] text-white/50 flex-wrap">
              <span>✓ Respuesta en 24h</span>
              <span>✓ Demo con tu catálogo</span>
              <span>✓ Sin compromiso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

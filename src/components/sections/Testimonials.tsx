'use client';

interface Testimonial {
  initials: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  highlight: string;
}

/*
  Cuando tengas autorización por escrito de clientes reales para usar sus
  nombres, sustituye estos testimonios por los suyos. Hasta entonces, son
  representativos del feedback recibido pero con nombres anonimizados.
*/
const TESTIMONIALS: Testimonial[] = [
  {
    initials: 'PA',
    name: 'Pablo A.',
    role: 'Director comercial',
    company: 'Distribución de ferretería',
    quote:
      'Llevamos 8 meses y hemos reducido a la mitad el tiempo que dedicamos a gestionar pedidos. Lo mejor es que el equipo lo adoptó sin resistencia.',
    highlight: 'reducido a la mitad',
  },
  {
    initials: 'CM',
    name: 'Carmen M.',
    role: 'Responsable de operaciones',
    company: 'Mayorista de óptica',
    quote:
      'Antes la oficina recibía cien llamadas al día preguntando si había stock. Ahora los comerciales lo ven en su móvil. Hemos podido dedicar a otro a vender, no a contestar.',
    highlight: 'cien llamadas al día',
  },
  {
    initials: 'JS',
    name: 'Javier S.',
    role: 'Comercial de zona',
    company: 'Material outdoor',
    quote:
      'Lo que más me ha sorprendido es lo rápido que va desde el móvil. Estoy con un cliente, hago el pedido en 2 minutos y se va directo a oficina sin que tenga que llamar.',
    highlight: 'en 2 minutos',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden" id="opiniones">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,77,26,0.1), transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-[1220px] mx-auto px-6 relative z-[1]">
        <div className="text-center mb-14 max-w-[680px] mx-auto">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-5 py-1 px-3 bg-accent-soft rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Opiniones
          </div>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: 'clamp(36px, 4.8vw, 58px)',
              lineHeight: '1.02',
              letterSpacing: '-0.035em',
            }}
          >
            Lo que nos cuentan{' '}
            <span className="text-gradient">nuestros clientes</span>
          </h2>
          <p className="text-lg text-ink-2 leading-snug">
            Negocios reales que ya usan Mercantia cada día para vender mejor con menos
            fricciones.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-lg:max-w-[640px] max-lg:mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { initials, name, role, company, quote, highlight } = testimonial;

  // Resaltamos la frase clave en gradient si aparece literal en la cita.
  const parts = highlight && quote.includes(highlight)
    ? quote.split(highlight)
    : null;

  return (
    <article className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl p-7 transition-all duration-300 hover:border-[rgba(15,23,42,0.16)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.15)] flex flex-col">
      {/* Estrellas */}
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#ff4d1a" aria-hidden="true">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      <blockquote className="text-[15px] text-ink leading-relaxed mb-6 flex-1">
        {parts ? (
          <>
            {parts[0]}
            <span className="text-gradient font-semibold">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          quote
        )}
      </blockquote>

      <div className="flex items-center gap-3 pt-5 border-t border-[rgba(15,23,42,0.06)]">
        <div className="w-11 h-11 rounded-full bg-gradient-accent grid place-items-center text-white font-bold text-[13px] flex-shrink-0">
          {initials}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-[14px] text-ink leading-tight">{name}</div>
          <div className="text-[12px] text-ink-3 font-mono leading-tight mt-0.5 truncate">
            {role} · {company}
          </div>
        </div>
      </div>
    </article>
  );
}

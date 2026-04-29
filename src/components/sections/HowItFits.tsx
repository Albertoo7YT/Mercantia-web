'use client';

export function HowItFits() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-bg-soft to-bg">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12 max-w-[700px] mx-auto">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-5 py-1 px-3 bg-accent-soft rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Cómo encaja
          </div>

          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              lineHeight: '1.05',
              letterSpacing: '-0.035em',
            }}
          >
            No sustituye nada.{' '}
            <span className="text-gradient">Ordena lo que ya tienes.</span>
          </h2>

          <p className="text-[18px] text-ink-2 leading-relaxed">
            Tu ERP sigue gestionando contabilidad y stock central. Tu ecommerce sigue vendiendo a cliente final. Mercantia es la capa comercial intermedia que conecta tu equipo de ventas con tus datos.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 mb-12">
          <FlowBox
            label="Tu equipo comercial"
            items={['Móvil', 'Catálogo', 'Pedidos']}
            tone="left"
          />
          <FlowBox
            label="Mercantia"
            items={['Capa B2B', 'Estructura', 'Validación']}
            tone="center"
            highlight
          />
          <FlowBox
            label="Tu sistema actual"
            items={['ERP', 'Excel', 'Ecommerce']}
            tone="right"
          />
        </div>

        <div className="text-center max-w-[640px] mx-auto">
          <p className="text-[15px] text-ink-3 leading-relaxed">
            <strong className="text-ink">Sin migraciones obligadas.</strong> Conectamos Mercantia con lo que ya usas (Sage, Holded, Odoo, PrestaShop, WooCommerce, Excel) y tu equipo gana orden sin que toques tu sistema.
          </p>
        </div>
      </div>
    </section>
  );
}

interface FlowBoxProps {
  label: string;
  items: string[];
  tone: 'left' | 'center' | 'right';
  highlight?: boolean;
}

function FlowBox({ label, items, tone, highlight }: FlowBoxProps) {
  return (
    <div className="relative">
      {(tone === 'left' || tone === 'center') && (
        <div
          className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-accent/40 text-2xl z-10"
          aria-hidden="true"
        >
          →
        </div>
      )}

      <div
        className={`relative p-6 rounded-2xl border transition-all ${
          highlight
            ? 'bg-surface border-accent shadow-[0_20px_40px_-20px_rgba(255,77,26,0.25)] lg:scale-[1.04]'
            : 'bg-surface border-[rgba(15,23,42,0.08)]'
        }`}
      >
        {highlight && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white font-sans text-[10px] font-semibold py-1 px-3 rounded-full tracking-wider uppercase whitespace-nowrap">
            Aquí está Mercantia
          </div>
        )}

        <div className="font-mono text-[10px] uppercase tracking-widest text-ink-3 font-semibold mb-3">
          {tone === 'left' && 'Capa 1'}
          {tone === 'center' && 'Capa 2'}
          {tone === 'right' && 'Capa 3'}
        </div>

        <h3
          className={`font-display text-xl font-bold tracking-tight mb-4 leading-tight ${
            highlight ? 'text-accent' : 'text-ink'
          }`}
        >
          {label}
        </h3>

        <ul className="space-y-2">
          {items.map((item, i) => (
            <li
              key={i}
              className={`text-sm font-medium px-3 py-1.5 rounded-md ${
                highlight ? 'bg-accent-soft text-ink' : 'bg-bg-soft text-ink-2'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

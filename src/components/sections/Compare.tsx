'use client';

export function Compare() {
  return (
    <section className="py-24 bg-gradient-to-b from-bg to-warm" id="comparativa">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[680px] mx-auto">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-5 py-1 px-3 bg-accent-soft rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Diferenciación
          </div>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: 'clamp(36px, 4.8vw, 58px)',
              lineHeight: '1.02',
              letterSpacing: '-0.035em',
            }}
          >
            Ni un ERP ni una tienda online.
          </h2>
          <p className="text-[18px] text-ink-2 leading-relaxed">
            Es la capa comercial intermedia que tu ERP no sabe hacer bien y que tu ecommerce no debería intentar.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1 max-w-[1100px] mx-auto">
          <CompareCard
            title="Un ERP clásico"
            subtitle="Sage, SAP B1, Holded..."
            items={[
              { positive: true, text: 'Potente para contabilidad y stock central' },
              { positive: true, text: 'Bien integrado con facturación y compras' },
              { positive: false, text: 'Interfaz pensada para back-office, no para vender' },
              { positive: false, text: 'Inviable para un comercial en ruta' },
              { positive: false, text: 'Sin flujo de pedidos B2B usable' },
            ]}
          />

          <CompareCard
            title="Mercantia"
            subtitle="La capa que faltaba"
            items={[
              { positive: true, text: 'Capa B2B sobre tu ERP existente' },
              { positive: true, text: 'Comerciales en ruta, oficina en tiempo real' },
              { positive: true, text: 'Catálogo rápido con stock vivo y precios por cliente' },
              { positive: true, text: 'Pedidos estructurados, no mensajes sueltos' },
              { positive: true, text: 'Garantías y RMA integradas' },
            ]}
            highlight
          />

          <CompareCard
            title="Una tienda B2B"
            subtitle="Shopify B2B, BigCommerce..."
            items={[
              { positive: true, text: 'Buena experiencia para autoservicio' },
              { positive: true, text: 'SEO y captación digital' },
              { positive: false, text: 'Pensada para cliente final, no para comerciales' },
              { positive: false, text: 'Lenta para quien hace 5 pedidos al día' },
              { positive: false, text: 'Sin auditoría real de stock interno' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

interface CompareItem {
  positive: boolean;
  text: string;
}

interface CompareCardProps {
  title: string;
  subtitle: string;
  items: CompareItem[];
  highlight?: boolean;
}

function CompareCard({ title, subtitle, items, highlight }: CompareCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-7 border transition-all ${
        highlight
          ? 'bg-surface border-2 border-accent shadow-[0_30px_60px_-30px_rgba(255,77,26,0.3)] lg:scale-[1.05] z-10'
          : 'bg-surface border-[rgba(15,23,42,0.08)]'
      }`}
    >
      {highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white font-sans text-[11px] font-semibold py-1.5 px-4 rounded-full tracking-wider uppercase whitespace-nowrap inline-flex items-center gap-1.5">
          <span className="text-amber-200">★</span>
          Aquí encajamos
        </div>
      )}

      <div className="mb-5">
        <h3 className="font-display text-2xl font-bold tracking-tight mb-1 leading-tight">
          {title}
        </h3>
        <p className="text-[13px] text-ink-3 font-mono">{subtitle}</p>
      </div>

      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 items-start text-sm leading-snug">
            {item.positive ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={highlight ? '#ff4d1a' : '#059669'}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 mt-0.5"
                aria-label="Sí"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#dc2626"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 mt-0.5 opacity-60"
                aria-label="No"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            )}
            <span className={item.positive ? 'text-ink-2' : 'text-ink-3'}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

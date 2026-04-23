import { SectionHead } from './Features';

export function Compare() {
  return (
    <section className="pt-0 pb-28 relative overflow-hidden bg-gradient-to-b from-warm to-warm-2" id="comparativa">
      <div className="absolute top-[10%] -right-[10%] w-1/2 h-3/5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,77,26,0.18), transparent 60%)',
          filter: 'blur(80px)',
          opacity: 0.5,
        }}
      />

      <div className="max-w-[1220px] mx-auto px-6 relative z-[1]">
        <div className="mb-10">
          <SectionHead
            eyebrow="Diferenciación"
            title={<>Ni un <span className="text-gradient">ERP</span> ni una <span className="text-gradient">tienda online</span>.</>}
            sub="Es la capa B2B intermedia que tu ERP no sabe hacer bien y que tu ecommerce no debería intentar."
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-12 max-lg:grid-cols-1">
          <CompareCol
            title="Un ERP clásico"
            items={[
              'Potente para contabilidad y stock central',
              'Interfaz pensada para back-office',
              'Inviable para un comercial en ruta',
              'Sin flujo de pedidos B2B usable',
            ]}
          />
          <CompareCol
            highlight
            title={<span className="text-gradient">Mercantia</span>}
            items={[
              'Capa B2B sobre tu ERP existente',
              'Comerciales en ruta, oficina en tiempo real',
              'Catálogo rápido con stock vivo y precios por cliente',
              'Pedidos estructurados, no mensajes sueltos',
            ]}
          />
          <CompareCol
            title="Una tienda B2B"
            items={[
              'Escaparate para cliente final',
              'Animaciones, SEO, funnels',
              'Lenta para quien hace 5 pedidos al día',
              'Sin auditoría real de stock',
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function CompareCol({
  title,
  items,
  highlight,
}: {
  title: React.ReactNode;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 px-7 relative ${
        highlight
          ? 'bg-gradient-to-b from-surface to-[#fffaf7] border-2 border-accent lg:scale-[1.02] shadow-[0_20px_40px_-20px_rgba(255,77,26,0.18)]'
          : 'bg-surface border border-[rgba(15,23,42,0.08)]'
      }`}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white font-sans text-[11px] font-semibold py-1 px-3.5 rounded-full tracking-wide whitespace-nowrap">
          ★ Así trabajamos
        </div>
      )}
      <h4 className="font-display text-[22px] font-bold mb-5 tracking-tight">{title}</h4>
      <ul>
        {items.map((item, i) => (
          <li
            key={i}
            className={`text-sm py-3 flex gap-2.5 items-start leading-snug ${
              i < items.length - 1 ? 'border-b border-[rgba(15,23,42,0.08)]' : ''
            } text-ink-2`}
          >
            <span className={`flex-shrink-0 font-bold ${highlight ? 'text-accent' : 'text-ink-4'}`}>
              {highlight ? '✓' : '—'}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

'use client';

import { ReactNode } from 'react';
import { FeatureCard } from '@/components/ui/FeatureCard';

export function Features() {
  return (
    <section className="pt-8 md:pt-20 pb-12 relative" id="producto">
      <div className="max-w-[1220px] mx-auto px-6">
        <SectionHead
          eyebrow="El producto"
          title={<>Reemplaza el trío <span className="text-gradient">WhatsApp + Email + Excel</span></>}
          sub="Cinco módulos diseñados para empresas de 1 a 100 comerciales con catálogos de 1 a 500.000 referencias. Rápido, estructurado y siempre sincronizado."
        />

        <div className="grid grid-cols-6 gap-4 max-lg:grid-cols-1">
          <Feature
            span="span-4"
            number="01 / PEDIDOS"
            title="Pedidos con estado visible"
            desc="Pendiente → preparación → enviado → entregado. Cada cambio dispara un email al cliente. Comerciales ven los suyos, oficina ve todos. Exportable a PDF, Excel o CSV."
            icon={<><path d="M3 3h18v4H3zM3 11h18v10H3z" /><path d="M7 15h4" /></>}
          >
            <KanbanPreview />
          </Feature>

          <Feature
            span="span-2"
            number="02 / CATÁLOGO"
            title="Catálogo con stock real"
            desc="Importa desde Excel/CSV o sincroniza con PrestaShop. Búsqueda por referencia, filtros por marca. Precios por cliente, stock vivo."
            icon={<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>}
          >
            <CatalogoPreview />
          </Feature>

          <Feature
            span="span-2"
            number="03 / STOCK"
            title="Stock con auditoría total"
            desc="Cada movimiento queda registrado con usuario, motivo y timestamp. Nunca stock negativo por accidente."
            icon={<><path d="M12 2l9 4v12l-9 4-9-4V6zM3.27 6.96L12 12.01l8.73-5.05M12 22V12" /></>}
          >
            <AuditPreview />
          </Feature>

          <Feature
            span="span-2"
            number="04 / RESERVAS"
            title="Reservas / backorder"
            desc="Cierra ventas de producto que aún no ha llegado. Al recibir mercancía, se convierte en pedido automáticamente."
            icon={<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>}
          >
            <ReservasPreview />
          </Feature>

          <Feature
            span="span-2"
            number="05 / PERMISOS"
            title="Permisos granulares"
            desc="Admin, oficina y comercial. Bloqueos por producto o marca. Cada uno ve solo lo que debe."
            icon={<><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></>}
          >
            <RolesPreview />
          </Feature>

        </div>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <div className="max-w-[720px] mx-auto mb-16 text-center">
      <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-5 py-1 px-3 bg-accent-soft rounded-full font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        {eyebrow}
      </div>
      <h2
        className="font-display font-bold mb-4"
        style={{
          fontSize: 'clamp(36px, 4.8vw, 58px)',
          lineHeight: '1.02',
          letterSpacing: '-0.035em',
        }}
      >
        {title}
      </h2>
      {sub && <p className="text-[18px] text-ink-2 leading-snug">{sub}</p>}
    </div>
  );
}

function Feature({
  span,
  number,
  title,
  desc,
  icon,
  children,
}: {
  span: 'span-4' | 'span-3' | 'span-2';
  number: string;
  title: string;
  desc: string;
  icon: ReactNode;
  children?: ReactNode;
}) {
  const spanMap = {
    'span-4': 'col-span-4 max-lg:col-span-1',
    'span-3': 'col-span-3 max-lg:col-span-1',
    'span-2': 'col-span-2 max-lg:col-span-1',
  };

  return (
    <FeatureCard
      number={number}
      title={title}
      desc={desc}
      icon={icon}
      className={spanMap[span]}
    >
      {children}
    </FeatureCard>
  );
}

function KanbanPreview() {
  return (
    <div className="mt-5 bg-gradient-to-b from-bg to-bg-soft border border-[rgba(15,23,42,0.08)] rounded-xl p-4 min-h-[140px]">
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: 'Pendiente', color: 'bg-amber', cards: [['#2847', 'Martín SL · 1.240€'], ['#2851', 'El Puerto · 892€']] },
          { label: 'Preparación', color: 'bg-[#3b82f6]', cards: [['#2843', 'Rivera · 2.104€']] },
          { label: 'Enviado', color: 'bg-[#8b5cf6]', cards: [['#2839', 'Núñez · 567€']] },
          { label: 'Entregado', color: 'bg-emerald', cards: [['#2835', 'Soto · 1.890€']] },
        ].map((col, i) => (
          <div key={i} className="min-w-0">
            <div className="font-mono text-[9px] uppercase tracking-widest text-ink-3 mb-2 font-semibold flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${col.color}`} />
              {col.label}
            </div>
            {col.cards.map(([id, meta], j) => (
              <div key={j} className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-md px-2.5 py-2 mb-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="font-mono text-[10px] text-ink font-semibold">{id}</div>
                <div className="text-ink-3 text-[9px] mt-0.5">{meta}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function AuditPreview() {
  return (
    <div className="mt-5 bg-gradient-to-b from-bg to-bg-soft border border-[rgba(15,23,42,0.08)] rounded-xl p-4 min-h-[140px]">
      <div className="font-mono text-[11px]">
        {[
          ['14:32', 'Pedido #2847', '−24', 'down'],
          ['11:08', 'Compra Olivares SA', '+480', 'up'],
          ['09:41', 'Garantía #RMA-092', '−1', 'down'],
        ].map(([time, text, delta, type], i) => (
          <div key={i} className="grid grid-cols-[50px_1fr_auto] gap-2.5 py-1.5 border-b border-dashed border-[rgba(15,23,42,0.08)] last:border-0 items-center">
            <span className="text-ink-4 text-[10px]">{time}</span>
            <span className="text-ink-2">{text}</span>
            <span
              className={`font-semibold py-px px-1.5 rounded text-[10px] ${
                type === 'up' ? 'text-emerald bg-[#d1fae5]' : 'text-accent bg-accent-soft'
              }`}
            >
              {delta}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReservasPreview() {
  return (
    <div className="mt-5 bg-gradient-to-b from-bg to-bg-soft border border-[rgba(15,23,42,0.08)] rounded-xl p-4 min-h-[140px]">
      {[
        ['Martín · REF-L308 ×40', '14 MAY'],
        ['Puerto · REF-B205 ×12', '22 MAY'],
      ].map(([name, eta], i) => (
        <div key={i} className="flex items-center justify-between p-2.5 border border-cobalt bg-cobalt-soft rounded-lg mb-1.5 text-xs last:mb-0">
          <div className="text-ink font-medium font-mono text-[11px]">{name}</div>
          <div className="text-cobalt text-[10px] font-mono font-semibold bg-white py-0.5 px-2 rounded">
            {eta}
          </div>
        </div>
      ))}
    </div>
  );
}

function CatalogoPreview() {
  const products = [
    { ref: 'REF-A420', name: 'Mochila trekking 45L', price: '84,50€', stock: 'ok' },
    { ref: 'REF-C112', name: 'Cuchillo multiuso', price: '32,00€', stock: 'ok' },
    { ref: 'REF-L308', name: 'Linterna frontal', price: '47,90€', stock: 'low' },
    { ref: 'REF-B205', name: 'Bota impermeable', price: '128,00€', stock: 'ok' },
  ] as const;

  return (
    <div className="mt-5 bg-gradient-to-b from-bg to-bg-soft border border-[rgba(15,23,42,0.08)] rounded-xl p-3 min-h-[140px]">
      <div className="grid grid-cols-2 gap-2">
        {products.map((p) => (
          <div key={p.ref} className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-md p-2">
            <div className="aspect-video bg-bg-soft rounded mb-1.5 grid place-items-center text-ink-4 text-base">◆</div>
            <div className="font-mono text-[8px] text-ink-3 mb-0.5">{p.ref}</div>
            <div className="text-[10px] font-semibold text-ink mb-1 leading-tight truncate">{p.name}</div>
            <div className="flex justify-between items-center">
              <span className="font-mono text-[10px] font-semibold text-ink">{p.price}</span>
              <span
                className={`text-[8px] font-semibold px-1.5 py-px rounded ${
                  p.stock === 'ok'
                    ? 'bg-[#d1fae5] text-[#065f46]'
                    : 'bg-accent-soft text-accent'
                }`}
              >
                {p.stock === 'ok' ? 'Stock' : 'Bajo ped.'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RolesPreview() {
  const roles = [
    { name: 'Admin', perms: [['Todo', true]] },
    { name: 'Oficina', perms: [['Pedidos', true], ['Stock', true]] },
    { name: 'Comercial', perms: [['Ventas', true]] },
  ] as const;
  return (
    <div className="mt-5 bg-gradient-to-b from-bg to-bg-soft border border-[rgba(15,23,42,0.08)] rounded-xl p-4 min-h-[140px]">
      <div className="grid gap-2.5">
        {roles.map((role, i) => (
          <div key={i} className="grid grid-cols-[80px_1fr] gap-3 items-center py-1.5 border-b border-dashed border-[rgba(15,23,42,0.08)] last:border-0">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink">
              {role.name}
            </div>
            <div className="flex flex-wrap gap-1">
              {role.perms.map(([label, on], j) => (
                <span
                  key={j}
                  className={`text-[9px] py-0.5 px-1.5 rounded font-mono font-medium ${
                    on
                      ? 'bg-accent text-white border border-accent'
                      : 'bg-surface border border-[rgba(15,23,42,0.08)] text-ink-3'
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

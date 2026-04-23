export function HeroMockup() {
  return (
    <div className="mt-14 [perspective:2400px] relative animate-fade-up [animation-delay:0.5s] [animation-fill-mode:both]">
      <div
        className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[90%] h-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(255,77,26,0.18), transparent 55%)',
          filter: 'blur(60px)',
          opacity: 0.8,
        }}
      />
      <div
        className="max-w-[1120px] mx-auto rounded-[18px] overflow-hidden bg-surface border border-[rgba(15,23,42,0.14)] shadow-mockup relative z-10 transition-transform duration-700"
        style={{ transform: 'rotateX(6deg)' }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotateX(1deg)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotateX(6deg)')}
      >
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-b from-[#fafafa] to-[#f4f4f3] border-b border-[rgba(15,23,42,0.08)]">
          <div className="w-[11px] h-[11px] rounded-full bg-[#ff5f56]" />
          <div className="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]" />
          <div className="w-[11px] h-[11px] rounded-full bg-[#27c93f]" />
          <div className="mx-auto px-3.5 py-1 bg-bg border border-[rgba(15,23,42,0.08)] rounded-full font-mono text-xs text-ink-3 inline-flex items-center gap-1.5 min-w-[280px] justify-center">
            <span className="text-[10px] opacity-60">🔒</span>
            tu-empresa.mercantia.pro/pedidos
          </div>
          <div className="w-[50px]" />
        </div>

        {/* Body */}
        <div className="grid grid-cols-[220px_1fr] min-h-[520px] bg-surface max-md:grid-cols-1">
          {/* Sidebar */}
          <MockSidebar />
          {/* Main */}
          <MockMain />
        </div>
      </div>
    </div>
  );
}

function MockSidebar() {
  return (
    <div className="py-5 px-3.5 bg-bg-soft border-r border-[rgba(15,23,42,0.08)] flex flex-col max-md:hidden">
      <div className="font-display text-[15px] font-bold px-3 pb-4 pt-2 text-ink tracking-tight flex items-center gap-2">
        <div className="w-[22px] h-[22px] rounded-md bg-gradient-accent grid place-items-center text-white text-[11px] font-bold">
          M
        </div>
        Mercantia
      </div>

      <SidebarSection>General</SidebarSection>
      <SidebarItem icon="grid">Catálogo</SidebarItem>
      <SidebarItem icon="orders" active badge="12">Pedidos</SidebarItem>
      <SidebarItem icon="clock">Reservas</SidebarItem>
      <SidebarItem icon="shield">Garantías</SidebarItem>

      <SidebarSection>CRM</SidebarSection>
      <SidebarItem icon="user">Clientes</SidebarItem>
      <SidebarItem icon="download">Compras</SidebarItem>

      <SidebarSection>Análisis</SidebarSection>
      <SidebarItem icon="chart">Informes</SidebarItem>
    </div>
  );
}

function SidebarSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-4 px-3 pt-3.5 pb-1.5">
      {children}
    </div>
  );
}

function SidebarItem({
  icon,
  children,
  active,
  badge,
}: {
  icon: string;
  children: React.ReactNode;
  active?: boolean;
  badge?: string;
}) {
  const iconMap: Record<string, React.ReactNode> = {
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    orders: <path d="M3 3h18v4H3zM3 11h18v10H3z" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    shield: <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    user: <><circle cx="12" cy="7" r="4" /><path d="M5 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" /></>,
    download: <path d="M12 20V4M5 13l7 7 7-7" />,
    chart: <path d="M3 3v18h18M7 14l4-4 4 4 5-5" />,
  };

  return (
    <div
      className={`flex items-center gap-2.5 px-3 py-2 rounded-[7px] text-[13px] mb-0.5 font-medium transition-colors ${
        active
          ? 'bg-surface text-ink font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.04),0_0_0_1px_rgba(15,23,42,0.08)]'
          : 'text-ink-2'
      }`}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`flex-shrink-0 ${active ? 'text-accent opacity-100' : 'opacity-75'}`}
      >
        {iconMap[icon]}
      </svg>
      {children}
      {badge && (
        <span className="ml-auto font-mono text-[10px] bg-accent text-white px-1.5 rounded-full font-semibold">
          {badge}
        </span>
      )}
    </div>
  );
}

function MockMain() {
  return (
    <div className="py-5 px-6">
      <div className="flex justify-between items-center mb-4 pb-4 border-b border-[rgba(15,23,42,0.08)] max-sm:flex-col max-sm:items-start max-sm:gap-2">
        <div>
          <h4 className="font-display text-[22px] font-bold tracking-tight mb-0.5">Pedidos</h4>
          <p className="text-xs text-ink-3 font-mono">Abril 2026 · 247 pedidos activos</p>
        </div>
        <div className="flex gap-1.5">
          <Chip>⇅ Filtros</Chip>
          <Chip>↓ Exportar</Chip>
          <Chip primary>+ Nuevo pedido</Chip>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2.5 mb-4 max-sm:grid-cols-2">
        <Stat label="Facturado" value="48.920€" delta="↑ 23%" deltaType="up" />
        <Stat label="Pedidos" value="247" delta="↑ 12%" deltaType="up" />
        <Stat label="Ticket medio" value="198€" delta="↑ 9%" deltaType="up" />
        <Stat label="Pendientes" value="18" delta="— sin cambio" deltaType="neutral" />
      </div>

      <div className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-[10px] overflow-hidden">
        <TableHeader />
        <TableRow ref_="#2847" cliente="Distribuciones Martín SL" comercial="C. López" ava="a" amount="1.240€" status="prep" />
        <TableRow ref_="#2851" cliente="Supermercado El Puerto" comercial="A. Ruiz" ava="b" amount="892€" status="pend" />
        <TableRow ref_="#2839" cliente="Hostelería Rivera CB" comercial="M. Torres" ava="c" amount="2.104€" status="enviado" />
        <TableRow ref_="#2835" cliente="Comercial Núñez SA" comercial="C. López" ava="a" amount="567€" status="ok" />
      </div>
    </div>
  );
}

function Chip({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <div
      className={`py-1.5 px-2.5 text-[11px] font-medium rounded-md border inline-flex items-center gap-1 font-mono ${
        primary
          ? 'bg-ink text-white border-ink'
          : 'border-[rgba(15,23,42,0.08)] bg-surface text-ink-2'
      }`}
    >
      {children}
    </div>
  );
}

function Stat({
  label,
  value,
  delta,
  deltaType,
}: {
  label: string;
  value: string;
  delta: string;
  deltaType: 'up' | 'neutral';
}) {
  return (
    <div className="bg-bg border border-[rgba(15,23,42,0.08)] rounded-[10px] py-3 px-3.5">
      <div className="text-[10px] text-ink-3 uppercase tracking-wider mb-1.5 font-semibold">
        {label}
      </div>
      <div className="font-display text-xl font-bold tracking-tight">{value}</div>
      <div
        className={`text-[11px] font-semibold mt-0.5 ${
          deltaType === 'up' ? 'text-emerald' : 'text-ink-3'
        }`}
      >
        {delta}
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="grid grid-cols-[80px_1.8fr_1fr_1fr_110px_90px] px-4 py-2.5 text-[10px] uppercase tracking-wider bg-bg-soft text-ink-3 font-semibold border-b border-[rgba(15,23,42,0.08)] max-md:grid-cols-[1fr_1fr_1fr]">
      <div className="max-md:hidden">Ref.</div>
      <div>Cliente</div>
      <div>Comercial</div>
      <div className="max-md:hidden">Importe</div>
      <div>Estado</div>
      <div className="max-md:hidden" />
    </div>
  );
}

function TableRow({
  ref_,
  cliente,
  comercial,
  ava,
  amount,
  status,
}: {
  ref_: string;
  cliente: string;
  comercial: string;
  ava: 'a' | 'b' | 'c';
  amount: string;
  status: 'pend' | 'prep' | 'enviado' | 'ok';
}) {
  const pills = {
    pend: { cls: 'bg-[#fef3c7] text-[#92400e]', label: 'Pendiente' },
    prep: { cls: 'bg-[#dbeafe] text-[#1e40af]', label: 'Preparación' },
    enviado: { cls: 'bg-[#e0e7ff] text-[#3730a3]', label: 'Enviado' },
    ok: { cls: 'bg-[#d1fae5] text-[#065f46]', label: 'Entregado' },
  };
  const avatars = {
    a: 'bg-gradient-to-br from-accent to-[#ff7a3d]',
    b: 'bg-gradient-to-br from-[#3b82f6] to-[#1e40af]',
    c: 'bg-gradient-to-br from-amber to-[#d97706]',
  };
  const pill = pills[status];
  const initials = comercial.split(' ').map(w => w[0]).join('').replace('.','');

  return (
    <div className="grid grid-cols-[80px_1.8fr_1fr_1fr_110px_90px] px-4 py-2.5 text-xs items-center border-b border-[rgba(15,23,42,0.08)] last:border-b-0 max-md:grid-cols-[1fr_1fr_1fr]">
      <div className="font-mono text-ink-3 text-[11px] max-md:hidden">{ref_}</div>
      <div>{cliente}</div>
      <div className="inline-flex items-center gap-1.5">
        <div className={`w-[22px] h-[22px] rounded-full ${avatars[ava]} text-white grid place-items-center text-[10px] font-semibold`}>
          {initials}
        </div>
        {comercial}
      </div>
      <div className="font-mono font-semibold max-md:hidden">{amount}</div>
      <div>
        <span className={`inline-flex items-center gap-1 py-0.5 px-2 rounded-full text-[10px] font-semibold ${pill.cls}`}>
          <span className="w-1 h-1 rounded-full bg-current" />
          {pill.label}
        </span>
      </div>
      <div className="text-ink-4 text-right max-md:hidden">•••</div>
    </div>
  );
}

'use client';

import { FeatureCard } from '@/components/ui/FeatureCard';
import { SectionHead } from './Features';

export function Trust() {
  return (
    <section className="pt-6 pb-12 relative" id="infraestructura">
      <div className="max-w-[1220px] mx-auto px-6">
        <SectionHead
          eyebrow="Infraestructura"
          title={
            <>
              Seguro. Siempre <span className="text-gradient">disponible</span>. En todas partes.
            </>
          }
          sub="Infraestructura profesional pensada para empresas que no pueden permitirse perder datos ni estar caídas. Cumplimos RGPD al completo."
        />

        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
          <FeatureCard
            number="01 / CLOUD"
            title="Accesible desde cualquier lugar"
            desc="Mercantia vive en la nube. Tu equipo accede desde la oficina, el coche, el móvil en casa de un cliente o desde casa. Un navegador y contraseña son todo lo que necesitan. Actualizaciones automáticas, sin mantenimiento."
            icon={
              <>
                <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
                <path d="M13 12l-3 4h4l-3 4" />
              </>
            }
          >
            <CloudAccessPreview />
          </FeatureCard>

          <FeatureCard
            number="02 / SEGURIDAD"
            title="Datos cifrados y aislados"
            desc="TLS 1.3 en tránsito, AES-256 en reposo. Cada cliente tiene su propia base de datos PostgreSQL independiente. Cero riesgo de que un error en otro tenant afecte a los tuyos."
            icon={
              <>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <rect x="9" y="11" width="6" height="5" rx="1" />
                <path d="M10 11V9a2 2 0 014 0v2" />
              </>
            }
          >
            <SecurityPreview />
          </FeatureCard>

          <FeatureCard
            number="03 / FIABILIDAD"
            title="99.9% uptime y backups diarios"
            desc="Monitorización 24/7, backups automáticos cada noche con retención de 30 días almacenados en localización independiente de la UE. Si algo falla, nos enteramos antes que tú."
            icon={
              <>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </>
            }
          >
            <UptimePreview />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

function CloudAccessPreview() {
  const devices = [
    {
      type: 'Escritorio',
      label: 'Oficina',
      icon: (
        <>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </>
      ),
    },
    {
      type: 'Laptop',
      label: 'En ruta',
      icon: (
        <>
          <rect x="3" y="5" width="18" height="11" rx="2" />
          <path d="M2 20h20" />
        </>
      ),
    },
    {
      type: 'Tablet',
      label: 'Cliente',
      icon: (
        <>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M12 18h0" />
        </>
      ),
    },
    {
      type: 'Móvil',
      label: 'Casa',
      icon: (
        <>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M12 18h0" />
        </>
      ),
    },
  ];

  return (
    <div className="mt-5 bg-gradient-to-b from-bg to-bg-soft border border-[rgba(15,23,42,0.08)] rounded-xl p-4 min-h-[140px]">
      <div className="flex items-center justify-center mb-3">
        <div className="relative">
          <div className="absolute inset-0 bg-accent/30 blur-xl rounded-full" />
          <div className="relative w-10 h-10 rounded-xl bg-gradient-accent grid place-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
            </svg>
          </div>
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald animate-pulse border-2 border-white" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {devices.map((d, i) => (
          <div
            key={i}
            className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-md p-1.5 text-center"
          >
            <div className="w-6 h-6 mx-auto mb-0.5 rounded bg-bg-soft grid place-items-center text-ink-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {d.icon}
              </svg>
            </div>
            <div className="text-[8px] font-semibold text-ink leading-tight">{d.type}</div>
            <div className="flex items-center justify-center gap-0.5 mt-0.5">
              <span className="w-1 h-1 rounded-full bg-emerald" />
              <span className="text-[7px] font-mono text-emerald font-semibold uppercase">
                Sync
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SecurityPreview() {
  const items = [
    { label: 'TLS 1.3', status: 'Activo' },
    { label: 'AES-256', status: 'Cifrado' },
    { label: 'RGPD', status: 'Conforme' },
    { label: 'DB aislada', status: 'Por tenant' },
  ];
  return (
    <div className="mt-5 bg-gradient-to-b from-bg to-bg-soft border border-[rgba(15,23,42,0.08)] rounded-xl p-3 min-h-[140px] flex flex-col justify-center gap-1.5">
      {items.map((it, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-surface border border-[rgba(15,23,42,0.08)] rounded-md px-2.5 py-1.5"
        >
          <span className="font-mono text-[11px] font-semibold text-ink">{it.label}</span>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            {it.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function UptimePreview() {
  const days = Array.from({ length: 30 }, (_, i) =>
    i === 14 || i === 22 ? 'amber' : 'ok'
  );
  return (
    <div className="mt-5 bg-gradient-to-b from-bg to-bg-soft border border-[rgba(15,23,42,0.08)] rounded-xl p-4 min-h-[140px] flex flex-col justify-center">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-3 font-semibold">
          Últimos 30 días
        </span>
        <span className="font-mono text-[11px] font-semibold text-emerald">99.97%</span>
      </div>
      <div className="flex gap-[2px]">
        {days.map((d, i) => (
          <div
            key={i}
            className={`flex-1 h-8 rounded-sm ${d === 'ok' ? 'bg-emerald' : 'bg-amber'}`}
            style={{ opacity: 0.85 }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-2 text-[9px] font-mono text-ink-4">
        <span>Hace 30 días</span>
        <span>Hoy</span>
      </div>
    </div>
  );
}

'use client';

export function HiddenCost() {
  return (
    <section className="py-24 bg-ink text-white relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,77,26,0.15), transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      <div className="max-w-[1100px] mx-auto px-6 relative z-[1]">
        <div className="text-center mb-14 max-w-[680px] mx-auto">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-5 py-1 px-3 bg-white/10 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            El coste oculto
          </div>

          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: 'clamp(34px, 4.8vw, 56px)',
              lineHeight: '1.02',
              letterSpacing: '-0.035em',
            }}
          >
            Cuánto te cuesta{' '}
            <span className="text-gradient">no tenerlo ordenado</span>.
          </h2>

          <p className="text-[18px] text-white/70 leading-relaxed">
            Cada pedido por WhatsApp, Excel o llamada genera tiempo de oficina. Multiplica por días, por meses, y verás el coste real.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 max-md:p-6 max-w-[760px] mx-auto">
          <div className="grid grid-cols-4 gap-4 mb-6 max-md:grid-cols-2">
            <CostBox label="Comerciales" value="10" />
            <CostBox label="Pedidos/día" value="8" />
            <CostBox label="Min/pedido" value="5" />
            <CostBox label="Días/mes" value="20" />
          </div>

          <div className="text-center py-6 border-y border-white/10 my-6">
            <div className="text-sm text-white/60 mb-2 font-mono uppercase tracking-widest">
              Tiempo perdido cada mes
            </div>
            <div
              className="font-display font-bold text-gradient"
              style={{
                fontSize: 'clamp(48px, 8vw, 84px)',
                lineHeight: '1',
                letterSpacing: '-0.04em',
              }}
            >
              133h
            </div>
            <div className="text-sm text-white/60 mt-2">
              = 8.000 minutos solo en revisar y reescribir pedidos
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div className="bg-white/5 rounded-xl p-5 text-center">
              <div className="text-[11px] uppercase tracking-widest text-white/50 font-mono mb-2">
                Equivale a
              </div>
              <div className="text-2xl font-bold mb-1">~17 días laborables</div>
              <div className="text-xs text-white/60">de una persona a tiempo completo</div>
            </div>
            <div className="bg-white/5 rounded-xl p-5 text-center">
              <div className="text-[11px] uppercase tracking-widest text-white/50 font-mono mb-2">
                Coste estimado
              </div>
              <div className="text-2xl font-bold mb-1">~2.000€/mes</div>
              <div className="text-xs text-white/60">a precio medio de oficina</div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-white/50 mt-8 max-w-[520px] mx-auto leading-relaxed">
          Ejemplo orientativo basado en 10 comerciales. La realidad varía según tamaño de equipo y complejidad de tu catálogo.
        </p>
      </div>
    </section>
  );
}

function CostBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
      <div className="text-[10px] uppercase tracking-widest text-white/50 font-mono mb-1.5">
        {label}
      </div>
      <div className="text-3xl font-display font-bold text-white">{value}</div>
    </div>
  );
}

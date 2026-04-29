'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DemoProvider, useDemo } from '@/lib/demo-context';
import { Button } from '@/components/ui/Button';
import { DEMO_URL, whatsappUrl } from '@/lib/contact';

export default function Page() {
  return (
    <DemoProvider>
      <div className="ambient" />
      <Navbar />
      <main>
        <Hero />
        <ProblemScene />
        <Symptoms />
        <HiddenCost />
        <BeforeAfter />
        <HowItWorks />
        <ProductScreens />
        <Objections />
        <FinalFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </DemoProvider>
  );
}

/* ==================== HERO ==================== */

function Hero() {
  return (
    <section className="pt-24 md:pt-40 pb-12 relative text-center overflow-hidden">
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,77,26,0.15), transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-[1100px] mx-auto px-6 relative z-[2]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] text-ink-3 hover:text-accent transition-colors mb-6 no-underline"
        >
          ← Volver a Mercantia
        </Link>

        <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-6 py-1.5 px-3.5 bg-accent-soft rounded-full font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Problema · Pedidos por WhatsApp
        </div>

        <h1
          className="font-display font-bold mb-6"
          style={{
            fontSize: 'clamp(36px, 5.5vw, 72px)',
            lineHeight: '1.02',
            letterSpacing: '-0.04em',
          }}
        >
          Deja de recibir pedidos comerciales por{' '}
          <span className="text-gradient">WhatsApp</span>.
        </h1>

        <p
          className="text-ink-2 max-w-[680px] mx-auto mb-10 leading-snug"
          style={{ fontSize: 'clamp(17px, 1.4vw, 20px)' }}
        >
          Mercantia convierte los pedidos de tu equipo comercial en un flujo ordenado: catálogo actualizado, stock visible, tarifas por cliente y pedidos estructurados que oficina ya no tiene que reescribir.
        </p>

        <div className="flex gap-2.5 justify-center flex-wrap mb-6">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 py-4 px-7 bg-ink hover:bg-accent text-white font-semibold text-base rounded-[12px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,77,26,0.35)] tracking-tight no-underline"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
            </span>
            Ver demo de pedidos
            <span className="text-lg leading-none transition-transform group-hover:translate-x-0.5">→</span>
          </a>

          <Button variant="outline" size="lg" asLink href="/contacto">
            Contactar
          </Button>
        </div>

        <div className="inline-flex gap-5 text-[13px] text-ink-3 flex-wrap justify-center">
          <Meta>Setup en 48-72h</Meta>
          <Meta>Sin permanencia</Meta>
          <Meta>Datos en la UE</Meta>
        </div>
      </div>
    </section>
  );
}

function Meta({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
      {children}
    </span>
  );
}

/* ==================== PROBLEM SCENE ==================== */

function ProblemScene() {
  return (
    <section className="py-20 bg-gradient-to-b from-bg to-bg-soft">
      <div className="max-w-[920px] mx-auto px-6">
        <div className="text-center mb-12 max-w-[680px] mx-auto">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-5 py-1 px-3 bg-accent-soft rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            La escena
          </div>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.05', letterSpacing: '-0.03em' }}
          >
            ¿Te suena <span className="text-gradient">esta mañana</span>?
          </h2>
        </div>

        <div className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl p-5 max-md:p-4 shadow-soft mb-8">
          <div className="flex items-center gap-3 pb-3 border-b border-[rgba(15,23,42,0.08)] mb-4">
            <div className="w-9 h-9 rounded-full bg-[#25D366] grid place-items-center text-white font-bold text-sm">JL</div>
            <div className="flex-1">
              <div className="font-semibold text-[14px] text-ink">Comerciales (12)</div>
              <div className="text-[11px] text-ink-3 font-mono">12 mensajes esta mañana</div>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
          </div>

          <div className="space-y-3">
            <ChatMessage author="Juan L." time="9:14" text='oye pásale 3 cajas a Distribuciones Martín, las de siempre' />
            <ChatMessage author="Carla R." time="9:22" text="cliente nuevo en Madrid quiere precio de la REF-A420 ¿le doy el normal o el de mayoristas?" />
            <ChatMessage author="Pedro G." time="9:35" image text="📷 [foto borrosa de un albarán manuscrito]" />
            <ChatMessage author="Marta T." time="9:41" text="Carla, ¿me confirmas si hay stock de las botas? Cliente espera respuesta" />
            <ChatMessage author="Tú (oficina)" time="9:43" text="¿qué referencia exacta?" isOffice />
            <ChatMessage author="Marta T." time="10:04" text="ya no contesta el cliente" />
          </div>
        </div>

        <p className="text-[16px] text-ink-2 leading-relaxed text-center max-w-[640px] mx-auto">
          Cada mañana es lo mismo. Un comercial manda <em>&ldquo;las de siempre&rdquo;</em>, otro envía una foto que no se lee, otro pregunta precio, otro espera respuesta de stock. Oficina pasa la mitad del día <strong className="text-ink">interpretando, llamando y reescribiendo</strong>. Y el cliente que no recibió respuesta a tiempo… ya no contesta.
        </p>
      </div>
    </section>
  );
}

function ChatMessage({
  author,
  time,
  text,
  image,
  isOffice,
}: {
  author: string;
  time: string;
  text: string;
  image?: boolean;
  isOffice?: boolean;
}) {
  return (
    <div className={`flex gap-2 ${isOffice ? 'flex-row-reverse' : ''}`}>
      <div
        className={`w-7 h-7 rounded-full grid place-items-center text-[11px] font-semibold flex-shrink-0 ${
          isOffice ? 'bg-accent-soft text-accent' : 'bg-bg-soft text-ink-2'
        }`}
      >
        {author
          .split(' ')
          .map((s) => s[0])
          .join('')
          .slice(0, 2)}
      </div>
      <div className={`max-w-[70%] ${isOffice ? 'text-right' : ''}`}>
        <div className="text-[11px] text-ink-3 mb-0.5 font-mono">
          {author} · {time}
        </div>
        <div
          className={`inline-block px-3.5 py-2 rounded-2xl text-[14px] leading-snug ${
            isOffice ? 'bg-accent text-white rounded-tr-sm' : 'bg-bg-soft text-ink rounded-tl-sm'
          } ${image ? 'italic text-ink-3' : ''}`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

/* ==================== SYMPTOMS ==================== */

function Symptoms() {
  const items = [
    'Tus comerciales mandan pedidos por WhatsApp, foto o llamada',
    'Oficina tiene que interpretar referencias incompletas',
    'Aparecen errores por usar tarifas o precios antiguos',
    'Comerciales prometen stock que luego no hay',
    'Oficina pasa pedidos al ERP a mano, dos veces',
    'No sabes qué comercial genera más volumen ni con qué clientes',
    'Hay 3 Excel circulando con versiones distintas del catálogo',
    'Los clientes preguntan por el estado del pedido y nadie lo tiene claro',
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-5 py-1 px-3 bg-accent-soft rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Síntomas
          </div>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.05', letterSpacing: '-0.03em' }}
          >
            Esta página es para ti si...
          </h2>
          <p className="text-[16px] text-ink-2 leading-relaxed">
            Marca mentalmente cuántas reconoces. Si pasas de 3, este es tu sitio.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex gap-3 items-start bg-surface border border-[rgba(15,23,42,0.08)] rounded-xl p-4 hover:border-accent/40 transition-colors"
            >
              <div className="w-5 h-5 rounded border-2 border-accent flex-shrink-0 mt-0.5" />
              <span className="text-[14px] text-ink-2 leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== HIDDEN COST ==================== */

function HiddenCost() {
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
            El coste real
          </div>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: '1.02', letterSpacing: '-0.035em' }}
          >
            Cuánto te cuesta cada mes{' '}
            <span className="text-gradient">no tenerlo ordenado</span>.
          </h2>
          <p className="text-[18px] text-white/70 leading-relaxed">
            Multiplica los minutos perdidos por pedido, por días, por meses. El número asusta.
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
              style={{ fontSize: 'clamp(48px, 8vw, 84px)', lineHeight: '1', letterSpacing: '-0.04em' }}
            >
              133h
            </div>
            <div className="text-sm text-white/60 mt-2">
              = 8.000 minutos solo en revisar y reescribir pedidos
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div className="bg-white/5 rounded-xl p-5 text-center">
              <div className="text-[11px] uppercase tracking-widest text-white/50 font-mono mb-2">Equivale a</div>
              <div className="text-2xl font-bold mb-1">~17 días laborables</div>
              <div className="text-xs text-white/60">de una persona a tiempo completo</div>
            </div>
            <div className="bg-white/5 rounded-xl p-5 text-center">
              <div className="text-[11px] uppercase tracking-widest text-white/50 font-mono mb-2">Coste estimado</div>
              <div className="text-2xl font-bold mb-1">~2.000€/mes</div>
              <div className="text-xs text-white/60">a precio medio de oficina</div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-white/50 mt-8 max-w-[520px] mx-auto leading-relaxed">
          Ejemplo orientativo basado en 10 comerciales. La realidad varía según tu volumen y complejidad.
        </p>
      </div>
    </section>
  );
}

function CostBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
      <div className="text-[10px] uppercase tracking-widest text-white/50 font-mono mb-1.5">{label}</div>
      <div className="text-3xl font-display font-bold text-white">{value}</div>
    </div>
  );
}

/* ==================== BEFORE / AFTER ==================== */

function BeforeAfter() {
  const rows = [
    { before: 'Pedido por WhatsApp', after: 'Pedido estructurado desde móvil' },
    { before: 'Referencias incompletas', after: 'Catálogo con búsqueda por código' },
    { before: '"¿qué precio le pongo?"', after: 'Tarifa por cliente automática' },
    { before: 'Stock preguntado a oficina', after: 'Stock visible para el comercial' },
    { before: 'Excel manual al ERP', after: 'Exportación o integración directa' },
    { before: 'Cliente sin seguimiento', after: 'Estado de pedido visible' },
    { before: 'Oficina saturada', after: 'Administración valida, no reescribe' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-bg to-warm">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-5 py-1 px-3 bg-accent-soft rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            El cambio
          </div>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.05', letterSpacing: '-0.03em' }}
          >
            Antes vs. <span className="text-gradient">después</span>.
          </h2>
        </div>

        <div className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2 bg-bg-soft border-b border-[rgba(15,23,42,0.08)]">
            <div className="px-6 py-4 font-mono text-[11px] uppercase tracking-widest text-ink-3 font-semibold">
              Hoy
            </div>
            <div className="px-6 py-4 font-mono text-[11px] uppercase tracking-widest text-accent font-semibold">
              Con Mercantia
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${i < rows.length - 1 ? 'border-b border-[rgba(15,23,42,0.05)]' : ''}`}
            >
              <div className="px-6 py-4 text-[14px] text-ink-3 line-through opacity-70 max-md:py-3 max-md:px-4 max-md:text-[13px]">
                {row.before}
              </div>
              <div className="px-6 py-4 text-[14px] text-ink font-medium bg-accent-soft/30 max-md:py-3 max-md:px-4 max-md:text-[13px]">
                ✓ {row.after}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== HOW IT WORKS ==================== */

function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Subes tu catálogo',
      desc: 'Desde Excel, CSV, ERP o integración directa. Configuramos referencias, precios, stock y tarifas en 24-48h.',
    },
    {
      n: '02',
      title: 'Tus comerciales hacen pedidos desde el móvil',
      desc: 'Ven productos disponibles, precios por cliente, stock en tiempo real y su cartera asignada. Sin formación técnica.',
    },
    {
      n: '03',
      title: 'Oficina recibe pedidos ordenados',
      desc: 'Listos para validar, exportar al ERP o procesar. Cada pedido tiene cliente, comercial, estado y trazabilidad completa.',
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-5 py-1 px-3 bg-accent-soft rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Cómo funciona
          </div>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.05', letterSpacing: '-0.03em' }}
          >
            En 3 pasos. <span className="text-gradient">Sin más.</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl p-7 transition-all hover:border-accent/30 hover:-translate-y-1"
            >
              <div className="font-mono text-[28px] font-bold text-accent mb-4 leading-none">
                {step.n}
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-[14px] text-ink-2 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== PRODUCT SCREENS ==================== */

function ProductScreens() {
  return (
    <section className="py-24 bg-gradient-to-b from-warm to-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-5 py-1 px-3 bg-accent-soft rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Producto
          </div>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.05', letterSpacing: '-0.03em' }}
          >
            Lo que ven el <span className="text-gradient">comercial</span> y la{' '}
            <span className="text-gradient">oficina</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          <div className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl p-7">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold mb-2">
              Vista comercial · Móvil
            </div>
            <h3 className="font-display text-xl font-bold tracking-tight mb-3 leading-tight">
              Pedido en 3 toques
            </h3>
            <p className="text-[14px] text-ink-2 leading-relaxed mb-5">
              Cliente, producto, cantidad. El precio sale solo según tarifa. El stock es real. Si no hay, marca como reserva. Listo.
            </p>

            <div className="bg-bg-soft rounded-xl p-4 max-w-[280px] mx-auto">
              <div className="bg-surface rounded-lg p-3 mb-2 border border-[rgba(15,23,42,0.05)]">
                <div className="text-[10px] text-ink-3 font-mono mb-1">CLIENTE</div>
                <div className="text-sm font-semibold text-ink">Distribuciones Martín SL</div>
                <div className="text-[11px] text-ink-3">Tarifa B · Cartera de C. López</div>
              </div>
              <div className="space-y-2">
                <ProductRow refCode="A420" name="Mochila trekking 45L" price="84,50€" qty="3" stock />
                <ProductRow refCode="C112" name="Cuchillo multiuso" price="32,00€" qty="2" stock />
                <ProductRow refCode="L308" name="Linterna frontal" price="47,90€" qty="1" reserved />
              </div>
              <div className="mt-3 pt-3 border-t border-[rgba(15,23,42,0.08)] flex justify-between text-sm">
                <span className="text-ink-2">Total</span>
                <span className="font-bold text-ink">365,40€</span>
              </div>
              <button
                type="button"
                className="w-full mt-3 py-2 bg-accent text-white text-sm font-semibold rounded-lg"
              >
                Confirmar pedido →
              </button>
            </div>
          </div>

          <div className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl p-7">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold mb-2">
              Vista oficina · Desktop
            </div>
            <h3 className="font-display text-xl font-bold tracking-tight mb-3 leading-tight">
              Pedidos estructurados
            </h3>
            <p className="text-[14px] text-ink-2 leading-relaxed mb-5">
              Cada pedido con cliente, comercial, importe y estado. Filtrable, exportable, pasable a tu ERP. Sin reinterpretar nada.
            </p>

            <div className="bg-bg-soft rounded-xl p-3">
              <div className="space-y-1.5">
                <OrderRow
                  refCode="#2847"
                  client="Distribuciones Martín SL"
                  comm="C. López"
                  amount="1.240€"
                  status="Preparación"
                  statusColor="bg-[#fef3c7] text-[#92400e]"
                />
                <OrderRow
                  refCode="#2851"
                  client="Supermercado El Puerto"
                  comm="A. Ruiz"
                  amount="892€"
                  status="Pendiente"
                  statusColor="bg-[#dbeafe] text-[#1e40af]"
                />
                <OrderRow
                  refCode="#2839"
                  client="Hostelería Rivera CB"
                  comm="M. Torres"
                  amount="2.104€"
                  status="Enviado"
                  statusColor="bg-[#e0e7ff] text-[#3730a3]"
                />
                <OrderRow
                  refCode="#2835"
                  client="Comercial Núñez SA"
                  comm="C. López"
                  amount="567€"
                  status="Entregado"
                  statusColor="bg-[#d1fae5] text-[#065f46]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductRow({
  refCode,
  name,
  price,
  qty,
  stock,
  reserved,
}: {
  refCode: string;
  name: string;
  price: string;
  qty: string;
  stock?: boolean;
  reserved?: boolean;
}) {
  return (
    <div className="bg-surface rounded-lg p-2.5 flex items-center gap-2.5 text-[12px] border border-[rgba(15,23,42,0.05)]">
      <div className="w-7 h-7 rounded bg-accent-soft text-accent grid place-items-center font-mono text-[10px] font-bold flex-shrink-0">
        {refCode}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-ink truncate">{name}</div>
        <div className="text-ink-3 font-mono text-[10px]">
          {price} ·{' '}
          {stock ? (
            <span className="text-emerald">stock</span>
          ) : reserved ? (
            <span className="text-[#b45309]">reserva</span>
          ) : null}
        </div>
      </div>
      <div className="bg-bg-soft rounded px-1.5 py-0.5 text-[11px] font-semibold">×{qty}</div>
    </div>
  );
}

function OrderRow({
  refCode,
  client,
  comm,
  amount,
  status,
  statusColor,
}: {
  refCode: string;
  client: string;
  comm: string;
  amount: string;
  status: string;
  statusColor: string;
}) {
  return (
    <div className="bg-surface rounded-lg p-3 flex items-center gap-3 text-[12px]">
      <div className="font-mono text-[11px] font-bold text-ink">{refCode}</div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-ink truncate">{client}</div>
        <div className="text-ink-3 text-[10px]">{comm}</div>
      </div>
      <div className="font-semibold text-ink whitespace-nowrap">{amount}</div>
      <div className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusColor} whitespace-nowrap`}>
        {status}
      </div>
    </div>
  );
}

/* ==================== OBJECTIONS ==================== */

function Objections() {
  const items = [
    {
      q: '¿Tengo que cambiar mi ERP?',
      a: 'No. Mercantia funciona como capa comercial conectada con tu ERP, ecommerce o Excel. Tu sistema actual sigue siendo el mismo. Solo añadimos la parte que falta: el flujo comercial ordenado.',
    },
    {
      q: '¿Y si mis comerciales no son técnicos?',
      a: 'La interfaz está pensada para usarse desde el primer día sin formación. Si saben usar WhatsApp, saben usar Mercantia. Incluimos formación al equipo en el setup, pero la curva de aprendizaje es de minutos, no de días.',
    },
    {
      q: '¿Puedo limitar qué ve cada comercial?',
      a: 'Sí. Permisos granulares por cliente, zona, marca o producto. Cada comercial ve solo su cartera y los productos que le corresponden. Oficina ve todo. Admin configura los permisos.',
    },
    {
      q: '¿Y si tengo tarifas distintas por cliente?',
      a: 'Es el caso normal en B2B. Mercantia maneja tarifa general, tarifas por grupo, tarifas por cliente, descuentos por familia y precios especiales. La lógica comercial que ya tienes se refleja, no se sustituye.',
    },
    {
      q: '¿Funciona offline cuando el comercial está fuera de cobertura?',
      a: 'La app web funciona en cualquier navegador móvil. Si pierde cobertura, los datos cargados siguen visibles. Al recuperar conexión, los pedidos se sincronizan automáticamente.',
    },
    {
      q: '¿Cuánto se tarda en arrancar?',
      a: 'Entre 48 y 72 horas desde que nos envías catálogo y clientes. Configuramos branding, importamos datos, formamos al equipo y arrancáis en producción la misma semana.',
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-[860px] mx-auto px-6">
        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-5 py-1 px-3 bg-accent-soft rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Las dudas reales
          </div>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.05', letterSpacing: '-0.03em' }}
          >
            Lo que <span className="text-gradient">siempre nos preguntan</span>.
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl p-6">
              <h3 className="font-display text-[17px] font-bold tracking-tight mb-2 text-ink leading-snug">
                {item.q}
              </h3>
              <p className="text-[14px] text-ink-2 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== FAQ FINAL ==================== */

function FinalFAQ() {
  const faqs = [
    {
      q: '¿Mis comerciales aceptarán dejar de usar WhatsApp?',
      a: 'Sí, porque les hace la vida más fácil, no más difícil. Pierden el caos, ganan velocidad: un pedido tarda 30 segundos en lugar de 5 minutos de mensajes. Y dejan de tener que recordar tarifas o stock — el sistema lo enseña automáticamente.',
    },
    {
      q: '¿Tengo que migrar mis datos a Mercantia?',
      a: 'No migramos datos: los importamos. Tu ERP o Excel sigue siendo la fuente de verdad. Mercantia es una capa que se sincroniza con tus datos. Si mañana dejas Mercantia, tus datos siguen donde estaban.',
    },
    {
      q: '¿Qué pasa con los pedidos antiguos que están en WhatsApp?',
      a: 'Los nuevos pedidos pasan por Mercantia desde el día 1. Los históricos se quedan donde están — no merece la pena migrarlos. En 1 mes de uso ya tienes histórico estructurado en Mercantia para análisis y consulta.',
    },
    {
      q: '¿Puedo seguir recibiendo algún pedido por WhatsApp si hace falta?',
      a: 'Por supuesto. Hay clientes muy clásicos que llamarán siempre. Lo importante es que el 80% del flujo sea estructurado. Para casos puntuales, oficina puede crear el pedido manualmente desde el panel y queda registrado igual.',
    },
    {
      q: '¿Funciona si tengo solo 2-3 comerciales?',
      a: 'Sí, el plan Starter está pensado para equipos de hasta 3 comerciales (49€/mes). De hecho, los equipos pequeños son los que más rápido notan la mejora porque cada minuto cuenta más.',
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gradient-to-b from-bg to-bg-soft" id="faq">
      <div className="max-w-[860px] mx-auto px-6">
        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-5 py-1 px-3 bg-accent-soft rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            FAQ
          </div>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.05', letterSpacing: '-0.03em' }}
          >
            Otras dudas <span className="text-gradient">comunes</span>.
          </h2>
        </div>

        <div className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl overflow-hidden">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
              isLast={i === faqs.length - 1}
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
      className={`cursor-pointer group ${isLast ? '' : 'border-b border-[rgba(15,23,42,0.08)]'}`}
    >
      <div className="flex justify-between items-center gap-5 py-5 px-7 text-[16px] font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
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
        <div className="px-7 pb-6 text-[14px] leading-relaxed text-ink-2">{answer}</div>
      </div>
    </div>
  );
}

/* ==================== FINAL CTA ==================== */

function FinalCTA() {
  const { openCallRequest } = useDemo();

  return (
    <section className="py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          className="relative rounded-3xl py-20 px-12 overflow-hidden text-center text-white"
          style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}
        >
          <div
            className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,77,26,0.18), transparent 55%)',
              filter: 'blur(60px)',
            }}
          />

          <div className="relative z-[1]">
            <h2
              className="font-display font-bold mb-5"
              style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', lineHeight: '1', letterSpacing: '-0.04em' }}
            >
              Quiero <span className="text-gradient">ordenar mis pedidos comerciales</span>.
            </h2>
            <p className="text-[18px] text-white/70 max-w-[560px] mx-auto mb-9 leading-snug">
              Pruébala primero. Si encaja, te montamos la tuya con tus comerciales y tu catálogo en 48-72h.
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-4 px-7 bg-accent hover:bg-white hover:text-ink text-white font-semibold text-base rounded-[12px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(255,255,255,0.15)] tracking-tight no-underline group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                Probar demo en vivo
                <span className="text-lg leading-none transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <Link
                href="/contacto"
                className="py-4 px-5 text-[15px] font-semibold rounded-[12px] inline-flex items-center gap-1.5 transition-all border border-white/20 text-white hover:border-white hover:bg-white/10 tracking-tight no-underline"
              >
                Hablar con Mercantia
              </Link>
            </div>

            <div className="flex items-center gap-5 text-sm text-white/50 flex-wrap justify-center mt-7">
              <button
                type="button"
                onClick={openCallRequest}
                className="hover:text-white transition-colors"
              >
                Solicitar llamada
              </button>
              <span className="text-white/20">·</span>
              <a
                href={whatsappUrl(
                  'Hola, vengo de la página de pedidos por WhatsApp y quiero más info sobre Mercantia'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors no-underline"
              >
                WhatsApp directo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

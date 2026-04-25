'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DemoProvider, useDemo } from '@/lib/demo-context';
import { Button } from '@/components/ui/Button';
import { CONTACT, DEMO_URL, whatsappUrl } from '@/lib/contact';

export default function ContactoPage() {
  return (
    <DemoProvider>
      <div className="ambient" />
      <Navbar />
      <main>
        <ContactHero />
        <ContactGrid />
        <PracticalInfo />
        <OtherWays />
      </main>
      <Footer />
    </DemoProvider>
  );
}

/* ==================== HERO ==================== */

function ContactHero() {
  return (
    <section className="pt-24 md:pt-28 pb-12 relative text-center overflow-hidden">
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,77,26,0.12), transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-[900px] mx-auto px-6 relative z-[2]">
        <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-6 py-1.5 px-3.5 bg-accent-soft rounded-full font-medium animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-ring" />
          Estamos a un mensaje
        </div>

        <h1
          className="font-display font-bold mb-6 animate-fade-up [animation-delay:0.1s] [animation-fill-mode:both]"
          style={{
            fontSize: 'clamp(40px, 6.5vw, 80px)',
            lineHeight: '0.98',
            letterSpacing: '-0.045em',
          }}
        >
          ¿<span className="text-gradient">Hablamos</span>?
        </h1>

        <p
          className="text-ink-2 max-w-[560px] mx-auto leading-snug animate-fade-up [animation-delay:0.2s] [animation-fill-mode:both]"
          style={{ fontSize: 'clamp(17px, 1.35vw, 19px)' }}
        >
          Cuéntanos cómo trabajáis y te decimos en 15 minutos si Mercantia encaja. Sin guion comercial, sin presión, sin compromiso.
        </p>
      </div>
    </section>
  );
}

/* ==================== CONTACT GRID ==================== */

function ContactGrid() {
  return (
    <section className="pb-20">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          <FounderBlock />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

/* ==================== FOUNDER BLOCK ==================== */

function FounderBlock() {
  const { openCallRequest } = useDemo();

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl p-7 relative overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-48 h-48 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,77,26,0.12), transparent 60%)',
            filter: 'blur(50px)',
          }}
        />

        <div className="relative z-10 flex items-start gap-5">
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-gradient-accent grid place-items-center font-display font-bold text-white text-3xl tracking-tight shadow-lg">
              AI
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald border-[3px] border-surface" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold mb-1">
              Soporte directo
            </div>
            <h2 className="font-display text-xl font-bold tracking-tight mb-2">
              Alberto Izquierdo
            </h2>
            <p className="text-[14px] text-ink-2 leading-relaxed">
              En Mercantia nos tomamos el tiempo de entender qué necesitas antes de proponer nada. Te respondemos en menos de 24h, en horario laboral.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
        <ContactMethod
          href={whatsappUrl()}
          external
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          }
          label="WhatsApp"
          value={CONTACT.whatsapp.display}
          accent
        />

        <ContactMethod
          href={`mailto:${CONTACT.email}`}
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          }
          label="Email"
          value={CONTACT.email}
        />

        <ContactMethod
          href={`tel:+${CONTACT.whatsapp.number}`}
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          }
          label="Llamar directo"
          value={CONTACT.whatsapp.display}
        />

        <ContactMethod
          onClick={openCallRequest}
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          }
          label="Agenda llamada"
          value="Te llamamos"
        />
      </div>
    </div>
  );
}

interface ContactMethodProps {
  href?: string;
  onClick?: () => void;
  external?: boolean;
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: boolean;
}

function ContactMethod({ href, onClick, external, icon, label, value, accent }: ContactMethodProps) {
  const className = `bg-surface border border-[rgba(15,23,42,0.08)] rounded-xl p-4 transition-all duration-200 hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-8px_rgba(255,77,26,0.2)] flex items-center gap-3 group ${
    accent ? 'hover:bg-accent-soft' : ''
  }`;

  const content = (
    <>
      <div
        className={`w-10 h-10 rounded-lg ${
          accent ? 'bg-[#25D366] text-white' : 'bg-accent-soft text-accent'
        } grid place-items-center flex-shrink-0 transition-transform group-hover:scale-105`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-widest text-ink-3 font-semibold leading-tight">
          {label}
        </div>
        <div className="text-sm font-semibold text-ink mt-0.5 truncate">{value}</div>
      </div>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="text-ink-3 group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={`${label} — ${value}`}
        className={`${className} w-full text-left`}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      aria-label={`${label} — ${value}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${className} no-underline`}
    >
      {content}
    </a>
  );
}

/* ==================== CONTACT FORM ==================== */

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  comerciales: string;
  sector: string;
  tipoConsulta: string;
  comoNosConocio: string;
  mensaje: string;
}

const INITIAL_DATA: FormData = {
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  comerciales: '',
  sector: '',
  tipoConsulta: '',
  comoNosConocio: '',
  mensaje: '',
};

function ContactForm() {
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const params = new URLSearchParams(window.location.search);

      const payload = {
        nombre: data.nombre,
        empresa: data.empresa,
        email: data.email,
        telefono: data.telefono,
        comerciales: data.comerciales,
        sector: data.sector,
        mensaje: [
          data.tipoConsulta && `Tipo: ${data.tipoConsulta}`,
          data.comoNosConocio && `Cómo nos conoció: ${data.comoNosConocio}`,
          data.mensaje && `Mensaje: ${data.mensaje}`,
        ]
          .filter(Boolean)
          .join('\n'),
        referrer: document.referrer || null,
        utmSource: params.get('utm_source'),
        utmMedium: params.get('utm_medium'),
        utmCampaign: params.get('utm_campaign'),
        landingPath: '/contacto',
      };

      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || 'Error al enviar el formulario');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  if (status === 'success') {
    return (
      <SuccessMessage
        onReset={() => {
          setData(INITIAL_DATA);
          setStatus('idle');
        }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl p-7">
      <div className="mb-6">
        <h2 className="font-display text-xl font-bold tracking-tight mb-1">
          Cuéntame sobre tu proyecto
        </h2>
        <p className="text-[13px] text-ink-3 leading-snug">
          Cuanto más detalle, mejor te puedo orientar. Solo el nombre, empresa y email son obligatorios.
        </p>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          <Field label="Nombre" name="nombre" required value={data.nombre} onChange={handleChange} placeholder="Tu nombre" />
          <Field label="Empresa" name="empresa" required value={data.empresa} onChange={handleChange} placeholder="Razón social" />
        </div>

        <Field label="Email" name="email" type="email" required value={data.email} onChange={handleChange} placeholder="tu@empresa.com" />

        <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          <Field label="Teléfono" name="telefono" type="tel" value={data.telefono} onChange={handleChange} placeholder="+34" />
          <SelectField
            label="Comerciales"
            name="comerciales"
            value={data.comerciales}
            onChange={handleChange}
            options={[
              { value: '', label: 'Selecciona...' },
              { value: '1-3', label: '1–3' },
              { value: '4-10', label: '4–10' },
              { value: '11-25', label: '11–25' },
              { value: '25+', label: 'Más de 25' },
            ]}
          />
        </div>

        <Field label="Sector" name="sector" value={data.sector} onChange={handleChange} placeholder="Ej. ferretería, óptica, outdoor..." />

        <SelectField
          label="¿Qué te gustaría hacer?"
          name="tipoConsulta"
          value={data.tipoConsulta}
          onChange={handleChange}
          options={[
            { value: '', label: 'Selecciona una opción...' },
            { value: 'demo', label: 'Ver una demo personalizada' },
            { value: 'precios', label: 'Hablar de precios y planes' },
            { value: 'integracion', label: 'Consultar integración con mi ERP' },
            { value: 'partner', label: 'Ser partner / revendedor' },
            { value: 'soporte', label: 'Soporte técnico (ya soy cliente)' },
            { value: 'otro', label: 'Otra cosa' },
          ]}
        />

        <SelectField
          label="¿Cómo nos has conocido? (opcional)"
          name="comoNosConocio"
          value={data.comoNosConocio}
          onChange={handleChange}
          options={[
            { value: '', label: 'No es necesario...' },
            { value: 'google', label: 'Google' },
            { value: 'recomendacion', label: 'Recomendación de alguien' },
            { value: 'linkedin', label: 'LinkedIn' },
            { value: 'redes', label: 'Otras redes sociales' },
            { value: 'evento', label: 'Evento o feria' },
            { value: 'otro', label: 'Otro' },
          ]}
        />

        <div>
          <label className="block text-xs font-semibold text-ink-2 mb-1.5 font-mono uppercase tracking-wider">
            Mensaje (opcional)
          </label>
          <textarea
            name="mensaje"
            value={data.mensaje}
            onChange={handleChange}
            rows={4}
            placeholder="Cuéntanos brevemente tu situación: qué usas ahora, qué te gustaría mejorar, qué te ha llamado la atención..."
            className="w-full px-3.5 py-2.5 bg-bg-soft border border-transparent focus:border-accent focus:bg-surface focus:outline-none rounded-lg text-sm resize-none transition-all"
          />
        </div>

        {status === 'error' && (
          <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
            {error || 'Algo falló. Inténtalo de nuevo o escríbeme por email.'}
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center"
          disabled={status === 'loading'}
          withArrow={status !== 'loading'}
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
        </Button>

        <p className="text-xs text-ink-3 text-center pt-1 leading-relaxed">
          Al enviar aceptas que te contactemos. Tus datos no se comparten ni se usan para spam. Más info en la{' '}
          <a href="/legal/privacidad" className="text-accent hover:underline">
            Política de Privacidad
          </a>
          .
        </p>
      </div>
    </form>
  );
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Field({ label, ...props }: FieldProps) {
  return (
    <div>
      <label className="block text-xs font-semibold text-ink-2 mb-1.5 font-mono uppercase tracking-wider">
        {label} {props.required && <span className="text-accent">*</span>}
      </label>
      <input
        {...props}
        className="w-full px-3.5 py-2.5 bg-bg-soft border border-transparent focus:border-accent focus:bg-surface focus:outline-none rounded-lg text-sm transition-all"
      />
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
}

function SelectField({ label, name, value, onChange, options }: SelectFieldProps) {
  return (
    <div>
      <label className="block text-xs font-semibold text-ink-2 mb-1.5 font-mono uppercase tracking-wider">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3.5 py-2.5 bg-bg-soft border border-transparent focus:border-accent focus:bg-surface focus:outline-none rounded-lg text-sm transition-all appearance-none cursor-pointer"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23737373' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 12px center',
          paddingRight: '36px',
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl p-10 text-center">
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-emerald/10 grid place-items-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <h2 className="font-display text-2xl font-bold tracking-tight mb-3">
        ¡Mensaje recibido!
      </h2>
      <p className="text-ink-2 mb-2 max-w-sm mx-auto leading-relaxed">
        Te responderé personalmente en menos de 24h. Suelo contestar antes, pero no te lo quiero prometer.
      </p>
      <p className="text-sm text-ink-3 mb-6 max-w-sm mx-auto">
        Revisa tu bandeja de entrada — te he enviado un email de confirmación.
      </p>
      <Button variant="outline" onClick={onReset}>
        Enviar otro mensaje
      </Button>
    </div>
  );
}

/* ==================== PRACTICAL INFO ==================== */

function PracticalInfo() {
  return (
    <section className="py-4 relative">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          <InfoCard
            icon={
              <>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </>
            }
            label="Tiempo de respuesta"
            value="En menos de 24h"
            sublabel="A cualquier mensaje, sea por el canal que sea"
          />
          <InfoCard
            icon={
              <>
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </>
            }
            label="Horario de atención"
            value="L-V · 9h a 19h"
            sublabel="Urgencias 24/7 por WhatsApp para clientes"
          />
          <InfoCard
            icon={
              <>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </>
            }
            label="Dónde estamos"
            value="España"
            sublabel="Servidores y datos en territorio UE"
          />
        </div>
      </div>
    </section>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sublabel: string;
}

function InfoCard({ icon, label, value, sublabel }: InfoCardProps) {
  return (
    <div className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl p-6 transition-all hover:border-[rgba(15,23,42,0.14)] hover:-translate-y-1">
      <div className="w-11 h-11 rounded-[10px] bg-accent-soft text-accent grid place-items-center mb-4">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-ink-3 font-semibold mb-1.5">
        {label}
      </div>
      <div className="font-display text-xl font-bold tracking-tight mb-1">{value}</div>
      <div className="text-[13px] text-ink-3 leading-snug">{sublabel}</div>
    </div>
  );
}

/* ==================== OTHER WAYS ==================== */

function OtherWays() {
  return (
    <section className="py-20">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-accent uppercase tracking-widest mb-5 py-1 px-3 bg-accent-soft rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Otras formas de empezar
          </div>
          <h2
            className="font-display font-bold mb-3"
            style={{
              fontSize: 'clamp(28px, 3.6vw, 42px)',
              lineHeight: '1.05',
              letterSpacing: '-0.03em',
            }}
          >
            Si aún <span className="text-gradient">no quieres hablar</span>
          </h2>
          <p className="text-[16px] text-ink-2 leading-snug">
            Hay otras maneras de seguir explorando Mercantia sin tener que escribirnos. Sin presión.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 max-w-[800px] mx-auto">
          <OtherWayCard
            href={DEMO_URL}
            external
            title="Probar la demo ahora"
            description="Versión completa con datos ficticios. Sin registro, sin instalación. La forma más rápida de ver Mercantia funcionando."
            cta="Abrir demo"
            highlight
            live
          />
          <OtherWayCard
            href="/precios"
            title="Ver los precios"
            description="Todos los planes y qué incluye cada uno."
            cta="Ver precios"
          />
        </div>
      </div>
    </section>
  );
}

interface OtherWayCardProps {
  href?: string;
  onClick?: () => void;
  external?: boolean;
  title: string;
  description: string;
  cta: string;
  highlight?: boolean;
  live?: boolean;
}

function OtherWayCard({
  href,
  onClick,
  external,
  title,
  description,
  cta,
  highlight,
  live,
}: OtherWayCardProps) {
  const className = `block bg-surface border ${
    highlight
      ? 'border-accent shadow-[0_20px_40px_-20px_rgba(255,77,26,0.2)]'
      : 'border-[rgba(15,23,42,0.08)] hover:border-[rgba(15,23,42,0.16)]'
  } rounded-2xl p-7 transition-all hover:-translate-y-1 group cursor-pointer text-left w-full`;

  const content = (
    <>
      {live && (
        <div className="inline-flex items-center gap-1.5 mb-2 text-[10px] font-mono uppercase tracking-widest text-emerald font-semibold">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald" />
          </span>
          Disponible ahora
        </div>
      )}
      <h3 className="font-display text-xl font-bold tracking-tight mb-2 leading-tight">{title}</h3>
      <p className="text-[14px] text-ink-2 leading-relaxed mb-5">{description}</p>
      <span
        className={`inline-flex items-center gap-1.5 font-semibold text-sm ${
          highlight ? 'text-accent' : 'text-ink'
        }`}
      >
        {cta}
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </span>
    </>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${className} no-underline`}
    >
      {content}
    </a>
  );
}

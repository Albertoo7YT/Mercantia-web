'use client';

import { useEffect, useState } from 'react';
import { Button } from './Button';

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  comerciales: string;
  sector: string;
  mensaje: string;
}

const initialData: FormData = {
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  comerciales: '',
  sector: '',
  mensaje: '',
};

export function DemoModal({ open, onClose }: DemoModalProps) {
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset after close animation
      setTimeout(() => {
        setData(initialData);
        setStatus('idle');
        setErrorMsg('');
      }, 300);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const params = new URLSearchParams(window.location.search);
      const body = {
        ...data,
        referrer: document.referrer || null,
        utmSource: params.get('utm_source'),
        utmMedium: params.get('utm_medium'),
        utmCampaign: params.get('utm_campaign'),
        landingPath: window.location.pathname,
      };

      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || 'Error al enviar el formulario');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-[fadeUp_0.3s_ease]"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-surface rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-8 pb-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-bg-soft hover:bg-ink hover:text-white transition-colors grid place-items-center text-ink-2"
            aria-label="Cerrar"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {status !== 'success' && (
            <>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-4 px-3 py-1 bg-accent-soft rounded-full font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Demo gratuita · 15 min
              </div>
              <h2
                className="font-display text-3xl font-bold leading-[1] mb-2"
                style={{ letterSpacing: '-0.04em' }}
              >
                Cuéntanos sobre tu <span className="text-gradient">negocio</span>
              </h2>
              <p className="text-ink-2 text-[15px] mb-6">
                Te enseñamos cómo quedaría Mercantia con tus productos reales. Sin compromiso.
              </p>
            </>
          )}
        </div>

        {/* Form or Success */}
        {status === 'success' ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald/10 grid place-items-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h2
              className="font-display text-2xl font-bold mb-3"
              style={{ letterSpacing: '-0.04em' }}
            >
              ¡Solicitud recibida!
            </h2>
            <p className="text-ink-2 mb-6 max-w-sm mx-auto">
              Hemos recibido tu solicitud. Nos pondremos en contacto en las próximas 24 horas para agendar la demo.
            </p>
            <Button variant="outline" onClick={onClose}>
              Cerrar
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 pt-2 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Field
                label="Nombre"
                name="nombre"
                required
                value={data.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
              />
              <Field
                label="Empresa"
                name="empresa"
                required
                value={data.empresa}
                onChange={handleChange}
                placeholder="Nombre comercial"
              />
            </div>

            <Field
              label="Email"
              name="email"
              type="email"
              required
              value={data.email}
              onChange={handleChange}
              placeholder="tu@empresa.com"
            />

            <div className="grid grid-cols-2 gap-3">
              <Field
                label="Teléfono"
                name="telefono"
                type="tel"
                value={data.telefono}
                onChange={handleChange}
                placeholder="+34"
              />
              <div>
                <label className="block text-xs font-semibold text-ink-2 mb-1.5 font-mono uppercase tracking-wider">
                  Comerciales
                </label>
                <select
                  name="comerciales"
                  value={data.comerciales}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-bg-soft border border-transparent focus:border-accent focus:bg-surface focus:outline-none rounded-lg text-sm transition-all"
                >
                  <option value="">Selecciona...</option>
                  <option value="1-5">1–5</option>
                  <option value="6-15">6–15</option>
                  <option value="16-30">16–30</option>
                  <option value="30+">Más de 30</option>
                </select>
              </div>
            </div>

            <Field
              label="Sector"
              name="sector"
              value={data.sector}
              onChange={handleChange}
              placeholder="Ej. ferretería, outdoor, óptica..."
            />

            <div>
              <label className="block text-xs font-semibold text-ink-2 mb-1.5 font-mono uppercase tracking-wider">
                Cuéntanos brevemente (opcional)
              </label>
              <textarea
                name="mensaje"
                value={data.mensaje}
                onChange={handleChange}
                rows={3}
                placeholder="¿Qué usas ahora? ¿Qué te gustaría mejorar?"
                className="w-full px-3.5 py-2.5 bg-bg-soft border border-transparent focus:border-accent focus:bg-surface focus:outline-none rounded-lg text-sm resize-none transition-all"
              />
            </div>

            {status === 'error' && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                {errorMsg || 'Algo falló. Inténtalo de nuevo o escríbenos por email.'}
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="flex-1 justify-center"
                disabled={status === 'loading'}
                withArrow={status !== 'loading'}
              >
                {status === 'loading' ? 'Enviando...' : 'Reservar demo'}
              </Button>
              <Button type="button" variant="outline" size="lg" onClick={onClose}>
                Cancelar
              </Button>
            </div>

            <p className="text-xs text-ink-3 text-center pt-2">
              Al enviar aceptas que te contactemos. No compartimos tus datos.
            </p>
          </form>
        )}
      </div>
    </div>
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

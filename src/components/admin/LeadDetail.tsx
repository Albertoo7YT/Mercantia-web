'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import type { DemoLead, CallLead, LeadActivity, Client } from '@prisma/client';

type LeadWithActivities = (DemoLead | CallLead) & {
  activities: LeadActivity[];
  client: Client | null;
};

interface LeadDetailProps {
  lead: LeadWithActivities;
  type: 'demo' | 'call';
}

const STATUS_OPTIONS = [
  'NUEVA',
  'CONTACTADA',
  'DEMO_AGENDADA',
  'CONVERTIDA',
  'PERDIDA',
] as const;

const STATUS_LABELS: Record<string, string> = {
  NUEVA: 'Nueva',
  CONTACTADA: 'Contactada',
  DEMO_AGENDADA: 'Demo agendada',
  CONVERTIDA: 'Convertida',
  PERDIDA: 'Perdida',
};

const ACTIVITY_ICONS: Record<string, string> = {
  STATUS_CHANGE: '↺',
  NOTE_ADDED: '✎',
  EMAIL_SENT: '✉',
  CALL_MADE: '☎',
  CONVERTED: '★',
};

function isDemoLead(l: DemoLead | CallLead): l is DemoLead {
  return 'empresa' in l;
}

export function LeadDetail({ lead, type }: LeadDetailProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [note, setNote] = useState('');
  const [saveNote, setSaveNote] = useState(false);
  const apiPath = type === 'demo' ? '/api/admin/demos' : '/api/admin/llamadas';

  async function changeStatus(newStatus: string) {
    const res = await fetch(`${apiPath}/${lead.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
    if (res.ok) {
      startTransition(() => router.refresh());
    }
  }

  async function addNote(e: React.FormEvent) {
    e.preventDefault();
    if (!note.trim()) return;
    setSaveNote(true);

    const res = await fetch(`${apiPath}/${lead.id}/activity`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'NOTE_ADDED', description: note }),
    });

    if (res.ok) {
      setNote('');
      startTransition(() => router.refresh());
    }
    setSaveNote(false);
  }

  async function convertToClient() {
    if (!confirm('¿Convertir este lead en cliente activo?')) return;
    const res = await fetch(`${apiPath}/${lead.id}/convert`, { method: 'POST' });
    if (res.ok) {
      const { clientId } = await res.json();
      router.push(`/admin/clientes/${clientId}`);
    }
  }

  const isDemo = type === 'demo';
  const phone = isDemo
    ? (lead as DemoLead).telefono
    : (lead as CallLead).telefono;

  return (
    <div>
      <div className="admin-page-header">
        <Link
          href={type === 'demo' ? '/admin/demos' : '/admin/llamadas'}
          className="admin-back-link"
        >
          ← Volver
        </Link>
        <h1>
          {isDemo && isDemoLead(lead)
            ? lead.empresa
            : `Llamada de ${lead.nombre}`}
        </h1>
        <p className="admin-page-subtitle">
          Recibida el {format(lead.createdAt, "d 'de' MMMM 'a las' HH:mm", { locale: es })}
        </p>
      </div>

      <div className="admin-detail-grid">
        <div className="admin-detail-main">
          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Datos de contacto</h2>
            </div>
            <div className="admin-detail-fields">
              {isDemo && isDemoLead(lead) ? (
                <>
                  <Field label="Nombre" value={lead.nombre} />
                  <Field label="Empresa" value={lead.empresa} />
                  <Field label="Email" value={lead.email} href={`mailto:${lead.email}`} />
                  <Field
                    label="Teléfono"
                    value={lead.telefono || '—'}
                    href={lead.telefono ? `tel:${lead.telefono}` : undefined}
                  />
                  <Field label="Comerciales" value={lead.comerciales || '—'} />
                  <Field label="Sector" value={lead.sector || '—'} />
                  {lead.mensaje && <Field label="Mensaje" value={lead.mensaje} fullWidth />}
                </>
              ) : !isDemoLead(lead) ? (
                <>
                  <Field label="Nombre" value={lead.nombre} />
                  <Field
                    label="Teléfono"
                    value={lead.telefono}
                    href={`tel:${lead.telefono}`}
                  />
                  <Field label="Mejor momento" value={lead.mejorMomento || '—'} />
                  {lead.mensaje && <Field label="Mensaje" value={lead.mensaje} fullWidth />}
                </>
              ) : null}
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Origen</h2>
            </div>
            <div className="admin-detail-fields">
              <Field label="Referrer" value={lead.referrer || 'Directo'} />
              <Field label="Landing path" value={lead.landingPath || '/'} />
              <Field label="UTM Source" value={lead.utmSource || '—'} />
              <Field label="UTM Medium" value={lead.utmMedium || '—'} />
              <Field label="UTM Campaign" value={lead.utmCampaign || '—'} />
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Añadir nota</h2>
            </div>
            <form onSubmit={addNote} className="admin-note-form">
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Ej: Llamada realizada. Están interesados, quedamos el jueves para demo..."
                rows={3}
              />
              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={!note.trim() || saveNote}
              >
                {saveNote ? 'Guardando...' : 'Añadir nota'}
              </button>
            </form>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Historial</h2>
            </div>
            <div className="admin-timeline">
              {lead.activities.length === 0 ? (
                <div className="admin-empty-state-small">Sin actividad registrada</div>
              ) : (
                lead.activities.map((activity) => (
                  <div key={activity.id} className="admin-timeline-item">
                    <div className="admin-timeline-icon">
                      {ACTIVITY_ICONS[activity.type] || '•'}
                    </div>
                    <div className="admin-timeline-content">
                      <div className="admin-timeline-description">{activity.description}</div>
                      <div className="admin-timeline-time">
                        {format(activity.createdAt, 'd MMM yyyy · HH:mm', { locale: es })}
                        {activity.createdBy && ` · ${activity.createdBy}`}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <aside className="admin-detail-aside">
          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Estado</h2>
            </div>
            <div className="admin-status-selector">
              {STATUS_OPTIONS.map((status) => (
                <button
                  key={status}
                  onClick={() => changeStatus(status)}
                  disabled={isPending || lead.status === status}
                  className={`admin-status-btn ${lead.status === status ? 'active' : ''}`}
                >
                  <span className={`admin-badge admin-badge-${status.toLowerCase()}`}>
                    {STATUS_LABELS[status]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Acciones</h2>
            </div>
            <div className="admin-actions-list">
              {lead.client ? (
                <Link
                  href={`/admin/clientes/${lead.client.id}`}
                  className="admin-btn admin-btn-primary admin-btn-block"
                >
                  Ver ficha de cliente →
                </Link>
              ) : (
                <button
                  onClick={convertToClient}
                  className="admin-btn admin-btn-primary admin-btn-block"
                >
                  Convertir en cliente
                </button>
              )}

              {isDemo && isDemoLead(lead) && lead.email && (
                <a
                  href={`mailto:${lead.email}`}
                  className="admin-btn admin-btn-ghost admin-btn-block"
                >
                  Enviar email
                </a>
              )}
              {phone && (
                <>
                  <a href={`tel:${phone}`} className="admin-btn admin-btn-ghost admin-btn-block">
                    Llamar
                  </a>
                  <a
                    href={`https://wa.me/${phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="admin-btn admin-btn-ghost admin-btn-block"
                  >
                    WhatsApp
                  </a>
                </>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  href,
  fullWidth,
}: {
  label: string;
  value: string;
  href?: string;
  fullWidth?: boolean;
}) {
  return (
    <div className={`admin-detail-field ${fullWidth ? 'admin-detail-field-full' : ''}`}>
      <div className="admin-detail-label">{label}</div>
      <div className="admin-detail-value">
        {href ? (
          <a href={href} className="admin-link">
            {value}
          </a>
        ) : (
          value
        )}
      </div>
    </div>
  );
}

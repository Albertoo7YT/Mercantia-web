'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { Client, ClientStatus, PaymentStatus } from '@prisma/client';

interface ClientFormProps {
  mode: 'create' | 'edit';
  client?: Client;
}

type FormData = Partial<Client>;

const INITIAL: FormData = {
  empresa: '',
  contactoNombre: '',
  contactoEmail: '',
  contactoTelefono: '',
  cif: '',
  direccion: '',
  sector: '',
  plan: 'STARTER',
  comerciales: null,
  erp: '',
  mrr: null,
  status: 'EN_PRUEBA',
  paymentStatus: 'SIN_FACTURA',
  notas: '',
};

export function ClientForm({ mode, client }: ClientFormProps) {
  const router = useRouter();
  const [data, setData] = useState<FormData>(client || INITIAL);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const url =
        mode === 'create' ? '/api/admin/clientes' : `/api/admin/clientes/${client!.id}`;
      const method = mode === 'create' ? 'POST' : 'PATCH';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Error al guardar');

      const result = await res.json();
      router.push(mode === 'create' ? `/admin/clientes/${result.id}` : '/admin/clientes');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error');
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!confirm('¿Eliminar este cliente? Esta acción no se puede deshacer.')) return;
    await fetch(`/api/admin/clientes/${client!.id}`, { method: 'DELETE' });
    router.push('/admin/clientes');
    router.refresh();
  }

  return (
    <div>
      <div className="admin-page-header">
        <Link href="/admin/clientes" className="admin-back-link">
          ← Volver
        </Link>
        <h1>{mode === 'create' ? 'Nuevo cliente' : data.empresa || 'Cliente'}</h1>
      </div>

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="admin-form-grid">
          <Section title="Datos de la empresa">
            <FormField
              label="Empresa"
              required
              value={data.empresa || ''}
              onChange={(v) => setData({ ...data, empresa: v })}
            />
            <FormField
              label="CIF"
              value={data.cif || ''}
              onChange={(v) => setData({ ...data, cif: v })}
            />
            <FormField
              label="Sector"
              value={data.sector || ''}
              onChange={(v) => setData({ ...data, sector: v })}
            />
            <FormField
              label="ERP que usan"
              value={data.erp || ''}
              onChange={(v) => setData({ ...data, erp: v })}
            />
            <FormField
              label="Dirección"
              value={data.direccion || ''}
              onChange={(v) => setData({ ...data, direccion: v })}
              fullWidth
            />
          </Section>

          <Section title="Contacto principal">
            <FormField
              label="Nombre"
              required
              value={data.contactoNombre || ''}
              onChange={(v) => setData({ ...data, contactoNombre: v })}
            />
            <FormField
              label="Email"
              required
              type="email"
              value={data.contactoEmail || ''}
              onChange={(v) => setData({ ...data, contactoEmail: v })}
            />
            <FormField
              label="Teléfono"
              type="tel"
              value={data.contactoTelefono || ''}
              onChange={(v) => setData({ ...data, contactoTelefono: v })}
            />
            <FormField
              label="Nº comerciales"
              type="number"
              value={data.comerciales?.toString() || ''}
              onChange={(v) =>
                setData({ ...data, comerciales: v ? parseInt(v) : null })
              }
            />
          </Section>

          <Section title="Comercial">
            <div className="admin-form-field">
              <label>Plan</label>
              <select
                value={data.plan || 'STARTER'}
                onChange={(e) => setData({ ...data, plan: e.target.value })}
              >
                <option value="STARTER">Starter</option>
                <option value="PRO">Pro</option>
                <option value="ENTERPRISE">Enterprise</option>
                <option value="CUSTOM">Custom</option>
              </select>
            </div>
            <FormField
              label="MRR (€)"
              type="number"
              step="0.01"
              value={data.mrr?.toString() || ''}
              onChange={(v) => setData({ ...data, mrr: v ? parseFloat(v) : null })}
            />
            <div className="admin-form-field">
              <label>Estado</label>
              <select
                value={data.status || 'EN_PRUEBA'}
                onChange={(e) =>
                  setData({ ...data, status: e.target.value as ClientStatus })
                }
              >
                <option value="EN_PRUEBA">En prueba</option>
                <option value="ACTIVO">Activo</option>
                <option value="PAUSADO">Pausado</option>
                <option value="BAJA">Baja</option>
              </select>
            </div>
            <div className="admin-form-field">
              <label>Estado de pago</label>
              <select
                value={data.paymentStatus || 'SIN_FACTURA'}
                onChange={(e) =>
                  setData({
                    ...data,
                    paymentStatus: e.target.value as PaymentStatus,
                  })
                }
              >
                <option value="SIN_FACTURA">Sin factura</option>
                <option value="AL_DIA">Al día</option>
                <option value="PENDIENTE">Pendiente</option>
                <option value="ATRASADO">Atrasado</option>
              </select>
            </div>
          </Section>

          <Section title="Notas internas">
            <div className="admin-form-field admin-form-field-full">
              <textarea
                value={data.notas || ''}
                onChange={(e) => setData({ ...data, notas: e.target.value })}
                rows={5}
                placeholder="Observaciones, acuerdos especiales, historial..."
              />
            </div>
          </Section>
        </div>

        {error && <div className="admin-error">{error}</div>}

        <div className="admin-form-actions">
          <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
            {saving ? 'Guardando...' : mode === 'create' ? 'Crear cliente' : 'Guardar cambios'}
          </button>
          {mode === 'edit' && (
            <button type="button" onClick={handleDelete} className="admin-btn admin-btn-danger">
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="admin-card">
      <div className="admin-card-header">
        <h2>{title}</h2>
      </div>
      <div className="admin-form-section">{children}</div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  fullWidth?: boolean;
  step?: string;
}

function FormField({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  fullWidth = false,
  step,
}: FormFieldProps) {
  return (
    <div className={`admin-form-field ${fullWidth ? 'admin-form-field-full' : ''}`}>
      <label>
        {label}
        {required && ' *'}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        step={step}
      />
    </div>
  );
}

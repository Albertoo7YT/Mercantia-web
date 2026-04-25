'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SettingsFormProps {
  initial: Record<string, string>;
}

const FIELDS: Array<{ key: string; label: string; hint?: string; type?: string }> = [
  { key: 'company_name', label: 'Razón social' },
  { key: 'company_cif', label: 'CIF' },
  { key: 'company_address', label: 'Domicilio' },
  {
    key: 'email_from',
    label: 'Email remitente',
    hint: 'Se usa como "From" en los emails transaccionales',
  },
  {
    key: 'notification_email',
    label: 'Email de notificación',
    hint: 'Donde llegan los avisos de nuevo lead',
    type: 'email',
  },
];

export function SettingsForm({ initial }: SettingsFormProps) {
  const router = useRouter();
  const [values, setValues] = useState<Record<string, string>>(initial);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const res = await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ values }),
    });

    if (res.ok) {
      setSavedAt(new Date().toLocaleTimeString('es-ES'));
      router.refresh();
    }
    setSaving(false);
  }

  return (
    <div className="admin-card">
      <div className="admin-card-header">
        <h2>Ajustes generales</h2>
      </div>
      <form onSubmit={handleSubmit} className="admin-form-section">
        {FIELDS.map((f) => (
          <div key={f.key} className="admin-form-field admin-form-field-full">
            <label>{f.label}</label>
            <input
              type={f.type || 'text'}
              value={values[f.key] || ''}
              onChange={(e) => setValues({ ...values, [f.key]: e.target.value })}
            />
            {f.hint && <div className="admin-form-hint">{f.hint}</div>}
          </div>
        ))}

        <div className="admin-form-actions" style={{ justifyContent: 'flex-start' }}>
          <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
            {saving ? 'Guardando...' : 'Guardar ajustes'}
          </button>
          {savedAt && <span className="admin-form-hint">Guardado a las {savedAt}</span>}
        </div>
      </form>
    </div>
  );
}

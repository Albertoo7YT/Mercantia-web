'use client';

import { useState } from 'react';

export function PasswordChangeForm() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage('');

    if (newPassword.length < 8) {
      setStatus('error');
      setMessage('La nueva contraseña debe tener al menos 8 caracteres.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setStatus('error');
      setMessage('Las contraseñas nuevas no coinciden.');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/admin/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || 'Error al cambiar la contraseña');
      }

      setStatus('success');
      setMessage('Contraseña actualizada correctamente.');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Error desconocido');
    }
  }

  return (
    <div className="admin-card">
      <div className="admin-card-header">
        <h2>Cambiar contraseña</h2>
      </div>
      <form onSubmit={handleSubmit} className="admin-form-section">
        <div className="admin-form-field admin-form-field-full">
          <label>Contraseña actual</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>

        <div className="admin-form-field admin-form-field-full">
          <label>Nueva contraseña</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            autoComplete="new-password"
            minLength={8}
          />
          <div className="admin-form-hint">Mínimo 8 caracteres. Recomendado: 16+ con números y símbolos.</div>
        </div>

        <div className="admin-form-field admin-form-field-full">
          <label>Confirmar nueva contraseña</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
            minLength={8}
          />
        </div>

        {message && (
          <div
            className={
              status === 'success'
                ? 'admin-form-success'
                : status === 'error'
                  ? 'admin-error'
                  : ''
            }
          >
            {message}
          </div>
        )}

        <div className="admin-form-actions" style={{ justifyContent: 'flex-start' }}>
          <button
            type="submit"
            className="admin-btn admin-btn-primary"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Actualizando...' : 'Actualizar contraseña'}
          </button>
        </div>
      </form>
    </div>
  );
}

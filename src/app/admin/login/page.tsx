'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || 'Error al iniciar sesión');
      }

      router.push('/admin');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: '#fafaf9',
        padding: 16,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 400,
          padding: 32,
          background: 'white',
          borderRadius: 16,
          border: '1px solid rgba(15,23,42,0.08)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/isotipo.png"
            alt="Mercantia"
            style={{
              display: 'inline-block',
              width: 48,
              height: 48,
              objectFit: 'contain',
              marginBottom: 16,
            }}
          />
          <h1
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: '-0.025em',
              marginBottom: 8,
              fontFamily: 'var(--font-manrope), sans-serif',
            }}
          >
            Acceder al panel
          </h1>
          <p style={{ fontSize: 14, color: '#737373', margin: 0 }}>Mercantia Admin</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label
              style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#4b5563',
                marginBottom: 6,
                fontFamily: 'var(--font-jetbrains-mono), monospace',
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              style={{
                width: '100%',
                padding: '10px 14px',
                border: '1px solid rgba(15,23,42,0.12)',
                borderRadius: 8,
                fontSize: 14,
                fontFamily: 'inherit',
                background: 'white',
                color: '#0a0a0a',
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#4b5563',
                marginBottom: 6,
                fontFamily: 'var(--font-jetbrains-mono), monospace',
              }}
            >
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              style={{
                width: '100%',
                padding: '10px 14px',
                border: '1px solid rgba(15,23,42,0.12)',
                borderRadius: 8,
                fontSize: 14,
                fontFamily: 'inherit',
                background: 'white',
                color: '#0a0a0a',
              }}
            />
          </div>

          {error && (
            <div
              style={{
                padding: 12,
                background: '#fee2e2',
                border: '1px solid #fecaca',
                borderRadius: 8,
                color: '#991b1b',
                fontSize: 14,
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: 12,
              background: '#0a0a0a',
              color: 'white',
              fontWeight: 600,
              fontSize: 14,
              borderRadius: 8,
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
              fontFamily: 'inherit',
            }}
          >
            {loading ? 'Accediendo...' : 'Acceder'}
          </button>
        </form>
      </div>
    </div>
  );
}

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useTransition } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import type { DemoLead, CallLead } from '@prisma/client';

type Lead = DemoLead | CallLead;

interface LeadsTableProps {
  leads: Lead[];
  total: number;
  page: number;
  pageSize: number;
  counts: Record<string, number>;
  currentStatus: string;
  currentQuery: string;
  basePath: string;
  type: 'demo' | 'call';
}

const STATUS_OPTIONS = [
  { value: 'ALL', label: 'Todas' },
  { value: 'NUEVA', label: 'Nuevas' },
  { value: 'CONTACTADA', label: 'Contactadas' },
  { value: 'DEMO_AGENDADA', label: 'Agendadas' },
  { value: 'CONVERTIDA', label: 'Convertidas' },
  { value: 'PERDIDA', label: 'Perdidas' },
];

export function LeadsTable({
  leads,
  total,
  page,
  pageSize,
  counts,
  currentStatus,
  currentQuery,
  basePath,
  type,
}: LeadsTableProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(currentQuery);
  const [isPending, startTransition] = useTransition();

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  function updateParams(updates: Record<string, string | undefined>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(updates)) {
      if (value === undefined || value === '' || value === 'ALL') {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    }
    startTransition(() => {
      router.push(`${basePath}?${params.toString()}`);
    });
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    updateParams({ q: query || undefined, page: '1' });
  }

  return (
    <div>
      <div className="admin-filters-row">
        <div className="admin-status-tabs">
          {STATUS_OPTIONS.map((opt) => {
            const count = opt.value === 'ALL' ? total : counts[opt.value] || 0;
            const active = currentStatus === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => updateParams({ status: opt.value, page: '1' })}
                className={`admin-status-tab ${active ? 'active' : ''}`}
              >
                {opt.label}
                {count > 0 && <span className="admin-status-tab-count">{count}</span>}
              </button>
            );
          })}
        </div>

        <form onSubmit={handleSearch} className="admin-search-form">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              type === 'demo'
                ? 'Buscar empresa, nombre, email...'
                : 'Buscar nombre, teléfono...'
            }
            className="admin-search-input"
          />
          <button type="submit" className="admin-btn admin-btn-primary">
            Buscar
          </button>
        </form>
      </div>

      <div className="admin-card admin-table-card">
        {leads.length === 0 ? (
          <div className="admin-empty-state">
            <p>No hay solicitudes con estos filtros.</p>
          </div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                {type === 'demo' ? (
                  <>
                    <th>Empresa</th>
                    <th>Contacto</th>
                    <th>Sector</th>
                    <th>Comerciales</th>
                  </>
                ) : (
                  <>
                    <th>Nombre</th>
                    <th>Teléfono</th>
                    <th>Momento</th>
                  </>
                )}
                <th>Origen</th>
                <th>Estado</th>
                <th>Recibido</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  onClick={() => router.push(`${basePath}/${lead.id}`)}
                  className={isPending ? 'admin-row-pending' : ''}
                >
                  {type === 'demo' ? (
                    <>
                      <td>
                        <strong>{(lead as DemoLead).empresa}</strong>
                      </td>
                      <td>
                        <div>{lead.nombre}</div>
                        <div className="admin-table-meta">{(lead as DemoLead).email}</div>
                      </td>
                      <td>{(lead as DemoLead).sector || '—'}</td>
                      <td>{(lead as DemoLead).comerciales || '—'}</td>
                    </>
                  ) : (
                    <>
                      <td>
                        <strong>{lead.nombre}</strong>
                      </td>
                      <td>{(lead as CallLead).telefono}</td>
                      <td>{(lead as CallLead).mejorMomento || '—'}</td>
                    </>
                  )}
                  <td>
                    <span className="admin-source-badge">
                      {lead.utmSource || (lead.referrer ? 'Referral' : 'Directo')}
                    </span>
                  </td>
                  <td>
                    <span className={`admin-badge admin-badge-${lead.status.toLowerCase()}`}>
                      {lead.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="admin-time">
                    {formatDistanceToNow(lead.createdAt, { addSuffix: true, locale: es })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {totalPages > 1 && (
          <div className="admin-pagination">
            <button
              disabled={page === 1}
              onClick={() => updateParams({ page: String(page - 1) })}
              className="admin-btn admin-btn-ghost"
            >
              ← Anterior
            </button>
            <span className="admin-pagination-info">
              Página {page} de {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => updateParams({ page: String(page + 1) })}
              className="admin-btn admin-btn-ghost"
            >
              Siguiente →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

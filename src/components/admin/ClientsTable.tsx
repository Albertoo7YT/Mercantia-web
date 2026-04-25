'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ClientStatus, PaymentStatus } from '@prisma/client';

interface ClientRow {
  id: string;
  empresa: string;
  contactoNombre: string;
  contactoEmail: string;
  plan: string;
  mrr: number | null;
  status: ClientStatus;
  paymentStatus: PaymentStatus;
  fechaAltaFormatted: string;
}

interface ClientsTableProps {
  clients: ClientRow[];
  totalActive: number;
  mrrTotal: number;
}

export function ClientsTable({ clients, totalActive, mrrTotal }: ClientsTableProps) {
  const router = useRouter();

  return (
    <div>
      <div className="admin-page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
          <div>
            <h1>Clientes</h1>
            <p className="admin-page-subtitle">
              {totalActive} activos · MRR total: <strong>{mrrTotal.toFixed(2)}€</strong>
            </p>
          </div>
          <Link href="/admin/clientes/nuevo" className="admin-btn admin-btn-primary">
            + Nuevo cliente
          </Link>
        </div>
      </div>

      <div className="admin-card admin-table-card">
        {clients.length === 0 ? (
          <div className="admin-empty-state">
            <p>Aún no tienes clientes. Conviértelos desde los leads o créalos manualmente.</p>
          </div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Empresa</th>
                <th>Contacto</th>
                <th>Plan</th>
                <th>MRR</th>
                <th>Estado</th>
                <th>Pago</th>
                <th>Alta</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr
                  key={client.id}
                  onClick={() => router.push(`/admin/clientes/${client.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <td>
                    <strong>{client.empresa}</strong>
                  </td>
                  <td>
                    <div>{client.contactoNombre}</div>
                    <div className="admin-table-meta">{client.contactoEmail}</div>
                  </td>
                  <td>{client.plan}</td>
                  <td>{client.mrr ? `${client.mrr.toFixed(2)}€` : '—'}</td>
                  <td>
                    <span className={`admin-badge admin-badge-client-${client.status.toLowerCase()}`}>
                      {client.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td>
                    <span className={`admin-badge admin-badge-payment-${client.paymentStatus.toLowerCase()}`}>
                      {client.paymentStatus.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="admin-time">{client.fechaAltaFormatted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

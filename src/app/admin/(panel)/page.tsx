import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { prisma } from '@/lib/prisma';
import { MetricCard } from '@/components/admin/MetricCard';

export default async function DashboardPage() {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const [
    demosLastWeek,
    callsLastWeek,
    pendingDemos,
    pendingCalls,
    totalClients,
    recentDemos,
    recentCalls,
  ] = await Promise.all([
    prisma.demoLead.count({ where: { createdAt: { gte: sevenDaysAgo } } }),
    prisma.callLead.count({ where: { createdAt: { gte: sevenDaysAgo } } }),
    prisma.demoLead.count({ where: { status: 'NUEVA' } }),
    prisma.callLead.count({ where: { status: 'NUEVA' } }),
    prisma.client.count({ where: { status: 'ACTIVO' } }),
    prisma.demoLead.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        nombre: true,
        empresa: true,
        email: true,
        status: true,
        createdAt: true,
      },
    }),
    prisma.callLead.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        nombre: true,
        telefono: true,
        status: true,
        createdAt: true,
      },
    }),
  ]);

  const totalLeadsWeek = demosLastWeek + callsLastWeek;

  return (
    <div>
      <div className="admin-page-header">
        <h1>Dashboard</h1>
        <p className="admin-page-subtitle">Resumen de tu actividad comercial</p>
      </div>

      <div className="admin-metrics-grid">
        <MetricCard label="Leads esta semana" value={totalLeadsWeek} trend="últimos 7 días" />
        <MetricCard
          label="Demos sin contactar"
          value={pendingDemos}
          trend="pendientes"
          highlight={pendingDemos > 0}
        />
        <MetricCard
          label="Llamadas sin atender"
          value={pendingCalls}
          trend="pendientes"
          highlight={pendingCalls > 0}
        />
        <MetricCard label="Clientes activos" value={totalClients} trend="facturando" />
      </div>

      <div className="admin-recent-grid">
        <div className="admin-card">
          <div className="admin-card-header">
            <h2>Últimas solicitudes de demo</h2>
            <Link href="/admin/demos">Ver todas →</Link>
          </div>
          <ul className="admin-lead-list">
            {recentDemos.length === 0 && <li className="admin-empty">Sin solicitudes aún</li>}
            {recentDemos.map((lead) => (
              <li key={lead.id}>
                <Link href={`/admin/demos/${lead.id}`}>
                  <div className="admin-lead-main">
                    <strong>{lead.empresa}</strong>
                    <span className="admin-lead-meta">
                      {lead.nombre} · {lead.email}
                    </span>
                  </div>
                  <div className="admin-lead-meta-right">
                    <span className={`admin-badge admin-badge-${lead.status.toLowerCase()}`}>
                      {lead.status}
                    </span>
                    <span className="admin-time">
                      {formatDistanceToNow(lead.createdAt, { addSuffix: true, locale: es })}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <h2>Últimas llamadas solicitadas</h2>
            <Link href="/admin/llamadas">Ver todas →</Link>
          </div>
          <ul className="admin-lead-list">
            {recentCalls.length === 0 && <li className="admin-empty">Sin solicitudes aún</li>}
            {recentCalls.map((lead) => (
              <li key={lead.id}>
                <Link href={`/admin/llamadas/${lead.id}`}>
                  <div className="admin-lead-main">
                    <strong>{lead.nombre}</strong>
                    <span className="admin-lead-meta">{lead.telefono}</span>
                  </div>
                  <div className="admin-lead-meta-right">
                    <span className={`admin-badge admin-badge-${lead.status.toLowerCase()}`}>
                      {lead.status}
                    </span>
                    <span className="admin-time">
                      {formatDistanceToNow(lead.createdAt, { addSuffix: true, locale: es })}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import { prisma } from '@/lib/prisma';
import { LeadsTable } from '@/components/admin/LeadsTable';
import { LeadStatus, Prisma } from '@prisma/client';

export const metadata = { title: 'Solicitudes de demo — Admin' };

interface PageProps {
  searchParams: Promise<{ status?: string; q?: string; page?: string }>;
}

export default async function DemosPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page || '1'));
  const pageSize = 20;

  const where: Prisma.DemoLeadWhereInput = {};
  if (params.status && params.status !== 'ALL') {
    where.status = params.status as LeadStatus;
  }
  if (params.q) {
    where.OR = [
      { empresa: { contains: params.q, mode: 'insensitive' } },
      { nombre: { contains: params.q, mode: 'insensitive' } },
      { email: { contains: params.q, mode: 'insensitive' } },
    ];
  }

  const [leads, total, statusCounts] = await Promise.all([
    prisma.demoLead.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.demoLead.count({ where }),
    prisma.demoLead.groupBy({
      by: ['status'],
      _count: true,
    }),
  ]);

  const counts = Object.fromEntries(statusCounts.map((s) => [s.status, s._count]));

  return (
    <div>
      <div className="admin-page-header">
        <h1>Solicitudes de demo</h1>
        <p className="admin-page-subtitle">{total} solicitudes en total</p>
      </div>

      <LeadsTable
        leads={leads}
        total={total}
        page={page}
        pageSize={pageSize}
        counts={counts}
        currentStatus={params.status || 'ALL'}
        currentQuery={params.q || ''}
        basePath="/admin/demos"
        type="demo"
      />
    </div>
  );
}

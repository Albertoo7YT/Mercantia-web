import { prisma } from '@/lib/prisma';
import { AnalyticsDashboard } from '@/components/admin/AnalyticsDashboard';

export const metadata = { title: 'Analítica — Admin' };

export default async function AnaliticaPage() {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const [
    totalViews,
    viewsLast30Days,
    topPaths,
    topReferrers,
    topUtmSources,
    devicesRaw,
    dailyViewsRaw,
    totalDemos,
    totalCalls,
  ] = await Promise.all([
    prisma.pageView.count(),
    prisma.pageView.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
    prisma.pageView.groupBy({
      by: ['path'],
      _count: true,
      orderBy: { _count: { path: 'desc' } },
      take: 10,
      where: { createdAt: { gte: thirtyDaysAgo } },
    }),
    prisma.pageView.groupBy({
      by: ['referrer'],
      _count: true,
      orderBy: { _count: { referrer: 'desc' } },
      take: 10,
      where: { createdAt: { gte: thirtyDaysAgo }, referrer: { not: null } },
    }),
    prisma.pageView.groupBy({
      by: ['utmSource'],
      _count: true,
      orderBy: { _count: { utmSource: 'desc' } },
      take: 10,
      where: { createdAt: { gte: thirtyDaysAgo }, utmSource: { not: null } },
    }),
    prisma.pageView.groupBy({
      by: ['device'],
      _count: true,
      where: { createdAt: { gte: thirtyDaysAgo } },
    }),
    prisma.$queryRaw<Array<{ date: Date; count: bigint }>>`
      SELECT DATE("createdAt") AS date, COUNT(*) AS count
      FROM page_views
      WHERE "createdAt" >= ${thirtyDaysAgo}
      GROUP BY DATE("createdAt")
      ORDER BY date ASC
    `,
    prisma.demoLead.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
    prisma.callLead.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
  ]);

  const uniqueSessions = await prisma.pageView.findMany({
    where: { createdAt: { gte: thirtyDaysAgo }, sessionId: { not: null } },
    distinct: ['sessionId'],
    select: { sessionId: true },
  });

  const totalLeads = totalDemos + totalCalls;
  const conversionRate =
    uniqueSessions.length > 0 ? (totalLeads / uniqueSessions.length) * 100 : 0;

  return (
    <AnalyticsDashboard
      data={{
        totalViews,
        viewsLast30Days,
        uniqueVisitors: uniqueSessions.length,
        totalLeads,
        conversionRate,
        topPaths: topPaths.map((p) => ({ path: p.path, count: p._count })),
        topReferrers: topReferrers.map((r) => ({
          referrer: r.referrer || '',
          count: r._count,
        })),
        topUtmSources: topUtmSources.map((s) => ({
          source: s.utmSource || '',
          count: s._count,
        })),
        devices: devicesRaw.map((d) => ({ device: d.device || 'unknown', count: d._count })),
        dailyViews: dailyViewsRaw.map((d) => ({
          date: (d.date instanceof Date ? d.date : new Date(d.date)).toISOString(),
          count: Number(d.count),
        })),
      }}
    />
  );
}

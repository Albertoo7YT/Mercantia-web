import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { LeadDetail } from '@/components/admin/LeadDetail';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DemoDetailPage({ params }: PageProps) {
  const { id } = await params;
  const lead = await prisma.demoLead.findUnique({
    where: { id },
    include: {
      activities: { orderBy: { createdAt: 'desc' } },
      client: true,
    },
  });

  if (!lead) notFound();

  return <LeadDetail lead={lead} type="demo" />;
}

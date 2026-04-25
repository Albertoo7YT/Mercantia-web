import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { ClientForm } from '@/components/admin/ClientForm';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ClientDetailPage({ params }: PageProps) {
  const { id } = await params;

  const client = await prisma.client.findUnique({
    where: { id },
  });

  if (!client) notFound();

  return <ClientForm mode="edit" client={client} />;
}

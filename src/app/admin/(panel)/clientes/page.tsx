import { prisma } from '@/lib/prisma';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ClientsTable } from '@/components/admin/ClientsTable';

export const metadata = { title: 'Clientes — Admin' };

export default async function ClientesPage() {
  const clients = await prisma.client.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const activeClients = clients.filter((c) => c.status === 'ACTIVO');
  const mrrTotal = activeClients.reduce((sum, c) => sum + (c.mrr || 0), 0);

  return (
    <ClientsTable
      clients={clients.map((c) => ({
        id: c.id,
        empresa: c.empresa,
        contactoNombre: c.contactoNombre,
        contactoEmail: c.contactoEmail,
        plan: c.plan,
        mrr: c.mrr,
        status: c.status,
        paymentStatus: c.paymentStatus,
        fechaAltaFormatted: format(c.fechaAlta, 'd MMM yyyy', { locale: es }),
      }))}
      totalActive={activeClients.length}
      mrrTotal={mrrTotal}
    />
  );
}

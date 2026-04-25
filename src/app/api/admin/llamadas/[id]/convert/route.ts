import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const lead = await prisma.callLead.findUnique({ where: { id } });
  if (!lead) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  if (lead.clientId) {
    return NextResponse.json({ clientId: lead.clientId });
  }

  // CallLead no tiene email ni empresa: usamos el nombre para ambos; el admin edita después.
  const client = await prisma.client.create({
    data: {
      empresa: lead.nombre,
      contactoNombre: lead.nombre,
      contactoEmail: `sin-email+${id.slice(0, 6)}@mercantia.pro`,
      contactoTelefono: lead.telefono,
      status: 'EN_PRUEBA',
      paymentStatus: 'SIN_FACTURA',
    },
  });

  await prisma.$transaction([
    prisma.callLead.update({
      where: { id },
      data: { clientId: client.id, status: 'CONVERTIDA' },
    }),
    prisma.leadActivity.create({
      data: {
        type: 'CONVERTED',
        description: `Convertido a cliente: ${client.empresa}`,
        callLeadId: id,
        createdBy: session.user.email,
      },
    }),
  ]);

  return NextResponse.json({ clientId: client.id });
}

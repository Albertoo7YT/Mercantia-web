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
  const lead = await prisma.demoLead.findUnique({ where: { id } });
  if (!lead) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  if (lead.clientId) {
    return NextResponse.json({ clientId: lead.clientId });
  }

  const comerciales = lead.comerciales
    ? parseInt(lead.comerciales.match(/\d+/)?.[0] || '0') || null
    : null;

  const client = await prisma.client.create({
    data: {
      empresa: lead.empresa,
      contactoNombre: lead.nombre,
      contactoEmail: lead.email,
      contactoTelefono: lead.telefono,
      sector: lead.sector,
      comerciales,
      status: 'EN_PRUEBA',
      paymentStatus: 'SIN_FACTURA',
    },
  });

  await prisma.$transaction([
    prisma.demoLead.update({
      where: { id },
      data: { clientId: client.id, status: 'CONVERTIDA' },
    }),
    prisma.leadActivity.create({
      data: {
        type: 'CONVERTED',
        description: `Convertido a cliente: ${client.empresa}`,
        demoLeadId: id,
        createdBy: session.user.email,
      },
    }),
  ]);

  return NextResponse.json({ clientId: client.id });
}

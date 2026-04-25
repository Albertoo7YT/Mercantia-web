import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const data = await req.json();

  // Lista blanca de campos editables
  const updatable = [
    'empresa',
    'contactoNombre',
    'contactoEmail',
    'contactoTelefono',
    'cif',
    'direccion',
    'sector',
    'plan',
    'comerciales',
    'erp',
    'mrr',
    'status',
    'paymentStatus',
    'notas',
  ] as const;

  const updateData: Record<string, unknown> = {};
  for (const key of updatable) {
    if (key in data) updateData[key] = data[key];
  }

  await prisma.client.update({ where: { id }, data: updateData });
  return NextResponse.json({ ok: true, id });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;

  // Desvincular leads primero para evitar FK violations
  await prisma.$transaction([
    prisma.demoLead.updateMany({ where: { clientId: id }, data: { clientId: null } }),
    prisma.callLead.updateMany({ where: { clientId: id }, data: { clientId: null } }),
    prisma.client.delete({ where: { id } }),
  ]);

  return NextResponse.json({ ok: true });
}

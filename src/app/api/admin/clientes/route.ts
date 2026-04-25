import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const data = await req.json();

  if (!data.empresa || !data.contactoNombre || !data.contactoEmail) {
    return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
  }

  // Filtrar solo campos esperados para evitar inyección de columnas no deseadas
  const client = await prisma.client.create({
    data: {
      empresa: data.empresa,
      contactoNombre: data.contactoNombre,
      contactoEmail: data.contactoEmail,
      contactoTelefono: data.contactoTelefono || null,
      cif: data.cif || null,
      direccion: data.direccion || null,
      sector: data.sector || null,
      plan: data.plan || 'STARTER',
      comerciales: data.comerciales ?? null,
      erp: data.erp || null,
      mrr: data.mrr ?? null,
      status: data.status || 'EN_PRUEBA',
      paymentStatus: data.paymentStatus || 'SIN_FACTURA',
      notas: data.notas || null,
    },
  });

  return NextResponse.json({ id: client.id });
}

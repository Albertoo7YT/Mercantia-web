import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { LeadStatus } from '@prisma/client';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const body = await req.json();

  if (body.status) {
    const existing = await prisma.callLead.findUnique({ where: { id } });
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    await prisma.$transaction([
      prisma.callLead.update({
        where: { id },
        data: { status: body.status as LeadStatus },
      }),
      prisma.leadActivity.create({
        data: {
          type: 'STATUS_CHANGE',
          description: `Estado cambiado: ${existing.status} → ${body.status}`,
          callLeadId: id,
          createdBy: session.user.email,
        },
      }),
    ]);
  }

  if (body.notas !== undefined) {
    await prisma.callLead.update({ where: { id }, data: { notas: body.notas } });
  }

  return NextResponse.json({ ok: true });
}

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

  const updateData: Record<string, unknown> = {};
  if (typeof data.enabled === 'boolean') updateData.enabled = data.enabled;
  if (typeof data.subject === 'string') updateData.subject = data.subject;
  if (typeof data.body === 'string') updateData.body = data.body;
  if (typeof data.name === 'string') updateData.name = data.name;

  await prisma.emailTemplate.update({ where: { id }, data: updateData });
  return NextResponse.json({ ok: true });
}

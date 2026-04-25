import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const { type, description } = await req.json();

  if (!description || typeof description !== 'string') {
    return NextResponse.json({ error: 'description required' }, { status: 400 });
  }

  await prisma.leadActivity.create({
    data: {
      type: type || 'NOTE_ADDED',
      description,
      callLeadId: id,
      createdBy: session.user.email,
    },
  });

  return NextResponse.json({ ok: true });
}

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { values } = await req.json();
  if (typeof values !== 'object' || values === null) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const ops = Object.entries(values as Record<string, string>).map(([key, value]) =>
    prisma.settings.upsert({
      where: { key },
      update: { value: value ?? '' },
      create: { key, value: value ?? '' },
    })
  );

  await prisma.$transaction(ops);
  return NextResponse.json({ ok: true });
}

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession, hashPassword, verifyPassword } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { currentPassword, newPassword } = await req.json();

  if (typeof currentPassword !== 'string' || typeof newPassword !== 'string') {
    return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
  }

  if (newPassword.length < 8) {
    return NextResponse.json(
      { error: 'La nueva contraseña debe tener al menos 8 caracteres' },
      { status: 400 }
    );
  }

  if (newPassword === currentPassword) {
    return NextResponse.json(
      { error: 'La nueva contraseña debe ser distinta a la actual' },
      { status: 400 }
    );
  }

  const user = await prisma.adminUser.findUnique({ where: { id: session.userId } });
  if (!user) return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });

  const valid = await verifyPassword(currentPassword, user.passwordHash);
  if (!valid) {
    return NextResponse.json({ error: 'Contraseña actual incorrecta' }, { status: 401 });
  }

  const passwordHash = await hashPassword(newPassword);
  await prisma.adminUser.update({
    where: { id: user.id },
    data: { passwordHash },
  });

  return NextResponse.json({ ok: true });
}

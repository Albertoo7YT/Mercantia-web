import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyPassword, createSession, setSessionCookie } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email y contraseña obligatorios' }, { status: 400 });
    }

    const user = await prisma.adminUser.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (!user) {
      return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
    }

    const valid = await verifyPassword(password, user.passwordHash);
    if (!valid) {
      return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
    }

    await prisma.adminUser.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    const jwt = await createSession(user.id);
    await setSessionCookie(jwt);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}

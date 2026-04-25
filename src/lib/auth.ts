import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { nanoid } from 'nanoid';
import { prisma } from './prisma';

const secret = new TextEncoder().encode(process.env.SESSION_SECRET || 'dev-secret-change-me');
const SESSION_COOKIE = 'mercantia_admin_session';
const SESSION_DURATION_DAYS = 7;

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function createSession(userId: string): Promise<string> {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + SESSION_DURATION_DAYS);

  const token = nanoid(32);

  await prisma.session.create({ data: { token, userId, expiresAt } });

  const jwt = await new SignJWT({ sessionToken: token })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(`${SESSION_DURATION_DAYS}d`)
    .sign(secret);

  return jwt;
}

export async function setSessionCookie(jwt: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, jwt, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * SESSION_DURATION_DAYS,
    path: '/',
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  const jwt = cookieStore.get(SESSION_COOKIE)?.value;
  if (!jwt) return null;

  try {
    const { payload } = await jwtVerify(jwt, secret);
    const sessionToken = payload.sessionToken as string;

    const session = await prisma.session.findUnique({
      where: { token: sessionToken },
      include: { user: true },
    });

    if (!session || session.expiresAt < new Date()) return null;
    return session;
  } catch {
    return null;
  }
}

export async function destroySession() {
  const cookieStore = await cookies();
  const jwt = cookieStore.get(SESSION_COOKIE)?.value;

  if (jwt) {
    try {
      const { payload } = await jwtVerify(jwt, secret);
      await prisma.session.deleteMany({
        where: { token: payload.sessionToken as string },
      });
    } catch {
      // swallow: bad token means nothing to revoke
    }
  }

  cookieStore.delete(SESSION_COOKIE);
}

export async function requireAuth() {
  const session = await getSession();
  if (!session) {
    redirect('/admin/login');
  }
  return session;
}

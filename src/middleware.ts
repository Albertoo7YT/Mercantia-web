import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.SESSION_SECRET || 'dev-secret-change-me');
const SESSION_COOKIE = 'mercantia_admin_session';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const jwt = request.cookies.get(SESSION_COOKIE)?.value;

    if (!jwt) return NextResponse.redirect(new URL('/admin/login', request.url));

    try {
      await jwtVerify(jwt, secret);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};

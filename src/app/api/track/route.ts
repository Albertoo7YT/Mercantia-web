import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashIp, detectDevice, detectBrowser } from '@/lib/analytics';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    const userAgent = req.headers.get('user-agent') || '';

    await prisma.pageView.create({
      data: {
        path: data.path || '/',
        referrer: data.referrer || null,
        utmSource: data.utmSource || null,
        utmMedium: data.utmMedium || null,
        utmCampaign: data.utmCampaign || null,
        utmContent: data.utmContent || null,
        utmTerm: data.utmTerm || null,
        device: detectDevice(userAgent),
        browser: detectBrowser(userAgent),
        userAgent,
        ipHash: hashIp(ip),
        sessionId: data.sessionId || null,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error tracking:', err);
    return NextResponse.json({ ok: true });
  }
}

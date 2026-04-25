import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendTemplateEmail, sendEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.nombre || !data.empresa || !data.email) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    const lead = await prisma.demoLead.create({
      data: {
        nombre: data.nombre,
        empresa: data.empresa,
        email: data.email,
        telefono: data.telefono || null,
        comerciales: data.comerciales || null,
        sector: data.sector || null,
        mensaje: data.mensaje || null,
        referrer: data.referrer || null,
        utmSource: data.utmSource || null,
        utmMedium: data.utmMedium || null,
        utmCampaign: data.utmCampaign || null,
        landingPath: data.landingPath || '/',
      },
    });

    await sendTemplateEmail('demo_thanks', data.email, {
      nombre: data.nombre,
      empresa: data.empresa,
    });

    const notifEmail = process.env.NOTIFICATION_EMAIL || 'hola@mercantia.pro';
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mercantia.pro';
    await sendEmail({
      to: notifEmail,
      subject: `🔔 Nueva solicitud de demo — ${data.empresa}`,
      html: `
        <h2 style="font-family: sans-serif;">Nueva solicitud de demo</h2>
        <p><strong>Empresa:</strong> ${data.empresa}</p>
        <p><strong>Nombre:</strong> ${data.nombre}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.telefono || '—'}</p>
        <p><strong>Comerciales:</strong> ${data.comerciales || '—'}</p>
        <p><strong>Sector:</strong> ${data.sector || '—'}</p>
        <p><strong>Mensaje:</strong> ${data.mensaje || '—'}</p>
        <hr>
        <p><a href="${siteUrl}/admin/demos/${lead.id}">Ver en el panel →</a></p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error procesando demo:', err);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}

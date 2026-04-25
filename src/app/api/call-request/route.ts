import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendTemplateEmail, sendEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.nombre || !data.telefono) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const phoneRegex = /^[+0-9\s()-]{6,}$/;
    if (!phoneRegex.test(String(data.telefono).trim())) {
      return NextResponse.json({ error: 'Teléfono inválido' }, { status: 400 });
    }

    const lead = await prisma.callLead.create({
      data: {
        nombre: data.nombre,
        telefono: data.telefono,
        mejorMomento: data.momento || null,
        mensaje: data.interes || data.mensaje || null,
        referrer: data.referrer || null,
        utmSource: data.utmSource || null,
        utmMedium: data.utmMedium || null,
        utmCampaign: data.utmCampaign || null,
        landingPath: data.landingPath || '/',
      },
    });

    if (data.email) {
      await sendTemplateEmail('call_thanks', data.email, {
        nombre: data.nombre,
      });
    }

    const notifEmail = process.env.NOTIFICATION_EMAIL || 'hola@mercantia.pro';
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mercantia.pro';
    await sendEmail({
      to: notifEmail,
      subject: `📞 Nueva solicitud de llamada — ${data.nombre}`,
      html: `
        <h2 style="font-family: sans-serif;">Nueva solicitud de llamada</h2>
        <p><strong>Nombre:</strong> ${data.nombre}</p>
        <p><strong>Teléfono:</strong> ${data.telefono}</p>
        <p><strong>Mejor momento:</strong> ${data.momento || '—'}</p>
        <p><strong>Qué le interesa:</strong> ${data.interes || data.mensaje || '—'}</p>
        <p><strong>Web:</strong> ${data.web || '—'}</p>
        <hr>
        <p><a href="${siteUrl}/admin/llamadas/${lead.id}">Ver en el panel →</a></p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error procesando call-request:', err);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

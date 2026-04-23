import { NextRequest, NextResponse } from 'next/server';

interface CallRequestPayload {
  nombre?: string;
  telefono?: string;
  web?: string;
  momento?: string;
  interes?: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: CallRequestPayload = await req.json();

    if (!data.nombre || !data.telefono) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    const phoneRegex = /^[+0-9\s()-]{6,}$/;
    if (!phoneRegex.test(data.telefono.trim())) {
      return NextResponse.json(
        { error: 'Teléfono inválido' },
        { status: 400 }
      );
    }

    console.log('📞 Nueva solicitud de llamada:', {
      ...data,
      timestamp: new Date().toISOString(),
    });

    /* ─── Ejemplo con nodemailer (instalar: npm i nodemailer) ───
    import nodemailer from 'nodemailer';

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.DEMO_RECIPIENT,
      subject: `Nueva solicitud de llamada — ${data.nombre}`,
      html: `
        <h2>Nueva solicitud de llamada</h2>
        <p><strong>Nombre:</strong> ${data.nombre}</p>
        <p><strong>Teléfono:</strong> ${data.telefono}</p>
        <p><strong>Mejor momento:</strong> ${data.momento || '—'}</p>
        <p><strong>Qué le interesa:</strong> ${data.interes || '—'}</p>
      `,
    });
    */

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error procesando call-request:', err);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

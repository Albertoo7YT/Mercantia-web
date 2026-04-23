import { NextRequest, NextResponse } from 'next/server';

interface DemoPayload {
  nombre?: string;
  empresa?: string;
  email?: string;
  telefono?: string;
  comerciales?: string;
  sector?: string;
  mensaje?: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: DemoPayload = await req.json();

    // Validación básica
    if (!data.nombre || !data.empresa || !data.email) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // En este punto envías el email. Por defecto solo loguea.
    // Descomenta el bloque inferior y configura SMTP en .env cuando estés listo.
    console.log('📨 Nueva solicitud de demo:', {
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
      subject: `Nueva solicitud de demo — ${data.empresa}`,
      html: `
        <h2>Nueva solicitud de demo</h2>
        <p><strong>Nombre:</strong> ${data.nombre}</p>
        <p><strong>Empresa:</strong> ${data.empresa}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.telefono || '—'}</p>
        <p><strong>Comerciales:</strong> ${data.comerciales || '—'}</p>
        <p><strong>Sector:</strong> ${data.sector || '—'}</p>
        <p><strong>Mensaje:</strong> ${data.mensaje || '—'}</p>
      `,
    });
    */

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error procesando demo:', err);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

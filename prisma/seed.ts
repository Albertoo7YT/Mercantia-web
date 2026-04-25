import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'alberto@mercantia.pro';
  const adminPassword = process.env.ADMIN_PASSWORD || 'cambiame123';

  const existing = await prisma.adminUser.findUnique({ where: { email: adminEmail } });
  if (!existing) {
    await prisma.adminUser.create({
      data: {
        email: adminEmail,
        passwordHash: await bcrypt.hash(adminPassword, 12),
        name: 'Alberto Izquierdo',
      },
    });
    console.log(`✓ Admin creado: ${adminEmail} / ${adminPassword}`);
    console.log('⚠️  Cambia la contraseña después del primer login');
  }

  const settings = [
    { key: 'smtp_mode', value: 'resend' },
    { key: 'email_from', value: 'Mercantia <hola@mercantia.pro>' },
    { key: 'notification_email', value: 'hola@mercantia.pro' },
    { key: 'company_name', value: 'A. Izquierdo SL' },
    { key: 'company_cif', value: 'B13309356' },
    { key: 'company_address', value: 'C/ La Mancha, 6. Socuéllamos (Ciudad Real), CP 13630' },
  ];

  for (const s of settings) {
    await prisma.settings.upsert({ where: { key: s.key }, update: {}, create: s });
  }

  const templates = [
    {
      slug: 'demo_thanks',
      name: 'Gracias por solicitar demo',
      subject: 'Gracias por tu interés en Mercantia, {{nombre}}',
      body: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; color: #0a0a0a;">
          <div style="background: linear-gradient(135deg, #ff4d1a, #ff7a3d); padding: 32px; border-radius: 16px; color: white; text-align: center; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 28px; letter-spacing: -0.03em;">Mercantia</h1>
          </div>
          <h2 style="font-size: 24px; letter-spacing: -0.02em; margin-bottom: 16px;">¡Hola {{nombre}}!</h2>
          <p>Gracias por solicitar una demo de Mercantia para <strong>{{empresa}}</strong>.</p>
          <p>He recibido tu solicitud y me pondré en contacto contigo en las próximas 24 horas para agendar una demo personalizada.</p>
          <p>Mientras tanto, si tienes cualquier pregunta urgente puedes escribirme a <a href="mailto:hola@mercantia.pro" style="color: #ff4d1a;">hola@mercantia.pro</a> o por WhatsApp al <a href="https://wa.me/34711257657" style="color: #ff4d1a;">+34 711 25 76 57</a>.</p>
          <p style="margin-top: 32px;">Un saludo,<br><strong>Alberto Izquierdo</strong><br>Fundador de Mercantia</p>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 32px 0;">
          <p style="font-size: 12px; color: #737373;">A. Izquierdo SL · CIF B13309356<br>C/ La Mancha, 6. Socuéllamos (Ciudad Real)</p>
        </body>
        </html>
      `,
    },
    {
      slug: 'call_thanks',
      name: 'Gracias por solicitar llamada',
      subject: 'Te llamamos pronto, {{nombre}}',
      body: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; color: #0a0a0a;">
          <div style="background: linear-gradient(135deg, #ff4d1a, #ff7a3d); padding: 32px; border-radius: 16px; color: white; text-align: center; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 28px; letter-spacing: -0.03em;">Mercantia</h1>
          </div>
          <h2 style="font-size: 24px; letter-spacing: -0.02em; margin-bottom: 16px;">¡Hola {{nombre}}!</h2>
          <p>He recibido tu solicitud de llamada. Te llamaré al número que me has indicado en el momento que me pediste.</p>
          <p>Si en algún momento cambias de opinión o prefieres otro horario, escríbeme a <a href="mailto:hola@mercantia.pro" style="color: #ff4d1a;">hola@mercantia.pro</a>.</p>
          <p style="margin-top: 32px;">Un saludo,<br><strong>Alberto Izquierdo</strong></p>
        </body>
        </html>
      `,
    },
  ];

  for (const t of templates) {
    await prisma.emailTemplate.upsert({ where: { slug: t.slug }, update: {}, create: t });
  }

  console.log('✓ Seed completado');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

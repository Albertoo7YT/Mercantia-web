import { Resend } from 'resend';
import { prisma } from './prisma';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendEmail({
  to,
  subject,
  html,
  from,
}: {
  to: string;
  subject: string;
  html: string;
  from?: string;
}): Promise<{ success: boolean; id?: string; error?: string }> {
  if (!resend) {
    console.warn('⚠️  RESEND_API_KEY no configurada — email no enviado:', { to, subject });
    return { success: false, error: 'RESEND_API_KEY not configured' };
  }

  const emailFrom = from || process.env.EMAIL_FROM || 'Mercantia <hola@mercantia.pro>';

  try {
    const result = await resend.emails.send({ from: emailFrom, to, subject, html });
    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown' };
  }
}

export async function sendTemplateEmail(
  slug: string,
  to: string,
  variables: Record<string, string>
) {
  const template = await prisma.emailTemplate.findUnique({ where: { slug } });
  if (!template || !template.enabled) {
    return { success: false, error: 'Template not found or disabled' };
  }

  const replace = (str: string) =>
    str.replace(/\{\{(\w+)\}\}/g, (_, key) => variables[key] || '');

  return sendEmail({
    to,
    subject: replace(template.subject),
    html: replace(template.body),
  });
}

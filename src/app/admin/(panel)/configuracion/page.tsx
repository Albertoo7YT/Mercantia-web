import { prisma } from '@/lib/prisma';
import { SettingsForm } from '@/components/admin/SettingsForm';
import { TemplatesList } from '@/components/admin/TemplatesList';
import { PasswordChangeForm } from '@/components/admin/PasswordChangeForm';

export const metadata = { title: 'Configuración — Admin' };

export default async function ConfiguracionPage() {
  const [settings, templates] = await Promise.all([
    prisma.settings.findMany({ orderBy: { key: 'asc' } }),
    prisma.emailTemplate.findMany({ orderBy: { name: 'asc' } }),
  ]);

  const settingsMap = Object.fromEntries(settings.map((s) => [s.key, s.value]));

  return (
    <div>
      <div className="admin-page-header">
        <h1>Configuración</h1>
        <p className="admin-page-subtitle">Ajustes generales, seguridad y plantillas de email</p>
      </div>

      <div className="admin-config-grid">
        <SettingsForm initial={settingsMap} />
        <PasswordChangeForm />
        <TemplatesList
          templates={templates.map((t) => ({
            id: t.id,
            slug: t.slug,
            name: t.name,
            subject: t.subject,
            enabled: t.enabled,
            updatedAt: t.updatedAt.toISOString(),
          }))}
        />
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface Template {
  id: string;
  slug: string;
  name: string;
  subject: string;
  enabled: boolean;
  updatedAt: string;
}

interface TemplatesListProps {
  templates: Template[];
}

export function TemplatesList({ templates }: TemplatesListProps) {
  const router = useRouter();
  const [toggling, setToggling] = useState<string | null>(null);

  async function toggle(id: string, enabled: boolean) {
    setToggling(id);
    await fetch(`/api/admin/templates/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ enabled: !enabled }),
    });
    router.refresh();
    setToggling(null);
  }

  return (
    <div className="admin-card">
      <div className="admin-card-header">
        <h2>Plantillas de email</h2>
      </div>
      {templates.length === 0 ? (
        <div className="admin-empty-state">
          <p>No hay plantillas. El seed crea las iniciales.</p>
        </div>
      ) : (
        <ul className="admin-template-list">
          {templates.map((t) => (
            <li key={t.id}>
              <div className="admin-template-info">
                <div className="admin-template-name">
                  {t.name}
                  <span className="admin-template-slug">{t.slug}</span>
                </div>
                <div className="admin-template-subject">{t.subject}</div>
                <div className="admin-template-meta">
                  Actualizada{' '}
                  {format(new Date(t.updatedAt), "d MMM yyyy 'a las' HH:mm", { locale: es })}
                </div>
              </div>
              <div className="admin-template-actions">
                <button
                  onClick={() => toggle(t.id, t.enabled)}
                  disabled={toggling === t.id}
                  className={`admin-btn ${t.enabled ? 'admin-btn-ghost' : 'admin-btn-primary'}`}
                >
                  {t.enabled ? 'Activa' : 'Desactivada'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

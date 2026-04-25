import Link from 'next/link';
import type { AdminUser } from '@prisma/client';

interface SidebarProps {
  user?: AdminUser | null;
}

export function Sidebar({ user }: SidebarProps) {
  return (
    <aside className="admin-sidebar">
      <div className="admin-brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/isotipo.png" alt="" className="admin-brand-mark" />
        <div>
          <div className="admin-brand-name">Mercantia</div>
          <div className="admin-brand-sub">Admin</div>
        </div>
      </div>

      <nav className="admin-nav">
        <SidebarSection title="Panel">
          <NavItem href="/admin" icon="dashboard">Dashboard</NavItem>
        </SidebarSection>

        <SidebarSection title="Leads">
          <NavItem href="/admin/demos" icon="demo">Solicitudes de demo</NavItem>
          <NavItem href="/admin/llamadas" icon="phone">Solicitudes de llamada</NavItem>
        </SidebarSection>

        <SidebarSection title="Cartera">
          <NavItem href="/admin/clientes" icon="clients">Clientes</NavItem>
        </SidebarSection>

        <SidebarSection title="Análisis">
          <NavItem href="/admin/analitica" icon="analytics">Analítica</NavItem>
        </SidebarSection>

        <SidebarSection title="Configuración">
          <NavItem href="/admin/configuracion" icon="settings">Ajustes</NavItem>
        </SidebarSection>
      </nav>

      {user && (
        <div className="admin-user-card">
          <div className="admin-user-avatar">{user.name.slice(0, 2).toUpperCase()}</div>
          <div>
            <div className="admin-user-name">{user.name}</div>
            <div className="admin-user-email">{user.email}</div>
          </div>
        </div>
      )}
    </aside>
  );
}

function SidebarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="admin-nav-section">
      <div className="admin-nav-section-title">{title}</div>
      {children}
    </div>
  );
}

const ICONS: Record<string, React.ReactNode> = {
  dashboard: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  demo: (
    <>
      <path d="M3 3h18v4H3zM3 11h18v10H3z" />
    </>
  ),
  phone: (
    <>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </>
  ),
  clients: (
    <>
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" />
    </>
  ),
  analytics: (
    <>
      <path d="M3 3v18h18M7 14l4-4 4 4 5-5" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </>
  ),
};

function NavItem({ href, icon, children }: { href: string; icon: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="admin-nav-item">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {ICONS[icon]}
      </svg>
      {children}
    </Link>
  );
}

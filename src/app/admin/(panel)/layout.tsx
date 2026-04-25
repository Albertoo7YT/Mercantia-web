import type { Metadata } from 'next';
import { Sidebar } from '@/components/admin/Sidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { requireAuth } from '@/lib/auth';
import '../admin.css';

export const metadata: Metadata = {
  title: 'Admin — Mercantia',
  robots: { index: false, follow: false },
};

export default async function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireAuth();

  return (
    <div className="admin-shell">
      <Sidebar user={session.user} />
      <div className="admin-main">
        <AdminHeader user={session.user} />
        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import type { AdminUser } from '@prisma/client';

interface AdminHeaderProps {
  user?: AdminUser | null;
}

export function AdminHeader({ user }: AdminHeaderProps) {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <header className="admin-header">
      <div />
      <div className="admin-header-actions">
        {user && (
          <span className="admin-header-user">
            Hola, <strong>{user.name}</strong>
          </span>
        )}
        <button onClick={handleLogout} className="admin-btn admin-btn-ghost">
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}

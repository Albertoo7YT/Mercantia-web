import { ClientForm } from '@/components/admin/ClientForm';

export const metadata = { title: 'Nuevo cliente — Admin' };

export default function NuevoClientePage() {
  return <ClientForm mode="create" />;
}

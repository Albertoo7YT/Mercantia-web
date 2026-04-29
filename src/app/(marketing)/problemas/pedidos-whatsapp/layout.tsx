import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pedidos por WhatsApp: solución B2B para comerciales | Mercantia',
  description:
    'Deja de recibir pedidos por WhatsApp. Tus comerciales crean pedidos desde móvil con catálogo, stock, tarifas y clientes asignados. Demo en vivo sin registro.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

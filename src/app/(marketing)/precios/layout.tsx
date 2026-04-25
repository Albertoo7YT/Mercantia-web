import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Precios — Mercantia',
  description:
    'Planes desde 49€/mes. Sin permanencia, sin sorpresas. Todos los módulos incluidos en todos los planes. Cancela cuando quieras.',
};

export default function PreciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

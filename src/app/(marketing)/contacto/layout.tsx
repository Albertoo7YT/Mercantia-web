import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto — Mercantia',
  description:
    'Habla con Alberto, fundador de Mercantia. Por WhatsApp, email, teléfono o formulario. Respuesta en menos de 24h.',
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

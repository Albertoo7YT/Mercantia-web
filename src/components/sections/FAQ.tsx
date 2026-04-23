'use client';

import { useState } from 'react';
import { SectionHead } from './Features';

const faqs = [
  {
    q: '¿Cuánto se tarda en arrancar?',
    a: 'Entre 48 y 72 horas desde que nos envías tu catálogo y el listado de clientes. Admitimos Excel, CSV o conexión directa con tu ERP o ecommerce. Configuramos tu marca (logo, color, subdominio) y los roles antes de entregarte el acceso.',
  },
  {
    q: '¿Se integra con mi software de gestión?',
    a: 'Sí, con cualquiera. Tenemos integraciones con Sage, SAP Business One, Holded, A3, Odoo, Factusol, PrestaShop, WooCommerce, Shopify y más. Si usas un software a medida o uno que no está en la lista, lo conectamos durante el setup. Importación/exportación por CSV, Excel, API REST o conexión directa, lo que mejor encaje con tu caso.',
  },
  {
    q: '¿Y si un comercial pide stock que no hay?',
    a: 'El sistema lo impide. Puede marcar la línea como "bajo pedido" y usar el módulo de reservas. Nunca vas a prometer algo que no existe sin que quede registrado como tal.',
  },
  {
    q: '¿Mis datos están aislados?',
    a: 'Sí. Cada cliente dispone de su propia base de datos PostgreSQL, backups diarios y servidores en la UE. Cumplimiento RGPD, sin compartir infraestructura con otros clientes.',
  },
  {
    q: '¿Funciona en el móvil del comercial?',
    a: 'Sí. La aplicación web está optimizada para móvil y tablet. No requiere instalación: el comercial accede desde el navegador y tiene el catálogo, clientes y pedidos en el bolsillo.',
  },
  {
    q: '¿Puedo usar mi marca?',
    a: 'Completamente. Logo propio, color corporativo, subdominio personalizado y plantillas de email con tu marca. Tus comerciales y tus clientes nunca ven otro nombre.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="pt-6 pb-12" id="faq">
      <div className="max-w-[1220px] mx-auto px-6">
        <SectionHead
          eyebrow="Dudas frecuentes"
          title={<>Todo lo que quieres <span className="text-gradient">preguntar</span>.</>}
        />

        <div className="max-w-[760px] mx-auto bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl overflow-hidden">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
              isLast={i === faqs.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  isLast,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer group ${isLast ? '' : 'border-b border-[rgba(15,23,42,0.08)]'}`}
    >
      <div className="flex justify-between items-center gap-5 py-5 px-7 text-[17px] font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
        <span>{question}</span>
        <div
          className={`w-8 h-8 rounded-lg grid place-items-center relative flex-shrink-0 transition-all duration-300 ${
            isOpen ? 'bg-accent text-white' : 'bg-bg-soft text-ink'
          }`}
        >
          <span className="absolute w-3 h-px bg-current top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <span
            className={`absolute w-px h-3 bg-current top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
              isOpen ? 'scale-y-0' : 'scale-y-100'
            }`}
          />
        </div>
      </div>
      <div
        className="overflow-hidden transition-[max-height] duration-400"
        style={{ maxHeight: isOpen ? '400px' : '0' }}
      >
        <div className="px-7 pb-6 text-[15px] leading-relaxed text-ink-2">{answer}</div>
      </div>
    </div>
  );
}

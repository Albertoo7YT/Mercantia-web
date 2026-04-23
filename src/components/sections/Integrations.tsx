import { SectionHead } from './Features';

interface IntCard {
  label: string;
  name: string;
  type: string;
  logo?: string;
  imgClass?: string;
  initials?: string;
  gradient?: string;
  bg?: string;
}

const integrations: IntCard[] = [
  { label: 'Sage', name: 'Sage', type: 'ERP', logo: '/logos/sage.png', imgClass: 'max-h-14 max-w-[90%]' },
  { label: 'SAP', name: 'SAP B1', type: 'ERP', logo: '/logos/sap.svg', imgClass: 'max-h-10 max-w-[80%]' },
  { label: 'Holded', name: 'Holded', type: 'ERP', logo: '/logos/holded.webp' },
  { label: 'A3', name: 'Wolters A3', type: 'ERP', logo: '/logos/a3.svg', bg: 'bg-[#0070c0]' },
  { label: 'Odoo', name: 'Odoo', type: 'ERP', logo: '/logos/odoo.png', imgClass: 'max-h-8 max-w-[80%]' },
  { label: 'Factusol', name: 'Factusol', type: 'ERP', logo: '/logos/factusol.png', imgClass: 'max-h-9 max-w-[80%]' },
  { label: 'Presta', name: 'PrestaShop', type: 'Ecommerce', logo: '/logos/prestashop.jpg', imgClass: 'max-h-14 max-w-[95%]' },
  { label: 'Woo', name: 'WooCommerce', type: 'Ecommerce', logo: '/logos/woocommerce.svg', imgClass: 'max-h-9 max-w-[82%]' },
  { label: 'Shopify', name: 'Shopify', type: 'Ecommerce', logo: '/logos/shopify.png' },
  { label: 'Excel', name: 'Excel', type: 'Archivo', logo: '/logos/excel.png' },
  { label: 'CSV', name: 'CSV / TSV', type: 'Archivo', initials: 'C', gradient: 'from-ink to-[#2a2a2a]' },
];

export function Integrations() {
  return (
    <section className="pt-0 pb-12 bg-gradient-to-b from-bg to-warm" id="integraciones">
      <div className="max-w-[1220px] mx-auto px-6">
        <SectionHead
          eyebrow="Integraciones"
          title={<>Conecta con <span className="text-gradient">lo que ya usas</span></>}
          sub="Mercantia se integra con los principales ERPs, ecommerces y herramientas del mercado español. Sin dobles tecleos, sin migrar tus datos."
        />

        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-6 gap-3 max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 mb-10">
            {integrations.map((int) => (
              <IntegrationCard key={int.label} {...int} />
            ))}
            <IntegrationCardApi />
          </div>

          <div className="text-center text-sm text-ink-2 max-w-[560px] mx-auto leading-relaxed py-4 px-5 bg-surface border border-[rgba(15,23,42,0.08)] rounded-xl">
            ¿Tu software no está aquí?{' '}
            <strong className="text-ink font-semibold">Lo integramos nosotros.</strong>{' '}
            Nuestro equipo conecta Mercantia con prácticamente cualquier ERP o sistema a medida durante el setup. Solo tienes que decirnos qué usas.
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({ name, type, logo, imgClass, initials, gradient, bg }: IntCard) {
  return (
    <div className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl py-5 px-3 text-center transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,77,26,0.18)] flex flex-col items-center justify-center min-h-[130px]">
      {logo ? (
        bg ? (
          <div className={`w-12 h-12 mx-auto mb-2.5 rounded-[9px] grid place-items-center overflow-hidden flex-shrink-0 ${bg}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo}
              alt={`Logo ${name}`}
              className="max-w-[75%] max-h-[75%] object-contain"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="h-14 mb-2.5 flex items-center justify-center flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo}
              alt={`Logo ${name}`}
              className={`${imgClass ?? 'max-h-10 max-w-[85%]'} object-contain`}
              loading="lazy"
            />
          </div>
        )
      ) : (
        <div
          className={`w-10 h-10 mx-auto mb-2.5 rounded-[9px] grid place-items-center font-display font-extrabold text-base text-white tracking-tight relative overflow-hidden flex-shrink-0 bg-gradient-to-br ${gradient ?? 'from-ink to-[#2a2a2a]'}`}
        >
          {initials}
        </div>
      )}
      <div className="text-[13px] font-semibold text-ink mb-0.5 tracking-tight leading-tight break-words">
        {name}
      </div>
      <div className="font-mono text-[9px] uppercase tracking-widest text-ink-3 font-medium">
        {type}
      </div>
    </div>
  );
}

function IntegrationCardApi() {
  return (
    <div className="bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl py-5 px-3 text-center transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,77,26,0.18)] flex flex-col items-center justify-center min-h-[130px]">
      <div className="w-12 h-12 mx-auto mb-2.5 rounded-[9px] grid place-items-center bg-gradient-accent flex-shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
        </svg>
      </div>
      <div className="text-[13px] font-semibold text-ink mb-0.5 tracking-tight leading-tight break-words">
        API REST
      </div>
      <div className="font-mono text-[9px] uppercase tracking-widest text-ink-3 font-medium">
        Custom
      </div>
    </div>
  );
}

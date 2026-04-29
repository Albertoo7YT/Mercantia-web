import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  return (
    <footer className="mt-20 pt-16 pb-10 border-t border-[rgba(15,23,42,0.08)] bg-surface">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10 max-md:grid-cols-2 max-md:gap-8">
          <div className="max-md:col-span-2">
            <Logo size="md" />
            <p className="text-sm text-ink-3 max-w-[320px] mt-3.5 leading-relaxed">
              Portal B2B de pedidos y gestión comercial para fabricantes y distribuidores que venden por representantes.
            </p>
          </div>
          <FooterCol title="Producto">
            <a href="https://demo.mercantia.pro" target="_blank" rel="noopener noreferrer">
              Probar demo en vivo ↗
            </a>
            <a href="/#producto">Módulos</a>
            <a href="/#integraciones">Integraciones</a>
            <Link href="/precios">Precios</Link>
            <a href="/#comparativa">Por qué Mercantia</a>
            <Link href="/problemas/pedidos-whatsapp">Pedidos por WhatsApp</Link>
          </FooterCol>
          <FooterCol title="Empresa">
            <Link href="/sobre-nosotros">Sobre nosotros</Link>
            <Link href="/contacto">Contacto</Link>
            <a href="#">Estado</a>
          </FooterCol>
          <FooterCol title="Legal">
            <Link href="/legal/aviso-legal">Aviso Legal</Link>
            <Link href="/legal/privacidad">Privacidad</Link>
            <Link href="/legal/terminos">Términos</Link>
            <Link href="/legal/cookies">Cookies</Link>
            <Link href="/legal/rgpd">RGPD</Link>
          </FooterCol>
        </div>
        <div className="pt-6 border-t border-[rgba(15,23,42,0.08)] flex justify-between items-center text-[13px] text-ink-3 max-md:flex-col max-md:gap-2 max-md:text-center">
          <div className="font-mono text-xs">© {new Date().getFullYear()} Mercantia · Todos los derechos reservados</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-wider text-ink-3 mb-4 font-medium">
        {title}
      </h4>
      <div className="[&>a]:block [&>a]:text-sm [&>a]:text-ink-2 [&>a]:no-underline [&>a]:py-1.5 [&>a]:transition-colors [&>a:hover]:text-accent">
        {children}
      </div>
    </div>
  );
}

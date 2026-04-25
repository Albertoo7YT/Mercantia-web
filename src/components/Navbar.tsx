'use client';

import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { DEMO_URL } from '@/lib/contact';

export function Navbar() {

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-3.5 backdrop-blur-xl bg-bg/80 border-b border-[rgba(15,23,42,0.08)]">
      <div className="max-w-[1220px] mx-auto flex items-center justify-between">
        <Logo size="md" />

        <div className="hidden md:flex gap-8 items-center">
          <a href="/#producto" className="text-sm font-medium text-ink-2 hover:text-ink transition-colors">Producto</a>
          <a href="/#integraciones" className="text-sm font-medium text-ink-2 hover:text-ink transition-colors">Integraciones</a>
          <a href="/precios" className="text-sm font-medium text-ink-2 hover:text-ink transition-colors">Precios</a>
          <a href="/#faq" className="text-sm font-medium text-ink-2 hover:text-ink transition-colors">FAQ</a>
          <a href="/contacto" className="text-sm font-medium text-ink-2 hover:text-ink transition-colors">Contacto</a>
        </div>

        <div className="flex gap-2 items-center">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 py-2 px-3.5 text-[13px] font-semibold text-ink hover:text-accent transition-colors no-underline"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald" />
            </span>
            Probar demo
          </a>

          <Button variant="primary" size="sm" withArrow asLink href="/contacto">
            Contactar
          </Button>
        </div>
      </div>
    </nav>
  );
}

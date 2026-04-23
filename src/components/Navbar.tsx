'use client';

import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { useDemo } from '@/lib/demo-context';

export function Navbar() {
  const { openDemo, openCallRequest } = useDemo();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-3.5 backdrop-blur-xl bg-bg/80 border-b border-[rgba(15,23,42,0.08)]">
      <div className="max-w-[1220px] mx-auto flex items-center justify-between">
        <Logo size="md" />

        <div className="hidden md:flex gap-8 items-center">
          <a href="#producto" className="text-sm font-medium text-ink-2 hover:text-ink transition-colors">Producto</a>
          <a href="#integraciones" className="text-sm font-medium text-ink-2 hover:text-ink transition-colors">Integraciones</a>
          <a href="#infraestructura" className="text-sm font-medium text-ink-2 hover:text-ink transition-colors">Infraestructura</a>
          <a href="#comparativa" className="text-sm font-medium text-ink-2 hover:text-ink transition-colors">Por qué</a>
          <a href="#faq" className="text-sm font-medium text-ink-2 hover:text-ink transition-colors">FAQ</a>
        </div>

        <div className="flex gap-2 items-center">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Entrar</Button>
          <Button variant="ghost" size="sm" className="hidden md:inline-flex" onClick={openCallRequest}>
            Llámame
          </Button>
          <Button variant="primary" size="sm" withArrow onClick={openDemo}>
            Pedir demo
          </Button>
        </div>
      </div>
    </nav>
  );
}

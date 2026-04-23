'use client';

import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  withArrow?: boolean;
  asLink?: boolean;
  href?: string;
}

const base =
  'font-sans font-semibold rounded-[10px] inline-flex items-center gap-1.5 transition-all duration-200 tracking-tight whitespace-nowrap cursor-pointer border border-transparent group';

const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-white shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)] hover:bg-accent hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(255,77,26,0.18),0_1px_2px_rgba(255,77,26,0.2)]',
  outline:
    'bg-surface text-ink border-[rgba(15,23,42,0.14)] hover:border-ink',
  ghost: 'text-ink-2 hover:text-ink hover:bg-bg-soft',
};

const sizes: Record<Size, string> = {
  sm: 'py-2 px-3.5 text-[13px]',
  md: 'py-2.5 px-4 text-sm',
  lg: 'py-3.5 px-5 text-[15px]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, withArrow, className = '', asLink, href, ...props }, ref) => {
    const content = (
      <>
        {children}
        {withArrow && (
          <span className="text-base leading-none transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        )}
      </>
    );

    if (asLink && href) {
      return (
        <a href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className} no-underline`}>
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

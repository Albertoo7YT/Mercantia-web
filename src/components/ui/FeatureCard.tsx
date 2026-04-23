import { ReactNode } from 'react';

interface FeatureCardProps {
  number: string;
  title: string;
  desc: string;
  icon: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function FeatureCard({
  number,
  title,
  desc,
  icon,
  children,
  className = '',
}: FeatureCardProps) {
  return (
    <div
      className={`bg-surface border border-[rgba(15,23,42,0.08)] rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:border-[rgba(15,23,42,0.14)] hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(15,23,42,0.1)] ${className}`}
    >
      <div className="w-10 h-10 rounded-[10px] bg-accent-soft text-accent grid place-items-center mb-5 relative">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </div>
      <div className="font-mono text-[11px] text-accent tracking-wider mb-2.5">{number}</div>
      <h3 className="font-display text-xl font-bold tracking-tight mb-2 leading-tight">{title}</h3>
      <p className="text-sm text-ink-2 leading-relaxed">{desc}</p>
      {children}
    </div>
  );
}

import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export function Logo({ size = 'md', href = '/' }: LogoProps) {
  const sizeMap = {
    sm: { mark: 22, markIcon: 11, text: 'text-base', gap: 'gap-2' },
    md: { mark: 30, markIcon: 14, text: 'text-lg', gap: 'gap-2.5' },
    lg: { mark: 44, markIcon: 22, text: 'text-2xl', gap: 'gap-3' },
  };
  const s = sizeMap[size];

  return (
    <Link
      href={href}
      className={`flex items-center ${s.gap} font-display font-bold tracking-tight text-ink no-underline`}
    >
      <div
        className="bg-gradient-accent relative grid place-items-center overflow-hidden"
        style={{
          width: `${s.mark}px`,
          height: `${s.mark}px`,
          borderRadius: `${s.mark * 0.26}px`,
        }}
      >
        <svg
          width={s.markIcon}
          height={s.markIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10"
        >
          <path d="M3 12h4l3-9 4 18 3-9h4" />
        </svg>
      </div>
      <span className={s.text}>Mercantia</span>
    </Link>
  );
}

import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const HEIGHT_PX: Record<NonNullable<LogoProps['size']>, number> = {
  sm: 22,
  md: 32,
  lg: 48,
};

export function Logo({ size = 'md', href = '/' }: LogoProps) {
  const height = HEIGHT_PX[size];

  return (
    <Link
      href={href}
      aria-label="Mercantia — inicio"
      className="inline-flex items-center no-underline shrink-0"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="Mercantia"
        style={{ height, width: 'auto' }}
        className="block select-none"
        draggable={false}
      />
    </Link>
  );
}

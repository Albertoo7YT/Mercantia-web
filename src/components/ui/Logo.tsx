import Image from 'next/image';
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

// Logo source dimensions (post-resize): 1000 x 194
const LOGO_RATIO = 1000 / 194;

export function Logo({ size = 'md', href = '/' }: LogoProps) {
  const height = HEIGHT_PX[size];
  const width = Math.round(height * LOGO_RATIO);

  return (
    <Link
      href={href}
      aria-label="Mercantia — inicio"
      className="inline-flex items-center no-underline shrink-0"
    >
      <Image
        src="/logo.png"
        alt="Mercantia"
        width={width}
        height={height}
        priority={size !== 'sm'}
        className="block select-none"
        draggable={false}
      />
    </Link>
  );
}

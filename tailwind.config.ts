import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#fafaf9',
        'bg-soft': '#f4f4f3',
        surface: '#ffffff',
        ink: '#0a0a0a',
        'ink-2': '#4b5563',
        'ink-3': '#737373',
        'ink-4': '#a3a3a3',
        accent: '#ff4d1a',
        'accent-2': '#ff7a3d',
        'accent-soft': '#fff1ec',
        cobalt: '#0a2540',
        'cobalt-soft': '#eaf0f8',
        warm: '#fff7f3',
        'warm-2': '#ffefe6',
        amber: '#f59e0b',
        emerald: '#059669',
      },
      fontFamily: {
        display: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.03)',
        mockup:
          '0 0 0 1px rgba(0,0,0,0.02), 0 30px 60px -20px rgba(15,23,42,0.18), 0 20px 40px -12px rgba(15,23,42,0.1), 0 -2px 0 0 rgba(255,255,255,0.8) inset',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease both',
        'pulse-ring': 'pulseRing 2s infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%, 100%': { boxShadow: '0 0 0 3px rgba(255, 77, 26, 0.18)' },
          '50%': { boxShadow: '0 0 0 6px rgba(255, 77, 26, 0.08)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

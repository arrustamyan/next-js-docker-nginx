import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': 'var(--font-tinos), serif',
        'subtitle': 'var(--font-roboto-mono), monospace',
        'display': 'var(--font-lato), sans-serif',
        'new-york-medium': 'var(--font-tinos), serif',
        'new-york-small': 'var(--font-tinos), serif',
        'new-york-extra-large': 'var(--font-tinos), serif',
        'SF-pro-text': 'var(--font-lato), sans-serif',
        'SF-pro-display': 'SF Pro Display',
        'roboto-mono': 'var(--font-roboto-mono), monospace',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        ticker: 'ticker 25s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(calc(-100% - 16px))',
          }
        },
      }
    },
  },
  plugins: [],
};
export default config;

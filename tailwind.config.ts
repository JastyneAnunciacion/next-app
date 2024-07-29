import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'responsive-xs': 'calc(0.6rem + 1vw)',
        'responsive-sm': 'calc(0.75rem + 1vw)',
        'responsive-md': 'calc(1rem + 1vw)',
        'responsive-lg': 'calc(1.25rem + 1vw)',
        'wallet-header-responsive-320': 'calc(0.45rem + 1vw)',
        'wallet-header-responsive-xs': 'calc(0.55rem + 1vw)',
        'wallet-header-responsive-sm': 'calc(0.75rem + 1vw)',
        'wallet-header-responsive-md': 'calc(1rem + 1vw)',
        'wallet-header-responsive-lg': 'calc(1.25rem + 1vw)'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
export default config

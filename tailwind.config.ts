import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#032EA1',
          light: '#1e5dc7',
          dark: '#021e6b',
        },
        secondary: {
          DEFAULT: '#D4AF37',
          light: '#f4cf5d',
          dark: '#b8941f',
        },
        'accent-gold': '#D4AF37',
        accent: {
          DEFAULT: '#E00025',
          light: '#ff1a3d',
          dark: '#a8001c',
          gold: '#D4AF37',
        },
      },
    },
  },
  plugins: [],
}
export default config

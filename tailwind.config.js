/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        yellow: { DEFAULT: '#FFD700', hover: '#FFC200', muted: '#1A1500' },
        dark: { DEFAULT: '#0A0A0A', card: '#111111', alt: '#0E0E0E', border: '#1E1E1E' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

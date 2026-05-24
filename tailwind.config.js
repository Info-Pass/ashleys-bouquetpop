/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pink: { DEFAULT: '#FF2D78', dark: '#cc1f5a' },
        gold: { DEFAULT: '#FFD700', dark: '#ccac00' },
        bg: '#0a0a0a',
        card: '#161616',
        'text-primary': '#F5F0E8',
        'text-muted': '#9a9a9a',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        accent: ['"Bebas Neue"', 'cursive'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Color-Fondo': '#2B2B2B',
        'Color-Spotify': '#1ED760'
      },
      animation: {
        'scroll-content': 'animation-scroll 10s linear infinite'
      },
      keyframes: {
        'animation-scroll': {
          '0%': { transform:  'translateX(0%)' },
          '9%': { transform:  'translateX(0%)' },
          '100%': { transform:  'translateX(-100%)' }
        }
      }
    },
  },
  plugins: [],
}

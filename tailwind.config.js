/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cafe': {
          100: '#F5E6D3',
          200: '#E6D5C3',
          300: '#D4B499',
          400: '#A67B5B',
          500: '#8B593B',
          600: '#6F4E37',
        },
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
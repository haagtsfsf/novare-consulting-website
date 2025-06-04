/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'navy': {
          50: '#f0f3ff', 100: '#e6eaff', 200: '#d1d9ff', 300: '#b3c0ff',
          400: '#8fa0ff', 500: '#6b7fff', 600: '#4338ca', 700: '#3730a3',
          800: '#312e81', 900: '#1e1b4b',
        },
        'beige': {
          50: '#faf9f6', 100: '#f5f3ed', 200: '#ebe6d6', 300: '#ddd4bb',
          400: '#ccc09b', 500: '#b8a882', 600: '#a5956f', 700: '#8a7d5e',
          800: '#726750', 900: '#5e5544',
        }
      },
      fontFamily: { 'sans': ['Inter', 'system-ui', 'sans-serif'] },
      backdropBlur: { xs: '2px' }
    },
  },
  plugins: [],
}

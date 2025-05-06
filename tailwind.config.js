/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg,rgb(25, 24, 24) 0%, #0B0809 50%, #000000 100%)',
      },
      fontFamily: {
        // Override default `font-sans` to use Montserrat first
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui',
               '-apple-system', 'BlinkMacSystemFont',
               '"Segoe UI"', 'Roboto', '"Helvetica Neue"',
               'Arial', '"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#dcf0dc',
          200: '#bde1bd',
          300: '#8fcc8f',
          400: '#5aae5a',
          500: '#00d09c',
          600: '#00b386',
          700: '#009c73',
          800: '#007a5a',
          900: '#006349',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
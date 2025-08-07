/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        'primary-green': '#b9d110',
        'secondary-green': '#cde438',
        'dark-green': '#697a09',
        'off-white': '#000000',
        'nav': {
          dark: '#1E293B',
          light: '#334155'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
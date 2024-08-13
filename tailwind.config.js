/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        Segoe: ['Segoe UI', 'sans-serif']
      },
      colors: {
        'dark-theme': '#202020',
        'light-theme': '#f3f3f3'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};

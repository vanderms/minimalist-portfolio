/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '19.4375rem',
      md: '45rem',
      xl: '74rem',
      xxl: '90.25rem'
    },
    fontFamily: {
      sans: "'Public Sans', sans-serif",
      serif: "'Ibarra Real Nova', serif",
    },
    extend: {},
  },
  plugins: [],
}
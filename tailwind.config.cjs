/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "var(--primary)",
      "secondary": "var(--secondary)",
      "danger": "var(--danger)",
      "neutral-50": "var(--neutral-50)",
      "neutral-100": "var(--neutral-100)",
      "neutral-200": "var(--neutral-200)",
      "neutral-500": "var(--neutral-500)",
      "neutral-800": "var(--neutral-800)",
      "transparent": "transparent",
    },

    screens: {
      sm: '19.4375rem',
      md: '45rem',
      xl: '74rem',
    },
    fontFamily: {
      sans: "'Public Sans', sans-serif",
      serif: "'Ibarra Real Nova', serif",
    },
    extend: {},
  },
  plugins: [],
}
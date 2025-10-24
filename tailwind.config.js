/** @type {import('tailwindcss').Config}  */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // Scan your HTML pages at the repo root and any JS in /assets
  content: ["./*.html", "./assets/**/*.js"],

  theme: {
    extend: {
      // Octopus Tennis brand palette (compiled; no overlay needed)
      colors: {
        brand: {
          50:  "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9", // primary
          600: "#0284c7",
          700: "#0369a1", // darker/hover
          800: "#075985",
          900: "#0c4a6e",
        },
        accent: {
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#22d3ee", // cyan accent
          400: "#06b6d4",
        },
        highlight: {
          lime: "#a3e635", // active nav underline / focus accent
        },
      },

      // Keep typography consistent with your current setup
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },

  // Classes toggled by your JS that shouldn’t be purged
  safelist: [
    "hidden",
    "invisible",
    "opacity-0",
    "-translate-y-2",
    "translate-y-0",
  ],

plugins: [
  function ({ addComponents, theme }) {
    const lime = theme('colors.highlight.lime'); // #a3e635

    addComponents({
      /* Active page underline (top + bottom nav) */
      'nav a[aria-current="page"]': { borderColor: lime },
      'footer nav a[aria-current="page"]': { borderColor: lime },

      /* Subtle hover brighten for ALL nav links */
      'nav a:hover': { borderColor: '#bef264' },        // lime-300-ish
      'footer nav a:hover': { borderColor: '#bef264' },
    });
  },
],


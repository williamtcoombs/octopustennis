/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.html", "./assets/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Octopus Tennis brand palette
        brand: {
          700: "#0ea5e9", // primary (used for text-brand-700, bg-brand-700, gradients)
          800: "#0369a1", // darker step (hover/bg-brand-800, gradients)
          // 600: "#0284c7", // optional intermediate step if you need it later
        },
        accent: {
          300: "#22d3ee", // secondary accent (cyan-300)
        },
        highlight: {
          lime: "#a3e635", // active nav underline
        },
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },
  safelist: [
    // Classes toggled by JS or used conditionally
    "hidden", "invisible", "opacity-0", "-translate-y-2", "translate-y-0",
  ],
  plugins: [],
};

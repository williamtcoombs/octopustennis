/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        highlight: {
          lime: '#a3e635',
          blue: '#0ea5e9',
          navy: '#0369a1',
        },
      },
    },
  },
  safelist: [
    'bg-highlight-lime',
    'text-highlight-blue',
    'text-highlight-navy',
  ],
  plugins: [
    function ({ addComponents, theme }) {
      const lime = theme('colors.highlight.lime');

      addComponents({
        /* Active page underline (top + bottom nav) */
        'nav a[aria-current="page"]': { borderColor: lime },
        'footer nav a[aria-current="page"]': { borderColor: lime },

        /* Subtle hover brighten for ALL nav links */
        'nav a:hover': { borderColor: '#bef264' },
        'footer nav a:hover': { borderColor: '#bef264' },
      });
    },
  ],
};

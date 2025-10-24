/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette (teal/blue + lime) using numeric keys to match your HTML
        brand: {
          700: '#0369a1', // teal-blue (hero/base)
          800: '#075985', // deeper teal (gradient 'from')
          accent: '#a3e635', // lime accent for borders/hover/accents
        },
      },
    },
  },
  safelist: [
    // Ensure legacy utilities used in your HTML are always present
    'bg-brand-700',
    'from-brand-800',
    'to-brand-700',
    'text-brand-700',

    // Common accent usages
    'text-brand-accent',
    'bg-brand-accent',
    'border-brand-accent',
  ],
  plugins: [
    function ({ addComponents, theme }) {
      const accent = theme('colors.brand.accent');
      addComponents({
        /* Active page underline (top + bottom nav) */
        'nav a[aria-current="page"]': { borderColor: accent },
        'footer nav a[aria-current="page"]': { borderColor: accent },

        /* Subtle hover brighten for ALL nav links */
        'nav a:hover': { borderColor: '#bef264' },
        'footer nav a:hover': { borderColor: '#bef264' },
      });
    },
  ],
};

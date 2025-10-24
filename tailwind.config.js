/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        // Consolidated active palette: brand = teal-blue base + lime accent
        brand: {
          base: '#0369a1',   // teal-blue (core brand tone)
          accent: '#a3e635', // lime accent
          dark: '#075985',   // deeper shade for gradients or hover
        },
      },
    },
  },
  safelist: [
    // ensure brand utilities are always available in production builds
    'bg-brand-base',
    'bg-brand-accent',
    'from-brand-dark',
    'to-brand-base',
    'text-brand-base',
    'text-brand-accent',
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

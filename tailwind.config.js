/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
    "./**/*.js",
    "./**/*.svg",
    "./**/*.png",
    "./**/*.jpg",
    "./**/*.jpeg",
    "./**/*.webp",
    "./**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          accent: "#84cc16",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      const accent = theme("colors.brand.accent");
      const teal = theme("colors.brand.600");

      addComponents({
        /* ============================
           NAV ACTIVE + HOVER STYLING
           ============================ */

        'nav a[aria-current="page"]': {
          borderBottomWidth: "2px",
          borderColor: accent,
          borderStyle: "solid",
        },
        'footer nav a[aria-current="page"]': {
          borderBottomWidth: "2px",
          borderColor: accent,
          borderStyle: "solid",
        },

        "nav a:hover": {
          borderBottomWidth: "2px",
          borderColor: "#bef264",
          borderStyle: "solid",
        },
        "footer nav a:hover": {
          borderBottomWidth: "2px",
          borderColor: "#bef264",
          borderStyle: "solid",
        },

        /* =========================================
           COACH’S CORNER – HUDDLE HIGHLIGHT IDENTITY
           ========================================= */

        ".coachs-corner": {
          maxWidth: "760px",
          margin: "4rem auto 6rem",
          padding: "2.5rem 2rem",
          backgroundColor: "#ffffff",
          borderRadius: "0.75rem",
          border: "1px solid rgba(0,0,0,0.07)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          position: "relative",
        },

        ".coachs-corner::before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          height: "6px",
          width: "100%",
          background: `linear-gradient(90deg, ${teal}, ${accent})`,
          borderRadius: "0.75rem 0.75rem 0 0",
        },

        ".cc-header": {
          textAlign: "center",
          marginBottom: "2.5rem",
        },

        ".cc-label": {
          display: "block",
          textTransform: "uppercase",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          fontWeight: "700",
          color: teal,
        },

        ".cc-title": {
          margin: "0.4rem 0 0",
          fontSize: "1.9rem",
          fontWeight: "800",
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          color: "#0f172a",
        },

        ".cc-body h3": {
          marginTop: "2rem",
          marginBottom: "0.5rem",
          fontSize: "1rem",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "#1e293b",
        },

        ".cc-body p": {
          marginTop: "0",
          color: "#334155",
          lineHeight: "1.6",
        },

        ".cc-body ul": {
          margin: "0.5rem 0 1rem 1.25rem",
          color: "#334155",
          lineHeight: "1.55",
        },

        ".cc-body li": {
          marginBottom: "0.4rem",
        },
      });
    },
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ranade", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
      colors: {
        "arg-blue": "#74B3CE",
        "arg-dark": "#1A232C",
        "arg-gold": "#BC9850",
        "arg-muted": "#D2B578",
        "arg-white": "#F9F2E0",
        // new colors 👆 //
        // original colors 👇 //
        // "arg-gold": "#d3d359",
        // "arg-gold-dark": "#8C7241",
        // "arg-white": "#f2f2f2",
        // primary: "#222222",
      },
      gridTemplateRows: {
        "auto-1fr-auto": "auto 1fr auto",
        "1fr-auto": "1fr auto",
      },
      maxWidth: {
        heading: "20ch",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: true,
    logs: false,
    rtl: false,
  },
};

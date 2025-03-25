/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Use as font-custom
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary-main)", // default `primary`
          main: "var(--color-primary-main)", // `primary-main`
          light: "var(--color-primary-light)", // `primary-light`
        },
        secondary: {
          DEFAULT: "var(--color-secondary-main)",
          main: "var(--color-secondary-main)",
          light: "var(--color-secondary-light)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

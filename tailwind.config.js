/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "var(--font-libreBaskerville)",
        body: "var(--font-libreBaskerville)",
      },
      letterSpacing: {
        widest: ".2em",
      },
    },
  },
  plugins: [],
};

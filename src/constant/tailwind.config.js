/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "hsla(218, 54%, 30%, 1)",
        color2: "hsla(0, 0%, 100%, 1)",
        color3: "hsla(203, 57%, 97%, 1)",
      },
    },
  },
  plugins: [],
};

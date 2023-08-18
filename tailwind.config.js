/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        col2: "repeat(2, minmax(250px,1fr))",
        col3: "repeat(3, minmax(250px, 1fr))",
      },
      width: {
        widthMax: "1250px",
      },
      backgroundImage: {
        shoes: "url('/Rectangle37.png')",
      },
    },
  },
  plugins: [],
};

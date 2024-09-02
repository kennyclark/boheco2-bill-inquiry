/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "b2-gradient":
          "linear-gradient(90deg, rgba(255, 170, 5, 1) 0%, rgba(255, 240, 5, 1) 50%, rgba(255, 170, 5, 1) 100%)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "b2-orange": "#FFAB06",
        "b2-yellow": "#FFF005",
      },
    },
  },
  plugins: [],
};

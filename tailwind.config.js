/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#00296B",
      secondary: "#FFD500",
      black: "#000",
      white: "#fff",
      text: "#666666",
      username: "#999999",
      transparent: "#00000000",
    },
    extend: {
      fontFamily: {
        display: "poppins",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#38b6ff",
      secondary: "#ffde59",
      black: "#000",
      white: "#fff",
      text: "#666666",
      username: "#999999",
    },
    extend: {
      fontFamily: {
        display: "poppins",
      },
    },
  },
  plugins: [],
};

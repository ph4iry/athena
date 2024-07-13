/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#ec3750",
        orange: "#ff8c37",
        yellow: "#f1c40f",
        green: "#33d6a6",
        cyan: "#5bc0de",
        blue: "#338eda",
        purple: "#a633d6",
      }
    },
  },
  plugins: [],
}
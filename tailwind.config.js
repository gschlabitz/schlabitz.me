/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      blue: "#22d",
      darkgray: "#333",
      lightgray: "#ddd",
    },
    fontFamily: {
      sans: ["Helvetica Neue", "Helvetica", "Tahoma", "Arial", "sans-serif"],
      serif: ["Garamond", "New Times Roman", "serif"],
    },
    extend: {},
  },
  plugins: [],
}

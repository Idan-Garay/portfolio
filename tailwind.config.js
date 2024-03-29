/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "highlight": "#4D3EED",
        "secondary": "#F7FBFF",
        "dark-highlight": "#3146a6"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

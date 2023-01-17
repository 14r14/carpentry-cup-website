/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dela-gothic': ['Dela Gothic One', 'cursive'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
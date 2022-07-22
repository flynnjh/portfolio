/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '450px',
      'md': '724px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
plugins: [require("daisyui")],
}
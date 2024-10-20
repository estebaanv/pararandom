/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}" // Asegúrate de que Tailwind esté atento a todos los archivos en src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
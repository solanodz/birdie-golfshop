/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'verdeOscuro': '#006600',
      'verdeClaro': '#5ec561',
      'gris': '#c8c8c8'
    },
  },
  plugins: [],
}


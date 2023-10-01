/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'transparente': 'transparent',
      'black': '#000000',
      'white': '#FFFFFF',
      'verdeOscuro': '#006600',
      'verdeClaro': '#5ec561',
      'gris': '#ececec',
      'grisOscuro': '#555555',
      'rojo': 'rgb(220 38 38)'
    },
    fontFamily: {
      'heading': 'Dela Gothic One',
    }
  },
  plugins: [],
}


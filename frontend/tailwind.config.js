/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty : {
        "width": "width",
        "height": "height",
      },
      colors: {
        'purple-heart': {
          '50': '#faf5ff',
          '100': '#f3e8ff',
          '200': '#e9d6fe',
          '300': '#d7b5fd',
          '400': '#bf86fa',
          '500': '#a657f5',
          '600': '#9135e8',
          '700': '#7c24cc',
          '800': '#7025b1',
          '900': '#571d86',
          '950': '#3a0863',
        },
      }
    },
  },
  plugins: [],
}
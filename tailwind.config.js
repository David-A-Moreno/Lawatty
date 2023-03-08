/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        black: colors.black,
        white: colors.white,
        transparent: 'transparent',
        current: 'currentColor',
        'gray-line': '#D9D9D9',
        'blue-text-button': '#2B78E4',
        'hover-color-button': '#C1D7F6',
        'click-color-button': '#72ABFA',
        'purple-text': '#2C2738',
        'hover-color-button-back': '#256CD0',
        'click-color-button-back': '#205DB2',
        'sky-blue': '#7A96BD'
      },
      
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
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
        transparent: 'transparent',
        current: 'currentColor',
        'blue-text-button': '#2B78E4',
        'purple-text': '#2C2738'
      },
      
  },
  plugins: [],
}

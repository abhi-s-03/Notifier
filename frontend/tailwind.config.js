/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble': '#ff77e9',
        'bermuda': '#78dcca',
        'black':'black',
        'yellow':'#FDDA0D',
        'grey':'#808080',
        'lightblu':'#f5f5f55e'
      },
      
    },
  },
  plugins: [],
};

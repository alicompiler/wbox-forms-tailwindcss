const colors = require('tailwindcss/colors');
module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors : {
      ...colors,
      primary : colors.indigo,
      secondary : colors.green,
      error : colors.red,
      warning : colors.amber,
      transparent: '#0000'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

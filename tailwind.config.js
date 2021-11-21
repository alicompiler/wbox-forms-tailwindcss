const colors = require('tailwindcss/colors');
module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors : {
      primary : colors.indigo,
      secondary : colors.green,
      error : colors.red,
      warning : colors.amber,
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

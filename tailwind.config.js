/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./resources/**/*.blade.php', './resources/**/*.ts', './resources/**/*.vue'],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      primary: '#231815',
      gray: '#C2C2C2',
      'dark-gray': '#D9D9D9',
      'on-dark-gray': '#8F8C8C',
      bgcolor: '#EBEBEB',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      mplus: ['"M PLUS 2"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

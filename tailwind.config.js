/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./resources/**/*.blade.php', './resources/**/*.ts'],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      primary: '#231815',
      gray: '#C2C2C2',
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

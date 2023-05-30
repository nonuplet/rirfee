/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./resources/**/*.blade.php', './resources/**/*.ts'],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      primary: '#231815',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

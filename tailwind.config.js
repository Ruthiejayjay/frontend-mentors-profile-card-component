/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'dark-cyan': 'hsl(185, 75%, 39%)',
      'very-dark-desaturated-blue': 'hsl(229, 23%, 23%)',
      'dark-grayish-blue': 'hsl(227, 10%, 46%)',
      'dark-gray': 'hsl(0, 0%, 59%)',
      'gray': 'hsla(228, 9%, 92%, 1)',
      'white': 'hsla(0, 0%, 100%, 1)'
    },
    fontFamily: {
      KumbhSans: ['Kumbh Sans', 'cursive']
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      inter: ['\'Inter\'', 'sans-serif'],
      'lexend-deca': ['\'Lexend Deca\'', 'sans-serif'],
    },
    extend: {
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
      },
    },
  },
  plugins: [],
}


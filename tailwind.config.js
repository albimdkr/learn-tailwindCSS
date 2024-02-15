/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
      },
      fontFamily: {
        inter: ['Inter'],
      },
      colors: {
        h1GreenTetik: '#0D9276',
      },
    },
  },
  plugins: [],
};


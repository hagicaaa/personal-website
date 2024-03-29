/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'primary': '#4338ca',
        'dark': '#0f172a'
      },
      screens: {
        '2xl': '1320px',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}


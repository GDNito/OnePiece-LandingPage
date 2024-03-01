/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors: {
      'black-transparent' : 'rgba(0, 0, 0, .5)'
    }
    },
  },
  plugins: [],
}


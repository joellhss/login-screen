/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/*.jsx",
    './src/components/*.jsx',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        form: {
          textBase: '#afb6c2',
          textTitle: '#d4ccb6',
          background: '#191816',
          primaryColor: '#ffc632',
        },
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

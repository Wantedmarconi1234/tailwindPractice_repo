/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {


    extend: {
      fontFamily: {
        fontfamily1: ['Manrope',"sans-serif"]
      },

      colors: {
        projcolor: {
          cream: "#f2ebe3",
          darkCyan: "#3c8067",
          darkBlue: "#1c232b",
          grayishBlue: "#6c7289",
          white: "#ffffff"
        }
      }
    },
  },
  plugins: [],
}


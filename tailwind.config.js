/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',  
  ],
  theme: {
    extend: {
      colors: {
        lavender: "#ebeffe",
        ghostwhite: "#f4f7ff",
        midnightblue: "#020f4b",
        black: "#000",
        white: "#fff",
        "color-text-dark": "#2f2f2f",
        "color-dark": "#121212",
        red: "rgba(255, 0, 0, 0)",
        whitesmoke: "#f7f7f7",
      },
      fontFamily: {
        "fira-code": "'Fira Code'",
        montserrat: "Montserrat",
        roboto: "Roboto",
        poppins: "Poppins",
      },
      borderRadius: {
        "6xl": "25px",
        "181xl": "200px",
        xl: "20px",
      },
    },
  },
  
  plugins: [ require('tailwind-scrollbar'),],

}

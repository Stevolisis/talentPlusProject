/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        bgPrimary:'#11141e',
        bgSecondary:'#1f232e',
        bgTertiary:'#2a2b37',
        txtPrimary:'#d8d8da',
        txtSecondary:'#5a5c68',
        brPrimary:'#B39B68',
        brSecondary:'#CAAE81',
        brTertiary:'#D8C29D',
        bgDark:'#11100b',
        loaderShade:'#4d442f',
        mainBg:'#0c0b08'
      },
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        bgWhole:'#F8F9FC',
        bgPrimary:'#004DB3',
        bgSecondary:'#000F24',
        bgEmailButton:'#054FB3',
        bgCompany:'#CCDBF0',
        bgBorder:'#5588CC',
        bgSectionMarket:'rgba(30, 93, 206, .2)',
        subGreen:'#AECD5E',
        subBlue:'#4C7FBD',
        subOrange:'#EA6B45',
        subPink:'#ED6BA6',
        emailInputGrayIcons:'#2A2A2B',
        neutral:'#FFFFFF',
        bgCourseGreen:'rgba(63, 169, 106, .2)',
        iconCourseGreen:'#3FA96A',
        bgCourseOrange:'#F69E8E',
        iconCourseOrange:'rgba(246, 158, 142, .2)',
        bgCoursePurple:'#4d442f',
        iconCoursePurple:'#4d442f',
        bgCourseBlue:'#4d442f',
        iconCourseBlue:'#4d442f',
        txtLight:"#A1A1A1",
        txtHeaderLight:"#AAC4E6",
        // fontLogo:"Amazing Kids",
        // mainFont:"Clash Display",bold semibold
        // txtlightFont:"Satoshi" medium bold black regular
      },
    }
  },
  plugins: [],
}

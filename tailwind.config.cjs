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
        bgCourseOrange:'rgba(246, 158, 142, .2)',
        iconCourseOrange:'#F69E8E',
        bgCoursePurple:'rgba(146, 105, 205, .2)',
        iconCoursePurple:'#9269CD',
        bgCourseBlue:'rgba(89, 120, 207, .2)',
        iconCourseBlue:'#5978CF',
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

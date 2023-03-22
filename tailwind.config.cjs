/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        bgPrimary:'#004DB3',
        bgSecondary:'#000F24',
        bgEmailButton:'#054FB3',
        bgCompany:'#CCDBF0',
        bgBorder:'#5588CC',
        bgSectionMarket:'#1E5DCE',
        bgWhole:'#F8F9FC',
        subGreen:'#AECD5E',
        subBlue:'#4C7FBD',
        subOrange:'#EA6B45',
        subPink:'#ED6BA6',
        emailInputGrayIcons:'#2A2A2B',
        neutral:'#FFFFFF',
        bgCourseGreen:'#3FA96A 20%',
        iconCourseGreen:'#3FA96A',
        bgCourseOrange:'#F69E8E',
        iconCourseOrange:'#F69E8E 20%',
        bgCoursePurple:'#4d442f',
        iconCoursePurple:'#4d442f',
        bgCourseBlue:'#4d442f',
        iconCourseBlue:'#4d442f',

      },
    }
  },
  plugins: [],
}

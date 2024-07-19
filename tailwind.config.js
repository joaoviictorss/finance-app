/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        customGreen: {
          200: "#F1FFF3",
          300: "#DFF7E2",
          500: "#00D09E",
          700: "#00D09E",
          800: "#052224",
          900: "#031314"
        },
        customBlue: {
          300: "6DB6FE",
          400: "#3299FF",
          500: "#0068FF"
        }
      },
      fontFamily: {
        'display': ['PoppinsRegular'],
      }
    },
  },
  plugins: [],
}
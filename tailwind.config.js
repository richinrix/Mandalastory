const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      brand: {
        Default: "#03658C",
        light: "#049DBF",
        dark: "#011826",
        lighter: "#0D6986",
        white: "#F1F2EB",
        pink: "#f1c9d2",
        pink1: "#ece5da",
      },
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

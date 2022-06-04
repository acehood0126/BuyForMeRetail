const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        AvenirMedium: ["Avenir"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        lightgreen: "#3bbd96",
        darkgreen: "#2aac8a",
        darkblue: "#122844",
        lightblue: "#3b516c",
        specwhite: "#f9fafc",
      },
    },
  },
  plugins: [],
};

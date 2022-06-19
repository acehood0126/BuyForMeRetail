module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Avenir: ["Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        lightgreen: "#3bbd96",
        darkgreen: "#2aac8a",
        darkblue: "#122844",
        lightblue: "#3b516c",
        specwhite: "#edf6f9",
        specwhite1: "#ecf0f3",
        skylight: "#00bbf9",
        orange: "#ff5d13",
        lightorange: "#ff8f59",
      },
      dropShadow: {
        blue: "0px 0px 2px rgb(0, 123, 255)",
        threeDbox: [
          "10px 10px 10px rgb(220, 220, 220)",
          "-10px -10px 10px rgb(255, 255, 255)",
        ],
        threeDboxmiddle: [
          "3px 3px 3px rgb(220, 220, 220)",
          "-3px -3px 3px rgb(255, 255, 255)",
        ],
      },
    },
  },
  plugins: [],
};

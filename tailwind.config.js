module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
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
        specwhite: "#f9fafc",
      },
      dropShadow: {
        blue: "0px 0px 2px rgb(0, 123, 255)",
        "threeDbox": [
          "10px 10px 10px rgb(209, 217, 230)",
          "-10px -10px 10px rgb(249, 249, 249)",
        ],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

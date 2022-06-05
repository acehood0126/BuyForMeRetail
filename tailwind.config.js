module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Avenir: ["Avenir"],
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
  plugins: [require("flowbite/plugin")],
};

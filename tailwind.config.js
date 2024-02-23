module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        galmuri: ["LeeSeoyun", "sans-serif"],
      },
      colors: {
        headerColor: "#A4CFBA",
        menuColor: "#4ACE97",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

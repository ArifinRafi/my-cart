/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [ "cupcake"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  
});
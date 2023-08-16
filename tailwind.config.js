/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*/{vue, js, jsx}",
  ],
  theme: {
    screens: {
      "sm": "376px",
      "md": "768px",
    },
    colors: {
      "Purple": "hsl(259, 100%, 65%)",
      "LightRed": "hsl(0, 100 %, 67 %)",
      "White": "hsl(0, 0%, 99%)",
      "OffWhite": "hsl(0, 0 %, 94 %)",
      "LightGrey": "hsl(0, 0 %, 86 %)",
      "SmokeyGrey": "hsl(0, 1 %, 44 %)",
      "OffBlack": "hsl(0, 0 %, 8 %)",
    },
    extend: {
    },
  },
  plugins: [],
}


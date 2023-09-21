/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js}",
  ],
  theme: {
    screens: {
      "sm": "376px",
      "md": "768px",
    },
    extend: {
      colors: {
        "Purple": "#854dff",
        "LightRed": "#ff5757",
        "White": "#fcfcfc",
        "OffWhite": "#f0f0f0",
        "OffBlack": "#141414",
        "LightGreen": "#39c439",
      },
    },
  },
  plugins: [],
}


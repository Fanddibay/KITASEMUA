/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background-img": "#F9F9F9",
        "text-color": "#252525",
        "text-color-2": "#505050",
        "text-color-3": "#B5B5B5",
        "pink-hover": "#FF008A",
        "pink-custom": "#F916A8",
        "white-custom": "#E1E1E1",
      },
    },
  },
  plugins: [],
};

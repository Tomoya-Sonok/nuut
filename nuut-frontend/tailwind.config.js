/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      // 'purple': '#3f3cbb',
      // 'midnight': '#121063',
      // 'metal': '#565584',
      // 'tahiti': '#3ab7bf',
      // 'silver': '#ecebff',
      // 'bubble-gum': '#ff77e9',
      // 'bermuda': '#78dcca',
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#72D850",
          secondary: "#A3E28D",
          accent: "#1FB2A5",
          neutral: "#72D850",
          "base-100": "#ffffff",
          "base-200": "#e0e0e0",
          "base-300": "#D4FFC6",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

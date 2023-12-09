/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        BrightRed: "hsl(12, 88%, 59%)",
        BrightRedLight: "hsl(12, 88%, 69%)",
        BrightRedSupLight: "hsl(12, 88%, 96%)",
        DarkBlue: "hsl(228, 39%, 23%)",
        DarkGrayishBlue: "hsl(227, 12%, 61%)",
        VeryDarkBlue: "hsl(233, 12%, 13%)",
        VeryPaleRed: "hsl(13, 100%, 96%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};

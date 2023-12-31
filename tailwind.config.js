/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },

      backgroundImage: {
        "hero-pattern": "url('./img/chat-bg.png')",
      },

      fontFamily: {
        nunito: ["nunito sans"],
      },
    },
  },
  variants: {},
  plugins: [],
};

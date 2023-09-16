/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#D56CFB",
          secondary: "#E5A0FD",
          accent: "#F2D2FE",
          neutral: "#8c679c",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};

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
          primary: "#dbb2d6",
          secondary: "#ffdbfa",
          accent: "	#fae3f7",
          neutral: "#8c679c",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};

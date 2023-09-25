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
          primary: "	#0080bf",
          secondary: "	#55d0ff",
          accent: "	#ccf9ff",
          neutral: "#00acdf",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};

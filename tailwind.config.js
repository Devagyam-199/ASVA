/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:["Roboto"],
        montserrat:["Montserrat"],
        nunitosans:["Nunito Sans"],
        titillium_web:["Titillium Web"]
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
          ".no-scrollbar::-webkit-scrollbar": {
              display: "none",
          },
          ".no-scrollbar": {
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
          },
      };
      addUtilities(newUtilities);
  },
  ],
}
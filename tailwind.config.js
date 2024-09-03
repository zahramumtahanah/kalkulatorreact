/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors:{
        primary: "#19ACFF",
        putih: "#FFFFFF",
        secondary: "#B2DAFF",
        light: "#f7f7f7",
        dark: "#333333",
        dark2: "#999999",
        chero: "#ADD8FF",
        pink: "#FFC0CB",
        chiri: "#FFF8E8",
        gray: {
          200: '#E5E7EB',
          700: '#374151'
        },
        violet: {
          600: '#7C3AED',
          800: '#5B21B6'
        },
      },
      container:{
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
        },
      },
    },
  },
  plugins: [],
};


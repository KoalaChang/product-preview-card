/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "fraunces": ["Fraunces", "serif"],
        "montserrat": ["Montserrat", "sans-serif"]
      },
      colors:{
        "gunmetal": "#1C232B",
        "deep-aquamarine": "#1A4032",
        "light-aquamarine": "#3D8168",
        "aurometal-saurus": "#6C7289",
        "pure-white": "#ffffff"
      },
      letterSpacing:{
        "widest": "0.4em"
      },
      maxWidth:{
        "88": "22rem"
      }
    },
  },
  plugins: [],
}


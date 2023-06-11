/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        indigo: "#2a1d8b",
        dimgray: "#626262",
        darkslategray: "#494949",
        royalblue: "#5167eb",
        whitesmoke: "rgba(100,100,100,0.8)",
        gainsboro: "#dadada",
        black: "#000",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
    },
  },
  plugins: [],
}


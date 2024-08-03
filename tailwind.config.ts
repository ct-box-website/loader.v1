import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        khmer: ['var(--khmer)'],
        poppins: ['var(--poppins)'],
      },
      textColor: {
        primary: "#023047",
        secondary: "#219ebc",
        tertiary: "#8ecae6",
        quaternary: "#fb8500",
        sucess: "#3a86ff",
        error: "#ff006e",
        pendding: "#8338ec"
      },
      backgroundColor: {
        primary: "#023047",
        secondary: "#219ebc",
        tertiary: "#8ecae6",
        quaternary: "#fb8500",
        sucess: "#3a86ff",
        error: "#ff006e",
        pendding: "#8338ec",
        white: "#ffffff",
        black: "#000000",
        gray: "#f8f9fa",
        lightgray: "#e9ecef",
        darkgray: "#343a40",
        lightblue: "#8ecae6",
        lightgreen: "#82e0aa",
        lightorange: "#ff8500",
        lightpurple: "#8338ec",
        lightpink: "#ff006e"
      }
    },
  },
  plugins: [require('daisyui'),],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rental_primary: "#7f5539",
        rental_black: "#33251B",
        rental_dark_choc: "#533522",
        rental_light_choc: "#B47951",
        rental_beige_1: "#DBAF91",
        rental_beige_2: "#FBE2D2",
        rental_beige_3: "#FFF6F0"
      },
    },
  },
  plugins: [],
};

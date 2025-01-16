/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      screens:{
        pad: "1180px"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  purge:[
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {
      colors:{
        primaryColor:"#FF9F0D",
        backgrounColor:"0D0D0D",
      },
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}


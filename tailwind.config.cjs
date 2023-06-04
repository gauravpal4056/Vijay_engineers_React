/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "dark",
      "cupcake",
      {
        mytheme: {
        
"primary": "#FF731D",
        
"secondary": "#1746A2",
        
"accent": "#5F9DF7",
        
"neutral": "#44403c",
        
"base-100": "#FFF7E9",
        
"info": "#bae6fd",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#be123c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
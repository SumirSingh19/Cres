/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        fontawesome: ['FontAwesome']
      },
    },
    screens:{
      sm: { max: '640px'},       // Small devices (sm)
      md: { max: '768px'},       // Medium devices (md)
      lg: { max: '1024px', min: '768px'},       // Large devices (lg)
      xl: { max: '1280px', min: '1024px'},     // Extra large devices (xl)
      '2xl': { min: '1536px' },    // Extra extra large devices (2xl)
    }
  },
  plugins: [],
}
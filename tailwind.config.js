/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#000000',
        'dark-grey': '#333333',
        'dark-red': '#8B0000',
        'white-brok': '#F5F5F5',
      },
      fontFamily: {
        'title': ['Coming Soon', 'sans-serif'],
        'title-secondary': ['Caveat', 'sans-serif'],
        'text-primary': ['Roboto', 'sans-serif'],
        'text-secondary': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


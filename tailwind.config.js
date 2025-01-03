/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '2px 3px 6px 2px #D9D9D9',
      },
      fontFamily: {
        lexend: ['Lexend Deca', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

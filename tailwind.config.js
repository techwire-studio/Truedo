/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  dm: ['"DM Sans"', 'sans-serif'],
  work: ['"Work Sans"', 'sans-serif'],
   helvetica: ['Helvetica', 'Arial', 'sans-serif'],
}

    },
  },
  plugins: [],
}

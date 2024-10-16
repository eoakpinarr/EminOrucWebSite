/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.6rem', // 12px
        '2xs': '0.45rem'
      },
      boxShadow: {
        'text-lg': '2px 2px 4px rgba(255, 255, 255, 1)', // Örnek gölge
      },
    },
  },
  plugins: [],
}


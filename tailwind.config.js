/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: "#1e40af", // Customize blue color for hover
        },
        gray: {
          950: "#111827", // Dark gray for sticky navbar
        },
        yellow: {
          500: "#fbbf24", // Adjust as needed
        },
      },
    },
    theme: {
      fontFamily: {
        'inter': ["Inter", "serif"],
      }
    }
  },
  plugins: [],
}
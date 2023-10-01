/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'pink': '0 4px 6px 0 rgba(252, 165, 165, 0.5)',
        'purple-gradient': '0 0 0 0 rgba(255, 133, 184, 0.25)',

         // Change color and opacity as needed
      }
    },
  },
  plugins: [],
};

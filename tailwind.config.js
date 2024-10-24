/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },  // Start offscreen
          '100%': { transform: 'translateY(0)', opacity: '1' },    // End at normal position
        },
      },
      animation: {
        'slide-in': 'slideIn 2s ease-out',
      },
    },
    fontFamily: {
      'sans': ['Josefin Sans', 'sans-serif']
    },
  },
  plugins: [],
}
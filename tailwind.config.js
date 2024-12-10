/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'premier': {
          purple: '#3D195B', // Premier League primary purple
          pink: '#FF2882',   // Premier League accent pink
          navy: '#161F65',   // Deep navy for backgrounds
          gold: '#F7B42C',   // Gold for achievements
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-premier': 'linear-gradient(135deg, #3D195B 0%, #161F65 100%)',
      },
      boxShadow: {
        'premier': '0 4px 6px -1px rgba(61, 25, 91, 0.1), 0 2px 4px -1px rgba(61, 25, 91, 0.06)',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          bg: '#08090c',
          surface: '#11141c',
          card: '#161a24',
          border: 'rgba(255, 255, 255, 0.08)',
          accent: '#f59e0b',
          accentHover: '#d97706',
          gold: '#f59e0b',
          goldHover: '#d97706',
          slateMuted: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

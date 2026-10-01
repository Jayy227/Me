/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          yellow: '#FFE600',
          orange: '#FF5722',
          pink: '#FF2E93',
          purple: '#9D00FF',
          blue: '#00E5FF',
          green: '#A3E635',
          black: '#0D0D0D',
          white: '#FFFFFF',
          cream: '#FFFBEA',
        },
      },
      boxShadow: {
        'brutal-sm': '3px 3px 0px 0px #0D0D0D',
        'brutal': '5px 5px 0px 0px #0D0D0D',
        'brutal-lg': '8px 8px 0px 0px #0D0D0D',
        'brutal-xl': '12px 12px 0px 0px #0D0D0D',
        'brutal-pink': '6px 6px 0px 0px #FF2E93',
        'brutal-yellow': '6px 6px 0px 0px #FFE600',
      },
      fontFamily: {
        mono: ['Space Mono', 'Courier New', 'monospace'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

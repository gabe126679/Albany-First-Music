/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        // Light theme: white, dark blue/teal, gold/blood-orange
        ink: {
          50: '#f4f7f8',
          100: '#e3ecee',
          200: '#c2d4d8',
          300: '#94b3b9',
          400: '#5e8a92',
          500: '#3a6b74',
          600: '#2c555d',
          700: '#24474e',
          800: '#1c3940',
          900: '#0f2a30',
          950: '#081a1f',
        },
        gold: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba8',
          300: '#ffc070',
          400: '#ff9a37',
          500: '#ff7a10',
          600: '#f05c06',
          700: '#c74407',
          800: '#9e370d',
          900: '#7f300e',
        },
        // Dark theme accents
        neon: {
          400: '#ffe24a',
          500: '#ffd60a',
          600: '#e6bd00',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

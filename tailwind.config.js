/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F9',
          100: '#E1EAF3',
          200: '#C2D4E7',
          300: '#A3BFDC',
          400: '#5A7FA8',
          500: '#1B2A4A',
          600: '#162340',
          700: '#111C36',
          800: '#0C152C',
          900: '#070E22',
        },
        orange: {
          50: '#FFF4ED',
          100: '#FFE8DB',
          200: '#FFD1B7',
          300: '#FFBA93',
          400: '#FF9D6F',
          500: '#F26522',
          600: '#D9551D',
          700: '#B84518',
          800: '#973813',
          900: '#7C2D0E',
        },
        green: {
          50: '#F1F9F6',
          100: '#E3F3ED',
          200: '#C7E7DB',
          300: '#4CAF50',
          400: '#43A047',
          500: '#3A9045',
          600: '#31793D',
          700: '#286235',
          800: '#1F4B2D',
          900: '#163425',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.06)',
        'card-lg': '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

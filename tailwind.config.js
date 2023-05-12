const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '310px',
        sm: '480px',
        md: '728px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1280px',
      },
      container: {
        center: true,
      },
      height: {
        header: '70px',
        'without-header': 'calc(100vh - 70px)',
      },
      colors: {
        primary: colors.violet,
        gray: colors.neutral,
        secondary: colors.rose,
      },
      keyframes: {
        'slide-out-x': {
          '0%': { transform: 'translateX(0)', opacity: '100%' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        'slide-in-x': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '100%' },
        },
      },
      animation: {
        'slide-out-x': 'slide-out-x 500ms ease-in-out forwards',
        'slide-in-x': 'slide-in-x 500ms ease-in-out forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

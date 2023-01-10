const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        header: '70px',
        'without-header': 'calc(100vh - 70px)',
      },
      colors: {
        gray: colors.stone,
        primary: colors.red,
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
  plugins: [],
};

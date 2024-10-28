const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '14rem',
      },
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-base)', ...fontFamily.sans],
        heading: ['var(--font-heading)', ...fontFamily.sans],
      },
      spacing: {
        header: '4rem',
      },
      height: {
        'without-header': 'calc(100vh - 4rem)',
      },
      colors: {
        primary: colors.violet,
        gray: colors.neutral,
        secondary: colors.rose,
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          '10%': { transform: 'translateX(0)' },
          '90%': { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(-100%)' },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        carousel: 'marquee 10s linear infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

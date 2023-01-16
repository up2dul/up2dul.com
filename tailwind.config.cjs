/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
    },
    colors: {
      transparent: 'transparent',
      bunker: {
        50: '#f4f7f9',
        100: '#d9e4ee',
        200: '#b2c8dd',
        300: '#84a3c4',
        400: '#5a7ea7',
        500: '#41628b',
        600: '#324b6f',
        700: '#2b3f5a',
        800: '#263449',
        900: '#0d1117',
      },
      geyser: {
        50: '#f5f7f9',
        100: '#e8ecf1',
        200: '#cbd5e1',
        300: '#b9c7d7',
        400: '#98abc2',
        500: '#7f93b2',
        600: '#6d7fa3',
        700: '#616f94',
        800: '#525c7b',
        900: '#454d63',
      },
      blue: {
        50: '#edfaff',
        100: '#d6f1ff',
        200: '#b5e9ff',
        300: '#83ddff',
        400: '#48c7ff',
        500: '#1ea8ff',
        600: '#068aff',
        700: '#0070f3',
        800: '#085ac5',
        900: '#0d4e9b',
      },
    },
  },
  plugins: [],
};

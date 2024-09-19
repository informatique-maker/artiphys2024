/** @type {import('tailwindcss').Config} */
const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  purple: '#8852c6',
  pink: '#ff9aee',
  whiteMagenta: '#faecfc',
  blackViolet: '#1f1a20',
  gray: {
    350: '#C3C3C3',
  },
  // ...
};
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inkination: ['Inkination', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
      },
      fontSize: {
        base: '20px', // Default font size
        h1: '6rem', //
        h2: '4.5rem', // Equivalent to text-3xl
        h3: '3rem', // Equivalent to text-2xl
        h4: '1.8rem', // Equivalent to text-xl
        h5: '1.125rem', // Equivalent to text-lg
        h6: '1rem', // Equivalent to text-base
        '2xs': '0.6rem',
      },
      lineHeight: {
        heading: '1', // Default line height
        base: '1.3', // Default line height
      },
      colors: {
        base: colors.whiteMagenta, // Default text color
        heading: 'white',
        primary: colors.purple,
        dark: colors.blackViolet,
      },
      color: colors,
    },
  },
  plugins: [],
};

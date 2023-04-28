const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#04C16D',
        primary: '#007a33',
        'primary-dark': '#2E3D34',
        gold: '#bb9753',
        'gold-dark': '#8f7138',
      },
    },
  },
  plugins: [],
};

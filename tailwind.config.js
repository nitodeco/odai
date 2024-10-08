/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/index.html', './src/renderer/src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};

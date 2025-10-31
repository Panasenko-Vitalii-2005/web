/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,scss,css,hbs}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-100': '#e6eef6',
        'brand-500': '#002b5c',
        'brand-600': '#01356f',
      },
    },
  },
  plugins: [],
};

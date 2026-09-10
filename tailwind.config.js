/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './frontend/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 45px rgba(15, 90, 61, 0.10)',
      },
      colors: {
        agri: {
          50: '#f2faf4',
          100: '#e5f4ec',
          200: '#cae7d3',
          300: '#acd9b9',
          400: '#7ec896',
          500: '#4caf72',
          600: '#0f7b4a',
          700: '#0b5d3d',
          800: '#0d4635',
          900: '#0a3329',
        },
      },
    },
  },
  plugins: [],
};

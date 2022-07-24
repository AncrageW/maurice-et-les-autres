module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'max-width': 'max-width',
        'max-height': 'max-height'
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))'
      },
      colors: {
        cerulean: {
          50: '#edf0f7',
          100: '#c9d3e8',
          200: '#a5b5d9',
          300: '#8198ca',
          400: '#5d7abb',
          500: '#4461a2',
          600: '#354b7e',
          700: '#26365a',
          800: '#172036',
          900: '#080b12'
        },
        turquoiseGreen: {
          50: '#eef7f3',
          100: '#cce6da',
          200: '#a9d5c2',
          300: '#87c4a9',
          400: '#65b491',
          500: '#4b9a77',
          600: '#3b785d',
          700: '#2a5642',
          800: '#193328',
          900: '#08110d'
        }
      }
    },
  },
  plugins: []
}
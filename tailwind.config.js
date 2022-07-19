module.exports = {
  future: {},
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375',
      sm: '480px',
      md: '850px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'white': '#fff',
      'green': "#00EF8A",
      'green-dark': '#046D41',
      'primary': "#373737",

      'black': "#000",
    },
    fontFamily: {
      'Mortend': ['Mortend', 'sans-serif'],
      'Mortend-Light': ['Mortend Light', 'sans-serif'],
      'Mortend-Bold': ['Mortend Bold', 'sans-serif'],
      'Mortend-Extrabold': ['Mortend Extrabold', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
}

module.exports = {
  purge: {
    enabled: true,
    content: [
      './**/*.html',
    ]
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E2E7FF',
          600: '#102067',
          700: '#1D4ED8',
          800: '#2563EB'
        },
      }
    }
  },
  variants: {},
  plugins: [],
}

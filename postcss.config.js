module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-flexbugs-fixes'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
    require('cssnano')({
      preset: 'default',
    })
  ]
}

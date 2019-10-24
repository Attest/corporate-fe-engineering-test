module.exports = {
  plugins: [
    require('postcss-nested')(),
    require('autoprefixer')({
      grid: true,
    }),
  ]
}

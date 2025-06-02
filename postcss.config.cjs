module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      config: './tailwind.config.js', // optional: path to your Tailwind config
    }),
    require('autoprefixer'),
  ]
}
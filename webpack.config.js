module.exports = {
  entry: './public/js/app.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};

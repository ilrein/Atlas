module.exports = {
  entry: './src/app.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
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

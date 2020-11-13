const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  resolveLoader: {
    modules: ['./node_modules', './lib/loaders'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: path.resolve(__dirname, './lib/loaders/replaceLoader.js'),
          options: {
            name: 'janney',
          },
        },
      },
    ],
  },
};

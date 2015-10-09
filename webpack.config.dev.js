var path = require('path');
var webpack = require('webpack');

module.exports = {
  // devtool: 'eval', // used for hard debugging
  devtool: 'eval-source-map', // for dev with ES6 maps
  // prod - devtool: 'source-map',
  entry: {
    middleware: 'webpack-hot-middleware/client',
    main: './client/index',
    box2d: './client/box2dweb/balls'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{ test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }]
  }
};

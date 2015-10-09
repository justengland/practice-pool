/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var assetPath = require('path').join(__dirname, 'dist');

module.exports = {

  output: {
    path: assetPath,
    filename: 'main.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  progress: true,
  entry: [
    './client/main.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'styles': __dirname + '/client/styles',
      'components': __dirname + '/client/components/',
      'reducers': __dirname + '/client/reducers/',
      'actions': __dirname + '/client/actions/',
      'constants': __dirname + '/client/constants/',
      'pages': __dirname + '/client/containers/'
    }
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: [/node_module/, 'server.js', 'mock/*'],
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.scss/,
      loader: 'style!css!autoprefixer!sass?outputStyle=expanded'
    }, {
      test: /\.css$/,
      exclude: [/\.raw\.css$/, /\.useable\.css$/, /node_module/],
      loader: 'style!css!autoprefixer'
    }, {
      test: /\.useable\.css$/,
      loader: 'style/useable!raw!autoprefixer'
    }, {
      test: /\.raw\.css$/,
      loader: 'style!raw!autoprefixer'
    }, {
      test: /\.(png|jpg|woff|woff2)$/,
      loader: 'url?limit=8192'
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false  // <-------- DISABLE redux-devtools HERE
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin()
  ]

};

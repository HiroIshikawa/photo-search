var path = require("path");
const webpack = require('webpack');
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        exclude: /node_modules/,
        test: /\.js?$/,
        loader: 'babel',
        query: {
          "presets": ["stage-0", "react"],
          "plugins": ["transform-decorators-legacy"]
        },
        include: path.join(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
  ],
  resolve: {
    extensions: ['.js', '.json'],
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  devServer: {
    headers: { "Access-Control-Allow-Origin": "http://localhost:3000/" }
  },
};
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  // headers: { "Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'},
  headers: { 'Access-Control-Allow-Origin': '*' }
}).listen(3000, 'localhost', function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});
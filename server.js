var express = require('express');
var webpackDevMiddleWare = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var app = express();

var compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddleWare(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true
  },
  historyApiFallback: true
}));

var server = app.listen(8000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example listening at http://%s%s", host, port);
});

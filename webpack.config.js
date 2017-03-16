var webpack = require('webpack');
var path = require('path');

var scriptsPath = path.resolve(__dirname, 'build', 'scripts');

var sitejs = ['./scripts/dynamic-data.js', './scripts/site.js'];

var sourceScripts = sitejs;

var config = {
  entry: sourceScripts,
  output: {
    path: scriptsPath,
    filename: 'site-bundle.js'
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;

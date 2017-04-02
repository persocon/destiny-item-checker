var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: ['babel-polyfill', APP_DIR + '/javascript/index.jsx'],
  resolve: {
    alias: {
      'sinon': 'sinon/pkg/sinon'
    },
    // allows you to require without the .js at end of filenames
    // import Component from 'component' vs. import Component from 'component.js'
    extensions: ['.js', '.json', '.jsx', '.scss']
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: 'public',
    filename: 'javascript/bundle.js'
  },
  module : {
    noParse: [
        /node_modules\/sinon\//,
    ],
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
    ]
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './src')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
};

module.exports = config;

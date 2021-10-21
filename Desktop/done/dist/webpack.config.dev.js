"use strict";

var _devServer, _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var path = require("path");

var webpack = require('webpack');

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_module$exports = {
  mode: "development",
  entry: "./src/index.js",
  plugins: [new HtmlWebpackPlugin({
    title: "АВТО Lab",
    template: path.resolve(__dirname, "./src/template.html"),
    filename: "index.html"
  })],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: "/node_modules/"
    }]
  }
}, _defineProperty(_module$exports, "mode", 'development'), _defineProperty(_module$exports, "devServer", (_devServer = {
  "static": {
    directory: path.join(__dirname, "public")
  },
  compress: true,
  historyApiFallback: true,
  open: true
}, _defineProperty(_devServer, "compress", true), _defineProperty(_devServer, "hot", true), _defineProperty(_devServer, "port", 8080), _devServer)), _module$exports);
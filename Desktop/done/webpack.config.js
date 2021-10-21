const path = require("path");
const webpack = require('webpack')

const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",

  plugins: [
    new HtmlWebpackPlugin({
      title: "АВТО Lab",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html", 
    }),
  ],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  mode: 'development',

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
};

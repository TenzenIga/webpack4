// webpack v4
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           {
             loader: 'file-loader'
          }
        ]
       }

    ]
  },
  plugins: [
    // new ExtractTextPlugin(
    //   {filename: 'style.[hash].css', disable: false, allChunks: true }
    // ),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/about.html',
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/work.html',
      filename: 'work.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/contact.html',
      filename: 'contact.html'
    }),
    new WebpackMd5Hash()
  ]
};

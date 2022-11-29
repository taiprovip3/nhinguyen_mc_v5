const HtmlWebpackPlugin = require('html-webpack-plugin')
const globals = require("./globals.js")
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      templateParameters: globals
    })
  ],
}
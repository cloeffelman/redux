const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const PROD = process.env.NODE_ENV === 'production'

const config = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: [/node_modules/]
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: [/node_modules/]
      },
      {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: path.resolve(__dirname, 'src/init.jsx'),
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: "bundle.[hash].js"
  },
  devtool: PROD ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
  devServer: {
      port: 3000,
      contentBase:  path.resolve(__dirname, 'app')
  },
  plugins: [
    new htmlWebpackPlugin({ filename: 'index.html', template: 'src/index.pug' })
  ]
}

module.exports = config

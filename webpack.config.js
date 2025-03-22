const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // The starting point of our application,
  // webpack begins here and creates its dependency graph,
  // it uses the graph to create a single build file for you to host on your web server
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'developmentBundle.js',
    clean: true
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true, // open browser when server runs
    hot: true, // hot reload
    historyApiFallback: true // support or react router
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Matches both `.js` and `.jsx` files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // see babel.config.json for babel configuration
        }
      },
      {
        // css support
        // style loader is for injecting css into the dom at runtime
        // css loader interprets certain css keywords like @import and url() and resolves them into JavaScript
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // order matters, webpack processes loaders from right to left
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
};

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
        test: /\.s[ac]ss$/i, // scss and scss files
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true, // enabled named exports for your css module classes
              modules: {
                localIdentName: '[name]-[local]--[hash:base64:5]' // how the class name is formatted
              },
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/')
    },
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
};

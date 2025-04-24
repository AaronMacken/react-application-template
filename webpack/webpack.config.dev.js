const { merge } = require('webpack-merge');
const Paths = require('./paths');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'developmentBundle.js'
  },
  devServer: {
    static: Paths.DIST_DIR,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true
  }
});

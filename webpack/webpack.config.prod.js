const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

const prodConfig = {
  mode: 'production',
  devtool: 'source-map', // full source maps (optional in prod, we can disable this later)
  output: {
    filename: 'bundle.[contenthash].js' // cache-busting
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: 'single'
  }
  // You can add plugins like MiniCssExtractPlugin here
};

module.exports = merge(common, prodConfig);

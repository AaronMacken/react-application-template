const devConfig = require('./webpack/webpack.config.dev');
const prodConfig = require('./webpack/webpack.config.prod');

module.exports = () => {
  const isProd = process.env.NODE_ENV === 'production';

  return isProd ? prodConfig : devConfig;
};

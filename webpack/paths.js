const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

module.exports = {
  ROOT_DIR,
  SRC_DIR: path.resolve(ROOT_DIR, 'src'),
  DIST_DIR: path.resolve(ROOT_DIR, 'dist'),
  PUBLIC_DIR: path.resolve(ROOT_DIR, 'public'),
};

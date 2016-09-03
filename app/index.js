require('babel-polyfill');

var app = './app';

require('babel-core/register')({
  presets: ['es2015', 'stage-3'],
  plugins: []
});

module.exports = require(app);
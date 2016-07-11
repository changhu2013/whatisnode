require('babel-polyfill');

var env = process.env.NODE_ENV || 'development';
var app = './lib/app';

if(env !== 'production'){
  require('babel-core/register')({
    presets: ['es2015', 'stage-3'],
    plugins: []
  });

  app = './src/app';
}

console.log('NODE_ENV = ' + env);

module.exports = require(app);

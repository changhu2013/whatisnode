'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var Koa = require('koa');
var app = new Koa();
var router = require('koa-router')();
var views = require('koa-views');
var co = require('co');
var convert = require('koa-convert');
var json = require('koa-json');
var onerror = require('koa-onerror');
var bodyparser = require('koa-bodyparser')();
var logger = require('koa-logger');

var index = require('./routes/index');

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/../public'));

app.use(views(__dirname + '/../views', {
  extension: 'ejs'
}));

// logger
app.use(function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
    var start, ms;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start = new Date();
            _context.next = 3;
            return next();

          case 3:
            ms = new Date() - start;

            console.log(ctx.method + ' ' + ctx.url + ' - ' + ms + 'ms');

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.use('/', index.routes(), index.allowedMethods());

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function (err, ctx) {
  console.log(err);
  logger.error('server error', err, ctx);
});

module.exports = app;
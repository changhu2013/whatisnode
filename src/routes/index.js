var router = require('koa-router')()
var home = require('./home');

router.use(home.routes());

module.exports = router
const router = require('koa-router')()
const api = require('./api');

router.use(api.routes());

module.exports = router
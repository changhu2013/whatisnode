var co = require('co');
var router = require('koa-router')();

router.get('/get', co.wrap())

router.post('/run', async function(ctx, next){
  ctx.body = {
    code : 0,
    msg : 'OK'
  };
});

module.exports = router;

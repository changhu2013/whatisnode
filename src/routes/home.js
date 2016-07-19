const co = require('co');
const router = require('koa-router')(/*{prefix : 'home'}*/);

router.post('/run', async function(ctx, next){

  ctx.body = {
    succ : true,
    content : 'ddddd'
  };
})

router.get('/', async function (ctx, next) {

  ctx.state = {
    title: 'what is node !!!!'
  };

  await ctx.render('home', {});
});

module.exports = router;

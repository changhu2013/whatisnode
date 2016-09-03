
var co = require('co');

co(function *(){
  console.log(1);
  yield Promise.resolve(true);
  console.log(2);
  yield Promise.resolve(false);
  console.log(3);
}).then(function(value){
  console.log(1, value);
}).then(function(value){
  console.log(2, value);
});

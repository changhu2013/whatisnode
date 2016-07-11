
function run(){
  var content = $.trim($('#content').val());

  if(content === ''){
    return alert('内容为空');
  }

  $.post('/home/run', {content : content}, function(result){
     $('#console').html(result);
  });
}

$(function(){
  $('#run').on('click', run);
});
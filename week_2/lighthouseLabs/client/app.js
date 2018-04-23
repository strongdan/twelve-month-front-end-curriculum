var socket = io();
var msgArray = [];

$('form').submit(function () {
  var text = $('#initials').val() + ' says ' + $('#message').val();
  socket.emit('message', text);
  $('#message').val('');
  return false;
});

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
    msgArray.push(text);
});

socket.on('connection', function(){
    for(var i = 0; i < msgArray.length; i++){
        $('<li>').text(msgArray[i]).appendTo('#history');
    }
});
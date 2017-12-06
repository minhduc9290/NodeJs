// Call to Server
var socket =  io('http://localhost:6868');
socket.on('Server-send-data',function (data) {
    $(".messages").append(data + "<br>");
});
$(function($) {
	$('#login').show();
	$('#chatroom').show();
    $('#send').click(function () {
       //console.log('emit');
        var content = $(".content").val();
       socket.emit('Client-send-data', content);
    });
});
// Call to Server
var socket =  io('http://localhost:6868');

// server response register-false
socket.on('Server-send-register-false',function () {
    alert('Username is wrong! (username is exist!!!)');
});

// server response register-success
socket.on('Server-send-register-success',function (data) {
    $('.username').html(data);
    $('#login').hide(2000);
    $('#chatroom').show(1000);
});

//Server response list-users
socket.on('Server-send-list-users',function (data) {
    $('.list-users').html("");
    data.forEach(function (user) {
        $('.list-users').append('<span>'+ user +'</span>');
    });
});

//Server response message
socket.on('Server-send-message',function (data) {
    $(".contents").append('<div class="message"><span class="username">'+ data.username +'</span>: '+ data.message +'</div>');
});

//Server response user typing
socket.on('Server-send-user-typing',function (data) {
    $(".typing").html(data);
});

//Server response user Stop typing
socket.on('Server-send-user-stop-typing',function (data) {
    $(".typing").html('');
});


// Process js Client document by Jquery
$(function($) {
    $('#login').show();
    $('#chatroom').hide();
	//Register event
    $('#register').click(function () {
       //console.log('emit');
        var username = $(".username").val();
       socket.emit('Client-send-Username', username);
    });

    //Logout event
    $('.btn-logout').click(function () {
        socket.emit('Client-send-logout');
        $('#login').show(2000);
        $('#chatroom').hide(1000);
    });


    // Send message event
    $('#send').click(function () {
       //console.log('emit');
        var content = $(".message").val();
       socket.emit('Client-send-message', content);
        //$(".message").val('');

    });

    //  input Message Keypress event
    $('.message').keypress(function () {
        socket.emit('Client-send-user-typing');
    });
    //  input Message focusout event
    $('.message').focusout(function () {
        socket.emit('Client-send-user-stop-typing');
    });
});
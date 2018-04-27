var express = require('express');
var colors = require('colors');
var app = express();
app.use(express.static("./public")); //set webroot
app.set("view engine","ejs");
app.set('views','./views');

var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(6868);
console.log('Server is Running ...'.red);

var socketidarr = [];
var users_array = [];
//Event call when have a connect
io.on("connection", function(socket){
	console.log('Request Connention:' + socket.id);
    //Save list socket_id to array
    socketidarr.push(socket.id);
	// Event call when disconnect a socket (event must call in connect function)
	socket.on("disconnect", function () {
		console.log(socket.id + " -> Disconnected !!!!".green);
    });

	//Register User
    socket.on('Client-send-Username',function (data) {
        console.log(socket.id.red + ' send ' +data.username.green);
		if(users_array.indexOf(data.username) >= 0){
			socket.emit('Server-send-register-false');
		}else{
            users_array.push(data);
            socket.Username = data.username;
            socket.UserColor = data.usercolor;
            socket.emit('Server-send-register-success', data);
            io.sockets.emit('Server-send-list-users',users_array);
		}
    });

    socket.on('Client-send-logout', function () {
        //remove user in array
        users_array.splice(users_array.indexOf(socket.Username), 1);
        users_array.splice(users_array.indexOf(socket.UserColor), 1);
        socket.broadcast.emit('Server-send-list-users',users_array);
    });

	//Send Message
	socket.on('Client-send-message',function (data) {

		console.log(socket.id + ' send ' +data);
		// send ALL
		io.sockets.emit('Server-send-message', {'username':socket.Username,'usercolor':socket.UserColor,'message':data});
		// Only send myself
		//socket.emit('Server-send-data', data+" Send Myself Only!");
		// Send only for user
		//socket.broadcast.emit('Server-send-data', data+" Send only for users!");
		//--Send to a user id
		//io.to(socketidar[1]).emit('Server-send-data',socket.id+ ' : ' +data);
    });

	// Listen Client user typing
    socket.on('Client-send-user-typing', function () {
        socket.broadcast.emit('Server-send-user-typing', socket.Username + ' is typing ...');
    });
    // Listen Client user typing
    socket.on('Client-send-user-stop-typing', function () {
        socket.broadcast.emit('Server-send-user-stop-typing', socket.Username + ' stop typing ...');
    });
});


// Declare Router
app.get('/', function(req, res){ //params req = request , res = response
	res.render("layouts");
});
// Declare Router
app.get('/rooms', function(req, res){ //params req = request , res = response
    res.render("room");
    //res.sendFile(__dirname + "/contact.html");
});
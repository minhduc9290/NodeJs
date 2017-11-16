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

var socketidar = [];
//Event call when have a connect
io.on("connection", function(socket){
	console.log('Request Connention:' + socket.id);
    //Save list socket_id to array
	socketidar.push(socket.id);
	// Event call when disconnect a socket (event must call in connect function)
	socket.on("disconnect", function () {
		console.log(socket.id + " -> Disconnected !!!!".green);
    });

	socket.on('Client-send-data',function (data) {

		console.log(socket.id + ' send ' +data);
		// send ALL
		io.sockets.emit('Server-send-data', socket.id+ ' : ' +data);
		// Only send myself
		//socket.emit('Server-send-data', data+" Send Myself Only!");
		// Send only for user
		//socket.broadcast.emit('Server-send-data', data+" Send only for users!");
		//--Send to a user id
		//io.to(socketidar[1]).emit('Server-send-data',socket.id+ ' : ' +data);
    });
});

// Declare Router
app.get('/', function(req, res){ //params req = request , res = response
	res.render("home");
});
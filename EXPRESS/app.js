var express = require('express');
var app = express();
var server = require('http').createServer(app);
server.listen(6868);
console.log('Webserver created by Express is Running ...');
// index
app.get("/",function(req, res){
	//res.send('Hello ! How are You <br> Website create by Express module NodeJs');
	res.sendFile(__dirname + "/index.html");
});
// routing
app.get("/contact",function(req, res){
	//res.send('Hello ! How are You <br> Website create by Express module NodeJs');
	res.sendFile(__dirname + "/contact.html");
});

// routing with Parameters
app.get("/calculate/:a/:b",function(req, res){
	var a = parseInt(req.params.a);
	var b = parseInt(req.params.b);
	var total = (a + b);
	res.send(a +" + "+ b + " = " + total);
});
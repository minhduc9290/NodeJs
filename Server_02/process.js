var http = require('http');
var fs = require('fs');
console.log('Server is Running...');
http.createServer(function (req, res) {
	res.writeHead(200, {"content-Type":"text/html"});
	// 1 read file then return data
	//var data = fs.readFileSync(__dirname + '/index.php', 'utf-8');
	//res.end(data);
	// 2 using PIPE data
	fs.createReadStream(__dirname + "/index.php").pipe(res);
	var objPerson = {
		firstname: "Pham",
		middle: "Van",
		lastname: "Duc",
		birthday: "09/02/1990",
		email: "phamduc1990@gmail.com",
		website: "ducpham.com"
	};
	// display to Json data
	res.end(JSON.stringify(objPerson));
	//console.log(res);
	// var data = res.getElementById('message');
	// res.end('data');

}).listen(80);
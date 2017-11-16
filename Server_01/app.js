/**
* 1. Hello World
*/
console.log('Hello World by NodeJs Base! Mr.DucPham');

/**
* 2. Array 
*/
console.log('Array\n');
var arrays = ['Pham','Van','Duc'];
arrays.forEach((element) => {console.log(element)});

/**
* 3. Function 
*/
var hello = (first_name,middle_name,last_name) => { console.log('First Name : '+ first_name + ' / Middle Name :'+ middle_name+ ' / Last Name :'+last_name); }; // type Arrow Function ES6
hello('Pham','Van','Duc'); // call function

/**
* 4. Module 
*/
var name = require('./common.js');
console.log(name);

/**
* 4. Object 
*/
//--Type obj 1
console.log('Object base\n');
var person = {
	firstname : "Mr.",
	lastname : "DucPham",
	display	: () => {console.log('Display '+ person.firstname + ' and ' + person.lastname)},
}; // declare obj person
person.display();
console.log(person['lastname']);
//--Type obj 2 function Object(arg);
console.log('Object Function\n');
function Calculator (a,b) {
	this.A = a;
	this.B = b;
}
Calculator.prototype.excute = function() {
	var c = (this.A + this.B);
	console.log('Result :'+ c);
}
var nodejs = new Calculator(6,9);
nodejs.excute();


/**
* 5. Data with Buffer 
*/
console.log('Data with Buffer\n');
var buffer = new Buffer('DucPham','utf-8');
console.log(buffer);
// buffer --> String
console.log(buffer.toString());
// buffer --> Json
console.log(buffer.toJSON());

/**
* 6. Files 
*/
console.log('Data with Files\n');
var fs = require('fs');
var content = fs.readFileSync(__dirname + "/blog.txt");
console.log(content.toString());


/**
* 7. Web Server 
*/
console.log('Create Webserver\n');

var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end('DucPham.vn');
}).listen(8888);



















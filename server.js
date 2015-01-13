var log = require('logger')(module);

var db = require('db');
db.connect();

var User = require('./user');

function run(){
	var john = new User('John');
	var	mark = new User('Mark');

	john.hello(mark);

	log(db.getPhrase('Run successful'));
}

if (module.parent){
	exports.run = run;
} else{
	run();
}
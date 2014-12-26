
var db = require('./db');
db.connect();

var User = require('./user');

function run () {
	// body...
	var john = new User('John');
	var Caroline = new User('Caroline');

	john.hello(Caroline);

	console.log(db.getPhrase('Run saccessful'));
}

if (module.parent) {
	exports.run = run;
} else{
	run();
};

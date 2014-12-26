
var db = require('./db');
db.connect();

var User = require('./user');

function run () {
	// body...
	var john = new User('John');
	var ian = new User('Ian');

	john.hello(ian);

	console.log(db.getPhrase('Run saccessful'));
}

if (module.parent) {
	exports.run = run;
} else{
	run();
};

var util = require('util');

var obj = {
	a: 1,
	b: 2,
	inspect: function(){
		return 123;
	}
}
obj.self = obj;

console.log(util.inspect(obj));
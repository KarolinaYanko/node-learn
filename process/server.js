/* reading params from cmd*/
// node server port=3000
// (for optimist) node server --port=3000
// (for supervisor + optimist) supervisor -- server --port=3000

console.log(process.env.HOMEPATH); //env

var http = require('http');

var opts = require('optimist').argv;

http.createServer(function(req, res){
	res.end("Server is running");
}).listen(opts.port);
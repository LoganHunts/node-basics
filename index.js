const http = require('http');
 
const server = http.createServer( (request, response) => {
	let method = request.method;
	let url    = request.url;
} )
 
server.listen(3000);
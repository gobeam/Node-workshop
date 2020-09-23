let http = require('http');

let server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World!");
});

let port = 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

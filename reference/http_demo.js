// Using http module to create a simple web server:

const http = require('http');

// Create server object:

http.createServer((req, res) => {
    //Write a response on the request - basic text??
    res.write('Hello world');
    res.end();
}).listen(5000, () => console.log("Server running"));

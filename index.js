/** build a simple server by using javascript */
const http = require('http');
const PORT = 8080;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
}).listen(PORT,(err, res) => {
    console.log('server is running');
});


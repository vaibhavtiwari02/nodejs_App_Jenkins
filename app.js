// Load the http module to create an HTTP server.
const http = require('http');

// Configure the HTTP server to respond with "Hello, World!" to all requests.
const hostname = '3.84.248.93';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Listen on port 3000 and IP 127.0.0.1.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



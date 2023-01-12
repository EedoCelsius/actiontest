const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`path: ${req.url}`);
  
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
  setTimeout(() => {
    server.close();
    console.log('Server closed');
  }, 300000);
});

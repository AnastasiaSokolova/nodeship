const http = require('http');

const server = http.createServer((req, res) => {
    const body = 'Hello World';
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(body);
});

server.listen(3000, () => console.log(`App listening on port ${port}!`));


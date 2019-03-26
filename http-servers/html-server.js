const http = require('http');
const fs = require('fs');

const through = require('through2');

//Implementation using readFileSync
/*const server = http.createServer((req, res) => {
    let file = fs.readFileSync('./index.html', {encoding: 'utf-8'});
    file = file.replace(/{message}/, "Message from response");
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(file);
});*/

const server = http.createServer((req, res) => {
    const replace = through(function(data, _, cb) {
        data = data.toString().replace(/{message}/, "Message from response");
        cb(null, data);
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('./index.html', {encoding: 'utf-8'}).pipe(replace).pipe(res);
});

const port = process.env.PORT || 3000;

server.listen(3000, () => console.log(`App listening on port ${port}!`));


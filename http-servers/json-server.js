const http = require('http');

const server = http.createServer((req, res) => {
    let product = {
        id: 1,
        name: 'Supreme T-Shirt',
        brand: 'Supreme',
        price: 99.99,
        options: [
            { color: 'blue' },
            { size: 'XL' }
        ]
    };
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(product));
});

const port = process.env.PORT || 3000;

server.listen(3000, () => console.log(`App listening on port ${port}!`));


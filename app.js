import express from 'express';
import dataProducts from './mocks/products.js';
import dataUsers from './mocks/users.js';

import logger from './middlewares/logger.js';

const app = express();

app.use(logger.logInfo);
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home page');
});


app.get('/api/products', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(dataProducts.products);
});


app.get('/api/products/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    let currentProduct = dataProducts.products
        .filter(item => item._id === req.params.id );
    res.send(currentProduct)
});


app.get('/api/products/:id/reviews', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let review = dataProducts.products
        .filter(item => item._id === req.params.id)
        .map(item => item.review);
    res.send(review)
});



app.get('/api/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log(dataUsers);
    res.send(dataUsers.users);
});


app.post('/api/products', (req, res) => {

    const product = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.json(product);
});

export default app;

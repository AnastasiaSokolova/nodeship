import dataProducts from '../mocks/products.js';

module.exports = {

    getAllProducts: (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(dataProducts.products);
    },

    setAllProducts: (req, res) => {
        const product = req.body;
        res.setHeader('Content-Type', 'application/json');
        res.json(product);
    },

    getProduct: (req, res) => {
        res.setHeader('Content-Type', 'application/json');

        const currentProduct = dataProducts.products
            .filter(item => item._id === req.params.id);
        res.send(currentProduct)
    },

    getReviews: (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        const review = dataProducts.products
            .filter(item => item._id === req.params.id)
            .map(item => item.review);
        res.send(review)
    }
};



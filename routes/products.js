import express from 'express';

import products from '../controllers/productsController';

const router = express.Router();

const {
    getAllProducts,
    setAllProducts,
    getProduct,
    getReviews
} = products;


router.get('/', getAllProducts);
router.post('/', setAllProducts);
router.get('/:id', getProduct);
router.get('/:id/reviews', getReviews);


module.exports = router;

import express from 'express';

const router = express.Router();

import products from './products';
import users from './users';

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Home page!' });
});

router.use('/api/users', users);
router.use('/api/products', products);

module.exports = router;

import express from 'express';
//import authentification from '../middlewares/authentication';
const router = express.Router();

import passport from '../config/passport';

import products from './products';
import users from './users';
import auth from './auth';

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Home page!' });
});

router.use('/api/users', passport.authenticate('local', {session: false}),/*authentification,*/ users);
router.use('/api/products', passport.authenticate('local', {session: false}), /*authentification,*/ products);
router.use('/auth', auth);

router.get('/auth/facebook', passport.authenticate('facebook'), (req, res) => {
    if (req.user) {
        res.redirect('/'); // Return user object
    }
    else {
        res.status(400).json({"error": "Failed to authenticate user"}); // This is never called!
    }
});
/*
router.get('/auth/google', passport.authenticate('google'), (req, res) => {
    if (req.user) {
        res.redirect('/'); // Return user object
    }
    else {
        res.status(400).json({"error": "Failed to authenticate user"}); // This is never called!
    }
});*/


module.exports = router;

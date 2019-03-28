import express from 'express';
import auth from '../controllers/authController';

const router = express.Router();

const { authenticate, facebookAuthenticate } = auth;

//router.get('/facebook', facebookAuthenticate);
router.post('/', authenticate);


module.exports = router;
import express from 'express';
import users from '../controllers/usersController';

const router = express.Router();

const { getUsers } = users;

router.get('/', getUsers);

module.exports = router;
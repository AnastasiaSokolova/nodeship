import express from 'express';
import route from './routes/routes';


import logger from './middlewares/logger.js';

const app = express();

app.use(logger);
app.use(express.json());

app.use('/', route);

export default app;

import express from 'express';
import route from './routes';

import passport from './config/passport';
import logger from './middlewares/logger.js';

const app = express();

app.use(logger);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());


app.use('/', route);


export default app;

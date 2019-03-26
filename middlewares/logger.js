import { createLogger, format, transports } from 'winston';
const { combine, timestamp } = format;

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.simple()
    ),

    transports: [
        new transports.Console(),
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' })
    ]
});



module.exports = function(req, res, next){
    logger.info(`${req.method} ${req.originalUrl}`);

    res.on('finish', () => {
        logger.info(`${res.statusCode} ${res.statusMessage}S`)
    });

    next()
};


import jwt from 'jsonwebtoken';

module.exports = (req, res, next) => {

    const token = req.body.token;

    if (token) {

        jwt.verify(token, 'abc', (err, decoded) => {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }

};
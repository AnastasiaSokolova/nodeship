import jwt from 'jsonwebtoken';
import passport from 'passport';

module.exports = {
    authenticate: (req, res) => {
        passport.authenticate('local', {session: false}, (err, user, info) => {
            if (err || !user) {
                return res.status(400).json({
                    "code": 404,
                    "user": user,
                    "message": "Not Found"
                });
            }
            req.login(user, {session: false}, (err) => {
                if (err) {
                    res.send(err);
                }
                const token = jwt.sign(user, 'abc');
                return res.json({user, token});
            });
        })(req, res)
    },
    facebookAuthenticate: (req, res) => {
       // passport.authenticate('facebook', {session: false}, (err, user, info) => {
            if (req.user) {
                res.redirect('/'); // Return user object
            }
            else {
                res.status(400).json({"error": "Failed to authenticate user"});
            }
        //})
    }
};





/* 2. Without passport */
/*
module.exports = {
    authenticate: (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        const {username, password } = req.body;
        const authorized = dataUsers.users
            .filter(user => (
                user.username === username && user.password === password)
            );

        if(!authorized.length) {
            res.status(400).json({
                "code": 404,
                "message": "Not Found",
            });
        } else {
            const email = authorized[0].email;
            jwt.sign({}, 'abc', function(err, token) {
                res.send({
                    "code": 200,
                    "message": "OK",
                    "data": {
                        "user": {
                            "email": email,
                            "username": username
                        }
                    },
                    "token": token
                });
            });
        }
    }
};*/
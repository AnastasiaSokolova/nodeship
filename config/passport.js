import passport from 'passport';
import strategy from 'passport-local';
import dataUsers from '../mocks/users.js';
const LocalStrategy = strategy.Strategy;

const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').Strategy;


function findUser(data) {
    return new Promise((resolve, reject) => {
        const user = dataUsers.users.filter(user => (
            user.username === data.username && user.password === data.password)
        );

        resolve(user[0])

    });
}

function findOrCreate(data, cb) {
    const user = dataUsers.users.filter(user => user.facebookId === data.facebookId)[0];
    cb(null, user);
}

// LOCAL STRATEGY

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    function (username, password, cb) {
        return findUser({username, password})
            .then(user => {
                if (!user) {
                    return cb(null, false, {message: 'Incorrect username or password.'});
                }
                return cb(null, user, {message: 'Logged In Successfully'});
            })
            .catch(err => {
                cb(err)
            });
    }
));

//FACEBOOK STRATEGY
/*passport.use(new FacebookStrategy({
        clientID: '438927330184139',
        clientSecret: 'f29c43ab23d6d6207019140102777835',
        callbackURL: "http://localhost:8080/auth/facebook"
    },
    function(accessToken, refreshToken, profile, cb) {
        findOrCreate({ facebookId: profile.id }, function (err, user) {
            console.log(user);
            return cb(err, user);
        });
    }
));*/
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

//GOOGLE STRATEGY
/*passport.use(new GoogleStrategy({
        consumerKey: 'AIzaSyC8nTlt14e_GdYl_oxr7Xygcs3KG7fXlCY',
        consumerSecret: 'v3_AaOwtfMTuXAFTzmFV52cn',
        callbackURL: "http://localhost:8080"
    },
    function(token, tokenSecret, profile, cb) {
        console.log(profile);
        findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));*/



module.exports = passport;
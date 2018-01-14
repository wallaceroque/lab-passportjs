const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const User = require('../models/user');
const config = require('../_config');
const init = require('../auth/init');

passport.use(new GitHubStrategy({
    clientID: config.github.clientID,
    clientSecret: config.github.clientSecret,
    callbackURL: config.github.callbackURL,
}, (accessToken, refreshToken, profile, done) => {
    let searchQuery = {
        name: profile.displayName
    };

    let updates = {
        name: profile.displayName,
        someID: profile.id,
    }

    let options = {
        upsert: true,
    }

    User.findOneAndUpdate(searchQuery, updates, options, (err, user) => {
        if (err) return done(err);
        else return done(null, user);
    });
}));

// serialize user into the session
init();

module.exports = passport;



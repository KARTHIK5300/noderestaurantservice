var passport = require("passport");
const express = require('express');
const app = express();
var GitHubStrategy = require('passport-github2').Strategy;
const cookieSession = require('cookie-session');
var GITHUB_CLIENTID = "64f59de6ab0695e14017";
var GITHUB_SECRETID = "74463de628baf3aa95f25d914d0e34c931ec97ea";
 //https://github.com/settings/applications/1191952



// cookieSession config
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    keys: ['randomstringhere']
}));



 passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENTID,
    clientSecret: GITHUB_SECRETID,
    callbackURL: 'http://localhost:3000/'
},
(accessToken, refreshToken, profile, done) => {
    console.log(profile);
    done(null, profile); // passes the profile data to serializeUser
}
));


 passport.serializeUser((user, done) => {
     console.log('from auth' , user);
    done(null, user);
});

// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) => {
    done(null, user);
});


exports.gitHubAuthVerify = passport.authenticate('github' , {scope: ['user:email']});
const express = require('express');
const app = express();
const validate = require('express-validation')
const bodyParser = require('body-parser')
const routes = require('../app/routes/routes');
const auth = require('../app/config/auth');
var passport = require("passport")

// const logger = require('../app/config/winston-config');
require('../app/config/dbconfig');

app.use(passport.initialize()); // Used to initialize passport
app.use(passport.session()); // Used to persist login sessions

app.use(bodyParser.json());
app.use(routes);


app.use(function(err, req, res, next){
    console.log(err);
    res.status(400).json(err);
  });
module.exports = app; 
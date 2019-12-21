const express = require('express');
const app = express();
const validate = require('express-validation')
const bodyParser = require('body-parser')
const routes = require('../app/routes/routes');
const logger = require('../app/config/winston-config');
require('../app/config/dbconfig');

app.use(bodyParser.json());
app.use(routes);

logger.info('starting the app');

app.use(function(err, req, res, next){
    console.log(err);
    res.status(400).json(err);
  });
module.exports = app; 
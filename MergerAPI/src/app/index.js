const express = require('express');
const app = express();
const path=require('path')
const bodyParser = require('body-parser')
const routes = require('../app/routes/routes');

const swagger = require('../app/config/swagger-config');



app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(routes);

app.use(function(err, req, res, next){
    console.log(err);
    res.status(400).json(err);
  });
module.exports = app; 
const express = require('express');
const app = express();
const route=require("../routes/routes")
const swaggerJSDoc = require('swagger-jsdoc');
// swagger definition
var swaggerDefinition = {
    info: {
      title: 'Node Swagger API',
      version: '1.0.0',
      description: 'Demonstrating how to describe a RESTful API with Swagger',
    },
    host: 'localhost:4001',
    basePath: '/',
  };
  
  // options for the swagger docs
  var options = {
    // import swaggerDefinitions
    swaggerDefinition,
    // path to the API docs
    apis: [ '../routes/routes.js'],
  };
  
  // initialize swagger-jsdoc
  var swaggerSpec = swaggerJSDoc(options);

  exports.module = swaggerSpec;
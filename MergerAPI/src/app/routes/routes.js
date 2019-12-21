const express = require('express');
const router = express.Router();
const swaggerJSDoc = require('swagger-jsdoc');
const valuesfromorders = require('../controller/getValues');
const totalAmount = require('../controller/total-aggregate');
const swagger = require('../config/swagger-config');

/**
 * @swagger
 * /getrestaurents:
 *   get:
 *     tags:
 *       - Puppies
 *     description: Returns all puppies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of puppies
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
router.get('/getrestaurents' , valuesfromorders);
router.get('/totalamount' , totalAmount);
router.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swagger);     //swagger
  });

module.exports = router;
const express = require('express');
const placeOrder = require('../controllers/place-order');
const viewOrder = require('../controllers/view-order');
const viewOrders = require('../controllers/view-orders');
const removeOrder = require('../controllers/cancel-order');
const updateOrder = require('../controllers/update-order');
const getTotalAmount = require('../controllers/total-amount');
const agregateAmount = require('../controllers/total-aggregate');
const validate = require('express-validation');
const validation = require('../validation/validation');
const auth = require('../config/auth');
const router = express.Router();

// console.log(auth.gitHubAuthVerify);
router.post('/placeorder' , placeOrder); //validate(validation)
router.get('/' , auth.gitHubAuthVerify ,viewOrders);         //, auth.gitHubAuthVerify
router.get('/vieworders' , viewOrders);
 router.post('/vieworder' ,  viewOrder);
router.delete('/cancelorder' , removeOrder);
router.put('/updatevalue' , updateOrder);
router.get('/gettotalamount' , getTotalAmount)

router.post('/agregateamount' , agregateAmount);

module.exports = router;
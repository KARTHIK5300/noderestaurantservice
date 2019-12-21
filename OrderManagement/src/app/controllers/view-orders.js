const order = require("../model/order-model");
const moment = require('moment');
const filter = require("../controllers/query-helper");
const logger = require("../config/winston");

async function viewOrders(req, res) {
  const viewOrders = await order.find(filter(req), (error, filterValue) => {
    if (error) throw Error(error.message);
    //logger.error("please enter valid value");
    res.send(filterValue);
    logger.info("orders views successfully")
  });
}

module.exports = viewOrders;

 

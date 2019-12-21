const order = require("../model/order-model");
const moment = require('moment');
const filter = require("../controllers/query-helper");
const logger = require("../config/winston");

async function viewOrders(req, res) {
  const restName = req.body; 
  const obj = req.body;   
  const d = String(obj.date).split("T")[0];     // {$in: restName.restaurentId} split("T")[0]; 
  console.log('bodyValue', obj , d, restName.restaurentId);                //filter(req) bodyValue ['5df58aa133832d8b58c9790d' , '5df5a6faf59998720c390e27']
  const viewOrders = await order.find({ restaurentId:{$in: restName.restaurentId}, date:{"$gte": new Date(d), $lt: new Date(moment(d).add(1, "days"))}}, (error, filterValue) => {
    if (error) throw Error(error.message);
    //logger.error("please enter valid value");
    res.send(filterValue);
    logger.info("orders views successfully")
  });
}

module.exports = viewOrders;

 

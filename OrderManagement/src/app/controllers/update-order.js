const updateSchema = require("../model/order-model");
const filter = require("../controllers/query-helper");
const logger = require("../config/winston");

async function updateOrder(req, res) {
    var query = filter(req);
    var newReq = req.body;
    console.log("newQuery" ,query , newReq);
    const find = await updateSchema.findById(req.body._id, (error, filterValue) => {
        if (error) throw Error(error.message);
        logger.error("please enter valid value");
         res.send({ data: filterValue })
      });
    const updateOrder = await updateSchema.updateOne(find , { $set: req.body }, (error, removedValue) => {
      if (error) throw Error(error.message);
       // logger.error("please enter valid value");
      res.send({ data: removedValue });
      logger.info('sucessfully updated');
      //console.log('sucessfully updated')
    });
    console.log( "find" ,find , newReq);
  }
 
  
module.exports = updateOrder;
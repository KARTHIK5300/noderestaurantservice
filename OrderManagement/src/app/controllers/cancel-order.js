const removeSchema = require("../model/order-model");
const filter = require("../controllers/query-helper");
async function removeOrders(req, res) {
    const viewOrders = await removeSchema.remove(filter(req), (error, removedValue) => {
      if (error) throw Error(error.message);
      //logger.error("please enter valid value");
      res.send({ data: removedValue });
    });
  }
  
  
  module.exports = removeOrders;

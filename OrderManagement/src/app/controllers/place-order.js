const orderSchema = require("../model/order-model");
function placeOrder(req, res) {
  const {
    name,
    type,
    quantity,
    price,
    orderId,
    city,
    restaurentId
  } = req.body;
  orderSchema.create(
    {

      name,
      type,
      quantity,
      price,
      orderId,
      city,
      restaurentId
    },
    (error, placeOrder) => {
      if (error) throw Error(error.message);
      console.log(placeOrder);
      res.send({ data: placeOrder });
    }
  );
}

module.exports = placeOrder;

const orderSchema = require("../model/order-model");
function placeOrder(req, res) {
  orderSchema.create(
    {
        name: "dadsfdsff",
        type: "Indian food",
        quantity: 9,
        price: 23987,
        orderId: 3,
        city: "coimbatore",
        restaurentId: "5df5a6faf59998720c390e27"
    },
    (error, placeOrder) => {
      if (error) throw Error(error.message);
      console.log(placeOrder);
      res.send({ data: placeOrder });
    }
  );
}

module.exports = placeOrder;

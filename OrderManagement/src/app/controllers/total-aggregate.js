const mongoose = require('mongoose');
const order = require("../model/order-model");
// const filter = require("../controllers/query-helper");
const logger = require("../config/winston");

async function totalAmounts(req, res) {
    console.log(req.body.date);
  const viewOrders = await order.aggregate(
    [
        {
            $match: {
              //  _id: ObjectId(req.body._id)
              date: new Date(req.body.date)
            }
        },
      {
        $project: {
        //   date: 1,
        //   item: 1,
         // _id: ObjectId(req.query._id),
          totalAmount: {$sum: { $multiply: ["$price", "$quantity"] }},
          count: { $sum: 1 }
        }
      }
    ],
    (error, totalResult) => {
      if (error) throw Error(error.message);
      console.log("total amount", totalResult);
      res.send({totalResult});
    }
  );
  console.log('view orders' , viewOrders);
}

module.exports = totalAmounts;

// import mongoose from "mongoose";
const mongoose = require('mongoose');
const ObjectId= mongoose.Types.ObjectId;
const order = require("../model/order-model");
// const filter = require("../controllers/query-helper");
const logger = require("../config/winston");

async function totalAmounts(req, res) {
  const viewOrders = await order.aggregate(
    [
        {$match: {
          _id: ObjectId(req.query._id)
        }},
      {
        $project: {
        //   date: 1,
        //   item: 1,
         // _id: ObjectId(req.query._id),
          totalAmount: { $multiply: ["$price", "$quantity"] },
          count: { $sum: 1 }
        }
      }
    ],
    (error, totalResult) => {
      if (error) throw Error(error.message);
      console.log("total amount", totalResult);
      res.send({ data: totalResult });
    }
  );
}

module.exports = totalAmounts;

// import config from './index';
const config = require('./index');
const mongoose = require("mongoose");
const env = require('dotenv/config');
//MONGO_URL     "mongodb://localhost/OrderManagement"
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true
});
// mongoose.connect(config.MongoUrl, {
//   useNewUrlParser: true
// });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose");
});
////on errror needs to done
module.exports = { mongoose, db };

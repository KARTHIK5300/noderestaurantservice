const mongoose = require("mongoose");
const config = require('./index');
const env = require('dotenv/config');
mongoose.connect('mongodb://localhost:27017/Resturent' , {
  useNewUrlParser: true
});
////on errror needs to done  mongodb://localhost:27017/Resturent
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose");
});
////on errror needs to done
module.exports = { mongoose, db };

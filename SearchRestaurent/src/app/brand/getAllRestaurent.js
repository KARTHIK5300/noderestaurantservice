const getAllRestaturent = require("../model/restaurant");
const logger = require('../config/winston-config');
const filter = require('./filter');

async function allRestaurents(req, res) {
  let searchValue = req.query;

  const filter = {}
  if (searchValue.rating) {
    filter.rating = { '$gte': searchValue.rating}
  }
  if (searchValue.location) {
    filter.location = searchValue.location
  }
  if(searchValue.budget) {
    filter.budget = searchValue.budget
  }
  if(searchValue.cuisien_name) {
    filter.cuisien_name = searchValue.cuisien_name
  }
  if(searchValue.menu) {
    filter.menu = searchValue.menu
  }
  if(searchValue.restaurentName) {
    filter.restaurentName = searchValue.restaurentName
  }
  if(searchValue.date) {
    filter.date = new Date(searchValue.date)
  }
  if(searchValue.city) {
    filter.city = searchValue.city
  }
  console.log(searchValue , filter);
  const search = await getAllRestaturent.find(
    filter,
    (error, particularValue) => {
      if (error) throw Error(error.message);
      logger.error("please enter valid value");
      res.send({ data: particularValue });
    }
  );
}

module.exports = allRestaurents;

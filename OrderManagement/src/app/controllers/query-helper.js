function queryHelper(req) {
    const filter = {};
  
    if (req.query.name) {
        filter.name = req.query.name;
    }
    if (req.query.type) {
        filter.type = req.query.type;
    }
    if (req.query.price) {
        // filter.price = { '$gte': req.query.price} ;
         filter.price =  req.query.price;
    }
    if (req.query.quantity) {
        filter.quantity = req.query.quantity;
    }
    if (req.query.amount) {
        filter.amount = req.query.amount;
    }
    if (req.query.city) {
        filter.city = req.query.city;
    }
    if (req.query.time) {
        filter.time = req.query.time;
    }
    console.log("whereQuery", filter);
    return filter;
  }
  
  module.exports = queryHelper;
  
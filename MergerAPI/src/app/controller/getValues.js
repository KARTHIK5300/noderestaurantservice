var rp = require("request-promise");
// const consule = require('../../consul');
async function orderService(req, res) {
    const city = req.query.city;
    const datePrams = req.query.date
    var getOption = {
        uri: 'http://localhost:4000?city='+city,
        headers: {
            'User-Agent': 'Request-Promise',
            
        },
        json: true // Automatically parses the JSON string in the response
    };
    console.log(getOption);
  await rp(getOption).then(function(result1, err) {    
      console.log(result1);
    const resultsId = result1.data.map(id => {
    return id._id;
    });
    // const resultsDate = result1.data.map(id => {
    //     return id.date;
    //   });
    // console.log('id' , resultsId ,'date', resultsDate.toString() );
    const totalResult = {
      restaurents: resultsId,
     // date: datePrams
    };
    var options = {
      method: "post",
       uri: "http://localhost:3000/vieworder",
       // uri: currentService().known_order_instances[0]+"/vieworder",
      body: {
       // city:totalResult.restaurents,
         date: datePrams,
         restaurentId: resultsId
       //restaurentId: "5df58aa133832d8b58c9790d",

      },
      json: true // Automatically stringifies the body to JSON
    };

    console.log('fromsecond', options); //restaurentDetails
    rp(options).then(function(result, err) {
        if (err) throw Error(err.message);
      console.log("yffjf",result);
      res.send(result);
     // result.send(res);
    });
   });
}

module.exports = orderService;

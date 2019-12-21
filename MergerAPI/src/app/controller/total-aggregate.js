var rp = require("request-promise");
async function totalAmount(req, res) {
    const datePrams = req.query.date
    var getOption = {
        uri: 'http://localhost:4000?date='+datePrams,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };
    console.log(getOption);
  await rp(getOption).then(function(filterValue, err) {    
      console.log("rrrrr",filterValue);
    const resultsDate = filterValue.data.map(ele => {
        return ele.date;
      });
      var postOptions = {
        method: "post",
        uri: "http://localhost:3000/agregateamount",
        body: {
         // city:totalResult.restaurents,
         date: '2019-12-14T22:32:50.500Z'
        },
        json: true // Automatically stringifies the body to JSON
       };
       console.log('fromsecond', postOptions); //restaurentDetails
       rp(postOptions).then(function(result, err) {
         console.log("yffjf",result);
         res.send(result);
        // result.send(res);
       });
   
   });
  
}

module.exports = totalAmount;

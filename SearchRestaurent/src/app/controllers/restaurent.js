const restaurant = require("../model/restaurant");
function restaurentBrand(req, res) {
  const {
    distance,
    rating,
    city,
    restaurentName,
    cuisien_name,
    budget,
    menu
  } = req.body
  restaurant.create(
    {

      distance,
      rating,
      city,
      restaurentName,
      cuisien_name,
      budget,
      menu
      
      // location: {
      //   latitude: 40.742051,
      //   longitude: -74.004821
      // },
      // distance: "2",
      //  rating: "1",
      //  city: "Bangalore",
      // restaurentName: "serwerw",
      // cuisien_name: "Iwerere",
      // budget: 150000,
      // menu: "Panneerfry",
      
    //   menu: ["Panneerfry" , "Pepperfry"]
    },
    (error, postValue) => {
      if (error) throw Error(error.message);
      res.send({ data: postValue });
    }
  );
  // const brand = [{id: 1 , name: 'chiness food'}]
  // console.log(brand);
  // res.json(brand)
}

module.exports = restaurentBrand;

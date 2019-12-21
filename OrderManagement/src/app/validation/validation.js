var Joi = require("joi");
const orderValidation = {
  body: {
    name: Joi.string()
      .regex(/[a-zA-Z]{3,30}/)
      .required(),
    type: Joi.string()
    .regex(/[a-zA-Z]{3,30}/)
    .required(),
    price: Joi.number(),
    quantity: Joi.number(),
    orderId: Joi.number()
  }
  //   } ,
  //   query: {                                              ///have to implement in routes
  //     rating: Joi.number().min(2),
  //     distance: Joi.string()
  //       .regex(/[0-9]{1,3}/)
  //       .required(),
  //     restaurentName: Joi.string()
  //       .regex(/[a-zA-Z]{3,30}$/)
  //       .required(),
  //     cuisien_name: Joi.string()
  //       .min(3)
  //       .required(),
  //     menu: Joi.string()
  //       .regex(/[a-zA-Z]{3,30}/)
  //       .required()
  //   }
};
module.exports = orderValidation;

//.regex(/[a-zA-Z0-9]/)

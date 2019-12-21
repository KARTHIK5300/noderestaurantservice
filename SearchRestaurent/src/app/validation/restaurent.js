var Joi = require("joi");
const resDetails = {
  body: {
    distance: Joi.string()
      .regex(/[0-9]{1,3}/)
      .required(),
    restaurentName: Joi.string()
      .regex(/[a-zA-Z]{3,30}/)
      .required(),
    cuisien_name: Joi.string()
      .min(3)
      .required(),
      budget:Joi.number(),
    menu: Joi.string()
      .regex(/[a-zA-Z]{3,30}/)
      .required()
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
module.exports = resDetails;

//.regex(/[a-zA-Z0-9]/)

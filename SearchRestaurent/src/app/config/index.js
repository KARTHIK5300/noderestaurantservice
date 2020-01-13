const env = require('dotenv/config');
console.log('ertrtr' , process.env.MONGO_URL)
module.exports = {
    MONGO_URL: process.env.MONGO_URL,
     MongoUrlTest: process.env.MONGO_TESTDB
}

//to use 
//import config from '.config
//config.MongoUrl
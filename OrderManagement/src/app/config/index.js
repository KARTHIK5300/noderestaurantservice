const env = require('dotenv/config');

export default{
     MongoUrl: process.env.MONGO_URL ,
     MongoUrlTest: process.env.MONGO_TESTDB
}

//to use 
//import config from '.config
//config.MongoUrl
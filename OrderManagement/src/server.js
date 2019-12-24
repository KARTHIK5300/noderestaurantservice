const env = require('dotenv/config');
const app = require('./app');
// const consul = require("./consule");
// const producer = require("./producer");
// console.log(process.env.MY_SECRET , process.env.MONGO_URL , process.env.PORT);
app.listen(process.env.PORT || '3000', process.env.IP_Address || '127.0.0.1' , (err) => {
    if(err) {
        consolr.log('error' + err);
    } else {
        console.log('started');
    }
})
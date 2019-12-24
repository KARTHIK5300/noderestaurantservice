const app = require('./app');
const env = require('dotenv/config');
//const consule = require('./consul');

app.listen(process.env.PORT || '4000' , (err) => {
    if(err) {
        consolr.log('error' + err);
    } else {
        console.log('started');
    }
})
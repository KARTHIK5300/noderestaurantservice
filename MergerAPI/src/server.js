const app = require('./app');
// const consul = require('./consul');
const consumer = require('./consumer');
app.listen(4001 , (err) => {
    if(err) {
        console.log('error' + err);
    } else {
        console.log('started');
    }
})
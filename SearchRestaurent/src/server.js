const app = require('./app');
const consule = require('./consul');

app.listen(4000 , (err) => {
    if(err) {
        consolr.log('error' + err);
    } else {
        console.log('started');
    }
})
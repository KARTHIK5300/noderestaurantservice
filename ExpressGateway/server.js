const path = require('path');
const gateway = require('express-gateway');
const consule = require('./consule');

gateway()
  .load(path.join(__dirname, 'config'))
  .run();

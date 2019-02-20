const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controller.js');

const app = express();
const port = 3000;
const serve = express.static('./public/dist');
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(serve);
app.use(bodyParser.json());
app.get('/api/properties/', controller.get);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

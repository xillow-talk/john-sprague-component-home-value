const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controller.js');

const app = express();
const port = 2999;
const serve = express.static('./public/dist');

app.use(serve);
app.use(bodyParser.json());

app.get('/api/properties', controller.get);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

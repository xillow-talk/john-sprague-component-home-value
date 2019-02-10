const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express(); 
let port = 3000;

const serve = express.static('./public/dist');
app.use(serve);
app.use(bodyParser.json());


app.get('/properties', controller.get);


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


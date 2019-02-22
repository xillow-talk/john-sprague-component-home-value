const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');
const seed = require('../seed');

const port = 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/scripts', express.static(path.resolve(__dirname, '../node_modules')));

const connection = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',
  password: 'password',
  database: 'ZoundCloud',
});

seed();
app.get('/comments', (req, res) => {
  connection.query('SELECT * FROM comments', (err, response) => {
    if (err) {
      console.log('err', err);
      res.sendStatus(403);
    } else {
      console.log('working1');
      res.send(response);
    }
  });
});

app.get('/commentCount', (req, res) => {
  connection.query('SELECT COUNT(*) FROM comments', (err, response) => {
    if (err) {
      console.log('errr', err);
      res.sendStatus(403);
    } else {
      console.log('working');
      res.send({ count: response[0]['COUNT(*)'] });
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

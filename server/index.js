const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ZoundCloud',
});


app.get('/comments', (req, res) => {
  connection.query('SELECT * FROM comments', (err, response) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.send(response);
    }
  });
});

app.get('/commentCount', (req, res) => {
  connection.query('SELECT COUNT(*) FROM comments', (err, response) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.send({ count: response[0]['COUNT(*)'] });
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

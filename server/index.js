/* eslint-disable linebreak-style */
require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const compress = require('compression');
const controller = require('./controller.js');
const port = 3000;
const app = express();

app.use(cors());
app.use(compress());
app.use('/scripts', express.static(path.resolve(__dirname, '../node_modules')));

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/loaderio-00072e857aba6340088297ab56ffd7c6/', (req, res) => { 
	res.sendFile(path.resolve(__dirname, './loaderio-00072e857aba6340088297ab56ffd7c6.txt'));
}); 
app.get('/api/comments/bundle', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/bundle.js'));
});

// Handle GET request read all song comments
app.get('/api/comments/song/:songId/comments', controller.handleReadForAllSongs);

// Handle GET request to READ number of comments for a single song
app.get('/api/comments/song/:songId/commentCount',  controller.handleNumberOfComments);

// Handle POST requst to CREATE a new comment for a single song
app.post('/api/comments/song/:sondId/comment', bodyParser.json(), controller.handleCreateComment);

// Handle PUST request to UPDATE a message for a comment
app.put('/song/:sondId/comment', controller.handleUpdateComment);

// Handle DELETE request to DELETE a message for a single song
// Potentially an optimiation by searching for somehing other than message?
app.delete('/song/:sondId/comment', controller.handleDeleteComment);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

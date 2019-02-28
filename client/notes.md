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
app.use(bodyParser.json());

app.use('/scripts', express.static(path.resolve(__dirname, '../node_modules')));
app.use('/song/:songId', express.static(path.resolve(__dirname, '../dist')));
app.use(express.static(path.resolve(__dirname, '../dist')));

// Handle GET request read all song comments
app.get('/song/:songId/comments', controller.handleReadAllSongs);

// Handle GET request to READ number of comments for a single song
app.get('/song/:songId/commentCount', controller.handleNumberOfComments);

// // Handle POST requst to CREATE a new comment for a single song
// app.post('/song/:sondId/comment', (req, res) => {
//   const { songId,  profilePic, username, message, poastedAt, songTime, followers } = req.params;
//   const createCommentQuery = `INSERT INTO comments (songId, profilePic, username, message, postedAt, songTime, followers)
//                               VALUES  ("${songId}","${profilePic}","${username}","${message}","${postedAt}","${songTime}","${followers}")`
//   connection.query(createCommentQuery, (err, response) => {
//     if (err) {
//       res.sendStatus(403);
//     } else {
//       console.log('Successfully posted a comment to DB');
//       res.status(201);
//     }
//   })
// })

// // Handle UPDATE request to UPDATE a message for a comment
// app.put('/song/:sondId/comment', (req, res) => {
//   const { message } = req.params;
//   var updateMessageQuery = `UPDATE comments
//                             SET message = "${message}"
//                             WHERE id = (SELECT id
//                                         FROM comments
//                                         WHERE message = "${oldMessage}"
//                                         )
//                           `;

//                           UPDATE tbl SET col = (
//                             SELECT ... FROM (SELECT.... FROM) AS x);

//                             update comments set ,e
//   connection.query(updateMessageQuery, (err, response) => {
//     if (err) {
//       res.sendStatus(404);
//       console.log("Error updating a comment", error);
//     } else {
//       console.log("Successfully updated a comment");
//       res.status(202)
//     }
//   })
// })
// // Handle DELETE request to DELETE a message for a single song
// // Potentially an optimiation by searching for somehing other than message?
// app.delete('/song/:sondId/comment', function (req, res) {
//   const { message } = req.params;
//   var selectCommentIdQuery = `SELECT id
//                               FROM comments
//                               WHERE message = "${message}"
//                               `
//   var deleteCommentQuery = `DELETE FROM comments
//                             WHERE id = (?)
//                             `
//   connection.query(selectCommentIdQuery, (err, response) => {
//     if (err) {
//       res.sendStatus(404);
//     } else {
//       connection.query(deleteCommentQuery, (err, response)  => {
//         if (err) {
//           console.log('Error deleting a comment: ', error)
//         } else {
//           console.log('Successfully deleted a comment')
//           res.status(202)
//         }
//       }
//     }
//   })
// });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

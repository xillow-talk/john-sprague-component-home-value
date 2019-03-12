/* eslint-disable linebreak-style */
const model = require('./model.js');

module.exports = {
  handleReadForAllSongs: (req, res) => {
    console.log('hi')
    const { songId } = req.params;
    model.fetchAllSongs(songId, (err, data) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.send(data.rows).status(200);
      }
    });
  },
  handleNumberOfComments: (req, res) => {
    const { songId } = req.params;
    model.fetchNumberOfComments(songId, (err, data) => {
      if (err) {
        console.log('Error fetching number of comments: ', err);
        res.sendStatus(403);
      } else {
        res.status(200).send(data.rows[0].count);
      }
      app.use(bodyParser.json());
    });
  },
  handleCreateComment: (req, res) => {
    const { body} = req;
    model.writeNewComment(body, (err, data) => {
      if (err) {
        console.log('Error writing comment: ', err);
        res.sendStatus(404); 
      } else {
        res.sendStatus(200);
      }
    });
  },
  handleUpdateComment: (req, res) => {
    const { message } = req.params;
    model.updateComment(message, (err, data) => {
      if (err) {
        console.log('Error updating comment: ', err);
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    });
  },
  handleDeleteComment: (req, res) => {
    const { newMessage, oldMessage } = req.params;
    model.deleteComment(newMessage, oldMessage, (err, data) => {
      if (err) {
        console.log('Error deleting a comment: ', err);
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    });
  },
};

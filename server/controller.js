/* eslint-disable linebreak-style */
const model = require('./model.js');

module.exports = {
  handleReadForAllSongs: (req, res) => {
    const { songId } = req.params;
    model.fetchAllSongs(songId, (err, data) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.send(data).status(200);
      }
    });
  },
  handleReadForAllSongsStingId: (req, res) => {
    const { stringId } = req.params;
    model.fetchAllSongsStringId(stringId, (err, data) => {
      if (err) {
        console.log('Error fetching all songs with a string Id: ', err);
        res.sendStatus(404);
      } else {
        res.send(data).status(200);
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
        res.send({ count: data[0]['COUNT(*)'] });
      }
    });
  },
  handleNumberOfCommentsStringId: (req, res) => {
    const { stringId } = req.params;
    model.fetchNumberOfCommentsWithStringId(stringId, (err, data) => {
      if (err) {
        console.log('Error fetching number of comments with string id: ', err);
        res.sendStatus(404);
      } else {
        res.send({ count: data[0]['COUNG(*)']});
      }
    });
  },
  handleCreateComment: (req, res) => {
    const { params } = req;

    model.writeNewComment(params, (err, data) => {
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

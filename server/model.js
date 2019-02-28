/* eslint-disable linebreak-style */
const db = require('./db.js');

module.exports = {
  fetchAllSongs: (songId, callback) => {
    db.readAllSongs(songId, (err, songs) => {
      if (err) {
        callback(err);
      } else {
        // clean data here!!!
        callback(null, songs);
      }
    });
  },
  fetchAllSongsStringId: (stringId, callback) => {
    db.readAllSongsStringId(stringId, (err, songs) => {
      if (err) {
        callback(err);
      } else {
        // clean data here!
        callback(null, songs);
      }
    });
  },
  fetchNumberOfComments: (songId, callback) => {
    db.readNumberOfComments(songId, (err, numberOfComments) => {
      if (err) {
        callback(err);
      } else {
        callback(null, numberOfComments);
      }
    });
  },
  fetchNumberOfCommentsStringId: (stringId, callback) => {
    db.readNumberOfCommentsStringId(stringId, (err, numberOfComments) => {
      if (err) {
        callback(err);
      } else {
        callback(null, numberOfComments);
      }
    });
  },
  writeNewComment: (params, callback) => {
    db.writeNewComment(params, (err, newComment) => {
      if (err) {
        callback(err);
      } else {
        callback(null, newComment);
      }
    });
  },
  updateComment: (message, callback) => {
    db.updateComment(message, (err, updatedComment) => {
      if (err) {
        callback(err);
      } else {
        callback(null, updatedComment);
      }
    });
  },
  deleteComment: (newMessage, oldMessage, callback) => {
    db.deleteComment(newMessage, oldMessage, (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(null, response);
      }
    });
  },
};


// 'fetch for one route'; also include fetching with a string and a number
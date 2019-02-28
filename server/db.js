/* eslint-disable linebreak-style */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'john',
  password: 'password',
  database: 'ZoundCloud',
});

module.exports = {
  readAllSongs: (songId, callback) => {
    connection.query(`SELECT * FROM comments where songId = ${songId}`, (err, data) => {
      callback(err, data);
    });
  },
  readAllSongsStringId: (stringId, callback) => {
    connection.query(`SELECT * FROM comments WHERE songId = ${stringId}`, (err, data) => {
      callback(err, data);
    })
  },
  readNumberOfComments: (songId, callback) => {
    connection.query(`SELECT COUNT(*) FROM comments where songId = ${songId}`, (err, data) => {
      callback(err, data);
    });
  },
  readNumberOfCommentsStringId: (stringId, callback) => {
    connection.query(`SELECT COUNT(*) FROM comments where songId = ${stringId}`, (err, data) => {
      callback(err, data);
    });
  writeNewComment: (params, callback) => { 
    const {
      songId, profilePic, username, message, postedAt, songTime, followers,
    } = params;
    console.log('these are the params', params);
    const createCommentQuery = `INSERT INTO comments (songId, profilePic, username, message, postedAt, songTime, followers)
                                VALUES  ( "${songId}","${profilePic}","${username}","${message}","${postedAt}","${songTime}","${followers}")`;
    connection.query(createCommentQuery, (err, data) => {
      callback(err, data);
    });
  },
  updateComment: (newMessage, oldMessage, callback) => {
    // make sure to refactor this soon!
    const updateMessageQuery = `UPDATE comments
                              SET message = "${newMessage}"
                              WHERE id = (SELECT id 
                                          FROM (SELECT * 
                                                FROM comments
                                                ) AS A
                                          WHERE message = "${oldMessage}"
                                          )`;
    connection.query(updateMessageQuery, (err, data) => {
      callback(err, data);
    });
  },

  deleteComment: (message, callback) => {
    const selectCommentIdQuery = `SELECT id
    FROM comments
    WHERE message = "${message}"
    `;
    const deleteCommentQuery = `DELETE FROM comments
      WHERE id = (?)
      `;
    connection.query(selectCommentIdQuery, (err, response) => {
      if (err) {
        callback(err);
      } else {
        connection.query(deleteCommentQuery, (err, response) => {
          if (err) {
            callback(err);
          } else {
            callback(null, response);
          }
        });
      }
    });
  },
};

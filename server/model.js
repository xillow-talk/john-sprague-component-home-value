/* eslint-disable linebreak-style */

const pg = require('pg');
const config = require('../configDB.js');      
const client = new pg.Client(config);

client.connect();

module.exports = {
  fetchAllSongs: (songId, callback) => {
    client.query(`SELECT * FROM comments where songId = ${songId}`, (err, allComments) => {
      if (err) {
        callback(err, null); 
      }
      callback(null, allComments);
    });
  },
  fetchNumberOfComments: (songId, callback) => {
    client.query(`SELECT COUNT(*) FROM comments where songId = ${songId}`, (err, numberOfComments) => {
      if (err) {
        callback(err);
      } else {
        callback(null, numberOfComments);
      }
    });
  },
  writeNewComment: (params, callback) => {
    const {
      songId, profilePic, username, message, postedAt, songTime, followers,
    } = params;
    console.log('these are the params', params);
    const createCommentQuery = `INSERT INTO comments (songId, profilePic, username, message, postedAt, songTime, followers)
                                VALUES  ( "${songId}","${profilePic}","${username}","${message}","${postedAt}","${songTime}","${followers}")`;
    client.query(createCommentQuery, (err, newComment) => {
      if (err) {
        callback(err);
      } else {
        callback(null, newComment);
      }
    });
  },
  updateComment: (newMessage, callback) => {
    // make sure to refactor this soon!
    const updateMessageQuery = `UPDATE comments
    SET message = "${newMessage}"
    WHERE id = (SELECT id 
                FROM (SELECT * 
                      FROM comments
                      ) AS A
                WHERE message = "${oldMessage}"
                )`;
    client.query(updateMessageQuery, (err, updatedComment) => {
      if (err) {
        callback(err);
      } else {
        callback(null, updatedComment);
      }
    });
  },
  deleteComment: (oldMessage, callback) => {
    const selectCommentIdQuery = `SELECT id
    FROM comments
    WHERE message = "${oldMessage}"
    `;
    const deleteCommentQuery = `DELETE FROM comments
      WHERE id = (?)
      `;
    client.query(selectCommentIdQuery, (err, response) => {
      if (err) {
        callback(err);
      } else {
        client.query(deleteCommentQuery, (err, response) => {
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


// 'fetch for one route'; also include fetching with a string and a number
/* eslint-disable linebreak-style */
const pg = require('pg');
const config = require('../configDB.js');      
const client = new pg.Client(config);
client.connect((err) => {
  if (err) {
    console.log('Not able to connect to database: ', err);
  }
});
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
      songid, profilepic, username, message, postedat, songtime, followers
    } = params;
    const createCommentQuery = `INSERT INTO comments (songid,profilepic,username,message,postedat,songtime,followers)
                                VALUES  (${songid},'${profilepic}','${username}','${message}','${postedat}','${songtime}',${followers})`;
                      ;
    client.query(createCommentQuery, (err, newComment) => {
      if (err) {
        callback(err);
      } else {
        
        callback(null, null);
      }
    });
  },
  updateComment: (newMessage, callback) => {
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
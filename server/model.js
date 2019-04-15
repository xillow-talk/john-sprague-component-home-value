/* eslint-disable linebreak-style */
const pg = require('pg');
const config = require('../configDB.js');      
const client = new pg.Client(config);
const host = "127.0.0.1";
var redis = require('redis');
var redisClient = redis.createClient(6379, host);
const pool = new pg.Pool({
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.port,
  // idleTimeoutMillis: 20000,
  // connectionTimeoutMillis: 3000,
  max: 15 // Default
});
// client.connect; //TODO: determine if the connection should be open/closed or remain open
pool.connect();

// Redis 
redisClient.on('connect', function() {
  console.log('hidy ho captain, we\'ve successfylly connected to redis!');
})
redisClient.on('error', function (err) {
  console.log('Something went wrong ' + err);
});

module.exports = {
  fetchAllSongs: (songId, callback) => {
    // Check to see if the the songId is in redis cache
    redisClient.exists(`${songId}`, (err, reply) => {
      // If songId is in cache, fetch the comments and return the value in the callback
      if (reply === 1) {
          redisClient.get(`${songId}`, (err, result) => {
            if (err) {
                console.log('error from redis: ', err);
                throw error;
            }
            callback(null, result);
        });
        // If songId is not in the cache, fetch the comments from the database and also save the results to the cache
      } else {
        // Send GET request and then store the result in the cache, and return value to controller 
        pool.query(`SELECT * FROM comments where songId = ${songId}`, (err, allComments) => {
          if (err) {
            callback(err, null); 
          }
          // Set key value to the results of the GET requst to redis
          redisClient.set(`${songId}`, `${JSON.stringify(allComments.rows)}`, (err, reply) => {          });
          callback(null, allComments.rows);
        });
      }
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

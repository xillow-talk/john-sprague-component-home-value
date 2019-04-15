
const pg = require('pg');
const config = require('../configDB.js');
const { readAllCommentsQuery, 
  readAllCommentsStringQuery,
  readNumberOfCommentsQuery,
  readNumberOfCommentsStringQuery,
  writeNewComment,
  updateCommentQuery,
  deleteCommentQuery
} = require('./postgresTestQueries.js');        
const client = new pg.Client(config);
const randomSongNum = () => Math.floor(Math.random() * 10000000);

var query = `explain analyze select * from comments where songid = ${randomSongNum()}`;

var selectAllResults = [];

client.connect((err) => {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
  client.query("DISCARD PLANS", (err) {
    if (err) {
      console.log(err);
    }
  })
  client.query(query, (err, results) => {
    if (err) {
      console.error('error droping table', err);
    }
    selectAllResults.push(Number(results.rows[7]['QUERY PLAN'].slice(15, 23)));
  });
  client.query(query, (err, results) => {
    if (err) {
      console.error('error droping table', err);
    }
    selectAllResults.push(Number(results.rows[7]['QUERY PLAN'].slice(15, 23)));
  });
  client.query(query, (err, results) => {
    if (err) {
      console.error('error droping table', err);
    }
    selectAllResults.push(Number(results.rows[7]['QUERY PLAN'].slice(15, 23)));
  });
  client.query(query, (err, results) => {
    if (err) {
      console.error('error droping table', err);
    }
    console.log(JSON.stringify(Number(results.rows[7]['QUERY PLAN'].slice(15, 23))))
    selectAllResults.push(Number(results.rows[7]['QUERY PLAN'].slice(15, 23)));
  });
  client.query(query, (err, results) => {
    if (err) {
      console.error('error droping table', err);
    }
    selectAllResults.push(Number(results.rows[7]['QUERY PLAN'].slice(15, 23)));
    client.end();
  });

});

var median = (arr) => {
  var results = 0;
  for(let i = 0; i < arr.length; i++){
    results += arr[i];
  }
  return results/arr.length;
}
median(selectAllResults);

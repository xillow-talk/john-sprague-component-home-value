/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const pg = require('pg');
const config = require('../configDB.js');
const { dropTable, 
        dropSongsTable, 
        createCommentsTable, 
        createSongsTable, 
        insertCSV, 
        insertSongsCSV 
      } = require('./seedQueries.js');        

const client = new pg.Client(config);

client.connect((err) => {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
  client.query(dropTable, (err) => {
    if (err) {
      console.error('error droping table', err);
    }
    console.log('successfully droped table')
  });
  client.query(dropSongsTable, (err) => {
    if (err) {
      console.error('error droping songs table', err);
    }
    console.log('successfully droped songs table')
  });
  client.query(createSongsTable, (err) => {
    if (err) {
      console.error('error creating table', err);
    }
    console.log('successfully created table');
  });
  client.query(createCommentsTable, (err) => {
    if (err) {
      console.error('error creating table', err);
    }
    console.log('successfully created table');
  });
  client.query(insertSongsCSV, (err) => {
    if (err) {
      console.error('error inserting csv', err);
    }
    console.log('successfully loaded songs csv file')

  })
  client.query(insertCSV, (err) => {
    if (err) {
      console.error('error inserting csv', err);
    }
    client.end();
    console.log('successfully loaded comments csv file')
  })
});
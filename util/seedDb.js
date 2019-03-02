/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const pg = require('pg');
const config = require('../configDB.js');
const { dropTable, createTable,  insertCSV } = require('./seedQueries.js');        

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
  client.query(createTable, (err) => {
    if (err) {
      console.error('error creating table', err);
    }
    console.log('successfully created table');
  });
  client.query(insertCSV, (err) => {
    if (err) {
      console.error('error inserting csv', err);
    }
    console.log('successfully loaded csv file')
    client.end();
  })
});
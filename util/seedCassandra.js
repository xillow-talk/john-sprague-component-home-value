var cassandra = require('cassandra-driver');
var async = require('async');
const { dropTable, 
  dropSongsTable, 
  createCommentsTable, 
  createSongsTable, 
  insertCSV, 
  insertSongsCSV 
} = require('./seedQueriesCassandra.js');    

var client = new cassandra.Client({contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'cloudvibes'});

  client.execute("SELECT * from comments", (err, result) => {
    if (err) {
      console.log('error from db: ', err) 
    } 
    var message = result.rows[0];
    console.log(message);
      // Run next function in series
  });
  client.execute(dropTable, (err) => {
    if (err) {
      console.error('error droping table', err);
    }
    console.log('successfully droped table')
    client.execute(dropSongsTable, (err) => {
      if (err) {
        console.error('error droping songs table', err);
      }
      console.log('successfully droped songs table')
      client.execute(createSongsTable, (err) => {
        if (err) {
          console.error('error creating table', err);
        }
        console.log('successfully created table');
        client.execute(createCommentsTable, (err) => {
          if (err) {
            console.error('error creating table', err);
          }
          console.log('successfully created table');
        });
        client.execute(insertSongsCSV, (err) => {
          if (err) {
            console.error('error inserting csv', err);
          }
          process.exit();
          console.log('successfully loaded songs csv file')
        })
      });
    });
  });







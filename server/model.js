const db = require('../database/db.js');

module.exports = {
  get: (callback) => {
    db.getAllProperties((err, propertyData) => {
      if (err) {
        callback(err);
      }
      db.getAllComparableHomes((err, comparableHomesData) => {
        if (err) {
          callback(err);
          return;
        }
        db.getAllLocalHomes((err, localHomesData) => {
          if (err) {
            callback(err);
            return; 
          }
          // To do, return one object and return data to the controller
          var data = {
            propertyData: propertyData, 
            comparableHomesData: comparableHomesData,
            localHomesData: localHomesData
          };
          console.log('weve fetched all of the data');
          callback(null, data); 
        });
      });
    });
  },
};
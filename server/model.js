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
          var data = {
            propertyData: propertyData, 
            comparableHomesData: comparableHomesData,
            localHomesData: localHomesData,
          };
          console.log('weve fetched all of the data');
          callback(null, data); 
        });
        // To do, return one object and return data to the controller
      });
    });
  },
  fetchPropertyData: (id, callback) => {
    db.getSingleProperty(id, (err, singlePropertyData) => {
      if (err) {
        callback(err);
        return;
      }
      var singleProperty = {
        singlePropertyData: singlePropertyData
      };
      callback(null, singleProperty);
    });
  }
};
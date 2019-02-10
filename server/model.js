module.exports = {
  get: (callback) => {
    db.getAllProperties((err, propertyData) => {
      if (err) {
        callback(err);
      }
      db.getComparableHomes((err, comparableHomeData) => {
        it (err) {
          callback(err);
          return;
        }
        db.getLocalHomes((err, localHomesData) => {
          if (err) {
            callback(err);
            return; 
          }
          // To do, return one object and return data to the controller
          callback(null, data); 
        })
      })
    })
  },
}
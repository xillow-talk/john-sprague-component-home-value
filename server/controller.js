const model = require('./model.js');

module.exports = {
  get: (req, res) => {
    model.get((err, data) => {
      if (err) {
        console.log('error GET request from the controller');
        return;
      }
      res.send(data);
    });
  },
  fetchPropertyData: (req, res) => {
    var propertyId = req._parsedOriginalUrl.pathname.slice(-1);
    model.fetchPropertyData(propertyId, (err, data) => {
      if (err) {
        console.log('error fetching propertyData');
      }
      res.send(data);
    });
  }
}

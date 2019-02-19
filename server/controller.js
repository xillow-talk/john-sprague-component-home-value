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
};

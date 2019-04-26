const model = require("./database/models/homes.js");

module.exports = {
  get: async (req, res) => {
    try {
      const results = model.get();
      res.status(200).send(results);
    } catch {
      return res.status(404).send(err);
    }
  },
  fetchPropertyData: async (req, res) => {
    try {
      var propertyId = req.params.propertyId;
      const results = model.fetchPropertyData(propertyId);
      res.status(200).send(results);
    } catch {
      return res.status(404).send(err);
    }
  }
};

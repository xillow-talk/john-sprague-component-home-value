var mongoose = require("mongoose");
const key = require("./config.js");
const db = mongoose.connect(key.mongodb);

db.then(db => console.log("Connect to mongoose")).catch(err => {
  console.log("there was a problem connecto to mongo");
});

module.exports = db;

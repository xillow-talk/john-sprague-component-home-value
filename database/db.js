const mongoose = require('mongoose');
var faker = require('faker');
mongoose.connect('mongodb://localhost/properties');

// Initialize mongodb schema
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;
// Create db schema for properties
let propertySchema = new Schema({
  id: { type: Number},
  zeistimationPrice: Number,
  startPriceRange: Number,
  endPriceRange: Number,
  thirtyDayPriceChange: Number,
  oneYearForcast: Number,
  propertyLastSalePrice: Number, 
  propertLastSaleDate: {date: Date},
  comparableHomePrice: Number,
  marketAppreciationPrice: Number,
  localSalesAvg: Number
});

let comparableHomes = new Schema({
  id: {type: Number},
  sellDate: Number, 
  sellPrice: Number,
  beds: Number, 
  baths: Number,
  squft: Number, 
  streetAddress: String, 
  priceSqft: Number,
});

let localHomes = new Schema({
  id: {type: Number},
  sellDate: Number, 
  sellPrice: Number,
  beds: Number, 
  baths: Number,
  squft: Number, 
  streetAddress: String, 
  priceSqft: Number,
});

// Accessing the models for each schema
let Property = mongoose.model('Property', propertySchema);
let ComparableHomes = mongoose.model('ComparableHomes', comparableHomes);
let LocalHomes = mongoose.model('LocalHomes', localHomes);

// query to grab data for a single property 
module.exports = {
  getAllProperties: (callback) => {
    Property.find((err, data) => {
      callback(err, data);
    }).setOptions({
      limit: 1
    });
  }, 
  getAllComparableHomes: (callback) => {
    ComparableHomes.find((err, data) => {
      callback(err, data);
    }).setOptions({
      limit: 10
    });
  }, 
  getAllLocalHomes: (callback) => {
    LocalHomes.find((err, data) => {
      callback(err, data);
    }).setOptions({
      limit: 10
    });
  }
};
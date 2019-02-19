const mongoose = require('mongoose');
var faker = require('faker');
mongoose.connect('mongodb://localhost/properties');

// Initialize mongodb schema
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;
// Create db schema for properties
let propertySchema = new Schema({
  id: Number,
  zestimationPrice: String,
  startPriceRange: String,
  endPriceRange: String,
  thirtyDayPriceChange: String,
  oneYearForcast: String,
  propertyLastSalePrice: String, 
  propertLastSaleDate: String,
  comparableHomePrice: String,
  marketAppreciationPrice: String,
  localSalesAvg: String
});

let comparableHomes = new Schema({
  id: {type: Number},
  sellDate: String, 
  sellPrice: String,
  beds: Number, 
  baths: Number,
  sqft: String, 
  streetAddress: String, 
  priceSqft: String
});

let localHomes = new Schema({
  id: {type: Number},
  sellDate: String, 
  sellPrice: String,
  beds: Number, 
  baths: Number,
  sqft: String, 
  streetAddress: String, 
  priceSqft: String,
  saleToList: Number
});

let photos = new Schema({
  url: String, 
  propertyId: Number 
});

// Accessing the models for each schema
let Property = mongoose.model('Property', propertySchema);
let ComparableHomes = mongoose.model('ComparableHomes', comparableHomes);
let LocalHomes = mongoose.model('LocalHomes', localHomes);
let Photos = mongoose.model('Photos', photos);


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
  },
  getAllPhotos: (callback) => {
    Photos.find((err, data) => {
      callback(err, data);
    }).setOptions({
      limit: 50
    });
  }
};
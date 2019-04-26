const mongoose = require("mongoose");
var faker = require("faker");
const db = require("../db");

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
  localSalesAvg: String,
  sellDate: String,
  sellPrice: String,
  beds: Number,
  baths: Number,
  sqft: String,
  streetAddress: String,
  priceSqft: String,
  saleToList: Number
});

let comparableHomes = new Schema({
  id: { type: Number },
  sellDate: String,
  sellPrice: String,
  beds: Number,
  baths: Number,
  sqft: String,
  streetAddress: String,
  priceSqft: String
});

let localHomes = new Schema({
  id: { type: Number },
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
let Property = mongoose.model("Property", propertySchema);
let ComparableHomes = mongoose.model("ComparableHomes", comparableHomes);
let LocalHomes = mongoose.model("LocalHomes", localHomes);
let Photos = mongoose.model("Photos", photos);

// query to grab data for a single property
module.exports = {
  getAllProperties: async propertyData => {
    try {
      const propertyData = await Property.find(propertyData).setOptions({
        limit: 99
      });

      const comparableHomesData = await comparableHomes.find().setOptions({
        limit: 10
      });

      const localHomesData = await LocalHomes.find().setOptions({
        limit: 10
      });

      const photosData = await Photos.find().setOptions({
        limit: 99
      });
      var data = {
        propertyData: propertyData,
        comparableHomesData: comparableHomesData,
        localHomesData: localHomesData,
        photosData: photosData
      };
      return data;
    } catch (err) {
      return err;
    }
  },
  getSingleProperty: async id => {
    try {
      const results = Property.find({ id });
      var singleProperty = {
        singlePropertyData: results
      };
      return singleProperty;
    } catch (err) {
      return err;
    }
  }
};

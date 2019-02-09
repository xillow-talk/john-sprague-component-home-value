const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// Initialize mongodb schema
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Create db schema 
let propertySchema = new Schema({
  id: { type: Number, unique: true },
  zeistimationPrice: Number,
  startPriceRange: Number,
  endPriceRange: Number,
  thirtyDayPriceChange: Number,
  oneYearForcast: Number,
  propertyLastSalePrice: Number, 
  propertLastSaleDate: {date: Date, default: Date.now},
  comparableHomePrice: Number,
  marketAppreciationPrice: Number,
  localSalesAvg: Number
});

let comparableHomes = new Schema({
  id: {type: Number, unique: true},
  sellDate: Number, 
  sellPrice: Number,
  beds: Number, 
  baths: Number,
  squft: Number, 
  streetAddress: String, 
  priceSqft: Number,
});

let localHomes = new Schema({
  id: {type: Number, unique: true},
  sellDate: Number, 
  sellPrice: Number,
  beds: Number, 
  baths: Number,
  squft: Number, 
  streetAddress: String, 
  priceSqft: Number,
});

// Accessing the model
let Property = mongoose.model('Property', propertySchema);
let ComparableHomes = mongoose.model('ComparableHomes', comparableHomes);
let LocalHomes = mongoose.model('LocalHomes', localHomes);





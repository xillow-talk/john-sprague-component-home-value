const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/properties');

// Initialize mongodb schema
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Create db schema for properties
let propertySchema = new Schema({
  id: Number,
  zestimationPrice: Number,
  startPriceRange: Number,
  endPriceRange: Number,
  thirtyDayPriceChange: Number,
  oneYearForcast: Number,
  propertyLastSalePrice: Number, 
  propertLastSaleDate: String,
  comparableHomePrice: Number,
  marketAppreciationPrice: Number,
  localSalesAvg: Number
});

let comparableHomes = new Schema({
  id: {type: Number},
  sellDate: String, 
  sellPrice: Number,
  beds: Number, 
  baths: Number,
  squft: Number, 
  streetAddress: String, 
  priceSqft: Number,
});

let localHomes = new Schema({
  id: {type: Number},
  sellDate: String, 
  sellPrice: Number,
  beds: Number, 
  baths: Number,
  squft: Number, 
  streetAddress: String, 
  priceSqft: Number,
});


// Preping dummyData
var propertyData = [];
var comparableHomeData = [];
var localHomesData = [];

// Generate a list of fake property data with 100 items 
for (let i = 0; i < 100; i++) {
  var obj = {
    id: i, 
    zestimationPrice: faker.random.number({'min': 500000, 'max': 5000000}), 
    startPriceRange: faker.random.number({'min': 500000, 'max': 5000000}),
    endPriceRange: faker.random.number({'min': 500000, 'max': 5000000}),
    thirtyDayPriceChange: faker.random.number({'min': 15000, 'max': 50000}),
    oneYearForcast: faker.random.number({'min': 500000, 'max': (500000 + 100000)}),
    propertyLastSalePrice: faker.random.number({'min': (500000 - 100000), 'max': (500000)}), 
    propertLastSaleDate: faker.date.past(), 
    comparableHomePrice: faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)}), 
    marketAppreciationPrice: faker.random.number({'min': (500000 - 200000), 'max': (500000)}),
    localSalesAvg: faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)})
  };
  propertyData.push(obj);
}

// Generate a list of fake comparable data with 100 items
for (let i = 0; i < 100; i++) {
  var obj = {
    id: i,
    sellDate: faker.date.past(),
    sellPrice: faker.random.number({'min': 500000, 'max': 5000000}),
    beds: faker.random.number({'min': 2, 'max': 6}),
    baths: faker.random.number({'min': 2, 'max': 4}),
    sqft: faker.random.number({'min': 1000, 'max': 3500}),
    streetAddress: faker.address.streetAddress(),
    priceSqft: faker.random.number({'min': 1200, 'max': 2500})
  };
  comparableHomeData.push(obj);
}

// Generate a list of face local home data with 100 items
for (let i = 0; i < 100; i++) {
  var obj = {
    id: i,
    sellDate: faker.date.past(),
    sellPrice: faker.random.number({'min': 500000, 'max': 5000000}),
    beds: faker.random.number({'min': 2, 'max': 6}),
    baths: faker.random.number({'min': 2, 'max': 4}),
    sqft: faker.random.number({'min': 1000, 'max': 3500}),
    streetAddress: faker.address.streetAddress(),
    priceSqft: faker.random.number({'min': 1200, 'max': 2500})
  };
  localHomesData.push(obj);
}

// Accessing the models for each schema
let Property = mongoose.model('Property', propertySchema);
let ComparableHomes = mongoose.model('ComparableHomes', comparableHomes);
let LocalHomes = mongoose.model('LocalHomes', localHomes);

// Insert dummydata into property model
Property.insertMany(propertyData, (err, data) => { 
  if (err) {
    console.log('error inserting many documents into mongo', err)
    return;
  }  
  console.log('inserted many documents into mongoose');
});

// Insert dummydata into comparableHomes model
ComparableHomes.insertMany(comparableHomeData, (err, data) => {
  if (err) {
    console.log('error inserting many documents into comparable homes', err);
    return;
  }
  console.log('inserted many documents into comparableHomes');
});

// Insert dummydata into localHomes model
LocalHomes.insertMany(localHomesData, (err, data) => {
  if (err) {
    console.log('error inserting many documents into comparable homes', err);
    return;
  }
  console.log('inserted many documents into comparableHomes');
});

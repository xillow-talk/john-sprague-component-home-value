const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/properties');

// Initialize mongodb schema
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var numberWithCommas = (num) => {
  num = num.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num)) {
    num = num.replace(pattern, "$1,$2");
  }
  return num;
};

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
  id: {type: Number},
  sellDate: String, 
  sellPrice: String,
  beds: Number, 
  baths: Number,
  sqft: String, 
  streetAddress: String, 
  priceSqft: String,
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


// Preping dummyData
var propertyData = [];
var comparableHomeData = [];
var localHomesData = [];
var photosData = [];

// Generate a list of fake property data with 100 items 
for (let i = 1; i < 100; i++) {
  var obj = {
    id: i, 
    zestimationPrice: numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000})), 
    startPriceRange: numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000})),
    endPriceRange: numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000})),
    thirtyDayPriceChange: numberWithCommas(faker.random.number({'min': 15000, 'max': 50000})),
    oneYearForcast: numberWithCommas(faker.random.number({'min': 500000, 'max': (500000 + 100000)})),
    propertyLastSalePrice: numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000)})), 
    propertLastSaleDate: `${faker.random.number({'min': 0, 'max': 12})}/${faker.random.number({'min': 0, 'max': 30})}/${faker.random.number({'min': 2010, 'max': 2019})}`, 
    comparableHomePrice: numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)})), 
    marketAppreciationPrice: numberWithCommas(faker.random.number({'min': (500000 - 200000), 'max': (500000)})),
    localSalesAvg: numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)})),
    sellDate: `${faker.random.number({'min': 0, 'max': 12})}/${faker.random.number({'min': 0, 'max': 30})}/${faker.random.number({'min': 2010, 'max': 2019})}`,
    sellPrice: numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000})),
    beds: faker.random.number({'min': 2, 'max': 6}),
    baths: faker.random.number({'min': 2, 'max': 4}),
    sqft: numberWithCommas(faker.random.number({'min': 1000, 'max': 3500})),
    streetAddress: faker.address.streetAddress(),
    priceSqft: numberWithCommas(faker.random.number({'min': 1200, 'max': 2500})), 
    saleToList: faker.random.number({'min': 91, 'max': 105})
  };
  propertyData.push(obj);
}

// Generate a list of fake comparable data with 100 items
for (let i = 1; i < 100; i++) {
  var obj = {
    id: i,
    sellDate: `${faker.random.number({'min': 0, 'max': 12})}/${faker.random.number({'min': 0, 'max': 30})}/${faker.random.number({'min': 2010, 'max': 2019})}`,
    sellPrice: numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000})),
    beds: faker.random.number({'min': 2, 'max': 6}),
    baths: faker.random.number({'min': 2, 'max': 4}),
    sqft: numberWithCommas(faker.random.number({'min': 1000, 'max': 3500})),
    streetAddress: faker.address.streetAddress(),
    priceSqft: numberWithCommas(faker.random.number({'min': 1200, 'max': 2500})), 
  };
  comparableHomeData.push(obj);
}

// Generate a list of face local home data with 100 items
for (let i = 1; i < 100; i++) {
  var obj = {
    id: i,
    sellDate: `${faker.random.number({'min': 0, 'max': 12})}/${faker.random.number({'min': 0, 'max': 30})}/${faker.random.number({'min': 2010, 'max': 2019})}`,
    sellPrice: numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000})),
    beds: faker.random.number({'min': 2, 'max': 6}),
    baths: faker.random.number({'min': 2, 'max': 4}),
    sqft: numberWithCommas(faker.random.number({'min': 1000, 'max': 3500})),
    streetAddress: faker.address.streetAddress(),
    priceSqft: numberWithCommas(faker.random.number({'min': 1200, 'max': 2500})),
    saleToList: faker.random.number({'min': 91, 'max': 105})
  };
  localHomesData.push(obj);
}

https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large1.jpg


for (let j = 1; j < 100; j++) {
  photosData.push({
    url: `https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large${j}.jpg`,
    propertyId: j
  });
}

// Accessing the models for each schema
let Property = mongoose.model('Property', propertySchema);
let ComparableHomes = mongoose.model('ComparableHomes', comparableHomes);
let LocalHomes = mongoose.model('LocalHomes', localHomes);
let Photos = mongoose.model('Photos', photos); 

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

//Insert photoData
Photos.insertMany(photosData, (err, data) => {
  if (err) {
    console.log('error inserting documents into photos');
    return;
  }
  console.log('inserted mnay photos into photos');
});

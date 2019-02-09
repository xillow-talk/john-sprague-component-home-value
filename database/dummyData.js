var faker = require('faker');

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
module.exports = {
  propertyData,
  comparableHomeData,
  localHomesData
};



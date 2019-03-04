const fs = require('fs');
const loremIpsum = require('lorem-ipsum');

const wstream = fs.createWriteStream('../../dummyData/dummySongRecords.csv');

let string = '';
const newHead = 'songname,\n';
wstream.write(newHead);

for (let i = 0; i <= 10000000; i++) {
  string += `songname${i}\n`;
  if (i % 100000 === 0) {
    wstream.write(string);
    string = '';
    console.log(i)
  }
}
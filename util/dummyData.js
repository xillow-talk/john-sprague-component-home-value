
// const fs = require('fs');

// let writeStream = fs.createWriteStream('./secret.txt');

// // write some data with a base64 encoding
// writeStream.write('aef35ghhjdk74hja83ksnfjk888sfsf', 'base64');

// // the finish event is emitted when all data has been flushed from the stream
// writeStream.on('finish', () => {
//   console.log('wrote all data to file');
// });

// // close the stream
// writeStream.end();

const fs = require('fs');
const csvWriter = require('csv-write-stream');

const finalPathFile = './out.csv';

if (!fs.existsSync(finalPathFile)) { writer = csvWriter({ headers: ['header1', 'header2'] }); } else { writer = csvWriter({ sendHeaders: false }); }

writer.pipe(fs.createWriteStream(finalPathFile, { flags: 'a' }));
const size = 1000000;
for(let i = 0; i < size; i++) {
    writer.write({
      header1: 'hello',
      header2: 'world',
    });
}
writer.end();

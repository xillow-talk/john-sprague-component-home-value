
const fs = require('fs');
const loremIpsum = require('lorem-ipsum');
const moment = require('moment');

//  {flags: 'a'}
const wstream = fs.createWriteStream('../../dummyData/dummyRecords.csv', {flags: 'a'});

const getRandomTime = () => {
  const randomNum = () => Math.floor(Math.random() * 30 + 1);
  return moment().subtract(randomNum(), 'minutes').format();
};
const randomSongTime = () => {
  const randomNum = num => Math.floor(Math.random() * num);
  const minute = randomNum(5);
  let second = randomNum(59);
  second = second < 10 ? `0${second}` : second;
  return `${minute}:${second}`;
};
const randomFollowers = () => Math.floor(Math.random() * 10000);
const randomNum = () => Math.floor(Math.random() * 498 + 1);
const randomSongNum = () => Math.floor(Math.random() * 10000000);

let string = '';

// const newHead = 'profilePic,songId,username,message,postedAt,songTime,followers,\n';
// wstream.write(newHead);

for (let i = 20000001 ; i <= 30000000; i++) {
  string += `https:s3.amazonaws.com/cloud-vibes-comments/large${randomNum()}.jpg,${randomSongNum()},${loremIpsum({ count: 1, units: 'words' })},${loremIpsum()},${getRandomTime()},${randomSongTime()},${randomFollowers()}\n`;
  if (i % 100000 === 0) {
    wstream.write(string);
    string = '';
    console.log(i)
  }
}


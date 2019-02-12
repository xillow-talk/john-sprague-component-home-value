const mysql = require('mysql');
const loremIpsum = require('lorem-ipsum');
const request = require('request');
const fs = require('fs');
const moment = require('moment');


// GETS IMAGES FOR PROFILE PIC
// const download = async (uri, filename, callback) => {
//   request.head(uri, (err, res, body) => {
//     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
//   });
// };

// let count = 1;
// function populateFolder() {
//   if (count === 101) {
//     return console.log('done!');
//   }
//   download('https://loremflickr.com/240/240', `pics/user${count}.jpg`, () => {
//     console.log('done');
//     count += 1;
//     populateFolder();
//   });
// }
// populateFolder();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

const createTable = async () => {
  await connection.query('DROP TABLE IF EXISTS comments');
  await connection.query(`CREATE TABLE comments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    profilePic VARCHAR(200),
    username VARCHAR(200),
    message VARCHAR(200),
    postedAt VARCHAR(200),
    songTime VARCHAR(200),
    followers VARCHAR(200)
  )`);
};

const getRandomTime = () => {
  const randomNum = () => Math.floor(Math.random() * 30 + 1);
  return moment().subtract(randomNum(), 'minutes');
};

const randomSongTime = () => {
  const randomNum = num => Math.floor(Math.random() * num + 1);
  const minute = randomNum(5);
  let second = randomNum(59);
  second = second < 10 ? `0${second}` : second;
  return `${minute}:${second}`;
};

const randomFollowers = () => Math.floor(Math.random() * 10000 + 1);

const createMessage = async (count) => {
  await connection.query(`
    INSERT INTO comments(profilePic, username, message, postedAt, songTime, followers) 
    VALUES('https://s3.us-east-2.amazonaws.com/kevinbece5/userpics/user${count}.jpg',
      '${loremIpsum({ count: 1, units: 'words' })}',
      '${loremIpsum()}',
      '${getRandomTime()}',
      '${randomSongTime()}',
      '${randomFollowers()}'
    )
  `);
};
const createMessages = () => {
  let count = 1;
  const message = () => {
    if (count === 100) {
      return count;
    }
    count += 1;
    createMessage(count);
    message();
  };
  message();
};


const Seed = async () => {
  await connection.query('DROP DATABASE IF EXISTS ZoundCloud');
  await connection.query('CREATE DATABASE ZoundCloud');
  await connection.query('USE ZoundCloud');
  await createTable();
  await createMessages();
  await connection.end();
};

Seed();

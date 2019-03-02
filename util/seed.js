/* eslint-disable linebreak-style */
const mysql = require('mysql');
const loremIpsum = require('lorem-ipsum');
const request = require('request');
const fs = require('fs');
const moment = require('moment');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'john',
  password: 'password',
});

const createTable = async () => {
  await connection.query('DROP TABLE IF EXISTS comments');
  await connection.query(`CREATE TABLE comments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    songId INT,
    profilePic VARCHAR(100),
    username VARCHAR(100),
    message VARCHAR(100),
    postedAt VARCHAR(100),
    songTime VARCHAR(100),
    followers VARCHAR()
  )`);
};

const Seed = async () => {
  await connection.query('DROP DATABASE IF EXISTS ZoundCloud');
  await connection.query('CREATE DATABASE ZoundCloud');
  await connection.query('USE ZoundCloud');
  await createTable();
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 50; i++) {
    createMessages();
  }
  await connection.end();
};

Seed();
module.exports = Seed;

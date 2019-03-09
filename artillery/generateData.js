const loremIpsum = require('lorem-ipsum');
const moment = require('moment');

function generateRandomEndPoints(userContext, events, done) {
  const endPoint = Math.floor(Math.random() * 10000000)
  userContext.vars.endPoint = endPoint;
  return done();
}

function generateRandomData(userContext, events, done) {
  const endPoint = Math.floor(Math.random() * 10000000)
  userContext.vars.endPoint = endPoint;
  userContext.vars.songid = 45000000;
  userContext.vars.profilepic = `https:s3.amazonaws.com/cloud-vibes-comments/large1`; 
  userContext.vars.username = 'username';
  userContext.vars.message = 'this is an example comment, dogs are way better than cats';
  userContext.vars.postedat = '2019-03-05';
  userContext.vars.songtime = '3:00';
  userContext.vars.followers = 232;
  return done();
}
module.exports = {
  generateRandomEndPoints,
  generateRandomData
}

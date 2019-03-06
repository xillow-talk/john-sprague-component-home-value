
const dropTable = 'DROP TABLE IF EXISTS comments';
const dropSongsTable = 'DROP TABLE IF EXISTS songs';
const createCommentsTable = `CREATE TABLE cloudvibes.comments(
  id int primary key,
  profilePic text,
  songId int, 
  stringId text,
  username text,
  message text,
  postedAt text,
  songTime text,
  followers text
  )`

const createSongsTable = `CREATE TABLE cloudvibes.songs (
  id int PRIMARY KEY, 
  songname text
)`
                   
const insertCSV =  `COPY comments(id,profilePic,songId,stringId,userName,message,postedAt,songTime,followers) 
                    FROM '/home/unome/Documents/courseHr/repos/SDC/dummyData/dummyRecords.csv' 
                    WITH DELIMITER=',' AND HEADER=TRUE`

const insertSongsCSV = `COPY songs (id, songname) 
FROM '/home/unome/Documents/courseHr/repos/SDC/dummyData/dummySongRecords2.csv' 
WITH DELIMITER=',' AND HEADER=TRUE`;

 module.exports.dropTable = dropTable;
 module.exports.dropSongsTable = dropSongsTable;
 module.exports.createCommentsTable = createCommentsTable; 
 module.exports.insertCSV = insertCSV;
 module.exports.createSongsTable = createSongsTable;
 module.exports.insertSongsCSV = insertSongsCSV;

 
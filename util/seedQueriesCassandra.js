
const dropTable = 'DROP TABLE IF EXISTS comments';
const dropSongsTable = 'DROP TABLE IF EXISTS songs';
const createCommentsTable = `CREATE TABLE cloudvibes.comments_v2(

  profilePic text,
  songId int, 
  stringId text primary key,
  username text,
  message text,
  postedAt text,
  songTime text,
  followers text,
  ) with clustering order by (stringId desc) `

const createSongsTable = `CREATE TABLE cloudvibes.songs (
  id int PRIMARY KEY, 
  songname text
)`

CREATE INDEX song_id ON cloudvibes.comments (songid);
                   
  const insertCSV =  `COPY comments(profilePic,songId,stringId,userName,message,postedAt,songTime,followers) 
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

 
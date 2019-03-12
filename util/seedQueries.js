
const dropTable = 'DROP TABLE IF EXISTS comments';
const dropSongsTable = 'DROP TABLE IF EXISTS songs';
const createCommentsTable = `CREATE TABLE comments (
  id serial PRIMARY KEY,
  songId INT,
  profilePic VARCHAR(100),
  username VARCHAR(100),
  message VARCHAR(200),
  postedAt VARCHAR(50),
  songTime VARCHAR(50),
  followers VARCHAR(50)
)`;

const createSongsTable = `CREATE TABLE songs (
  id SERIAL PRIMARY KEY, 
  songname VARCHAR(20)
)`
                   
const insertCSV =  `COPY comments (profilePic,songId,userName,message,postedAt,songTime,followers) 
                    FROM '/tmp/dummyRecords3.csv' 
                    DELIMITERS ',' CSV HEADER`;

const insertSongsCSV = `COPY songs (songname) 
FROM '/home/unome/Documents/courseHr/repos/SDC/dummyData/dummySongRecords.csv' 
DELIMITERS ',' CSV HEADER`;

 module.exports.dropTable = dropTable;
 module.exports.dropSongsTable = dropSongsTable;
 module.exports.createCommentsTable = createCommentsTable; 
 module.exports.insertCSV = insertCSV;
 module.exports.createSongsTable = createSongsTable;
 module.exports.insertSongsCSV = insertSongsCSV;

 
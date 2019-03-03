
const dropTable = 'DROP TABLE IF EXISTS comments';
const createTable = `CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  songId INT,
  stringId VARCHAR(50),
  profilePic VARCHAR(100),
  username VARCHAR(100),
  message VARCHAR(200),
  postedAt VARCHAR(50),
  songTime VARCHAR(50),
  followers VARCHAR(50)
)`;
                   
const insertCSV =  `COPY comments (profilePic,songId,stringId,userName,message,postedAt,songTime,followers) 
                    FROM '/home/unome/Documents/courseHr/repos/SDC/dummyData/dummyRecords.csv' 
                    DELIMITERS ',' CSV HEADER`;

 module.exports.dropTable = dropTable;
 module.exports.createTable = createTable; 
 module.exports.insertCSV = insertCSV;
 
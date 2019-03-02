const {username, password} = require('../config.js');
const Pool = require('pg').Pool
const pool = new Pool({
  user: username,
  host: 'localhost',
  database: 'api',
  password: password,
  port: 5432,
})


pool.query(`COPY table_name FROM ‘/dummyRecords.csv’ WITH FORMAT csv`)


COPY table_name FROM '/path_to_csv_file.csv' DELIMITERS ',' CSV;

const { Pool } = require('pg');
const { dbConnectionString } = require('./config.json');

const pool = new Pool({
  connectionString: dbConnectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;

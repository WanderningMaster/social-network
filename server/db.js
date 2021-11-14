const {Pool} = require('pg');
const {db_connection_string} = require('./config.json');

const pool = new Pool({
    connectionString: db_connection_string,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;
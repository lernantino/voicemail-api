// require('dotenv').config();

const { Pool } = require('pg');

// const pool = new Pool();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'vm_db',
    password: 'root',
    port: 5432,
  })

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
  getClient: () => {
    return pool.connect();
  }
};

const { Pool } = require('pg');

const pool = new Pool();

pool.on('connect', () => {
  console.log('we are connected to the db');
});

module.exports = {
  query: (text, params, cb) => pool.query(text, params, cb),
};

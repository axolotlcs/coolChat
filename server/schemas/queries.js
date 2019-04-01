const { query } = require('../models/db');

module.exports = {
  messages: async () => {
    const queryText = 'SELECT u.username, m.message, m.created_at FROM messages as m JOIN users as u ON m.user_id=u._id';
    // return (await query(queryText)).rows;
    return (await query(queryText)).rows.reduce((acc, cur) => {
      const { username, message, created_at } = cur;
      acc.push({ username, message, created_at });
      console.log(acc);
      return acc;
    }, []);
  },
  users: async () => {
    const queryText = 'SELECT username FROM users';
    return (await query(queryText)).rows.reduce((acc, cur) => {
      acc.push(cur.username);
      return acc;
    }, []);
  },
};

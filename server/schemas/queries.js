const { query } = require('../models/db');

module.exports = {
  messages: async () => {
    const queryText =
      'SELECT u.username, m.message, m.created_at FROM messages as m JOIN users as u ON m.user_id=u._id';
    // deleted m.chatroom_id from line 6
    return (await query(queryText)).rows.reduce((acc, cur) => {
      const { username, message, created_at } = cur;
      acc.push({ username, message, created_at });
      return acc;
    }, []);
  },

  users: async () => {
    const queryText = 'SELECT * FROM users';
    return (await query(queryText)).rows.reduce((acc, cur) => {
      const { username, password } = cur;
      acc.push({ username, password });
      return acc;
    }, []);
  },

  chatrooms: async () => {
    const queryString = 'SELECT * FROM chatrooms';
    return (await query(queryString)).rows.reduce((acc, cur) => {
      const { chatroom_name, _id } = cur;
      acc.push({ chatroom_name, _id });
      return acc;
    }, []);
  }
};

const pubsub = require('../pubsub');
const { query } = require('../models/db');
const { MSG_ADDED } = require('./constants');

module.exports = {
  // not verifying write to DB; errors unhandled
  createMessage: async (_, { userId, message }) => {
    const queryText = 'INSERT INTO messages(user_id, message) VALUES ($1, $2) RETURNING user_id, message, created_at';
    const values = [userId, message];
    const msg = (await query(queryText, values)).rows.reduce((acc, cur) => {
      const { user_id, message, created_at } = cur;
      acc.push({ userId: user_id, message, created_at });
      return acc;
    }, [])[0];
    // publishing new data over subscriptions
    await pubsub.publish(MSG_ADDED, { messageAdded: msg });
    return msg;
  },
  // not verifying write to DB; errors unhandled
  createUser: async (_, { userName, password }) => {
    const queryText = 'INSERT INTO users(username, password) VALUES ($1, $2) RETURNING username';
    const values = [userName, password];
    const { username } = (await query(queryText, values)).rows[0];
    return { username, success: true };
  },
};

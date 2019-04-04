const pubsub = require('../pubsub');
const { query } = require('../models/db');
const { MSG_ADDED } = require('./constants');

module.exports = {
  // not verifying write to DB; errors unhandled
  createMessage: async (_, { userId, message, chatroomId }) => {
    const queryText =
      'INSERT INTO messages(user_id, message, chatroom_id) VALUES ($1, $2, $3) RETURNING user_id, message, created_at, chatroom_id';
    const values = [userId, message, chatroomId];
    const msg = (await query(queryText, values)).rows.reduce((acc, cur) => {
      const { user_id, message, created_at, chatroom_id } = cur;
      acc.push({ username: user_id, message, created_at, chatroom_id });
      return acc;
    }, [])[0];
    const usernameQueryText = `SELECT username FROM users WHERE _id=${userId}`;
    const usernameText = await query(usernameQueryText);
    msg.username = usernameText.rows[0].username;
    // publishing new data over subscriptions
    const messageResponse = {
      mutation: 'CREATED',
      message: msg
    };
    await pubsub.publish(MSG_ADDED, { messageAdded: messageResponse });
    return messageResponse;
  },

  // not verifying write to DB; errors unhandled
  createUser: async (_, { userName, password }) => {
    const queryText =
      'INSERT INTO users(username, password) VALUES ($1, $2) RETURNING username';
    const values = [userName, password];
    const { username } = (await query(queryText, values)).rows[0];
    return { username, success: true };
  },

  login: async (_, { username, password }) => {
    const queryText = `SELECT password FROM users WHERE username='${username}'`;
    const pw = (await query(queryText)).rows[0].password;
    if (!pw) return { success: false };
    return pw === password
      ? { username: username, success: true }
      : { username: username, success: false };
  },
  // create chatroom
  // TODO: handle errors
  createChatroom: async (_, { chatroomName }) => {
    const queryText =
      'INSERT INTO chatrooms(chatroom_name) VALUES ($1) RETURNING chatroom_name';
    const values = [chatroomName];
    // only update db if chatroomName isn't an empty string
    if (chatroomName) {
      const { chatroom_name } = (await query(queryText, values)).rows[0];
      return { chatroom_name, success: true };
    }
  }
};

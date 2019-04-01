const { query } = require('../models/db');
const MSG_ADDED = 'MSG_ADDED';
const { PubSub } = require('apollo-server');
const pubsub = require('../pubsub');

// const pubsub = new PubSub();

module.exports = {
  messageAdded: {
    subscribe: () => pubsub.asyncIterator([MSG_ADDED]),
  },
};

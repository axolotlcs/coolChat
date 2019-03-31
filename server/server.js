const app = require('express')();
const { ApolloServer, gql } = require('apollo-server-express');
const { query } = require('./models/db');
const cors = require('cors')

app.use(cors());

const typeDefs = gql`
  type Query {
    messages: [MessageResponse]
    users: [String]
  }

  type Message {
    userId: Int!
    message: String!
    created_at: String!
  }

  type MessageResponse {
    username: String!
    message: String!
    created_at: String!
  }

  type UserSuccess {
    username: String!
    success: Boolean!
  }

  type Mutation {
    createUser(userName: String!, password: String!): UserSuccess
    createMessage(userId: Int!, message: String!): Message
  }
`;
const resolvers = {
  Query: {
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
  },
  Mutation: {
    // not verifying write to DB; errors unhandled
    createMessage: async (_, { userId, message }) => {
      const queryText = 'INSERT INTO messages(user_id, message) VALUES ($1, $2) RETURNING user_id, message, created_at';
      const values = [userId, message];
      return (await query(queryText, values)).rows.reduce((acc, cur) => {
        const { user_id, message, created_at } = cur;
        acc.push({ userId: user_id, message, created_at });
        console.log(acc);
        return acc;
      }, [])[0];
    },
    // not verifying write to DB; errors unhandled
    createUser: async (_, { userName, password }) => {
      console.log(userName, password);
      const queryText = 'INSERT INTO users(username, password) VALUES ($1, $2) RETURNING username';
      const values = [userName, password];
      const { username } = (await query(queryText, values)).rows[0];
      return { username, success: true };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });
app.listen(4000, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  }
});

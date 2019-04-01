const { gql } = require('apollo-server-express');

module.exports = gql`
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

  type Subscription {
    messageAdded: Message
  }
`;

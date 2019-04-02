const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    messages: [Message]
    users: [String]
  }

  type MessageResponse {
    message: Message!
    mutation: String!
  }

  type Message{
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
    createMessage(userId: Int!, message: String!): MessageResponse
  }

  type Subscription {
    messageAdded: MessageResponse
  }
`;

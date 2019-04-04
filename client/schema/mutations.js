import gql from 'graphql-tag';

export const createMessage = gql`
  mutation($userId: Int!, $message: String!, $chatroomId: String!) {
    createMessage(userId: $userId, message: $message, chatroomId: $chatroomId) {
      mutation
      message {
        username
        message
      }
    }
  }
`;

export const createUser = gql`
  mutation($userName: String!, $password: String!) {
    createUser(userName: $userName) {
      username
      password
    }
  }
`;

export const login = gql`
  mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      success
    }
  }
`;

export const createChatroom = gql`
  mutation($chatroomName: String!) {
    createChatroom(chatroomName: $chatroomName) {
      chatroomName
    }
  }
`;

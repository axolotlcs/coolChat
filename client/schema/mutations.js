import gql from 'graphql-tag';

export const createMessage = gql`
  mutation($userId: Int!, $message: String!) {
    createMessage (message: $message) {
      userId
      message
    }
  }`;

export const createUser = gql`
  mutation($userName: String!, $password: String!) {
    createUser (userName: $userName) {
      userName
      passwords
    }
  }
`;
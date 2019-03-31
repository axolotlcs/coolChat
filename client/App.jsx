import React, { Component } from 'react';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider, graphql, compose, Query } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';
import AuthContainer from './components/AuthContainer.jsx';
import ChatroomContainer from './components/ChatroomContainer.jsx';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})
const client = new ApolloClient({
  cache,
  link
})


const UsersQuery = gql`
     {users} 
`;

const messageQuery = gql`{
  messages {
    userId
    message
    created_at
  }
}`;

const createMessage = gql`
  mutation($userId: Int!, $message: String!) {
    createMessage (message: $message) {
      userId
      message
    }
  }`;

const createUser = gql`
  mutation($userName: String!, $password: String!) {
    createUser (userName: $userName) {
      userName
      passwords
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { chat: false };
    this.handleLogin = this.loginHandle.bind(this);
    this.signUpHandle = this.signUpHandle.bind(this);
  }

  loginHandle() {
    console.log('Login');
  }

  signUpHandle() {
    console.log('Signup');
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <AuthContainer handleLogin={this.handleLogin} handleSignUp={this.signUpHandle} />
        <ChatroomContainer />
      </ApolloProvider>
    );
  }
}

export default App;

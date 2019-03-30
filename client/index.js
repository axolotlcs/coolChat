import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './App.jsx';

render(
  // eslint-disable-next-line react/jsx-filename-extension
  <App />,
  document.querySelector('#root'),
);

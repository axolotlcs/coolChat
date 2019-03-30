import React, { Component } from 'react';
import AuthContainer from './components/AuthContainer.jsx';

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
    console.log('Signup')
  }

  render() {
    return (<AuthContainer
        handleLogin={this.handleLogin}
        handleSignUp={this.signUpHandle}/>);
  }
}

export default App;

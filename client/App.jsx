import React, { Component } from 'react';
import AuthContainer from './components/AuthContainer';
import Header from './components/Header';
import ChatroomContainer from './components/ChatroomContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { };
    // this.handleLogin = this.loginHandle.bind(this);
    // this.signUpHandle = this.signUpHandle.bind(this);
  }

  // loginHandle() {
  //   console.log('Login');
  // }

  // signUpHandle() {
  //   console.log('Signup');
  // }

  render() {
    return (
      <div id="app" style={{ height: '100%' }}>
        <Header />
        <div style={{ height: 'calc(100% - 60px)' }}>
          <ChatroomContainer />
        </div>
      </div>
      // <AuthContainer handleLogin={this.handleLogin} handleSignUp={this.signUpHandle} />
    );
  }
}

export default App;

import React, { Component } from 'react';

class AuthContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="auth">
        <input
          type="text"
          id="usernameInput"
          placeholder="Username"
        />
        <input
          type="password"
          id="passwordInput"
          placeholder="Password"
        />
        <button
          type="button"
          className="signUp"
          onClick={this.props.handleSignUp}
        >
          Sign Up
        </button>
        <button
          type="button"
          className="login"
          onClick={this.props.handleLogin}
        >
          Login
        </button>
      </div>
    );
  }
}

export default AuthContainer;

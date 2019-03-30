import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AuthContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { handleSignUp, handleLogin } = this.props;

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
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <button
          type="button"
          className="login"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    );
  }
}

AuthContainer.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
};

export default AuthContainer;

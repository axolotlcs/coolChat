import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Mutation, Query } from 'react-apollo';
import { login } from '../schema/mutations.js';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '400px',
    marginTop: '50px',
    flexDirection: 'column',
    padding: '15px'
  },
  button: {
    flexGrow: 1,
    margin: '5px'
  }
};

class AuthContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleLogin() {
    console.log('login');
  }

  handleSignUp() {
    console.log('STATE: ', this.state);
  }

  render() {
    // const { handleSignUp, handleLogin } = this.props;

    return (
      <div className='auth'>
        <form style={styles.container} noValidate autoComplete='off'>
          <TextField
            id='usernameInput'
            label='Username'
            margin='normal'
            variant='outlined'
            onChange={e => this.setState({ username: e.target.value })}
          />

          <TextField
            id='passwordInput'
            label='Password'
            margin='normal'
            variant='outlined'
            onChange={e => this.setState({ password: e.target.value })}
          />

          <div style={{ display: 'flex' }}>
            <Button
              variant='contained'
              color='primary'
              style={styles.button}
              onClick={this.handleSignUp}
            >
              Sign Up
            </Button>
            <Mutation mutation={login}>
              {loginMutation => (
                <Button
                  variant='contained'
                  color='primary'
                  style={styles.button}
                  onClick={() =>
                    loginMutation({
                      variables: {
                        username: this.state.username,
                        password: this.state.password
                      }
                    }).then(res => console.log(res))
                  }
                >
                  Login
                </Button>
              )}
            </Mutation>

            {/* <Link
                to='/auth'
                style={{ color: '#FFF', textDecoration: 'none' }}
              >
                {/* DELETED FROM LINE 72 to='/chat' */}
            {/* Login */}
            {/* </Link> */}
          </div>
        </form>
      </div>
    );
  }
}

// AuthContainer.propTypes = {
//   handleLogin: PropTypes.func.isRequired,
//   handleSignUp: PropTypes.func.isRequired
// };

export default AuthContainer;

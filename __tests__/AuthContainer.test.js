import React from 'react';
import { shallow } from 'enzyme';
import AuthContainer from '../client/components/AuthContainer';

describe('Auth Container Component: ', () => {
  let wrapper;
  const clickFn = jest.fn();
  beforeAll(() => {
    wrapper = shallow(<AuthContainer
      handleSignUp={clickFn} 
      handleLogIn={clickFn}
    />);
  });

  it('Should render an auth div', () => {
    expect(wrapper.contains(<div className="auth" />)).toBe(true);
  });

  it('Should render two buttons', () => {
    const authDiv = wrapper.find('div');
    expect(authDiv.find('button')).toHaveLength(2);
  });

  describe('Sign Up Button:', () => {
    it('Should be the first button', () => {
      const authDiv = wrapper.find('div');
      const signUpBtn = authDiv.childAt(0);
      expect(signUpBtn.type()).toEqual('button');
      expect(signUpBtn.hasClassName('signUp')).toBe(true);
    });

    it('Sign up button should trigger fn call on click', () => {
      const signUpBtn = wrapper.find('div').childAt(0);
      signUpBtn.simulate('click');
      expect(clickFn.mock.calls.length).toBe(1);
    });
  });

  describe('Login Button:', () => {
    it('Should be the second button', () => {
      const loginBtn = wrapper.find('div').childAt(1);
      expect(loginBtn.type()).toEqual('button');
      expect(loginBtn.hasClassName('login')).toBe(true);
    });

    it('Login button should trigger fn call on click', () => {
      const loginBtn = wrapper.find('div').childAt(1);
      loginBtn.simulate('click');
      expect(clickFn.mock.calls.length).toBe(2);
    });
  });

  describe('Inputs', () => {
    it('Should have a username input', () => {
      const usernameInput = wrapper.find('#usernameInput');
      expect(usernameInput).toExist();
    });

    it('Should have a password input', () => {
      const passwordInput = wrapper.find('#passwordInput');
      expect(passwordInput).toExist();
    });
  });
});

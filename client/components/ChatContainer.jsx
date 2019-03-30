import React, { Component } from 'react';
import MessageBox from './MessageBox';
import Msg from './Msg';

class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  render() {
    const MSG = this.state.messages.reduce((messages, message) => {
      messages.push(
        <Msg 
          username={message.username}
          message={message.message}
        />,
      );
    }, []);
    return (
      <div id="chatContainer">
        <div id="allMsgs">
          {MSG}
        </div>
        <MessageBox />
      </div>
    );
  }
}
export default ChatContainer;

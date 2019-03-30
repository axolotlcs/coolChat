import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ChatContainer from './ChatContainer';

class ChatroomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="chatroom">
        <Sidebar />
        <ChatContainer />
      </div>
    );
  }
}

export default ChatroomContainer;

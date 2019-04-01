import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ChatContainer from './ChatContainer';

const chatroomStyles = {
  display: 'flex',
};

class ChatroomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={chatroomStyles} className="chatroom">
        {/* <Sidebar activeUsers={[]} /> */}
        <ChatContainer />
      </div>
    );
  }
}

export default ChatroomContainer;

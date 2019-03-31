import React, { Component } from 'react';
import Sidebar from './Sidebar.jsx';
import ChatContainer from './ChatContainer.jsx';

class ChatroomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="chatroom">
        <Sidebar activeUsers={[]}/>
        <ChatContainer />
      </div>
    );
  }
}

export default ChatroomContainer;

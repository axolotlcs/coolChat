import React, { Component } from 'react';

class MessageBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  render() {
    return (
      <div className="messageBox">
        <input
          type="text"
          id="textInput"
          placeholder="Gimme some text"
          value={this.state.content}
          onChange={event => this.setState({content: event.target.value})}
        />
        <button
          type="button"
          id="sendBtn"
          onClick={this.props.handleSend}
        >
          Send
        </button>
      </div>
    )
  }
};

export default MessageBox;

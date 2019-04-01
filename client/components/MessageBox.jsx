import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

const styles = {
  container: {
    display: 'flex',
    padding: '10px',
  },
  textField: {
    flexGrow: 9,
  },
  button: {
    flexGrow: 1,
  },
};

class MessageBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  handleChange(event) {
    const message = event.target.value;
    this.setState({ content: message });
  }

  keyPress(event) {
    if (event.keyCode === 13) {
      console.log(this.state.content);
      this.setState({ content: '' });
    }
  }

  render() {
    const { content } = this.state;
    return (
      <div className="messageBox" style={styles.container}>
        <TextField
          value={content}
          onChange={this.handleChange}
          style={styles.textField}
          onKeyDown={this.keyPress}
        />
      </div>
    );
  }
}

export default MessageBox;

import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import MessageBox from './MessageBox.jsx';
import Msg from './Msg.jsx';

const messageQuery = gql`
  {
    messages {
      username
      message
      created_at
    }
  }
`;

class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  render() {
    const MSG = this.state.messages.reduce((messages, message) => {
      messages.push(<Msg username={message.username} message={message.message} />);
    }, []);
    return (
      <Query query={messageQuery}>
        {({ data, loading, error }) => {
          console.log(data);

          if (loading) return <p>Loading</p>;
          if (error) {
            {
              /* console.log(error); */
            }
            return error;
          }
          return (
            <div id="chatContainer">
              <Fragment>
                {data.messages
                  && data.messages.reduce((acc, cur) => {
                    acc.push(<Msg username={cur.username} message={cur.message} />);
                    return acc;
                  }, [])}
              </Fragment>
              <MessageBox />
            </div>
          );
        }}
        {/* <div id="allMsgs">{MSG}</div> */}
      </Query>
    );
  }
}
export default ChatContainer;

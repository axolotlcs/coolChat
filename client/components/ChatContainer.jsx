import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import Msg from './Msg';
import MessageBox from './MessageBox';
import { messageQuery } from '../schema/queries';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
};

class ChatContainer extends Component {
  render() {
    return (
      <Query query={messageQuery}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading</p>;
          if (error) return <p>error</p>;
          return (
            <div id="chatContainer" style={styles.container}>
              <div style={{ height: '60vh', overflowY: 'auto' }}>
                <Fragment>
                  {data.messages
                    && data.messages.reduce((acc, cur) => {
                      acc.push(<Msg username={cur.username} message={cur.message} />);
                      return acc;
                    }, [])}
                </Fragment>
              </div>
              <MessageBox />
            </div>
          );
        }}
      </Query>
    );
  }
}
export default ChatContainer;

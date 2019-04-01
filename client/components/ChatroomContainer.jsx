import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ChatContainer from './ChatContainer';
import { Query, Subscription } from 'react-apollo';
import Msg from './Msg';
import MessageBox from './MessageBox';
import { messageQuery } from '../schema/queries';
import MsgSub from '../schema/subscriptions';

const chatroomStyles = {
  display: 'flex',
  height: '100%',
};

class ChatroomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      counter: 0,
    };
  }

  render() {
    return (
      <Query query={messageQuery}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <p>loading...</p>
          if (error) return <p>error: {error.message}</p>
          const more = () => subscribeToMore({
            document: MsgSub,
            updateQuery: (prev, { subscriptionData }) => {
              if(!subscriptionData.data) return prev;
              const { mutation, message } = subscriptionData.data.messageAdded;
              console.log(mutation, message);
              if (mutation !== 'CREATED') return prev;
              let curCounter = this.state.counter;
              this.setState({
                counter: curCounter + 1,
              })
              return Object.assign({}, prev, {
                messages: [...prev.messages, message],
              })
            }
          })
          return <ChatContainer data={data} subscribeToMore={more} />
        }}
      </Query>
      // <div style={chatroomStyles} className="chatroom">
       
        // <ChatContainer />
      // </div>
    );
  }
}

export default ChatroomContainer;








{/* <div id="chatContainer">
            <div style={{ height: '90%' }}>
              <ChatContainer
                subscribeToNewMsgs={() => subscribeToMore({
                  document: MsgSub,
                  updateQuery: (prev, { subscriptionData }) => {
                    if (!subscriptionData.data) return prev;
                    const newFeedItem = subscriptionData.data.messageAdded;

                    return Object.assign({}, prev, {
                      entry: {
                        messages: [newFeedItem, ...prev.entry.messages],
                      },
                    });
                  },
                })
                  }
              >
                {data.messages
                    && data.messages.reduce((acc, cur) => {
                      acc.push(<Msg username={cur.username} message={cur.message} />);
                      return acc;
                    }, [])}
              </ChatContainer>
            </div>
            <MessageBox />
          </div> */}
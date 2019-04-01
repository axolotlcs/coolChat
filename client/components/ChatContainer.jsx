import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import Msg from './Msg';
import MessageBox from './MessageBox';
import { messageQuery } from '../schema/queries';
import MsgSub from '../schema/subscriptions';

const chatContainerStyles = {
  flexGrow: 11,
  height: '100%',
};

class ChatContainer extends Component {
  componentDidMount() {
    this.props.subscribeToMore();
  }

  componentDidUpdate() {
    console.log('updated');
  }

  render() {
    console.log(this.props.data);
    return (
      <div id="chatContainer" style={chatContainerStyles}>
        <div style={{ height: '90%' }}>
          {this.props.data.messages
              && this.props.data.messages.reduce((acc, cur) => {
                acc.push(<Msg username={cur.username} message={cur.message} />);
                return acc;
              }, [])}
        </div>
        <MessageBox />
      </div>

    // <Query query={messageQuery}>
    //   {({ subscribeToMore, ...data }) => (
    //     <div id="chatContainer" style={chatContainerStyles}>
    //       <div style={{ height: '90%' }}>
    //         <Fragment
    //           subscribeToNewMsgs={() => subscribeToMore({
    //             document: MsgSub,
    //             updateQuery: (prev, { subscriptionData }) => {
    //               if (!subscriptionData.data) return prev;
    //               const newFeedItem = subscriptionData.data.messageAdded;

    //               return Object.assign({}, prev, {
    //                 entry: {
    //                   messages: [newFeedItem, ...prev.entry.messages],
    //                 },
    //               });
    //             },
    //           })
    //             }
    //         >
    //           {data.messages
    //               && data.messages.reduce((acc, cur) => {
    //                 acc.push(<Msg username={cur.username} message={cur.message} />);
    //                 return acc;
    //               }, [])}
    //         </Fragment>
    //       </div>
    //       <MessageBox />
    //     </div>
    //   )}
    // </Query>
    );
  }
}
export default ChatContainer;

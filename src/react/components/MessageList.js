import React from "react";
import MessageCard from "./MessageCard";




export class MessageList extends React.Component {

  render() {
    const messageCardComponents = this.props.messages.map(item => (
      <MessageCard key={item.id} msg={item} />
    ));
    return <div>{messageCardComponents}</div>;
  }
}


export default MessageList

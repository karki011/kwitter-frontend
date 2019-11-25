import React from "react";

// const fakeMessage = {
//   id: 961,
//   text: "Hello World!",
//   username: "testuser",
//   createdAt: "2019-11-19T14:22:36.773Z",
//   likes: []
// };

class MessageCard extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "1em",
          margin: "2em",
          borderRadius: "10px"
        }}
      >
        <h4>{this.props.msg.username}</h4>
        <p>{this.props.msg.text}</p>
        <p>{new Date(this.props.msg.createdAt).toDateString()}</p>
        <p>Likes: {this.props.msg.likes.length}</p>
      </div>
    );
  }
}

export default MessageCard;

import React from "react";
import { withAsyncAction } from "../HOCs";
import { Button } from "semantic-ui-react";

class MessageCard extends React.Component {
  // componentDidMount(){
  //   this.props.deleteMessage()
  // }
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
        <h4>{this.props.username}</h4>
        <p>{this.props.text}</p>
        <p>{new Date(this.props.createdAt).toDateString()}</p>
        {/* <p>Likes: {this.props.message.likes.length}</p> */}

        {this.props.currentUser === this.props.username && (
          <Button
            color = "red"
            className="destroy"
            onClick={() => {
              this.props.deleteMessage(this.props.id);
            }}
          >
            Delete Message
          </Button>
        )}
      </div>
    );
  }
}

export default withAsyncAction("messages", "deleteMessage")(MessageCard);

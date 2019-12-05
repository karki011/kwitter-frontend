import React from "react";
import { withAsyncAction } from "../HOCs";
import { Button, Card, Image } from "semantic-ui-react";
import "./MessageCard.css";
import PostLike from "./PostLike";

class MessageCard extends React.Component {
  // componentDidMount(){
  //   this.props.deleteMessage()
  // }

  render() {
    return (
      <div id="messageCardContainer">
        <Card id="messageCard">
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="http://simpleicon.com/wp-content/uploads/user1.svg"
            />
            <Card.Header>
              <h4>{this.props.username}</h4>
            </Card.Header>
            <Card.Description>
              <p>{this.props.text}</p>
            </Card.Description>
            <br />
            <Card.Content>
              <p>{new Date(this.props.createdAt).toDateString()}</p>
            </Card.Content>

            <Card.Content>
              <hr />
              <PostLike />
            </Card.Content>

            {/* <p>Likes: {this.props.message.likes.length}</p> */}
            <br />
            {this.props.currentUser === this.props.username && (
              <Button
                color="red"
                className="destroy"
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete this message?"
                    )
                  ) {
                    this.props.deleteMessage(this.props.id);
                  }
                }}
              >
                Delete Message
              </Button>
            )}
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default withAsyncAction("messages", "deleteMessage")(MessageCard);

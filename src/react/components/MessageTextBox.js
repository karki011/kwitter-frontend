import React, { Component } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import "./MessageTextBox.css";
import { withAsyncAction } from "../HOCs";

class MessageTextBox extends Component {
  // componentDidMount() {
  //   this.props.postMessage(this.props.postMessageBody);
  // }

  state = { text: "" };

  handleComposeMessage = event => {
    event.preventDefault();
    this.props.postMessage(this.state);
    this.setState({ text: "" });
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <Form className="form-control">
        <Form.Field
          className="message-post-textarea"
          control={TextArea}
          label="Create Post"
          placeholder="What's on your mind? "
          value={this.state.text}
          onChange={this.handleChange}
        />
        <Form.Field
          className="postBtn"
          control={Button}
          onClick={this.handleComposeMessage}
          color={"teal"}
        >
          Post
        </Form.Field>
      </Form>
    );
  }
}

export default withAsyncAction("messages", "postMessage")(MessageTextBox);

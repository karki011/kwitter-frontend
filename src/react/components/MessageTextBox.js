import React, { Component } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import "./MessageTextBox.css";
// import {messages} from "./MessageList"




class MessageTextBox extends Component {

  render() {
    return (
      <Form className="form-control">
        <Form.Field
          control={TextArea}
          label="Create Post"
          placeholder="What's on your mind? "
          onChange={this.props.handleChange}
          value={this.props.value}
        />
        <Form.Field className="postBtn" 
        control={Button}
        onClick={this.props.handleComposeMessage}
        >
          Post
        </Form.Field>
      </Form>
    );
  }
}

export default MessageTextBox;

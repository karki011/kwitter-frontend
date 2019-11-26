import React from "react";
import { Menu, MessageTextBox, MessageList } from "../components";

import { userIsAuthenticated } from "../HOCs";

const messages = [
  {
    id: 963,
    text: "Another one!",
    username: "testuser",
    createdAt: "2019-11-19T17:20:06.804Z",
    likes: []
  },
  {
    id: 961,
    text: "Hello World!",
    username: "testuser",
    createdAt: "2019-11-19T14:22:36.773Z",
    likes: []
  },
  {
    id: 945,
    text:
      "This is a happy place, little squirrels live here and play. You can work and carry-on and put lots of little happy things in here.",
    username: "testuser",
    createdAt: "2019-11-19T00:05:13.099Z",
    likes: []
  },
  {
    id: 938,
    text: "This is my second message!",
    username: "testuser",
    createdAt: "2019-11-18T16:07:42.936Z",
    likes: []
  },
  {
    id: 937,
    text: "Hello World!",
    username: "testuser",
    createdAt: "2019-11-18T15:52:56.879Z",
    likes: []
  }
];

class Profile extends React.Component {
  state = {
    kweetMessage: messages,
    value: "",
    likes: []
  }

  handleComposeMessage = () => {
    const newMessageList =  [...this.state.kweetMessage];
    // console.log({ kweetmessage: this.state.kweetMessage })
    newMessageList.unshift({
      id: Math.floor(Math.random() * 1000000000),
      text: this.state.value,
      username: "TestUserName",
      createdAt:"2019-11-18T15:52:56.879Z",
      likes: this.state.likes
    });
    this.setState({kweetMessage: newMessageList, value: ""})
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>

        <MessageTextBox 
        handleChange= {this.handleChange}
        value={this.state.value}
        handleComposeMessage={this.handleComposeMessage}
        />

        <MessageList messages= {this.state.kweetMessage} />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);

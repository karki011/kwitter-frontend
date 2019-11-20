import React, { Component } from "react";

class Register extends Component {
  state = {
    username: "",
    displayName: "",
    password: ""
  };
  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  handleDisplayNameChange = event => {
    this.setState({
      displayName: event.target.value
    });
  };
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  render() {
    return (
      <Header as="h1" color="black" textAlign="center">
        Greetings! Welcome to Kwitter!
      </Header>

      <Header as="h2" color="grey" textAlign="center">
        Register a New Account
      </Header>

    );
  }
}

export default Register;

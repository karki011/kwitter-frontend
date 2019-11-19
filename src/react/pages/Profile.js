import React from "react";
import { Menu, MessageList } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <MessageList />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);

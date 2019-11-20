import React from "react";
import { Menu, UserCard } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <UserCard />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);

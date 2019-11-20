import React from "react";
import { Menu } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "./Profile.css";

class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2 className="pageHeader">Profile</h2>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);

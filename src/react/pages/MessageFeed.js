import React from "react";
import { Menu } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "./MessageFeed.css";

class MessageFeed extends React.Component {
  render() {
    return (
      <div className="container">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2 className="pageHeader">Message Feed</h2>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);

import React from "react";
import { Menu } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2 className="pageHeader">Home</h2>
      </div>
    );
  }
}

export default userIsAuthenticated(Home);
